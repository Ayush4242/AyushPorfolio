import React, { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import { Github, Linkedin, Mail, Send, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    
    setIsSubmitting(true);

    // Format the message for WhatsApp
    const text = `*New Contact Request from Portfolio*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email || 'Not provided'}%0A*Subject:* ${formData.subject || 'Not provided'}%0A*Message:* ${formData.message}`;
    
    // WhatsApp API endpoint
    const phone = "918986180841";
    const whatsappUrl = `https://wa.me/${phone}?text=${text}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Simulate sending time to show button state, then clear form
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Let's talk about your next project</h3>
            <p className="text-foreground/70 mb-10 text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-4 rounded-2xl glass border-primary/10">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-lg font-bold">ayushranjan4242@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-4 rounded-2xl glass border-primary/10">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-widest font-bold">Phone</p>
                  <p className="text-lg font-bold">+91-8986180841</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-12">
              <a href="https://github.com/Ayush4242" target="_blank" className="p-4 rounded-full glass hover:bg-white/20 dark:hover:bg-white/10 transition-colors text-primary italic">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ayush-ranjan-09a019277/" target="_blank" className="p-4 rounded-full glass hover:bg-white/20 dark:hover:bg-white/10 transition-colors text-primary">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/70 ml-1">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ayush Ranjan" 
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/70 ml-1">Email Address</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ayush@example.com" 
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/70 ml-1">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry" 
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/70 ml-1">Message *</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..." 
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !formData.name || !formData.message}
                  className="w-full flex items-center justify-center gap-3 py-4 text-lg disabled:opacity-70"
                >
                  {isSubmitting ? "Opening WhatsApp..." : "Send via WhatsApp"} <Send size={20} />
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Contact;
