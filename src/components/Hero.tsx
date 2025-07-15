
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import ResumeViewer from "./ResumeViewer";

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleViewResume = () => {
    setIsResumeOpen(true);
  };

  return (
    // <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
    //   {/* Dark background image with overlay */}
    //   <div 
    //     className="absolute inset-0 bg-cover bg-center bg-no-repeat cursor-zoom-in"
    //     style={{
    //       backgroundImage: `url('/lovable-uploads/f80724db-16e5-4601-bd6a-30168aac50c6.png')`
    //     }}
    //   >
    //     {/* Dark overlay for better text readability */}
    //     <div className="absolute inset-0 bg-black/70"></div>
    //   </div>

    //   {/* Enhanced animated background elements */}
    //   <div className="absolute inset-0">
    //     <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse cursor-help"></div>
    //     <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 cursor-help"></div>
    //     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500 cursor-help"></div>
        
    //     {/* Interactive floating particles */}
    //     <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-700 hover:bg-white/40 transition-colors duration-300 cursor-pointer hover-cursor-grow"></div>
    //     <div className="absolute top-3/4 left-3/4 w-3 h-3 bg-blue-300/30 rounded-full animate-bounce delay-1200 hover:bg-blue-300/50 transition-colors duration-300 cursor-pointer hover-cursor-grow"></div>
    //     <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-purple-300/20 rounded-full animate-bounce delay-300 hover:bg-purple-300/40 transition-colors duration-300 cursor-pointer hover-cursor-grow"></div>
        
    //     {/* Interactive floating elements */}
    //     <div className="absolute top-10 right-10 w-16 h-16 border border-white/10 rounded-full animate-spin-slow hover:border-white/30 hover:scale-110 transition-all duration-300 cursor-grab hover-cursor-rotate"></div>
    //     <div className="absolute bottom-10 left-10 w-12 h-12 border-2 border-blue-300/20 rounded-lg animate-float hover:border-blue-300/40 hover:scale-105 transition-all duration-300 cursor-grab hover-cursor-tilt"></div>
    //     <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-float-reverse hover:from-blue-400/20 hover:to-purple-400/20 transition-all duration-300 cursor-grab hover-cursor-shrink"></div>
    //   </div>
      
    //   <div className="max-w-4xl mx-auto text-center text-white relative z-10">
    //     <div className="animate-fade-in">
    //       <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in delay-200 hover:animate-pulse transition-all duration-300 cursor-text hover-cursor-grow">
    //         Jitesh Adekar
    //       </h1>
    //       <h2 className="font-sans text-2xl md:text-3xl font-medium mb-4 text-blue-100 animate-fade-in delay-400 animate-glow hover:text-blue-50 transition-colors duration-300 cursor-text">
    //         Full Stack Developer | Java Enthusiast
    //       </h2>
    //       <p className="font-sans text-lg md:text-xl mb-8 text-blue-200 max-w-2xl mx-auto animate-fade-in delay-600 hover:text-blue-100 transition-colors duration-300 cursor-text">
    //         Computer Engineering graduate passionate about creating innovative solutions 
    //         through code. Ready to contribute to impactful projects with fresh perspectives.
    //       </p>
    //     </div>
        
    //     <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in delay-800">
    //       <Button 
    //         size="lg" 
    //         onClick={handleViewResume}
    //         className="bg-white/90 text-gray-900 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-xl animate-float-subtle backdrop-blur-sm border border-white/20 font-sans font-medium cursor-pointer-custom hover-cursor-grow magnetic-cursor"
    //       >
    //         <Download className="mr-2 h-5 w-5 animate-bounce-gentle" />
    //         View Resume
    //       </Button>
    //       <Button 
    //         size="lg" 
    //         variant="outline" 
    //         className="border-white/50 text-white hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 hover:scale-105 hover:shadow-xl animate-float-subtle delay-200 backdrop-blur-sm font-sans font-medium cursor-pointer-custom hover-cursor-grow magnetic-cursor"
    //       >
    //         <a className="flex" href="#contact">
    //         <Mail className="mr-2 h-5 w-5 animate-bounce-gentle delay-300" />
    //         Contact Me
    //         </a>
    //       </Button>
    //     </div>
        
    //     <div className="flex gap-10 justify-center animate-fade-in delay-1000">
    //       <a 
    //         href="https://github.com/DarKxsouL?tab=repositories" 
    //         target="_blank" 
    //         rel="noopener noreferrer"
    //         className=" flex justify-center p-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/15 transition-all duration-300 hover:scale-110 hover:rotate-12 animate-float-gentle border border-white/10 hover:border-white/30 cursor-pointer-custom hover-cursor-rotate magnetic-cursor"
    //       >
    //         <Github className="h-6 w-6" />
    //       </a>
    //       <a 
    //         href="https://www.linkedin.com/in/jiteshadekar" 
    //         target="_blank" 
    //         rel="noopener noreferrer"
    //         className=" flex justify-center p-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/15 transition-all duration-300 hover:scale-110 hover:rotate-12 animate-float-gentle delay-500 border border-white/10 hover:border-white/30 cursor-pointer-custom hover-cursor-rotate magnetic-cursor"
    //       >
    //         <Linkedin className="h-6 w-6" />
    //       </a>
    //     </div>
        
    //     <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 animate-bounce-slow hover:scale-110 transition-transform duration-300 cursor-pointer hover-cursor-grow">
    //       <ArrowRight className="h-6 w-6 rotate-90 opacity-70 hover:opacity-100" />
    //     </div>
    //   </div>
    // </section>
    <>
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Dark background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat cursor-zoom-in"
          style={{
            backgroundImage: `url('/lovable-uploads/f80724db-16e5-4601-bd6a-30168aac50c6.png')`
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Enhanced animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse cursor-help"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 cursor-help"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500 cursor-help"></div>
          
          {/* Interactive floating particles */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-700 hover:bg-white/40 transition-colors duration-300 cursor-pointer hover-cursor-grow"></div>
          <div className="absolute top-3/4 left-3/4 w-3 h-3 bg-blue-300/30 rounded-full animate-bounce delay-1200 hover:bg-blue-300/50 transition-colors duration-300 cursor-pointer hover-cursor-grow"></div>
          <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-purple-300/20 rounded-full animate-bounce delay-300 hover:bg-purple-300/40 transition-colors duration-300 cursor-pointer hover-cursor-grow"></div>
          
          {/* Interactive floating elements */}
          <div className="absolute top-10 right-10 w-16 h-16 border border-white/10 rounded-full animate-spin-slow hover:border-white/30 hover:scale-110 transition-all duration-300 cursor-grab hover-cursor-rotate"></div>
          <div className="absolute bottom-10 left-10 w-12 h-12 border-2 border-blue-300/20 rounded-lg animate-float hover:border-blue-300/40 hover:scale-105 transition-all duration-300 cursor-grab hover-cursor-tilt"></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-float-reverse hover:from-blue-400/20 hover:to-purple-400/20 transition-all duration-300 cursor-grab hover-cursor-shrink"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <div className="animate-fade-in">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in delay-200 hover:animate-pulse transition-all duration-300 cursor-text hover-cursor-grow">
              Jitesh Adekar
            </h1>
            <h2 className="font-sans text-2xl md:text-3xl font-medium mb-4 text-blue-100 animate-fade-in delay-400 animate-glow hover:text-blue-50 transition-colors duration-300 cursor-text">
              Full Stack Developer | Java Enthusiast
            </h2>
            <p className="font-sans text-lg md:text-xl mb-8 text-blue-200 max-w-2xl mx-auto animate-fade-in delay-600 hover:text-blue-100 transition-colors duration-300 cursor-text">
              Computer Engineering graduate passionate about creating innovative solutions 
              through code. Ready to contribute to impactful projects with fresh perspectives.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in delay-800">
            <Button 
              size="lg" 
              onClick={handleViewResume}
              className="bg-white/90 text-gray-900 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-xl animate-float-subtle backdrop-blur-sm border border-white/20 font-sans font-medium cursor-pointer-custom hover-cursor-grow magnetic-cursor"
            >
              <Download className="mr-2 h-5 w-5 animate-bounce-gentle" />
              View Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/50 text-white hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300 hover:scale-105 hover:shadow-xl animate-float-subtle delay-200 backdrop-blur-sm font-sans font-medium cursor-pointer-custom hover-cursor-grow magnetic-cursor"
            >
              <a className="flex" href="#contact">
              <Mail className="mr-2 h-5 w-5 animate-bounce-gentle delay-300" />
              Contact Me
              </a>
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center animate-fade-in delay-1000">
            <a 
              href="https://github.com/DarKxsouL?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-center p-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/15 transition-all duration-300 hover:scale-110 hover:rotate-12 animate-float-gentle border border-white/10 hover:border-white/30 cursor-pointer-custom hover-cursor-rotate magnetic-cursor"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jiteshadekar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-center p-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/15 transition-all duration-300 hover:scale-110 hover:rotate-12 animate-float-gentle delay-500 border border-white/10 hover:border-white/30 cursor-pointer-custom hover-cursor-rotate magnetic-cursor"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          
          <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 animate-bounce-slow hover:scale-110 transition-transform duration-300 cursor-pointer hover-cursor-grow">
            <ArrowRight className="h-6 w-6 rotate-90 opacity-70 hover:opacity-100" />
          </div>
        </div>
      </section>

      <ResumeViewer 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
};

export default Hero;
