import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/mockData';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-midnight-800 rounded-2xl overflow-hidden border border-midnight-700 hover:border-electric-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-midnight-900/20 group-hover:bg-midnight-900/0 transition-colors z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-medium px-3 py-1 rounded-full bg-electric-500/10 text-electric-400 border border-electric-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-electric-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 mb-6 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex items-center gap-4">
          <a 
            href={project.link}
            className="flex items-center gap-2 text-white font-medium hover:text-electric-400 transition-colors"
          >
            Live Demo <ExternalLink className="w-4 h-4" />
          </a>
          <a 
            href="#"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            Code <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
