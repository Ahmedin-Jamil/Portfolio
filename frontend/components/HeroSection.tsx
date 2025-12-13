import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import heroProfile from "@/assets/Pro.jpg";
import { scrollToSection, downloadFile } from "@/lib/actions";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <ScrollReveal animation="fade-right" className="space-y-4">
              <p className="text-muted-foreground text-lg">Full-Stack Developer & SAP Enthusiast</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Building <span className="gradient-text">Scalable Systems</span>
                <br />
                <span className="gradient-text">& Enterprise Solutions</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg">
                Specialized in developing enterprise systems and full-stack applications.
                Successfully delivered the Baguio Pet Boarding Platform and contributed to UC AIwan+,
                featuring mental health modules, AI-driven analytics, and a 3D gamified career map.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button 
                  className="btn-hero px-8 py-3 text-lg group"
                  onClick={() => scrollToSection('portfolio')}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  className="px-8 py-3 text-lg group"
                  onClick={() => downloadFile('/documents/resume.pdf', 'resume.pdf')}
                >
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                  Download CV
                </Button>
                {/* Social Media Icons Inline */}
                <div className="flex gap-4 ml-0 sm:ml-6 mt-4 sm:mt-0">
                  <a href="https://github.com/Ahmedin-Jamil" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-6 w-6 hover:text-primary transition-colors" />
                  </a>
                  <a href="https://www.linkedin.com/in/ahmedin-jamil-alamin-omer-597080313" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
                  </a>
                  <a href="https://www.tiktok.com/@iktanaz?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <SiTiktok className="h-6 w-6 hover:text-primary transition-colors" />
                  </a>
                  <a href="https://www.Instagram.com/designs_square_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-6 w-6 hover:text-primary transition-colors" />
                  </a>
                  <a href="https://www.upwork.com/freelancers/~0108c6c7fc28d5f876" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
                    <SiUpwork className="h-6 w-6 hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
          {/* Right Content - Profile Image */}
          <ScrollReveal animation="scale" delay={200} className="relative flex justify-center">
            <div className="relative">
              {/* Circular gradient ring behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-primary p-1 blur-sm opacity-60"></div>
              
              {/* Main circular image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src={heroProfile}
                  alt="Full-Stack Developer"
                  className="w-full h-full object-cover object-[right_60%]"
                />
              </div>

              {/* Static badge - top right */}
              <div className="absolute top-4 -right-4 bg-secondary text-secondary-foreground backdrop-blur rounded-full px-4 py-2 shadow-lg border border-white/20">
                <span className="font-medium text-sm">SAP Enthusiast</span>
              </div>
              
              {/* Static badge - bottom left */}
              <div className="absolute bottom-4 -left-4 bg-card backdrop-blur rounded-full px-4 py-2 shadow-lg border border-border">
                <span className="font-medium text-sm">Full-Stack Developer</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;