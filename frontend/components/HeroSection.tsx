import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import heroProfile from "@/assets/Pro.jpg";
import { scrollToSection, downloadFile } from "@/lib/actions";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">AI Solutions Architect</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Creating <span className="gradient-text">Intelligent Solutions</span>
                <br />
                <span className="gradient-text">for Real Business Impact</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg">
                Specialized in developing AI-powered solutions and full-stack applications.
                Successfully delivered the Baguio Pet Boarding Platform and contributed to UC AIwan+,
                a student support system featuring mental health modules and AI-driven analytics.
              </p>
            </div>

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
          </div>
          {/* Right Content - Profile Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-hero rounded-2xl blur-3xl opacity-20 animate-float"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-card rounded-2xl p-2 shadow-xl">
                <img
                  src={heroProfile}
                  alt="Creative Designer"
                  className="h-[500px] w-[600px] object-contain rounded-xl"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-secondary/90 backdrop-blur rounded-xl p-3 shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-sm">AI Solutions Expert</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur rounded-xl p-3 shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-sm">Full-Stack Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;