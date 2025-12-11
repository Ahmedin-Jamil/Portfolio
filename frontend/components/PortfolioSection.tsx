import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import aiwanImg from "@/assets/aiwan.png";

const PortfolioSection = () => {
  // Generate portfolio project images
  const projects = [
    {
      id: 1,
      title: "Baguio Pet Boarding Platform",
      category: "Industry Solution Concept",
      description: "Prototype for a pet boarding management system. Demonstrates features like a real-time booking flow and an administrative dashboard design for efficient daily operations.",
      image: "/images/porto.png",
      tags: ["Full-Stack", "React", "Node.js", "Prototype"]
    },
    {
      id: 2,
      title: "UC AIwan+",
      category: "Student Support System Prototype",
      description: "Developed and enhanced student service system components, including web interfaces and internal tools for the SAS project. Contributed to data analytics workflows and supported process improvements. Received formal commendation for exemplary performance in system design and development.",
      image: aiwanImg,
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
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
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