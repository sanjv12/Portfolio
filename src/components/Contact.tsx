import { useState } from "react";
import { Mail, Linkedin, Github, Send, PhoneCall, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      // value: "Sanjeevkanthsk12@gmail.com",
      href: "mailto:Sanjeevkanthsk12@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      // value: "linkedin.com/in/sanjv12",
      href: "https://linkedin.com/in/sanjeevs",
    },
    {
      icon: Github,
      label: "GitHub",
      // value: "github.com/sanjeevs",
      href: "https://github.com/sanjv12",
    },
    {
      icon: Code,
      label: "Leetcode",
      // value: "github.com/sanjeevs",
      href: "https://leetcode.com/sanjv12",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-in-right">
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:scale-105 group"
                      >
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {link.label}
                          </p>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {/* {link.value} */}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <form
              onSubmit={handleSubmit}
              className="space-y-6 animate-fade-in-up"
            >
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-card border-border focus:border-primary transition-colors min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 rounded-lg transition-all hover:scale-105 hover:box-glow"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </Button>
            </form> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-20">
        <div className="text-center text-muted-foreground text-sm border-t border-border pt-8">
          <p>© 2025 Sanjeevkanth S. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};
