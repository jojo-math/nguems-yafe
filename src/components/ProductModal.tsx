import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, MapPin } from 'lucide-react';
import React from 'react';

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: string;
    priceYafe: string;
    promo?: string;
    icon: any;
    benefits: string[];
    description: string;
    image: string;
    color: string;
  };
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const Icon = product.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`bg-gradient-to-br ${product.color} p-8 relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-nguems-primary" />
            </button>
            <div className="flex items-center justify-center mb-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-32 h-32 object-contain"
              />
            </div>
            <h2 className="font-playfair text-3xl font-bold text-nguems-primary text-center">
              {product.name}
            </h2>
            <p className="text-nguems-primary/70 text-center mt-2">{product.category}</p>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Promotion Badge */}
            {product.promo && (
              <div className="mb-6 bg-nguems-secondary/20 px-4 py-3 rounded-xl">
                <p className="text-nguems-primary font-bold text-lg">🎁 {product.promo}</p>
              </div>
            )}

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="font-playfair text-xl font-bold text-nguems-primary mb-4">
                Bienfaits
              </h3>
              <div className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-nguems-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-nguems-primary">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="bg-nguems-secondary/10 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 line-through text-sm mb-1">
                    Prix normal : {product.price}
                  </p>
                  <p className="text-nguems-primary text-3xl font-bold">
                    {product.priceYafe}
                  </p>
                  <p className="text-nguems-secondary font-semibold text-sm mt-1">
                    Offre spéciale Yafe 🎁
                  </p>
                </div>
                <div className="bg-nguems-secondary text-nguems-primary px-4 py-2 rounded-full font-bold text-xl">
                  -15%
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              className="w-full bg-yellow-500 hover:bg-black hover:text-white text-nguems-tertiary py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2"
              onClick={() => {
                onClose();
                document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <MapPin className="w-5 h-5" />
              Je veux tester au stand
            </button>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
