import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-midnight-900 border-t border-midnight-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              ٢٦
            </h3>
            <p className="text-slate-300 leading-relaxed max-w-xs">
              Crafting digital experiences with code and creativity. Let's build something amazing together.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-2">
              {['Home', 'About Me', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(' ', '') === 'home' ? '' : item.toLowerCase().replace(' ', '')}`} className="text-slate-300 hover:text-electric-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white tracking-wide">CONNECT</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Mail, href: 'mailto:hello@example.com' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-midnight-800 flex items-center justify-center text-slate-300 hover:bg-electric-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-midnight-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
