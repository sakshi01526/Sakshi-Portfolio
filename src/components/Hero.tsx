import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronDown } from "lucide-react";
import heroImage from "@/assets/sakshi-hero.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sakshi - UI/UX Designer" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Gothic Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 z-1">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary))_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="font-gothic text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Hello, I'm</span>
            <span className="block text-primary text-glow animate-glow">Sakshi</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground-muted mb-4 font-light">
              Designing Experiences with
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-gothic font-semibold text-primary">
              Dark Elegance
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            I craft digital experiences that balance function with mystery — 
            intuitive, yet unforgettable. Where design meets the shadows.
          </p>

          <Button 
            onClick={scrollToAbout}
            size="lg" 
            className="group bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            Explore My World
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToAbout}
          className="text-primary hover:text-primary-glow transition-colors animate-bounce"
          aria-label="Scroll to content"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;