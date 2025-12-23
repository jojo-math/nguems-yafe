import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #01A101, #01A101, rgba(1, 161, 1, 0.7))' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #FBCE4D 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Gradient overlay for text visibility */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))' }}></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-nguems-cream mb-6 leading-tight">
              NGUEM'S COSMETICS
            </h1>
            <p className="text-3xl md:text-4xl text-nguems-gold font-semibold mb-4">
              Le secret de la beauté
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-nguems-cream/90 text-lg md:text-xl max-w-3xl mx-auto">
              Découvrez une gamme de produits de beauté 100% made in Cameroon, 
              conçue pour révéler l'éclat naturel de votre peau.
            </p>
            
            <button 
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
              style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
            >
              Découvrir nos produits
              <ChevronDown className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-nguems-gold" />
      </motion.div>
    </section>
  );
};

export default Hero;
