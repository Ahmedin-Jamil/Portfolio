import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram, Heart} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import ScrollReveal from "@/components/ScrollReveal";

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/Ahmedin-Jamil", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/ahmedin-jamil-alamin-omer-597080313", label: "LinkedIn" },
    { icon: <SiTiktok className="h-5 w-5" />, href: "https://www.tiktok.com/@iktanaz?lang=en", label: "TikTok" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.Instagram.com/designs_square_", label: "Instagram" },
    { icon: <SiUpwork className="h-5 w-5" />, href: "https://www.upwork.com/freelancers/~0108c6c7fc28d5f876", label: "Upwork" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Brand Design",
    "Web Design", 
    "Mobile App Design",
    "UI/UX Design",
    "Digital Strategy",
  ];

  return (
    <footer className="bg-card border-t border-border">
      <ScrollReveal animation="fade-up" className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="text-2xl font-bold gradient-text">
              Portfolio
            </div>
            <p className="text-muted-foreground">
              Creating beautiful digital experiences that engage users and drive business results.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground"
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