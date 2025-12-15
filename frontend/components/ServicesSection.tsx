import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Bot, ClipboardList } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: t('services.service1.title'),
      description: t('services.service1.desc')
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: t('services.service2.title'),
      description: t('services.service2.desc')
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: t('services.service3.title'),
      description: t('services.service3.desc')
    },
    {
      icon: <ClipboardList className="h-8 w-8" />,
      title: t('services.service4.title'),
      description: t('services.service4.desc')
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <ScrollReveal animation="fade-up" className="text-center space-y-4 mb-16">
          <p className="text-muted-foreground text-lg">{t('services.label')}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('services.title1')} <span className="gradient-text">{t('services.title2')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('services.description')}
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