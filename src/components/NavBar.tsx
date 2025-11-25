import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT ME', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-midnight-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-electric-500 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Code2 className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-wider text-white group-hover:text-electric-400 transition-colors">
            
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="relative text-sm font-medium tracking-widest text-slate-300 hover:text-white transition-colors py-2 group"
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-electric-500 transform origin-left transition-transform duration-300 ${
                location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
          ))}
          <Link 
            to="/contact"
            className="px-6 py-2 bg-electric-500 hover:bg-electric-400 text-white text-sm font-bold tracking-wide rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]"
          >
            HIRE ME
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-midnight-800 border-t border-midnight-700 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-lg font-medium tracking-wide ${
                    location.pathname === link.path ? 'text-electric-400' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
