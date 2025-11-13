import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Background Effect */}
      <div className="absolute inset-0  from-background via-background to-secondary pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" />
      {/* <div className="absolute w-3/5 left-3/4  rounded-full"><img src="/LS20251112163252.png"/></div> */}
      

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-primary text-sm md:text-base font-medium mb-4 tracking-wider uppercase">
              Welcomed 
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text text-glow">Sanjeevkanth S</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground/90 mb-6">
              Full Stack Developer
            </h2>
            {/* <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Building seamless digital experiences from front to back.
            </p> */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 hover:box-glow"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom left-1/2 -translate-x-1/2 animate-bounce">
            {/* <ArrowDown className="text-primary" size={32} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
