import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative py-12 px-6 bg-gradient-to-t from-card to-background border-t-2 border-primary/20">
      {/* Animated Border Top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="font-roboto-mono text-muted-foreground">
              © 2025 <span className="text-primary font-bold">Vikram Budania</span>
            </p>
            <p className="font-roboto-mono text-sm text-muted-foreground mt-1">
              All rights reserved
            </p>
          </div>

          {/* Live Clock */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-6 py-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-roboto-mono text-primary font-bold text-lg">
                {time.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit', 
                  second: '2-digit' 
                })}
              </span>
            </div>
          </div>

          {/* Made With */}
          <div className="text-center md:text-right">
            <p className="font-roboto-mono text-muted-foreground flex items-center justify-center md:justify-end gap-2">
              Built with
              <Heart className="h-4 w-4 text-destructive animate-pulse" />
              & <span className="text-primary">TypeScript</span>
            </p>
            <p className="font-roboto-mono text-sm text-muted-foreground mt-1">
              Powered by React + Vite
            </p>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <p className="font-roboto-mono text-center text-muted-foreground italic text-sm">
            "In the world of ones and zeros, <span className="text-primary">security</span> is the only constant"
            <span className="animate-pulse">_</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
