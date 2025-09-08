import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Award, Coffee, Calendar } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Happy Clients', value: 150, suffix: '+' },
  { icon: Award, label: 'Awards Won', value: 25, suffix: '+' },
  { icon: Coffee, label: 'Projects Completed', value: 300, suffix: '+' },
  { icon: Calendar, label: 'Years Experience', value: 8, suffix: '' },
];

const Counter = ({ end, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      let startTime: number;
      const animateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        
        if (progress < 1) {
          requestAnimationFrame(animateCounter);
        }
      };
      requestAnimationFrame(animateCounter);
    }
  }, [isInView, end, duration, isVisible]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 8,
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
            About <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're a passionate team of designers, developers, and digital strategists 
            committed to pushing the boundaries of what's possible in the digital realm.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="mb-4 flex justify-center"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-12 h-12 text-primary group-hover:text-primary-glow transition-colors duration-300" />
              </motion.div>
              
              <Counter end={stat.value} suffix={stat.suffix} />
              
              <p className="text-muted-foreground mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Our <span className="gradient-text">Journey</span>
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2016, we started as a small team with a big vision: 
                to create digital experiences that truly matter. What began as a 
                passion project has grown into a full-service digital agency.
              </p>
              <p>
                Today, we work with startups and Fortune 500 companies alike, 
                helping them navigate the digital landscape and achieve their goals 
                through innovative technology and creative solutions.
              </p>
              <p>
                Our mission remains unchanged: to build beautiful, functional, 
                and impactful digital products that make a difference in people's lives.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gradient-primary rounded-full animate-glow"></div>
                  <span className="text-foreground font-semibold">Innovation First</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gradient-primary rounded-full animate-glow" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-foreground font-semibold">Client-Centered Approach</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gradient-primary rounded-full animate-glow" style={{animationDelay: '1s'}}></div>
                  <span className="text-foreground font-semibold">Quality & Excellence</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gradient-primary rounded-full animate-glow" style={{animationDelay: '1.5s'}}></div>
                  <span className="text-foreground font-semibold">Future-Ready Solutions</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};