import { Card, CardContent } from "@/components/ui/card";
import ProjectGallery from "@/components/ProjectGallery";
import ScrollReveal from "@/components/ScrollReveal";
import pet1 from "@/assets/pet.png";
import pet2 from "@/assets/pet2.png";
import pet3 from "@/assets/pet3.png";
import pet4 from "@/assets/pet4.png";
import pet5 from "@/assets/pet5.png";
import pet6 from "@/assets/pet6.png";
import aiwan1 from "@/assets/aiwan.png";
import aiwan2 from "@/assets/aiwan2.png";
import aiwan3 from "@/assets/aiwan3.png";
import aiwan4 from "@/assets/aiwan4.png";
import aiwan5 from "@/assets/aiwan5.png";
import aiwan6 from "@/assets/aiwan6.png";
import aiwan7 from "@/assets/aiwan7.png";
import aiwan8 from "@/assets/aiwan8.png";
import aiwan9 from "@/assets/aiwan9.png";

const PortfolioSection = () => {
  // Generate portfolio project images
  const projects = [
    {
      id: 1,
      title: "Baguio Pet Boarding",
      category: "Booking Management System",
      description: "Built a full-stack concept project for a pet boarding management system to practice modern web development. Features include client booking journey, admin workflow, service selection and scheduling, booking/request tracking, and dashboard views. Developed using React, TypeScript, and Supabase to strengthen my full-stack skills.",
      images: [pet1, pet2, pet3, pet4, pet5, pet6],
      tags: ["Admin Dashboard Management", "AI Chatbot", "Real-time slot availability", "Full Stack"]
    },
    {
      id: 2,
      title: "UC AIwan+",
      category: "University Student Support Platform",
      description: "Internship project at University of the Cordilleras Office of Student Affairs. Contributed to UC AIwan+ by developing web interfaces and internal tools, including mental health modules, emotion tracking, AI-driven analytics, and a 3D gamified career map feature. Supported workflow improvements across student service operations. Received formal commendation for outstanding contributions to system design and development.",
      images: [aiwan1, aiwan2, aiwan3, aiwan4, aiwan5, aiwan6, aiwan7, aiwan8, aiwan9],
      tags: ["Student Help Desk", "3D Gamification", "AI Cognative Behavioral Therapy ", "AI Analytics for emotion detection", "Full Stack", "Supabase(AWS)"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <ScrollReveal animation="fade-up" className="text-center space-y-4 mb-16">
          <p className="text-muted-foreground text-lg">My Learning Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Projects &
            <br />
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are projects from my internship and personal learning that showcase my 
            growth as a developer and my ability to build functional web applications.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              animation="fade-up"
              delay={index * 150}
              className="h-full"
            >
              <Card className="card-hover overflow-hidden bg-gradient-card h-full">
                <div className="relative group">
                  <ProjectGallery images={project.images} alt={project.title} heightClassName="h-64" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;