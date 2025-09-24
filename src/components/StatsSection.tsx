import { useEffect, useState } from "react";

const StatsSection = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    reviews: 0,
  });

  const finalCounts = {
    clients: 120,
    projects: 350,
    reviews: 99,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      setCounts(prev => ({
        clients: Math.min(prev.clients + Math.ceil(finalCounts.clients / steps), finalCounts.clients),
        projects: Math.min(prev.projects + Math.ceil(finalCounts.projects / steps), finalCounts.projects),
        reviews: Math.min(prev.reviews + Math.ceil(finalCounts.reviews / steps), finalCounts.reviews),
      }));
    }, stepTime);

    setTimeout(() => clearInterval(timer), duration);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      label: "Satisfied Clients",
      value: counts.clients,
      suffix: "+",
      color: "text-primary",
    },
    {
      label: "Projects Completed",
      value: counts.projects,
      suffix: "+",
      color: "text-secondary",
    },
    {
      label: "Positive Reviews",
      value: counts.reviews,
      suffix: "%",
      color: "text-success",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center space-y-2 animate-scale-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`text-5xl md:text-6xl font-bold ${stat.color}`}>
                {stat.value}{stat.suffix}
              </div>
              <p className="text-muted-foreground text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;