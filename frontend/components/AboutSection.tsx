import { Card, CardContent } from "@/components/ui/card";
import { Award, Zap, Users, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => { 
  const skills = [
    {
      name: "Full-Stack Development",
      level: 75,
      description:
        "Building user interfaces with React and connecting them to well-structured APIs and data layers.",
    },
    {
      name: "Database Management",
      level: 70,
      description:
        "Familiar with MySQL and PostgreSQL. Experience with Supabase cloud backend platform.",
    },
    {
      name: "SAP ERP Systems",
      level: 65,
      description:
        "Familiar with SAP ERP System Configuration and ABAP basics through training and self-study.",
    },
    {
      name: "UI/UX Design",
      level: 80,
      description:
        "Proficient in Figma for mobile and web UI design. Creating user-friendly interfaces.",
    },
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Internship Success",
      description: "UC Office of Student Affairs"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Formal Commendation",
      description: "Outstanding System Contribution"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Consensus-Building & Teamwork"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "SAP Training",
      description: "Cloud & S/4HANA Configuration"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal animation="fade-right" className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Fresh Graduate
                <br />
                <span className="gradient-text">Ready to Build</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I enjoy learning new technologies and building practical applications that solve real problems.
                  My journey includes hands-on experience with modern web frameworks, database management,
                  and exploring enterprise systems like SAP ERP.
                </p>
                <p>
                  During my internship at the University of the Cordilleras Office of Student Affairs,
                  I contributed to UC AIwan+ by developing web interfaces and internal tools including mental health modules,
                  emotion tracking, AI-driven analytics, and a 3D gamified career map. I also partnered with a local business
                  to deliver the Baguio Pet Boarding Platform, a complete booking management system with AI chatbot integration.
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
          </ScrollReveal>

          {/* Right Content */}
          <ScrollReveal animation="fade-left" delay={200} className="grid grid-cols-2 gap-6">
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;