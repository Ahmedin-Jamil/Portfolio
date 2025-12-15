import { Mail, Phone, MapPin } from "lucide-react";
import { handleContact } from '@/lib/actions';
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: t('contact.phone'),
      value: "+63 9158091139",
      action: () => handleContact('phone', '+63 9158091139')
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: t('contact.email'), 
      value: "jamil.al.amin1100@gmail.com",
      action: () => handleContact('email', 'jamil.al.amin1100@gmail.com')
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: t('contact.location'),
      value: "Baguio City, Benguet, Philippines",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <ScrollReveal animation="fade-up" className="text-center space-y-4 mb-16">
          <p className="text-muted-foreground text-lg">{t('contact.label')}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t('contact.title1')}
            <br />
            <span className="gradient-text">{t('contact.title2')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Information */}
          <ScrollReveal animation="fade-up" delay={200} className="space-y-8 max-w-xl mx-auto">

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">{t('contact.info.title')}</h3>
              <p className="text-muted-foreground">
                {t('contact.info.description')}
              </p>
            </div>

            <div className="bg-gradient-card rounded-2xl p-2 divide-y divide-border shadow-lg">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  onClick={typeof info.action === 'function' ? info.action : undefined}
                  className="flex items-center gap-4 px-5 py-4 cursor-pointer hover:bg-background/40 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-sm">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-card rounded-xl p-6 space-y-4">
              <h4 className="text-xl font-semibold">{t('contact.timeline.title')}</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('contact.timeline.response')}</span>
                  <span className="font-medium">{t('contact.timeline.responseValue')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('contact.timeline.start')}</span>
                  <span className="font-medium">{t('contact.timeline.startValue')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('contact.timeline.completion')}</span>
                  <span className="font-medium">{t('contact.timeline.completionValue')}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;