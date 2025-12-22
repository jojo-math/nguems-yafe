import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Navigation } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Aminata D.',
    location: 'Yaoundé',
    rating: 5,
    text: 'Ma peau n\'a jamais été aussi éclatante ! Les produits NGUEM\'S ont transformé ma routine beauté.',
    image: '👩🏾'
  },
  {
    id: 2,
    name: 'Marie-Claire K.',
    location: 'Douala',
    rating: 5,
    text: 'Enfin des produits adaptés à notre peau africaine. La texture est divine et le parfum subtil.',
    image: '👩🏿'
  },
  {
    id: 3,
    name: 'Sandrine M.',
    location: 'Bafoussam',
    rating: 5,
    text: 'J\'ai découvert NGUEM\'S au salon Yafe l\'an dernier. Depuis, je ne peux plus m\'en passer !',
    image: '👩🏾‍🦱'
  }
];

const ProofAndLocation = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="location" className="py-20 px-4 bg-nguems-cream">
      <div className="max-w-6xl mx-auto">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nguems-dark text-center mb-12">
            Elles nous font confiance
          </h2>

          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Avatar */}
              <div className="text-7xl mb-4">{testimonials[currentTestimonial].image}</div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-nguems-gold text-nguems-gold" />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-nguems-dark text-xl md:text-2xl font-light italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>

              {/* Author */}
              <p className="font-semibold text-nguems-dark text-lg">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="text-nguems-brown">{testimonials[currentTestimonial].location}</p>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-nguems-cream hover:bg-nguems-gold/20 p-3 rounded-full transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-6 h-6 text-nguems-dark" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? 'bg-nguems-gold w-8'
                        : 'bg-nguems-brown/30'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="bg-nguems-cream hover:bg-nguems-gold/20 p-3 rounded-full transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-6 h-6 text-nguems-dark" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nguems-dark text-center mb-4">
            Trouvez-nous au Salon Yafe
          </h2>
          <p className="text-nguems-brown text-lg text-center mb-12">
            Palais des Congrès de Yaoundé
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Map Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-nguems-dark to-nguems-brown rounded-3xl p-8 text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <Navigation className="w-16 h-16 text-nguems-gold mx-auto mb-4" />
                <p className="text-nguems-cream text-2xl font-bold mb-2">VOUS ÊTES ICI</p>
                <div className="my-8">
                  <div className="h-1 bg-nguems-gold/30 w-full mb-4 relative">
                    <motion.div
                      className="absolute h-3 w-3 bg-nguems-gold rounded-full top-1/2 -translate-y-1/2"
                      animate={{ x: [0, 200, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
                <MapPin className="w-16 h-16 text-nguems-gold mx-auto mb-4 animate-pulse-slow" />
                <p className="text-nguems-gold text-2xl font-bold">STAND NGUEM'S</p>
                <p className="text-nguems-cream/80 mt-2">Allée B - Stand 23</p>
              </div>
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, #D4AF37 2px, transparent 2px)',
                  backgroundSize: '30px 30px'
                }}></div>
              </div>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-nguems-dark mb-4">
                  Informations Pratiques
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-nguems-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-nguems-dark">Emplacement</p>
                      <p className="text-nguems-brown">Allée B - Stand 23</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Navigation className="w-5 h-5 text-nguems-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-nguems-dark">Accès</p>
                      <p className="text-nguems-brown">Entrée principale, suivez les panneaux dorés</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-nguems-gold/20 rounded-2xl p-6 border-2 border-nguems-gold">
                <p className="text-nguems-dark font-semibold text-lg mb-2">
                  🎁 Offres Exclusives Salon Yafe
                </p>
                <ul className="space-y-2 text-nguems-dark">
                  <li>✓ Réductions jusqu'à -15%</li>
                  <li>✓ Échantillons gratuits</li>
                  <li>✓ Diagnostic peau personnalisé</li>
                  <li>✓ Conseils d'experts</li>
                </ul>
              </div>

              <button className="w-full bg-nguems-dark hover:bg-nguems-brown text-nguems-cream py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                Je viens vous voir !
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofAndLocation;
