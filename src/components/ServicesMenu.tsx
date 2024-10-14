import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, CreditCard, ArrowRightLeft, Smartphone, Link } from 'lucide-react'

const ServicesMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    { icon: <CreditCard size={24} />, name: 'API de Paiement', description: 'Intégrez des paiements sécurisés' },
    { icon: <ArrowRightLeft size={24} />, name: 'API de Transfert', description: 'Effectuez des transferts rapides' },
    { icon: <Smartphone size={24} />, name: 'API Airtime', description: 'Recharges de crédit téléphonique' },
    { icon: <Link size={24} />, name: 'Lien de Paiement', description: 'Créez des liens de paiement personnalisés' },
  ]

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">Services</span>
        <ChevronDown
          size={20}
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-10 mt-4 w-80 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            {services.map((service, index) => (
              <motion.a
                key={index}
                href="#"
                className="flex items-start space-x-4 p-4 hover:bg-blue-50 transition-colors duration-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full text-blue-600">
                  {service.icon}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{service.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{service.description}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ServicesMenu