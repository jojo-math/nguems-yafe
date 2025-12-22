import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, Droplet, Sparkles, Wind } from 'lucide-react';
import ProductModal from './ProductModal';

const products = [
  {
    id: 1,
    name: 'Lait Corporel NGUEM\'S',
    category: 'Hydratation',
    price: '8 000 FCFA',
    priceYafe: '7 000 FCFA',
    icon: Droplet,
    benefits: [
      'Hydratation intense 24h',
      'Éclat naturel immédiat',
      'Texture non grasse',
      'Parfum délicat et raffiné'
    ],
    description: 'Notre lait corporel premium nourrit votre peau en profondeur tout en lui apportant un éclat incomparable.',
    image: '/products/lait.webp',
    color: 'from-blue-100 to-blue-50'
  },
  {
    id: 2,
    name: 'Crème Visage NGUEM\'S',
    category: 'Anti-âge',
    price: '12 000 FCFA',
    priceYafe: '10 500 FCFA',
    icon: Sparkles,
    benefits: [
      'Réduction des rides visibles',
      'Teint unifié et lumineux',
      'Protection UV SPF 30',
      'Formule enrichie en vitamines'
    ],
    description: 'Une crème visage luxueuse qui combat les signes de l\'âge tout en protégeant votre peau.',
    image: '/products/creme.webp',
    color: 'from-pink-100 to-pink-50'
  },
  {
    id: 3,
    name: 'Cologne NGUEM\'S',
    category: 'Fraîcheur',
    price: '6 000 FCFA',
    priceYafe: '5 000 FCFA',
    icon: Wind,
    benefits: [
      'Senteur fraîche longue durée',
      'Notes florales et boisées',
      'Sensation de légèreté',
      'Format voyage pratique'
    ],
    description: 'Une cologne élégante qui vous enveloppe d\'une fraîcheur raffinée toute la journée.',
    image: '/products/cologne.webp',
    color: 'from-green-100 to-green-50'
  }
];

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <>
      <section id="catalog" className="py-20 px-4 bg-nguems-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nguems-dark mb-4">
              Notre Collection
            </h2>
            <p className="text-nguems-brown text-lg md:text-xl max-w-2xl mx-auto">
              Des produits d'exception pour sublimer votre beauté naturelle
            </p>
            <div className="mt-6 inline-block bg-nguems-gold/20 px-6 py-3 rounded-full">
              <p className="text-nguems-dark font-semibold">
                🎁 Offres spéciales Yafe - Jusqu'à -15%
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                    {/* Image Placeholder */}
                    <div className={`h-64 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}>
                      <Icon className="w-24 h-24 text-nguems-brown/30 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute top-4 right-4 bg-nguems-gold text-nguems-dark px-3 py-1 rounded-full text-sm font-semibold">
                        Yafe
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <p className="text-nguems-gold text-sm font-semibold mb-2">{product.category}</p>
                        <h3 className="font-playfair text-2xl font-bold text-nguems-dark mb-2">
                          {product.name}
                        </h3>
                      </div>

                      <div className="mb-4 flex-1">
                        <p className="text-nguems-brown line-through text-sm">{product.price}</p>
                        <p className="text-nguems-dark text-2xl font-bold">{product.priceYafe}</p>
                      </div>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full bg-nguems-dark hover:bg-nguems-brown text-nguems-cream py-3 rounded-lg font-semibold transition-colors duration-300"
                      >
                        Découvrir
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-nguems-brown text-lg">
              💝 Échantillons gratuits disponibles au stand
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </>
  );
};

export default Catalog;
