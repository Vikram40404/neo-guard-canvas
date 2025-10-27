import { useEffect, useState } from 'react';
import { Shield, Wifi, Code, Terminal, Brain, Lock, Network, Eye } from 'lucide-react';

const Skills = () => {
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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { icon: Shield, name: 'Cybersecurity', level: 90, color: 'from-primary to-primary/50' },
    { icon: Network, name: 'Network Scanning', level: 85, color: 'from-secondary to-secondary/50' },
    { icon: Code, name: 'Python & Web Dev', level: 88, color: 'from-accent to-accent/50' },
    { icon: Terminal, name: 'Linux Systems', level: 82, color: 'from-primary to-secondary' },
    { icon: Brain, name: 'AI/ML Integration', level: 80, color: 'from-secondary to-accent' },
    { icon: Eye, name: 'Threat Detection', level: 87, color: 'from-primary to-accent' },
    { icon: Lock, name: 'Penetration Testing', level: 83, color: 'from-accent to-primary' },
    { icon: Wifi, name: 'Network Security', level: 86, color: 'from-secondary to-primary' },
  ];

  const tools = [
    'Nmap', 'Wireshark', 'Metasploit', 'Burp Suite', 
    'Kali Linux', 'Python', 'YOLOv8', 'TensorFlow'
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-card to-background">
      <div className={`max-w-6xl mx-auto transition-all duration-[1500ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="font-roboto-mono text-muted-foreground text-lg">
            Mastering the art of digital defense
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group bg-card border-2 border-border rounded-lg p-6 hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color}`}>
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-orbitron font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <span className="font-roboto-mono text-primary font-bold text-lg">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide-in-right" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-lg p-8">
          <h3 className="font-orbitron text-2xl font-bold text-center mb-8 text-primary">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`group px-6 py-3 bg-gradient-to-br from-card to-muted border-2 border-border rounded-lg font-roboto-mono font-bold hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300 cursor-pointer ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.05 + 0.8}s` }}
              >
                <span className="text-foreground group-hover:text-primary transition-colors">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cyber Lab Hint */}
        <div className="mt-12 text-center">
          <p className="font-roboto-mono text-muted-foreground italic">
            "Continuous learning is the key to staying ahead in cybersecurity"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
