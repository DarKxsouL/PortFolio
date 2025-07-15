
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4 text-gray-800 dark:text-white animate-fade-in hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-default">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-scale-in hover:w-32 transition-all duration-300"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Photo Section */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative group">
              <div className="w-150 h-150 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center animate-fade-in hover:shadow-3xl transition-all duration-500">
                <img 
                  src="/lovable-uploads/93c92192-3adc-4f9a-88c1-98f1e3779810.png" 
                  alt="Jitesh Adekar" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Interactive floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full animate-bounce delay-500 hover:bg-blue-500/40 transition-colors duration-300 cursor-pointer"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full animate-bounce delay-700 hover:bg-purple-500/40 transition-colors duration-300 cursor-pointer"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <p className="font-sans text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in delay-200 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                As a fresh Computer Engineering graduate, I bring enthusiasm, fresh perspectives, 
                and a strong foundation in full-stack development. My journey in technology is 
                driven by curiosity and a passion for creating solutions that make a difference.
              </p>
              <p className="font-sans text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in delay-400 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                Beyond coding, I've developed leadership skills through my role as CSA Vice President 
                and demonstrated commitment to community service as an NSS volunteer. I believe in 
                the power of technology to transform lives and am eager to contribute to innovative projects.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 gap-4 animate-slide-up delay-600">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 dark:bg-slate-800 dark:border-slate-700 group hover:border-blue-300 dark:hover:border-blue-500">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Fresh Graduate</h3>
                    <p className="font-sans text-gray-600 dark:text-gray-300">Computer Engineering</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 dark:bg-slate-800 dark:border-slate-700 group hover:border-purple-300 dark:hover:border-purple-500">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">CSA Vice President</h3>
                    <p className="font-sans text-gray-600 dark:text-gray-300">Leadership & Event Management</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 dark:bg-slate-800 dark:border-slate-700 group hover:border-green-300 dark:hover:border-green-500">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">NSS Volunteer</h3>
                    <p className="font-sans text-gray-600 dark:text-gray-300">Community Service & Social Impact</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
