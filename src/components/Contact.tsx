import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { supabase } from '../../supabaseClient'; // Make sure you created this file

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'hello@company.com',
    description: 'Drop us a line anytime',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: '123 Innovation Street, Tech City, TC 12345',
    description: 'Come say hello at our office',
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    const { error } = await supabase
      .from('contact_info')
      .insert([formData]);

    if (error) {
      toast.error("❌ Failed to send message. Try again!");
      console.error(error);
    } else {
      toast.success("✅ Message sent successfully! We'll get back to you soon.");
      form.reset();
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="glass-card border-card-border hover:shadow-glow transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <info.icon className="w-8 h-8 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-primary font-medium mb-1">
                            {info.details}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="glass-card border-card-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-background-secondary border-card-border focus:border-primary transition-colors duration-300"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-background-secondary border-card-border focus:border-primary transition-colors duration-300"
                    />
                  </div>

                  <Input
                    name="subject"
                    placeholder="Subject"
                    required
                    className="bg-background-secondary border-card-border focus:border-primary transition-colors duration-300"
                  />

                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                    className="bg-background-secondary border-card-border focus:border-primary transition-colors duration-300"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-6 rounded-xl"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
