import { useEffect, useState } from 'react';
import { Shield, Brain, Bug, Lock } from 'lucide-react';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const interests = [
    { icon: Shield, title: 'AI Security', color: 'text-primary' },
    { icon: Bug, title: 'Ethical Hacking', color: 'text-secondary' },
    { icon: Brain, title: 'Phishing Awareness', color: 'text-accent' },
    { icon: Lock, title: 'Threat Detection', color: 'text-primary' },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="font-roboto-mono text-lg text-foreground leading-relaxed">
                Hi, I'm <span className="text-primary font-bold">Vikram Budania</span> — a passionate cybersecurity learner dedicated to securing digital systems and building intelligent threat detection tools.
              </p>
              
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h3 className="font-orbitron text-2xl font-bold text-primary mb-4">
                  Education
                </h3>
                <p className="font-roboto-mono text-muted-foreground">
                  <span className="text-foreground font-semibold">B.Tech in Computer Science & Engineering</span>
                  <br />
                  <span className="text-primary">Specialization: Cyber Security</span>
                </p>
              </div>

              <p className="font-roboto-mono text-muted-foreground leading-relaxed">
                I'm driven by the challenge of staying ahead of emerging cyber threats and creating innovative solutions that protect critical systems. My work focuses on combining AI with cybersecurity to build smarter, more effective defense mechanisms.
              </p>
            </div>

            {/* Interests Grid */}
            <div className="grid grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className={`group bg-card border-2 border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] cursor-pointer ${
                    isVisible ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <interest.icon className={`h-12 w-12 mb-4 ${interest.color} group-hover:scale-110 transition-transform duration-300`} />
                  <h4 className="font-orbitron font-bold text-foreground group-hover:text-primary transition-colors">
                    {interest.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Binary Animation */}
          <div className="mt-16 overflow-hidden">
            <div className="relative h-32 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <p className="font-roboto-mono text-xs text-accent whitespace-nowrap animate-slide-in-right">
                  01010011 01100101 01100011 01110101 01110010 01101001 01110100 01111001 00100000 01000110 01101001 01110010 01110011 01110100
                </p>
              </div>
              <p className="relative z-10 font-orbitron text-2xl font-bold text-primary">
                Security First
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
