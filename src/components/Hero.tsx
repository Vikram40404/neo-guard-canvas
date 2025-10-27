import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, ChevronDown } from 'lucide-react';
import heroBackground from '@/assets/cyber-hero-bg.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = [
    'Web Security',
    'AI in Cyber Defense',
    'Ethical Hacking',
    'Phishing Simulation',
    'Threat Detection',
  ];

  useEffect(() => {
    let currentIndex = 0;
    const currentPhrase = phrases[currentPhraseIndex];
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentPhrase.length) {
        setDisplayText(currentPhrase.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentPhraseIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--cyber-glow)/0.1),transparent_50%)]" />
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-accent font-roboto-mono text-xs animate-matrix-rain"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          {/* Name */}
          <h1 className="font-orbitron text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Vikram Budania
          </h1>
          
          {/* Title */}
          <h2 className="font-orbitron text-2xl md:text-4xl font-bold mb-8 text-foreground">
            Cybersecurity Engineering Student
          </h2>

          {/* Typing Animation */}
          <div className="mb-12 h-12 flex items-center justify-center">
            <p className="font-roboto-mono text-xl md:text-2xl text-primary">
              <span className="text-muted-foreground">Specializing in: </span>
              <span className="inline-block min-w-[300px] text-left">{displayText}</span>
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron font-bold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="group relative overflow-hidden border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-orbitron font-bold px-8 py-6 text-lg rounded-lg transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Contact Me
            </Button>
          </div>

          {/* Profile Photo Placeholder */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-48 h-48 rounded-full border-4 border-primary animate-glow-pulse overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <span className="font-orbitron text-6xl text-primary leading-none">VB</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group flex items-center justify-center"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="h-12 w-12 text-primary group-hover:text-secondary transition-colors" />
        </button>
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-10">
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" />
      </div>
    </section>
  );
};

export default Hero;
