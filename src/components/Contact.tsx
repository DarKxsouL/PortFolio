import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        toast({
          title: "✅ Message Sent!",
          description: "Your message has been delivered to my Telegram channel.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "❌ Failed to send",
          description: result.error || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "⚠️ Error",
        description: "Could not send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 dark:from-slate-900 dark:via-purple-900 dark:to-slate-800 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-levitate"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300/5 rounded-full blur-3xl animate-pulse-interactive"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-particle-float"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-300/30 rounded-full animate-float-gentle delay-1000"></div>
        <div className="absolute top-1/3 left-3/4 w-5 h-5 bg-purple-300/20 rounded-full animate-wave delay-500"></div>

        {/* Interactive orbital elements */}
        <div className="absolute top-20 right-1/3 w-16 h-16 border border-white/10 rounded-full animate-orbit"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-blue-300/20 rounded-lg animate-rotate-scale"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-bounce-in">
          <h2 className="font-display text-4xl font-bold mb-4 text-white text-shimmer animate-glow">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8 animate-scale-in hover:w-32 transition-all duration-500"></div>
          <p className="font-sans text-lg text-blue-100 max-w-2xl mx-auto hover:text-white transition-colors duration-300 animate-fade-in delay-400">
            I'm always excited to discuss new opportunities and collaborate on interesting projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side: Contact info cards */}
          <div className="space-y-8 animate-slide-in-elastic delay-200">
            <Card className="glass-morphism border-white/20 hover:bg-white/20 card-interactive group">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-magnetic-pull">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">Email</h3>
                  <p className="font-sans text-blue-100 group-hover:text-white transition-colors duration-300">adekarjayesh27@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-morphism border-white/20 hover:bg-white/20 card-interactive group">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-magnetic-pull">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">Location</h3>
                  <p className="font-sans text-blue-100 group-hover:text-white transition-colors duration-300">Pune, India</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4 animate-fade-in delay-600">
              <a
                href="https://github.com/DarKxsouL?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-morphism rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 animate-float-subtle group"
              >
                <Github className="h-6 w-6 text-white group-hover:animate-bounce-gentle" />
              </a>
              <a
                href="https://www.linkedin.com/in/jiteshadekar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-morphism rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 animate-float-gentle delay-300 group"
              >
                <Linkedin className="h-6 w-6 text-white group-hover:animate-bounce-gentle" />
              </a>
            </div>
          </div>

          {/* Right side: Contact form */}
          <Card className="glass-morphism border-white/20 animate-slide-in-elastic delay-400 hover:bg-white/5 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white text-xl font-display animate-glow">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 hover:bg-white/15 focus:bg-white/15 transition-all duration-300 hover:scale-102"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 hover:bg-white/15 focus:bg-white/15 transition-all duration-300 hover:scale-102"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 hover:bg-white/15 focus:bg-white/15 transition-all duration-300 hover:scale-102"
                />
                <Button
                  type="submit"
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 btn-interactive animate-pulse-interactive font-sans font-medium"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20 animate-fade-in delay-800">
          <p className="font-sans text-blue-100 hover:text-white transition-colors duration-300">
            © 2025 Jitesh Adekar. Let's Build a society in Virtual.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
