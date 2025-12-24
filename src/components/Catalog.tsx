import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, Droplet, Sparkles, Wind } from 'lucide-react';
import ProductModal from './ProductModal';

const products = [
  {
    id: 1,
    name: 'Crème Visage Clarifiante NGUEM\'S',
    category: 'Éclat',
    price: '4 000 FCFA',
    priceYafe: '4000 FCFA + lait de poche offert',
    promo: 'Réduction sur le body painting',
    icon: Sparkles,
    benefits: [
      'Éclaircissement naturel',
      'Teint unifié et lumineux',
      'Formule douce et efficace',
      'Résultats visibles rapidement'
    ],
    description: 'Notre crème clarifiante révèle l\'éclat naturel de votre peau tout en l\'unifiant.',
    image: '/Creme-clarifiante.jpeg',
    color: 'from-yellow-100 to-yellow-50'
  },
  {
    id: 2,
    name: 'Lait Corporel Hydratant et Nourrissant NGUEM\'S',
    category: 'Hydratation à l\'huile de coco et extrait de persil',
    price: '7500 FCFA',
    priceYafe: '7500 FCFA + lait de poche offert',
    promo: 'Réduction sur le body painting',
    icon: Droplet,
    benefits: [
      'Hydratation intense 24h',
      'Éclat naturel immédiat',
      'Texture non grasse',
      'Parfum délicat et raffiné'
    ],
    description: 'Notre lait corporel hydratant nourrit votre peau en profondeur tout en lui apportant un éclat incomparable.',
    image: '/lait-corporel-hydratant.png',
    color: 'from-green-100 to-green-50'
  },
  {
    id: 3,
    name: 'Pack NGUEM\'S 500ml lait hydratant au sésame',
    category: 'Offre Spéciale',
    price: '25 000 FCFA',
    priceYafe: '15500 FCFA',
    promo: '1 Pack acheté = 1 Savon OFFERT',
    icon: Wind,
    benefits: [
      'Gamme complète NGUEM\'S',
      'Routine beauté intégrale',
      'Économie garantie',
      'Cadeau offert'
    ],
    description: 'Le pack complet NGUEM\'S pour une routine beauté complète et efficace. Un savon offert pour tout achat !',
    image: '/pack-nguems.jpeg',
    color: 'from-amber-100 to-amber-50'
  }
];

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <>
      <section id="catalog" className="py-20 px-4 bg-nguems-tertiary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nguems-primary mb-4">
              Nos Produits en Promotion
            </h2>
            <p className="text-nguems-primary/80 text-lg md:text-xl max-w-2xl mx-auto">
              Des produits d'exception pour sublimer votre beauté naturelle
            </p>
            <div className="mt-6 inline-block bg-nguems-secondary/20 px-6 py-3 rounded-full">
              <p className="text-nguems-primary font-semibold">
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
                    {/* Product Image */}
                    <div className={`h-64 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-yellow-400 text-nguems-primary px-3 py-1 rounded-full text-sm font-bold">
                        Yafe
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <p className="text-nguems-primary text-sm font-semibold mb-2">{product.category}</p>
                        <h3 className="font-playfair text-2xl font-bold text-nguems-primary mb-2">
                          {product.name}
                        </h3>
                      </div>

                      {/* Promotion Badge */}
                      <div className="mb-4 bg-nguems-secondary/20 px-3 py-2 rounded-lg">
                        <p className="text-nguems-primary text-sm font-bold">🎁 {product.promo}</p>
                      </div>

                      <div className="mb-4 flex-1">
                        <p className="text-gray-500 line-through text-sm">{product.price}</p>
                        <p className="text-nguems-primary text-2xl font-bold">{product.priceYafe}</p>
                      </div>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full bg-black text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                      >
                        Découvrir
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

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
