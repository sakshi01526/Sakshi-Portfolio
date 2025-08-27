import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  Search, 
  Layers, 
  MousePointer, 
  Smartphone, 
  Code,
  Users,
  Zap
} from "lucide-react";

const skills = [
  {
    icon: Search,
    title: "User Research",
    description: "Uncovering hidden insights through behavioral analysis and user psychology",
    level: "Expert"
  },
  {
    icon: Layers,
    title: "Wireframing",
    description: "Crafting the skeleton of digital experiences with precision and purpose",
    level: "Expert"
  },
  {
    icon: MousePointer,
    title: "Prototyping",
    description: "Bringing concepts to life through interactive and immersive prototypes",
    level: "Expert"
  },
  {
    icon: Palette,
    title: "Visual Design",
    description: "Creating aesthetically compelling interfaces with gothic elegance",
    level: "Expert"
  },
  {
    icon: Zap,
    title: "Interaction Design",
    description: "Designing micro-interactions that feel magical and purposeful",
    level: "Advanced"
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description: "Optimizing experiences for touch and mobile-first interactions",
    level: "Expert"
  },
  {
    icon: Code,
    title: "Design Systems",
    description: "Building scalable and consistent design languages",
    level: "Advanced"
  },
  {
    icon: Users,
    title: "Usability Testing",
    description: "Validating designs through methodical user testing and iteration",
    level: "Expert"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="font-gothic text-4xl md:text-5xl font-bold text-foreground mb-6">
            What I Do <span className="text-primary">Best</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Each skill is honed through years of practice, combining technical expertise 
            with an eye for the mysterious and elegant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index}
                className="group bg-card border-border/50 hover:border-primary/50 hover-glow transition-all duration-300 cursor-pointer h-full"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <Icon className="h-8 w-8 text-primary group-hover:text-primary-glow transition-colors" />
                  </div>
                  
                  <h3 className="font-gothic text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {skill.description}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-flex px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                      {skill.level}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <div className="mt-16 text-center">
          <h3 className="font-gothic text-2xl font-semibold text-foreground mb-8">
            Tools of the <span className="text-primary">Trade</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Figma", "Adobe XD", "Sketch", "Principle", "Framer", 
              "Miro", "Notion", "Hotjar", "Maze", "Optimal Workshop"
            ].map((tool, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-accent/20 text-accent-foreground rounded-lg border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;