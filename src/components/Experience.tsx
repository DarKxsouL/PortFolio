
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Award, Heart, BrainCircuit } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Smart India Hackathon 2024",
      company: "Smart India Hackathon",
      period: "2024",
      type: "hackathon",
      description: "gaiend a llot of knowledge, skills, and experience in various fields. Learned to solve real-life problems through coding challenges.",
      icon: BrainCircuit
    },
    {
      title: "TechnoHacks Internship",
      company: "TechnoHacks Solutions",
      period: "2025",
      type: "internship",
      description: "Gained hands-on experience in software development, working on real-world projects and learning industry best practices.",
      icon: Briefcase
    },
    {
      title: "InternShala Training Internship",
      company: "Internshala Trainings",
      period: "2023",
      type: "internship",
      description: "Learned with experts about cyber security and ethical hacking and growing technical skills.",
      icon: Briefcase
    },
    {
      title: "Vice President",
      company: "Computer Student Association (CSA)",
      period: "2024-2025",
      type: "leadership",
      description: "Led a team of students, organized technical events, workshops, and seminars. Developed leadership and project management skills.",
      icon: Award
    },
    {
      title: "NSS Volunteer",
      company: "National Service Scheme",
      period: "2022-2024",
      type: "volunteer",
      description: "Participated in community service activities, organized camps, and contributed to social welfare initiatives.",
      icon: Heart
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'hackathon': return 'text-orange-600 bg-yellow-100 dark:bg-orange-900/30 dark:text-yellow-400';
      case 'internship': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400';
      case 'leadership': return 'text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400';
      case 'volunteer': return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getHoverColor = (type: string) => {
    switch (type) {
      case 'hackathon': return 'group-hover:border-orange-300 dark:group-hover:border-yellow-500';
      case 'internship': return 'group-hover:border-blue-300 dark:group-hover:border-blue-500';
      case 'leadership': return 'group-hover:border-purple-300 dark:group-hover:border-purple-500';
      case 'volunteer': return 'group-hover:border-green-300 dark:group-hover:border-green-500';
      default: return 'group-hover:border-gray-300 dark:group-hover:border-gray-500';
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-levitate"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-2xl animate-float-gentle delay-1000"></div>
        <div className="floating-particle-1"></div>
        <div className="floating-particle-2"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-bounce-in">
          <h2 className="font-display text-4xl font-bold mb-4 text-gray-800 dark:text-white text-shimmer hover:animate-glow transition-all duration-300 cursor-default">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-scale-in hover:w-32 transition-all duration-500 morphing-gradient"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`card-interactive animate-slide-in-elastic dark:bg-slate-700 dark:border-slate-600 glass-morphism group ${getHoverColor(exp.type)}`}
              style={{ animationDelay: `${200 + index * 200}ms` }}
            >
              <CardContent className="p-8 relative overflow-hidden">
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-full ${getIconColor(exp.type)} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-magnetic-pull`}>
                    <exp.icon className="h-6 w-6 transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mt-2 md:mt-0 self-start hover:scale-105 transition-transform duration-300 hover-shimmer cursor-pointer animate-pulse-interactive">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                {/* Interactive decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400/20 rounded-full animate-bounce-gentle delay-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400/20 rounded-full animate-float-subtle delay-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-1/2 right-8 w-4 h-4 border border-white/10 dark:border-gray-400/20 rounded-full animate-orbit opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
