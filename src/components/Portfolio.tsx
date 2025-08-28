import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "The Moral",
    category: "Book Cover",
    description: "Designed a novel cover using Figma.
A prominent text panel delivers an excerpt from the book,
reflecting on the human tendency to compare achievements,
grapple with self-doubt, and strive for personal growth. The
key takeaway is emphasized in a striking typographic layout.


"Tie yourself to a goal, not to people or things.'.",
    image: "https://drive.google.com/file/d/1eryG2xueoN_rRL7JjWu0KaHU_Mwv00IS/view?usp=drivesdk",
    tags: ["Design", "Dark UI", "Book Cover"],
    color: "from-purple-900 to-black"
  },
  {
    id: 2,
    title: "The day i met him",
    category: "Book Cover",
    description: "Designed a novel cover using Figma.
A prominent text panel delivers an excerpt from the book,
reflecting on the human tendency to compare achievements,
grapple with self-doubt, and strive for personal growth. The
key takeaway is emphasized in a striking typographic layout.


"Tie yourself to a goal, not to people or things.'.",
    image: "https://drive.google.com/file/d/13x2zk5qzlCLoafyUFEidJUGw5MhxWOHF/view?usp=drivesdk",
    tags: ["Design", "Dark UI", "Book Cover"],
    color: "from-indigo-900 to-purple-900"
  },
  {
    id: 3,
    title: "Book Cover",
    category: "May Be",
    description: ""A striking book cover crafted in a dark theme, featuring deep tones and dramatic contrasts. The design blends minimalism with mystery, using bold typography and subtle textures to create an atmospheric and immersive look. Perfect for genres like thriller, mystery, fantasy, or drama, the cover evokes intrigue and sets the tone for the story within."",
    image: "https://drive.google.com/file/d/1kr84ucViqOUnDnGV9YTQgD5gL2jYdB-A/view?usp=drivesdk",
    tags: ["Dark", "Book Cover", "Black"],
    color: "from-gray-900 to-purple-900"
  },
  {
    id: 4,
    title: "ui/ux design",
    category: "online job search App",
    description: "An intuitive online job search app designed to connect job seekers with employers seamlessly. It features smart search filters, personalized job recommendations, resume uploads, and instant application tracking. With a clean interface, real-time notifications, and in-app messaging, the app makes job hunting faster, easier, and more efficient.",
    image: "https://drive.google.com/file/d/1m_YwZEgzT6tun--Lp5msLJQATzKe47dE/view?usp=drivesdk",
    tags: ["Job portal", "Mobile", "Accessibility"],
    color: "from-blue-900 to-purple-900"
  },
  {
    id: 5,
    title: "Flower Wbsite Design",
    category: "Social Platform",
    description: "A visually elegant flower website design that combines soft pastel colors, high-quality floral imagery, and a clean layout. The design features an intuitive navigation system, product galleries, and a smooth shopping experience for bouquets and arrangements. Subtle animations and a nature-inspired aesthetic create a fresh, welcoming, and user-friendly online presence for florists and flower businesses.",
    image: "https://drive.google.com/file/d/1d1GemWa6PlOelCyGL-xPec9W3_ISz79q/view?usp=drivesdk",
    tags: ["Social Media", "Creator flowers", "Community"],
    color: "from-violet-900 to-black"
  },
  {
    id: 6,
    title: "online Learning",
    category: "Education Platform",
    description: "A modern education platform designed to make learning accessible, interactive, and engaging. It offers online courses, live classes, progress tracking, and personalized learning paths. With features like discussion forums, quizzes, certifications, and a user-friendly dashboard, the platform empowers students and educators to connect, collaborate, and grow in a digital learning environment..",
    image: "https://drive.google.com/file/d/1XDEZLosAY1B7cf-eRSktOqI6f6SQVpaD/view?usp=drivesdk",
    tags: ["Education", "learning", "Web Platform"],
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
