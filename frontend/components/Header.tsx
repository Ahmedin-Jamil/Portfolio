import { Menu, X, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const headerRef = useRef<HTMLElement | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: "#home" },
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.services'), href: "#services" },
    { label: t('nav.portfolio'), href: "#portfolio" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  useEffect(() => {
    const ids = navItems.map((i) => i.href.replace("#", "")).filter(Boolean);

    const getSections = () =>
      ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el));

    const setFromHash = () => {
      const hash = window.location.hash?.replace("#", "");
      if (hash && ids.includes(hash)) setActiveSection(hash);
    };

    let rafId: number | null = null;
    const updateActiveFromScroll = () => {
      const sections = getSections();
      if (sections.length === 0) return;

      const headerOffset = (headerRef.current?.offsetHeight ?? 0) + 16;
      const probeY = window.scrollY + headerOffset;

      let current = sections[0].id;

      for (const el of sections) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (probeY >= top && probeY < bottom) {
          current = el.id;
          break;
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        updateActiveFromScroll();
      });
    };

    setFromHash();
    updateActiveFromScroll();

    window.addEventListener("hashchange", setFromHash);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("hashchange", setFromHash);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img src="/logo.svg" alt="Jamil Alamin" className="h-16 w-16" />
          </a>

          {/* Language Switcher - Desktop */}
          <div className="hidden md:flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1.5 shadow-sm backdrop-blur">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                language === 'en'
                  ? 'text-foreground bg-muted/60'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              English
            </button>
            <span className="text-muted-foreground/40">|</span>
            <button
              onClick={() => setLanguage('ar')}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                language === 'ar'
                  ? 'text-foreground bg-muted/60'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              عربي
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="rounded-full border border-border/60 bg-background/60 px-2 py-1 shadow-sm backdrop-blur">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => {
                  const id = item.href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className={`group relative flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase transition-colors ${
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span
                          className={`absolute inset-0 rounded-full transition-opacity ${
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          } bg-muted/60`}
                        />
                        <span className="relative">
                          {item.label}
                          <span
                            className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-8 rounded-full bg-primary transition-opacity ${
                              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                            }`}
                          />
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Language Switcher - Mobile */}
          <div className="md:hidden flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-2 py-1 shadow-sm backdrop-blur">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                language === 'en'
                  ? 'text-foreground bg-muted/60'
                  : 'text-muted-foreground'
              }`}
            >
              EN
            </button>
            <span className="text-muted-foreground/40 text-xs">|</span>
            <button
              onClick={() => setLanguage('ar')}
              className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                language === 'ar'
                  ? 'text-foreground bg-muted/60'
                  : 'text-muted-foreground'
              }`}
            >
              عربي
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-lg border border-border/60 bg-background/60 p-2 shadow-sm backdrop-blur"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 rounded-2xl border border-border/60 bg-background/70 p-3 shadow-sm backdrop-blur">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;