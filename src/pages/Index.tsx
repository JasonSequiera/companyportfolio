import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-6 bg-background-secondary border-t border-card-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="gradient-text text-2xl font-bold mb-4">
            NexaWeb Solutions
          </div>
          <p className="text-muted-foreground mb-6">
            Transforming ideas into extraordinary digital experiences.
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 NexaWeb Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
