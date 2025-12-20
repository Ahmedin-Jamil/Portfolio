import { Card, CardContent } from "@/components/ui/card";
import ProjectGallery from "@/components/ProjectGallery";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { t } = useLanguage();
  
  // Generate portfolio project images
  const projects = [
    {
      id: 1,
      title: t('portfolio.project1.title'),
      category: t('portfolio.project1.category'),
      description: t('portfolio.project1.desc'),
      images: [pet1, pet2, pet3, pet4, pet5, pet6],
      tags: ["Admin Dashboard Management", "Real-time slot availability", "Full Stack"]
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      category: t('portfolio.project2.category'),
      description: t('portfolio.project2.desc'),
      images: [aiwan1, aiwan2, aiwan3, aiwan4, aiwan5, aiwan6, aiwan7, aiwan8, aiwan9],
      tags: ["Student Help Desk", "3D Gamification", "AI Cognative Behavioral Therapy ", "AI Analytics for emotion detection", "Full Stack", "Supabase(AWS)"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <ScrollReveal animation="fade-up" className="text-center space-y-4 mb-16">
          <p className="text-muted-foreground text-lg">{t('portfolio.label')}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('portfolio.title1')}
            <br />
            <span className="gradient-text">{t('portfolio.title2')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('portfolio.description')}
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