import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram, Heart} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { SiUpwork } from "react-icons/si";

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
      <div className="container mx-auto px-4 py-16">
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

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>jamil.al.amin1100@gmail.com</p>
              <p>+63 9158091139</p>
              <p>Baguio, Benguet, Philippines</p>
            </div>
            <Button className="btn-hero w-full">
              Start a Project
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm flex items-center">
              © 2025 Portfolio. Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Creative Designer
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;