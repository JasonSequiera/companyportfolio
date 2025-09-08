import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern, scalable e-commerce solution with advanced analytics and AI-powered recommendations.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'Web Development',
    gradient: 'from-primary to-secondary',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure, user-friendly mobile banking application with biometric authentication and real-time transactions.',
    tech: ['React Native', 'TypeScript', 'Firebase', 'Plaid'],
    category: 'Mobile Development',
    gradient: 'from-secondary to-accent',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Comprehensive analytics dashboard for SaaS businesses with real-time data visualization.',
    tech: ['Vue.js', 'D3.js', 'Python', 'AWS'],
    category: 'Data Analytics',
    gradient: 'from-accent to-primary',
  },
  {
    title: 'AI Content Platform',
    description: 'Revolutionary AI-powered content creation platform with natural language processing capabilities.',
    tech: ['Next.js', 'OpenAI', 'Prisma', 'Vercel'],
    category: 'AI/Machine Learning',
    gradient: 'from-primary/80 to-secondary/80',
  },
  {
    title: 'Healthcare Portal',
    description: 'HIPAA-compliant patient management system with telemedicine capabilities and appointment scheduling.',
    tech: ['Angular', 'Spring Boot', 'MySQL', 'WebRTC'],
    category: 'Healthcare',
    gradient: 'from-secondary/80 to-accent/80',
  },
  {
    title: 'Blockchain Wallet',
    description: 'Secure cryptocurrency wallet with multi-chain support and DeFi integration capabilities.',
    tech: ['React', 'Web3.js', 'Solidity', 'Metamask'],
    category: 'Blockchain',
    gradient: 'from-accent/80 to-primary/80',
  },
];

export const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-32 px-6 bg-background-tertiary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-bl from-primary/5 to-transparent rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15,
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
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover some of our most innovative projects that showcase our expertise 
            in creating cutting-edge digital solutions across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full glass-card border-card-border hover:shadow-elevated transition-all duration-500 hover:scale-105 overflow-hidden">
                {/* Project Header with Gradient */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-black/20"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground border border-card-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-xl"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};