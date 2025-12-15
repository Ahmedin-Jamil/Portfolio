import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Bot, ClipboardList } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Web Application Development",
      description: "Building responsive web apps with React, TypeScript, and modern frameworks. Knowledgeable in JavaScript, React.js, Express.js, and HTML/CSS."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend & Database Design",
      description: "Familiar with MySQL and PostgreSQL database management. Experience with modern cloud-based backend platforms like Supabase."
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Chatbot Integration",
      description: "Integrating conversational AI into web applications for customer support and user engagement using modern AI APIs."
    },
    {
      icon: <ClipboardList className="h-8 w-8" />,
      title: "UI/UX Design & Analysis",
      description: "Proficient in Figma for mobile and web UI design. Translating business needs into user-friendly interfaces and development plans."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <ScrollReveal animation="fade-up" className="text-center space-y-4 mb-16">
          <p className="text-muted-foreground text-lg">What I Can Help With</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Services I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            As a fresh graduate, I'm eager to contribute to projects and continue learning.
            Here are the areas where I can add value to your team.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              animation="fade-up"
              delay={index * 120}
              className="h-full"
            >
              <Card className="card-hover bg-gradient-card h-full">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;