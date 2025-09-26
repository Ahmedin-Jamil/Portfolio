import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Tech Innovations Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b402?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "The design work exceeded our expectations. The attention to detail and creative vision truly transformed our brand identity. Highly recommended!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "StartupVision",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "Working with this designer was a game-changer for our startup. The user interface design helped increase our conversion rates by 40%."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "Digital Solutions Co.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "Professional, creative, and always delivers on time. The mobile app design was intuitive and our users absolutely love the new interface."
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-muted-foreground text-lg">Client Feedback</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Customers Say
            <br />
            Something <span className="gradient-text">About Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say 
            about working with me and the results we've achieved together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="card-hover bg-gradient-card animate-fade-in-up relative"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8 space-y-6">
                {/* Quote Icon */}
                <div className="text-primary/20">
                  <Quote className="h-10 w-10" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;