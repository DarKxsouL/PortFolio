
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Palette, Users } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    "Java", "SpringBoot", "JavaScript", "React", "Node.js", "Firebase", 
    "Tailwind CSS","Python", "SQL", "HTML", "CSS",  "Git", "Github"
  ];
  
  const softSkills = [
    "Teamwork", "Communication", "Time Management", "Leadership", 
     "Event Planning", "Problem-Solving", "Adaptability", "Creative Thinking"
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-slate-800 transition-colors duration-500 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-particle-1 animate-float-ultra-smooth cursor-crosshair"></div>
        <div className="floating-particle-2 animate-float-ultra-smooth delay-smooth-500 cursor-crosshair"></div>
        <div className="floating-particle-3 animate-float-ultra-smooth delay-smooth-300 cursor-crosshair"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-2xl animate-float-ultra-smooth cursor-help"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-green-400/15 to-blue-400/15 rounded-full blur-xl animate-float-ultra-smooth delay-smooth-700 cursor-help"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-bounce-in-smooth">
          <h2 className="font-display text-4xl font-bold mb-4 text-gray-800 dark:text-white text-shimmer hover:animate-glow transition-all duration-500 cursor-text hover-cursor-grow">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-scale-in hover:w-32 transition-all duration-700 morphing-gradient cursor-pointer-custom"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card-interactive animate-slide-in-elastic-smooth delay-smooth-200 dark:bg-slate-700 dark:border-slate-600 glass-morphism group hover-cursor-tilt cursor-zoom-in">
            <CardContent className="p-8 relative overflow-hidden">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4 transition-all duration-500 animate-magnetic-pull-smooth hover:animate-rotate-scale cursor-grab">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500 cursor-text">
                  Technical Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium hover:scale-110 hover:rotate-2 transition-all duration-500 hover:shadow-xl animate-bounce-in-smooth hover-shimmer cursor-pointer-custom hover-cursor-grow magnetic-cursor cursor-pulse-hover"
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Interactive decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400/30 rounded-full animate-bounce-gentle opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-crosshair"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400/30 rounded-full animate-float-subtle delay-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-crosshair"></div>
            </CardContent>
          </Card>
          
          <Card className="card-interactive animate-slide-in-elastic-smooth delay-smooth-400 dark:bg-slate-700 dark:border-slate-600 glass-morphism group hover-cursor-tilt cursor-zoom-in">
            <CardContent className="p-8 relative overflow-hidden">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full mr-4 transition-all duration-500 animate-magnetic-pull-smooth hover:animate-rotate-scale cursor-grab">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400 group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-500 cursor-text">
                  Soft Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium hover:scale-110 hover:rotate-2 transition-all duration-500 hover:shadow-xl animate-bounce-in-smooth hover-shimmer cursor-pointer-custom hover-cursor-grow magnetic-cursor cursor-pulse-hover"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Interactive decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400/30 rounded-full animate-wave opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-crosshair"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400/30 rounded-full animate-float-gentle delay-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-crosshair"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
