import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "ShadowBank",
    category: "Fintech App",
    description: "A dark-themed banking app that reimagines financial management with gothic elegance and cutting-edge security.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    tags: ["Mobile App", "Dark UI", "Fintech"],
    color: "from-purple-900 to-black"
  },
  {
    id: 2,
    title: "Mystic Commerce",
    category: "E-commerce Platform",
    description: "An otherworldly shopping experience that combines mystical aesthetics with intuitive user flows.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["Web App", "E-commerce", "Dark Theme"],
    color: "from-indigo-900 to-purple-900"
  },
  {
    id: 3,
    title: "NightOwl Dashboard",
    category: "Analytics Platform",
    description: "A comprehensive analytics dashboard designed for night-shift workers with superior dark mode UX.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Dashboard", "Analytics", "Enterprise"],
    color: "from-gray-900 to-purple-900"
  },
  {
    id: 4,
    title: "Eclipse Medical",
    category: "Healthcare App",
    description: "A patient management system that brings warmth to healthcare through thoughtful, accessible design.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    tags: ["Healthcare", "Mobile", "Accessibility"],
    color: "from-blue-900 to-purple-900"
  },
  {
    id: 5,
    title: "Raven Social",
    category: "Social Platform",
    description: "A social networking app for creators who thrive in the shadows, emphasizing authentic connections.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["Social Media", "Creator Tools", "Community"],
    color: "from-violet-900 to-black"
  },
  {
    id: 6,
    title: "Phantom Learning",
    category: "EdTech Platform",
    description: "An immersive learning platform that makes education engaging through gamification and dark aesthetics.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    tags: ["Education", "Gamification", "Web Platform"],
    color: "from-emerald-900 to-purple-900"
  }
];

const Portfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Show only first 3 projects initially
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-gothic text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Work of <span className="text-primary">Sakshi</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Each project is a journey into the unknown, where user needs meet creative solutions 
            in the realm of digital shadows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-card border-border/50 hover:border-primary/50 overflow-hidden hover-glow transition-all duration-500 cursor-pointer animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-fit bg-background/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                  >
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                </div>
                
                <h3 className="font-gothic text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-accent/20 text-accent-foreground rounded border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 relative">
          {/* Thing Hand Easter Egg */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 pointer-events-none">
            <div className="animate-thing-tap opacity-60">
              <span className="text-2xl">👆</span>
            </div>
          </div>
          
          <Button 
            onClick={toggleProjects}
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group transition-all duration-300 hover:shadow-glow"
          >
            {showAllProjects ? (
              <>
                <EyeOff className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                Show Less Projects
              </>
            ) : (
              <>
                <Eye className="mr-2 h-5 w-5" />
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
          
          {!showAllProjects && (
            <p className="text-sm text-muted-foreground mt-3 animate-fade-in">
              {projects.length - 3} more projects waiting in the shadows...
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;