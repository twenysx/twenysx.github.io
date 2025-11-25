import { motion } from 'framer-motion';
import vegetaGif from '../assets/vegeta.gif';

const VegetaMascot = () => {
  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Background Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-midnight-900/70 z-10" />
      
      {/* Centered Background Image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-60">
        <img 
          src={vegetaGif} 
          alt="Vegeta Background" 
          className="w-full h-full object-cover animate-color-shift"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(14, 165, 233, 0.3))'
          }}
        />
      </div>
    </motion.div>
  );
};

export default VegetaMascot;
