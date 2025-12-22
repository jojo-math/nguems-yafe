import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-nguems-dark via-nguems-brown to-nguems-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-nguems-cream mb-6 leading-tight">
              NGUEM'S
            </h1>
            <p className="text-2xl md:text-4xl text-nguems-gold font-light mb-4">
              L'Éclat du Cameroun
            </p>
            <p className="text-xl md:text-2xl text-nguems-cream/80 mb-12">
              à votre portée
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-nguems-cream/90 text-lg md:text-xl max-w-2xl mx-auto">
              Découvrez une gamme de produits de beauté premium, 
              conçue pour révéler l'éclat naturel de votre peau.
            </p>
            
            <button 
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-nguems-gold hover:bg-nguems-gold/90 text-nguems-dark px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
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
