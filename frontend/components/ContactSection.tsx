import { Mail, Phone, MapPin } from "lucide-react";
import { handleContact } from '@/lib/actions';
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone Number",
      value: "+63 9158091139",
      action: () => handleContact('phone', '+63 9158091139')
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email Address", 
      value: "jamil.al.amin1100@gmail.com",
      action: () => handleContact('email', 'jamil.al.amin1100@gmail.com')
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Baguio City, Benguet, Philippines",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <ScrollReveal animation="fade-up" className="text-center space-y-4 mb-16">
          <p className="text-muted-foreground text-lg">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Discuss Your
            <br />
            <span className="gradient-text">Project</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's collaborate and create something amazing together. 
            You can reach me directly through the contact details below.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Information */}
          <ScrollReveal animation="fade-up" delay={200} className="space-y-8 max-w-xl mx-auto">

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels. I'm always excited 
                to discuss new opportunities and creative challenges.
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
              <h4 className="text-xl font-semibold">Project Timeline</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Response Time:</span>
                  <span className="font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Project Start:</span>
                  <span className="font-medium">1-2 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg. Completion:</span>
                  <span className="font-medium">2-6 weeks</span>
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