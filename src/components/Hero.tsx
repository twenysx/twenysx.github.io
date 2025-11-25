import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-electric-500/20 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block px-4 py-1.5 rounded-full border border-electric-500/30 bg-electric-500/10 backdrop-blur-sm"
          >
            <span className="text-electric-400 text-sm font-medium tracking-wider">٢٦'s Hub</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 flex justify-center w-full"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight font-code typing-effect inline-block">
              Hello World 👋
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gradient">Developer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-light tracking-wide"
          >
            I am a 18years old, mostly self taught, developer , designer & freelancer from morocco, I'm passionate about commerce marketing , web development and everything in-between. I love to learn and contribute in any and every possible way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link 
              to="/projects"
              className="btn-primary"
            >
              View Projects <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="btn-secondary"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex gap-6"
          >
            {[Github, Linkedin].map((Icon, index) => (
              <a 
                key={index}
                href="#"
                className="text-slate-400 hover:text-electric-400 transition-colors transform hover:scale-110"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
