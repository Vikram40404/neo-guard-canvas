import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
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

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:vikram@example.com', color: 'hover:text-primary' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-secondary' },
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-accent' },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />

      <div className={`max-w-4xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="font-roboto-mono text-muted-foreground text-lg">
            Let's collaborate on securing the digital world
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-orbitron text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-2 border-border focus:border-primary font-roboto-mono transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-orbitron text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-2 border-border focus:border-primary font-roboto-mono transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-orbitron text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-2 border-border focus:border-primary font-roboto-mono min-h-32 transition-all duration-300"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron font-bold text-lg py-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-lg p-8 hover:border-secondary/50 transition-all duration-500">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-primary">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`flex items-center gap-4 p-4 bg-background border border-border rounded-lg transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] group ${link.color}`}
                  >
                    <link.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-roboto-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-lg p-8 hover:border-accent/50 transition-all duration-500">
              <h3 className="font-orbitron text-xl font-bold mb-4 text-accent">
                Open to Opportunities
              </h3>
              <p className="font-roboto-mono text-muted-foreground leading-relaxed">
                I'm currently seeking internships and collaborative projects in cybersecurity, 
                AI security, and ethical hacking. Let's build something secure together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
