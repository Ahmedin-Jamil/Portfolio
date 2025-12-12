import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Zap, Users, Target } from "lucide-react";
import { downloadFile } from "@/lib/actions";

const AboutSection = () => {
  const skills = [
    {
      name: "AI Prompt Engineering",
      level: 95,
      description:
        "Designing clear, structured prompts and workflows that make AI tools more reliable and useful.",
    },
    {
      name: "System Architecture",
      level: 90,
      description:
        "Planning how front-end, back-end, databases, and AI services fit together into scalable systems.",
    },
    {
      name: "Full-Stack Development",
      level: 85,
      description:
        "Building user interfaces with React and connecting them to well-structured APIs and data layers.",
    },
    {
      name: "Business Analysis",
      level: 88,
      description:
        "Translating business needs into clear requirements, user journeys, and measurable outcomes.",
    },
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Live Project Success",
      description: "Baguio Pet Boarding Platform"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI Integration Expert",
      description: "Specialized in AI-Powered Solutions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "System Architect",
      description: "End-to-End Solution Design"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Business Analyst",
      description: "Strategic Problem Solving"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Passionate About
                <br />
                <span className="gradient-text">AI-Powered Innovation</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As an AI-Powered Solutions Architect, I specialize in creating intelligent
                  solutions through innovative use of AI technologies. My expertise lies
                  in transforming complex requirements into efficient, scalable systems
                  using advanced prompt engineering and system architecture principles.
                </p>
                <p>
                  I've developed full-stack applications like the Baguio Pet Boarding Platform with an AI chatbot,
                  and contributed to UC AIwan+, a student support system for the University of the Cordilleras.
                  My work included mental health modules, emotion tracking, AI-driven analytics, and a 3D gamified
                  career map game to help students discover their skills and build their career paths.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              className="btn-hero px-8 py-3 text-lg"
              onClick={() => downloadFile('/documents/resume.pdf', 'resume.pdf')}
            >
              Download Resume
            </Button>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="card-hover bg-gradient-card animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;