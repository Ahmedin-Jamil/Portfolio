import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Monitor, Smartphone, Zap, Globe, Layers } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI Solution Architecture",
      description: "Design and implementation of intelligent systems using cutting-edge AI technologies."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full-Stack Development",
      description: "End-to-end web applications with AI integration, from frontend to backend."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "System Integration",
      description: "Seamless integration of AI components with existing business systems and ERP."
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "AI Chatbot Development",
      description: "Custom AI chatbots designed for specific business needs and customer service."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Business Analysis",
      description: "Strategic analysis and solution design for complex business requirements."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Digital Transformation",
      description: "Guiding businesses through AI-powered digital transformation journeys."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-muted-foreground text-lg">What I Do Best</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Hire Me For Your
            <br />
            Next <span className="gradient-text">Project?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I specialize in architecting and implementing AI-powered solutions that transform businesses
            stand out in the digital landscape and connect with their target audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="card-hover bg-gradient-card animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-hero px-8 py-3 text-lg">
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;