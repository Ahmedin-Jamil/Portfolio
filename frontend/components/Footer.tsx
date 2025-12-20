import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram, Heart} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/Ahmedin-Jamil", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/ahmedin-jamil-alamin-omer-597080313", label: "LinkedIn" },
    { icon: <SiTiktok className="h-5 w-5" />, href: "https://www.tiktok.com/@iktanaz?lang=en", label: "TikTok" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.Instagram.com/designs_square_", label: "Instagram" },
    { icon: <SiUpwork className="h-5 w-5" />, href: "https://www.upwork.com/freelancers/~0108c6c7fc28d5f876", label: "Upwork" },
  ];

  const quickLinks = [
    { label: t('nav.home'), href: "#home" },
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.services'), href: "#services" },
    { label: t('nav.portfolio'), href: "#portfolio" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  const services = [
    t('services.brandDesign'),
    t('services.webDesign'), 
    t('services.mobileAppDesign'),
    t('services.uiuxDesign'),
    t('services.digitalStrategy'),
  ];

  return (
    <footer className="bg-card border-t border-border">
      <ScrollReveal animation="fade-up" className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#home" className="inline-flex items-center">
              <img src="/logo.svg" alt="Jamil Alamin logo" className="h-14 w-14" />
            </a>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="sm"
                  className="w-5 h-1 p-0 hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;