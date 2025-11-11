import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "React", level: 60, category: "Frontend" },
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 80, category: "Frontend" },
  { name: "Spring Boot", level: 60, category: "Backend" },
  { name: "Flask", level: 70, category: "Backend" },
  // { name: "Node.js", level: 82, category: "Backend" },
  { name: "C", level: 85, category: "Programming" },
  { name: "C++", level: 90, category: "Programming" },
  { name: "Java", level: 95, category: "Programming" },
  { name: "Python", level: 85, category: "Programming" },
  { name: "SQLite", level: 75, category: "Database" },
  { name: "PostgreSQL", level: 70, category: "Database" },
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000 ease-out ${
            isVisible ? "animate-progress" : "w-0"
          }`}
          style={
            {
              "--progress-width": `${skill.level}%`,
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, catIndex) => (
              <div
                key={category}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <h3 className="text-lg font-bold mb-6 text-primary">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <SkillBar key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
