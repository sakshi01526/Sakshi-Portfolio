import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="font-gothic text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who is <span className="text-primary">Sakshi</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground-muted leading-relaxed">
              In the shadows of conventional design lies a realm where creativity meets functionality. 
              I am Sakshi, a UI/UX designer who believes that the most memorable experiences are born 
              from the perfect balance of mystery and clarity.
            </p>

            <p className="text-lg text-foreground-muted leading-relaxed">
              My approach draws inspiration from gothic elegance — creating digital experiences that 
              are hauntingly beautiful, intuitively functional, and unforgettably impactful. Every 
              pixel serves a purpose, every interaction tells a story.
            </p>

            <p className="text-lg text-foreground-muted leading-relaxed">
              With over 5 years of experience in crafting user experiences for startups and 
              enterprises, I specialize in transforming complex problems into elegant solutions 
              that users don't just use — they remember.
            </p>

            <div className="pt-6">
              <h3 className="font-gothic text-xl font-semibold text-primary mb-4">My Design Philosophy</h3>
              <blockquote className="border-l-4 border-primary pl-6 text-lg italic text-foreground-muted">
                "Design is not just what it looks like and feels like. 
                Design is how it works... in the shadows."
              </blockquote>
            </div>
          </div>

          {/* Stats & Highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-card hover-glow text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              
              <Card className="p-6 bg-card hover-glow text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
              
              <Card className="p-6 bg-card hover-glow text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </Card>
              
              <Card className="p-6 bg-card hover-glow text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-card border-primary/20">
              <h4 className="font-gothic text-lg font-semibold text-primary mb-3">Current Focus</h4>
              <p className="text-foreground-muted">
                Exploring the intersection of AI and user experience design, 
                creating interfaces that adapt and evolve with user behavior while 
                maintaining the mysterious elegance that defines my work.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;