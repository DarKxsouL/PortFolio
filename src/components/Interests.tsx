
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Camera, Box } from "lucide-react";

const Interests = () => {
  const interests = [
    {
      title: "Drawing",
      description: "Creating artistic illustrations and sketches as a creative outlet",
      icon: Palette,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Video/Photo Editing",
      description: "Crafting visual stories through digital media manipulation",
      icon: Camera,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "3D Model Generation",
      description: "Creating 3D models and animations using tools like Blender",
      icon: Box,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-100 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl font-bold mb-4 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-text hover-cursor-grow">Creative Interests</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-scale-in hover:w-32 transition-all duration-300 cursor-pointer-custom"></div>
          <p className="font-sans text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300 cursor-text">
            Beyond coding, I explore various creative outlets that enhance my problem-solving abilities and artistic vision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in dark:bg-slate-700 dark:border-slate-600 hover:border-transparent hover:shadow-2xl cursor-zoom-in hover-cursor-tilt magnetic-cursor"
              style={{ animationDelay: `${200 + index * 200}ms` }}
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Interactive background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${interest.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10 cursor-grab hover-cursor-rotate`}>
                  <interest.icon className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors relative z-10 cursor-text hover-cursor-grow">
                  {interest.title}
                </h3>
                <p className="font-sans text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300 relative z-10 cursor-text">
                  {interest.description}
                </p>
                
                {/* Interactive particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce delay-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-crosshair"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce delay-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-crosshair"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
