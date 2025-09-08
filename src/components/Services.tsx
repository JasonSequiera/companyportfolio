import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Smartphone, Zap, Globe, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Bespoke software solutions tailored to your unique business needs and requirements.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that enhance user experience and drive engagement.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications optimized for speed, efficiency, and scalability.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies and frameworks.',
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    description: 'Comprehensive security audits and ongoing maintenance for peace of mind.',
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 px-6 bg-background-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive solutions to bring your digital vision to life with 
            cutting-edge technology and innovative design approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full glass-card border-card-border hover:shadow-glow transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-12 h-12 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};