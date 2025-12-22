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
    icon: any;
    benefits: string[];
    description: string;
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
              <X className="w-6 h-6 text-nguems-dark" />
            </button>
            <div className="flex items-center justify-center mb-4">
              <Icon className="w-20 h-20 text-nguems-brown/40" />
            </div>
            <h2 className="font-playfair text-3xl font-bold text-nguems-dark text-center">
              {product.name}
            </h2>
            <p className="text-nguems-brown text-center mt-2">{product.category}</p>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-nguems-brown mb-6 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="font-playfair text-xl font-bold text-nguems-dark mb-4">
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
                    <CheckCircle className="w-5 h-5 text-nguems-gold flex-shrink-0 mt-0.5" />
                    <span className="text-nguems-dark">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="bg-nguems-cream rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-nguems-brown line-through text-sm mb-1">
                    Prix normal : {product.price}
                  </p>
                  <p className="text-nguems-dark text-3xl font-bold">
                    {product.priceYafe}
                  </p>
                  <p className="text-nguems-gold font-semibold text-sm mt-1">
                    Offre spéciale Yafe 🎁
                  </p>
                </div>
                <div className="bg-nguems-gold text-nguems-dark px-4 py-2 rounded-full font-bold text-xl">
                  -15%
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              className="w-full bg-nguems-dark hover:bg-nguems-brown text-nguems-cream py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2"
              onClick={() => {
                onClose();
                document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <MapPin className="w-5 h-5" />
              Je veux tester au stand
            </button>

            <p className="text-center text-nguems-brown text-sm mt-4">
              Échantillon gratuit à votre disposition 💝
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
