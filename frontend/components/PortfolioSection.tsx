import { Card, CardContent } from "@/components/ui/card";
import ProjectGallery from "@/components/ProjectGallery";
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
      title: "Baguio Pet Boarding Platform",
      category: "Booking Management System",
      description: "Designed a full-stack concept for a pet boarding management system, focusing on a smooth client booking journey and a clear admin workflow. Includes service selection and scheduling, booking/request tracking, and dashboard-style views to support daily operations and reduce manual coordination.",
      images: [pet1, pet2, pet3, pet4, pet5, pet6],
      tags: ["Full-Stack", "React", "Node.js", "Prototype"]
    },
    {
      id: 2,
      title: "UC AIwan+",
      category: "Student Support System",
      description: "Developed and enhanced student service system components, including web interfaces and internal tools for the SAS project. Contributed to data analytics workflows and supported process improvements across student service operations. Received formal commendation for exemplary performance and outstanding contributions to system design and development, resulting in increased operational efficiency.",
      images: [aiwan1, aiwan2, aiwan3, aiwan4, aiwan5, aiwan6, aiwan7, aiwan8, aiwan9],
      tags: ["Student Services", "System Design", "Data Analytics", "Web Dev"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-muted-foreground text-lg">Creative Concepts</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My Prototypes
            <br />
            <span className="gradient-text">Concept Designs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my prototype projects and concept designs that showcase my 
            capabilities in building functional applications and solving complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="card-hover overflow-hidden bg-gradient-card animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;