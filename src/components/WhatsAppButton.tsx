import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { track } from '@vercel/analytics';

const WhatsAppButton = () => {
  const phoneNumber = '237659980315'; // Remplacer par le vrai numéro
  const message = encodeURIComponent('Bonjour NGUEM\'S COSMETICS ! J\'ai une question concernant vos produits.');

  const handleWhatsAppClick = () => {
    track('whatsapp_click', {
      phone: phoneNumber,
      source: 'floating_button'
    });
  };

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl z-50 flex items-center gap-2 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-semibold">
        Une question ?
      </span>
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;
