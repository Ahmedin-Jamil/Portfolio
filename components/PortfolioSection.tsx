import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

const PortfolioSection = () => {
  // Generate portfolio project images
  const projects = [
    {
      id: 1,
      title: "Quantum Flow Enterprise (QFE)",
      category: "Enterprise Solution",
      description: "Modern ERP system delivering comprehensive business automation. Engineered with FastAPI and React, featuring real-time financial management, intelligent inventory control, and role-based security. Increased operational efficiency by 40% for enterprise clients.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["FastAPI", "React", "SQL", "Enterprise"],
      link: "#"
    },
    {
      id: 2,
      title: "Baguio Pet Boarding Platform",
      category: "Industry Solution",
      description: "Live pet boarding management system powering daily operations. Implemented AI chatbot for 24/7 customer support, real-time booking system, and admin dashboard. Successfully processing 100+ monthly bookings with 98% customer satisfaction.",
      image: "/images/porto.png",
      tags: ["AI Chatbot", "Full-Stack", "React", "Node.js"],
      link: "https://baguio-pet-boarding.com/"
    },
    {
      id: 3,
      title: "AI Resume Analyzer Pro",
      category: "AI Innovation",
      description: "Intelligent resume analysis system using NLP and machine learning. Automatically extracts skills, experiences, and qualifications with 95% accuracy. Reduces HR screening time by 75% while improving candidate matching quality.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["Python", "NLP", "Machine Learning", "API"]
    },
    {
      id: 4,
      title: "SmartFlow Onboarding",
      category: "Business Solution",
      description: "Streamlined HR onboarding system with automated workflow management. Features document processing, task tracking, and integration capabilities. Reduced onboarding time from 2 weeks to 3 days for new employees.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Workflow", "Authentication"]
    },
    {
      id: 6,
      title: "Restaurant Website",
      category: "Web Design",
      description: "Elegant restaurant website with online reservations and menu showcase.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      tags: ["Restaurant", "Booking", "Hospitality"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-muted-foreground text-lg">Recent Work</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My Creative Works
            <br />
            <span className="gradient-text">Latest Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my design skills 
            and problem-solving abilities across various industries and platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  {project.link && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-white border-white hover:bg-white hover:text-primary"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Site
                    </Button>
                  )}
                </div>
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

        <div className="text-center">
          <Button className="btn-hero px-8 py-3 text-lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;