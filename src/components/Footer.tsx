import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo/Signature */}
          <div className="mb-8">
            <h3 className="font-gothic text-3xl font-bold text-primary mb-2">
              Sakshi
            </h3>
            <p className="text-foreground-muted italic">
              Designs with a Touch of Darkness
            </p>
          </div>

          {/* Quote */}
          <div className="mb-8 max-w-2xl mx-auto">
            <blockquote className="text-lg text-foreground-muted italic">
              "I have always imagined that Paradise will be a kind of library... 
              but in my case, it's a design system."
            </blockquote>
            <p className="text-sm text-muted-foreground mt-2">— Sakshi (inspired by Borges)</p>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-muted-foreground flex items-center justify-center space-x-2">
              <span>© 2024 Sakshi. Crafted with</span>
              <Heart className="h-4 w-4 text-primary fill-current" />
              <span>and a touch of mystery.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;