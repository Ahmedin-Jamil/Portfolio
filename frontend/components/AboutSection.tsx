import { Card, CardContent } from "@/components/ui/card";
import { Award, Zap, Users, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => { 
  const { t } = useLanguage();
  
  const skills = [
    {
      name: t('about.skill1.name'),
      level: 75,
      description: t('about.skill1.desc'),
    },
    {
      name: t('about.skill2.name'),
      level: 70,
      description: t('about.skill2.desc'),
    },
    {
      name: t('about.skill3.name'),
      level: 65,
      description: t('about.skill3.desc'),
    },
    {
      name: t('about.skill4.name'),
      level: 80,
      description: t('about.skill4.desc'),
    },
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: t('about.achievement1.title'),
      description: t('about.achievement1.desc')
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('about.achievement2.title'),
      description: t('about.achievement2.desc')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('about.achievement3.title'),
      description: t('about.achievement3.desc')
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: t('about.achievement4.title'),
      description: t('about.achievement4.desc')
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal animation="fade-right" className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">{t('about.label')}</p>
              <h2 className="text-4xl md:text-5xl font-bold">
                {t('about.title1')}
                <br />
                <span className="gradient-text">{t('about.title2')}</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {t('about.description1')}
                </p>
                <p>
                  {t('about.description2')}
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t('about.skills.title')}</h3>
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