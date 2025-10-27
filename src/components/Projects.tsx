import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Camera, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      icon: Shield,
      title: 'EHR Phishing Risk Analyzer & Awareness Tool',
      description: 'A comprehensive web application that simulates phishing attacks and trains hospital staff on cybersecurity awareness.',
      features: [
        'YOLOv8 for real-time detection',
        'Email + Telegram alert system',
        'Multi-threaded alert handling',
        'Interactive training modules',
      ],
      tags: ['Python', 'YOLOv8', 'Cybersecurity', 'AI/ML'],
      gradient: 'from-primary to-secondary',
    },
    {
      id: 2,
      icon: Camera,
      title: 'AI-Powered CCTV Weapon Detection',
      description: 'Real-time weapon detection system using computer vision and deep learning to enhance security surveillance.',
      features: [
        'Real-time video analysis',
        'Instant threat alerts',
        'High accuracy detection',
        'Scalable architecture',
      ],
      tags: ['Python', 'Computer Vision', 'Deep Learning', 'Security'],
      gradient: 'from-secondary to-accent',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--secondary)/0.05),transparent_50%)]" />

      <div className={`max-w-6xl mx-auto relative z-10 transition-all duration-[1500ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="font-roboto-mono text-muted-foreground text-lg">
            Building the future of cybersecurity, one project at a time
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group relative overflow-hidden border-2 transition-all duration-500 cursor-pointer bg-card/50 backdrop-blur-sm ${
                hoveredCard === index
                  ? 'border-primary shadow-[0_0_40px_hsl(var(--primary)/0.4)] scale-105'
                  : 'border-border hover:border-primary/50'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} animate-float`}>
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all">
                      <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </button>
                    <button className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all">
                      <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </button>
                  </div>
                </div>
                
                <CardTitle className="font-orbitron text-2xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                
                <CardDescription className="font-roboto-mono text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-orbitron font-bold text-sm text-primary">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="font-roboto-mono text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="font-roboto-mono border-primary/50 text-primary hover:bg-primary/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* Bottom Glow Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
