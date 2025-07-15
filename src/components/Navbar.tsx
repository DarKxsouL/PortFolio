
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certificates" },
    { name: "Interests", href: "#interests" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    // Start buttery smooth page transition animation
    setIsTransitioning(true);
    
    // Add ultra-smooth transition class to body
    document.body.classList.add('page-transition-buttery');
    
    // Longer delay for smoother visual effect
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
      
      // Extended animation duration for butter-smooth effect
      setTimeout(() => {
        document.body.classList.remove('page-transition-buttery');
        setIsTransitioning(false);
      }, 1200); // Increased from 800ms to 1200ms
    }, 150); // Increased from 100ms to 150ms
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) ${
      scrolled 
        ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-slate-700/20" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white hover:scale-105 transition-all duration-500 cubic-bezier(0.19, 1, 0.22, 1) cursor-pointer animate-magnetic-pull-smooth hover-cursor-grow magnetic-cursor">
              Portfolio
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  disabled={isTransitioning}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-600 cubic-bezier(0.19, 1, 0.22, 1) hover:scale-110 hover:bg-blue-50 dark:hover:bg-slate-800 relative group disabled:opacity-50 cursor-pointer-custom hover-cursor-tilt magnetic-cursor"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-600 cubic-bezier(0.19, 1, 0.22, 1) group-hover:w-full rounded-full"></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cubic-bezier(0.19, 1, 0.22, 1) rounded-lg"></div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:scale-110 transition-all duration-500 cubic-bezier(0.19, 1, 0.22, 1) hover:bg-blue-50 dark:hover:bg-slate-800 hover-cursor-rotate cursor-pointer-custom"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl border-t border-gray-200/20 dark:border-slate-700/20`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              disabled={isTransitioning}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all duration-600 cubic-bezier(0.19, 1, 0.22, 1) hover:bg-blue-50 dark:hover:bg-slate-800 hover:scale-105 hover:translate-x-2 disabled:opacity-50 cursor-pointer-custom hover-cursor-grow"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
