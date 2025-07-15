
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import { useState } from "react";
import CertificateViewer from "./CertificateViewer";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const certificates = [
    {
      title: "Java Full Stack Web Development",
      issuer: "Udemy",
      date: "Current",
      description: "A full-stack web development course covering Frontend and Backend development, Springboot, and Hibernate, and JSP.",
      link: "https://www.udemy.com/share/101WBK3@aT6pKTdz9GPz689FdDDBgUCOCGTJeEIi39lqw9v43tzqqic7zSSGgkHUQUzBMRqtfA==/",
      linkedin:"https://www.udemy.com/share/101WBK3@aT6pKTdz9GPz689FdDDBgUCOCGTJeEIi39lqw9v43tzqqic7zSSGgkHUQUzBMRqtfA==/",
      color: "from-violet-500 to-pink-500",
      image: ""
      
    },
    {
      title: "React Js Course",
      issuer: "Scalar",
      date: "2025",
      description: "React JS for beginners and intermediate developers with concepts of Components, State, Props, API, Routes, Hooks and more.",
      link: "https://www.scaler.com/topics/course/free-react-js-course/",
      linkedin:"https://www.linkedin.com/posts/jiteshadekar_reactjs-scalertopics-certificateofexcellence-activity-7346808838089543680-z_MH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY3-o0BPAux8aX0whViMjLy4F9qI5j_wdk",
      color: "from-blue-300 to-blue-700",
      image: "./src/certImg/ReactJSScolarCert.png"
    },
    {
      title: "Getting Started with NodeJS",
      issuer: "SimpliLearn",
      date: "2025",
      description: "Node.js for beginners and intermediate developers with concepts of Node.js, Express, MongoDB, and more.",
      link: "https://simpli-web.app.link/e/OKb5rWQzOUb",
      linkedin:"https://www.linkedin.com/posts/jiteshadekar_nodejs-professionalgrowth-simplilearn-activity-7341085332924207107-3xGW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY3-o0BPAux8aX0whViMjLy4F9qI5j_wdk",
      color: "from-yellow-300 to-red-700",
      image: "/src/certImg/NodeJSCertSimplilearn.jpg"
    },
    {
      title: "Java Training Certification",
      issuer: "Besant Technologies",
      date: "2025",
      description: "Comprehensive Java programming and development training",
      link: "https://www.linkedin.com/posts/jiteshadekar_java-javatraining-softwaredevelopment-activity-7291795331673903104-7d9Z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY3-o0BPAux8aX0whViMjLy4F9qI5j_wdk",
      linkedin:"https://www.linkedin.com/posts/jiteshadekar_java-javatraining-softwaredevelopment-activity-7291795331673903104-7d9Z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY3-o0BPAux8aX0whViMjLy4F9qI5j_wdk",
      color: "from-orange-500 to-red-500",
      image: "/src/certImg/BesantTechJava.jpg"
    },
    {
      title: "Getting Started with Full Stack Java Development",
      issuer: "SimpliLearn",
      date: "2024",
      description: "A full-stack web development course with Jetkins, API, MogoDB, Git, and more.",
      link: "https://simpli-web.app.link/e/0qGrG5XzOUb",
      linkedin:"https://www.linkedin.com/posts/jiteshadekar_java-fullstackdevelopment-softwareengineering-activity-7304916629593694208-Eegc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY3-o0BPAux8aX0whViMjLy4F9qI5j_wdk",
      color: "from-blue-500 to-indigo-500",
      image: "/src/certImg/JavaFullStackSimpliLearnCertificate.jpg"
    },
    {
      title: "Java Programming for Beginners",
      issuer: "SimpliLearn",
      date: "2024",
      description: "Java programming for beginners and intermediate developers with concepts of classes, objects, methods, and more.",
      link: "https://simpli-web.app.link/e/VJlnS43zOUb",
      linkedin:"https://www.linkedin.com/posts/jiteshadekar_java-softwaredevelopment-programming-activity-7304915608649773057-ez4u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY3-o0BPAux8aX0whViMjLy4F9qI5j_wdk",
      color: "from-red-900 to-pink-400",
      image: "/src/certImg/JavaForBegginersSimplilearn.jpg"
    },
    {
      title: "Advanced SQL",
      issuer: "Great Learning",
      date: "2023",
      description: "Advanced SQL and database design principles",
      link: "https://www.mygreatlearning.com/certificate/RCMKEAET",
      linkedin:"https://www.linkedin.com/posts/jiteshadekar_greatlearningacademy-greatlearning-glacertificate-activity-7219389988566650880-fnLm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY3-o0BPAux8aX0whViMjLy4F9qI5j_wdk",
      color: "from-green-500 to-teal-500",
      image: "/src/certImg/AdvancedSQL.jpg"
    },
    {
      title: "Career Essentials in Cybersecurity by Microsoft and LinkedIn",
      issuer: "LinkedIn Learning",
      date: "2025",
      description: "Introduction to cybersecurity concepts and best practices",
      link: "#",
      linkedin:"https://www.linkedin.com/posts/jiteshadekar_cybersecurity-informationsecurity-threatmanagement-activity-7307431610386108416-dq7V?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY3-o0BPAux8aX0whViMjLy4F9qI5j_wdk",
      color: "from-black to-gray",
      image: "/src/certImg/CyberSecurity.jpg"
    },
    {
      title: "Basic of Python",
      issuer: "Great Learning",
      date: "2023",
      description: "Basic to intermediate Python programming concepts",
      link: "https://www.linkedin.com/posts/jiteshadekar_python-coding-techjourney-activity-7304914107831357440--VaP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY3-o0BPAux8aX0whViMjLy4F9qI5j_wdk",
      linkedin:"https://www.linkedin.com/posts/jiteshadekar_python-coding-techjourney-activity-7304914107831357440--VaP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY3-o0BPAux8aX0whViMjLy4F9qI5j_wdk",
      color: "from-purple-500 to-pink-500",
      image: "/src/certImg/BasicsOfPython.jpg"
    },
    {
      title: "PHP for Beginners",
      issuer: "Great Learning",
      date: "2023",
      description: "Php programming for beginners and intermediate developers with concepts of variables, data types, and more.",
      link: "https://www.mygreatlearning.com/certificate/AZMFQFJG",
      linkedin:"https://www.linkedin.com/posts/jiteshadekar_greatlearningacademy-greatlearning-glacertificate-activity-7219385530575147010-uVRR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY3-o0BPAux8aX0whViMjLy4F9qI5j_wdk",
      color: "from-green-900 to-green-300",
      image: "/src/certImg/PhpGL.jpg"
    },
    {
      title: "HTML and CSS Javascript Certifications",
      issuer: "Great Learning",
      date: "2023",
      description: "Programming fundamentals with HTML, CSS, and JavaScript",
      link: "https://www.mygreatlearning.com/certificate/WVTQAICM",
      linkedin:"https://www.linkedin.com/posts/jiteshadekar_webdevelopment-html-greatlearning-activity-7304720646914088961-ahc-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY3-o0BPAux8aX0whViMjLy4F9qI5j_wdk",
      color: "from-red-500 to-black",
      image: "/src/certImg/HTMLGL.jpg"
    },
    {
      title: "Ethical Hacking and Certificate of Training",
      issuer: "InternShala Technologies",
      date: "2023",
      description: "Diving into the world of cyber security and ethical hacking",
      link: "https://www.linkedin.com/posts/jiteshadekar_cybersecurity-ethicalhacking-owasp-activity-7304919005364920320-ldAD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY3-o0BPAux8aX0whViMjLy4F9qI5j_wdk",
      linkedin:"https://www.linkedin.com/posts/jiteshadekar_cybersecurity-ethicalhacking-owasp-activity-7304919005364920320-ldAD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY3-o0BPAux8aX0whViMjLy4F9qI5j_wdk",
      color: "from-orange-500 to-yellow-500",
      image: "/src/certImg/EthicalHacking.jpg"
    },
  ];

  const handleCertificateClick = (cert: any) => {
    setSelectedCertificate(cert);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
    setSelectedCertificate(null);
  };

  return (
    // <section className="py-20 px-4 bg-background dark:bg-slate-800 transition-colors duration-500 relative overflow-hidden">
    //   {/* Enhanced animated background */}
    //   <div className="absolute inset-0 pointer-events-none">
    //     <div className="absolute top-1/4 left-1/3 w-56 h-56 bg-gradient-to-r from-yellow-400/8 to-orange-400/8 rounded-full blur-3xl animate-float-ultra-smooth delay-smooth-500"></div>
    //     <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-gradient-to-r from-green-400/8 to-blue-400/8 rounded-full blur-2xl animate-float-ultra-smooth delay-smooth-700"></div>
    //     <div className="floating-particle-1 animate-float-ultra-smooth"></div>
    //     <div className="floating-particle-2 animate-float-ultra-smooth delay-smooth-300"></div>
    //   </div>

    //   <div className="max-w-6xl mx-auto relative z-10">
    //     <div className="text-center mb-16 animate-bounce-in-smooth">
    //       <h2 className="font-display text-4xl font-bold mb-4 text-foreground text-shimmer hover:animate-glow transition-all duration-500 cursor-default">
    //         Certifications
    //       </h2>
    //       <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-scale-in hover:w-32 transition-all duration-700 morphing-gradient"></div>
    //       <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-500 animate-fade-in-smooth delay-smooth-400">
    //         Professional certifications and training programs that validate my technical expertise and commitment to continuous learning.
    //       </p>
    //     </div>
        
    //     <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
    //       {certificates.map((cert, index) => (
    //         <Card 
    //           key={index} 
    //           className="card-interactive animate-slide-in-elastic-smooth border-border dark:bg-slate-700 dark:border-slate-600 glass-morphism group hover:border-transparent"
    //           style={{ animationDelay: `${200 + index * 200}ms` }}
    //         >
    //           <CardContent className="p-6 relative overflow-hidden">
    //             <div className="flex items-start justify-between mb-4">
    //               <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${cert.color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-600 animate-magnetic-pull-smooth shadow-lg`}>
    //                 <Award className="h-6 w-6 text-white transition-transform duration-500" />
    //               </div>
    //               <a 
    //                 href={cert.link}
    //                 className="p-2 hover:bg-accent rounded-full transition-all duration-500 hover:scale-125 hover:rotate-12 animate-float-subtle"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors duration-500" />
    //               </a>
    //             </div>
                
    //             <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500">
    //               {cert.title}
    //             </h3>
                
    //             <div className="flex items-center justify-between mb-3">
    //               <span className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform duration-400">
    //                 {cert.issuer}
    //               </span>
    //               <span className="text-sm text-muted-foreground px-2 py-1 bg-gradient-to-r from-blue-100 to-violet-200 dark:from-slate-700 dark:to-slate-600 rounded-full hover:scale-110 transition-transform duration-400">
    //                 {cert.date}
    //               </span>
    //             </div>
                
    //             <p className="font-sans text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-500">
    //               {cert.description}
    //             </p>
                
    //             {/* Enhanced interactive decorative elements */}
    //             <div className="absolute top-4 right-16 w-2 h-2 bg-yellow-400/30 rounded-full animate-bounce-gentle delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    //             <div className="absolute bottom-4 left-4 w-3 h-3 bg-green-400/20 rounded-full animate-wave delay-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    //             <div className="absolute top-1/2 left-2 w-1 h-1 bg-blue-400/40 rounded-full animate-orbit opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    //           </CardContent>
    //         </Card>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <>
      <section className="py-20 px-4 bg-background dark:bg-slate-800 transition-colors duration-500 relative overflow-hidden">
        {/* Enhanced animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-56 h-56 bg-gradient-to-r from-yellow-400/8 to-orange-400/8 rounded-full blur-3xl animate-float-ultra-smooth delay-smooth-500"></div>
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-gradient-to-r from-green-400/8 to-blue-400/8 rounded-full blur-2xl animate-float-ultra-smooth delay-smooth-700"></div>
          <div className="floating-particle-1 animate-float-ultra-smooth"></div>
          <div className="floating-particle-2 animate-float-ultra-smooth delay-smooth-300"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-bounce-in-smooth">
            <h2 className="font-display text-4xl font-bold mb-4 text-foreground text-shimmer hover:animate-glow transition-all duration-500 cursor-default">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-scale-in hover:w-32 transition-all duration-700 morphing-gradient"></div>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-500 animate-fade-in-smooth delay-smooth-400">
              Professional certifications and training programs that validate my technical expertise and commitment to continuous learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card 
                key={index} 
                className="card-interactive animate-slide-in-elastic-smooth border-border dark:bg-slate-700 dark:border-slate-600 glass-morphism group hover:border-transparent cursor-pointer transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${200 + index * 200}ms` }}
                onClick={() => handleCertificateClick(cert)}
              >
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${cert.color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-600 animate-magnetic-pull-smooth shadow-lg`}>
                      <Award className="h-6 w-6 text-white transition-transform duration-500" />
                    </div>
                    <div className="p-2 hover:bg-accent rounded-full transition-all duration-500 hover:scale-125 hover:rotate-12 animate-float-subtle">
                      <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors duration-500" />
                    </div>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform duration-400">
                      {cert.issuer}
                    </span>
                    <span className="text-sm text-muted-foreground px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 rounded-full hover:scale-110 transition-transform duration-400">
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="font-sans text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-500 line-clamp-3">
                    {cert.description}
                  </p>
                  
                  {/* Enhanced interactive decorative elements */}
                  <div className="absolute top-4 right-16 w-2 h-2 bg-yellow-400/30 rounded-full animate-bounce-gentle delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-green-400/20 rounded-full animate-wave delay-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-1/2 left-2 w-1 h-1 bg-blue-400/40 rounded-full animate-orbit opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CertificateViewer 
        isOpen={isViewerOpen}
        onClose={handleCloseViewer}
        certificate={selectedCertificate}
      />
    </>
  );
};

export default Certificates;
