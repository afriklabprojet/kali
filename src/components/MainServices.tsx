import React from 'react'
import { motion } from 'framer-motion'
import { CreditCard, ArrowRightLeft, Smartphone, Link } from 'lucide-react'

interface ServiceProps {
  icon: React.ReactNode
  title: string
  description: string
}

const Service: React.FC<ServiceProps> = ({ icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg border border-blue-100"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

const MainServices: React.FC = () => {
  const services = [
    {
      icon: <CreditCard size={40} />,
      title: "API de Paiement",
      description: "Intégrez facilement des paiements sécurisés dans vos applications avec notre API robuste et flexible."
    },
    {
      icon: <ArrowRightLeft size={40} />,
      title: "API de Transfert",
      description: "Effectuez des transferts d'argent rapides et sûrs entre comptes ou vers d'autres institutions financières."
    },
    {
      icon: <Smartphone size={40} />,
      title: "API Airtime",
      description: "Offrez des recharges de crédit téléphonique instantanées pour tous les principaux opérateurs."
    },
    {
      icon: <Link size={40} />,
      title: "Lien de Paiement",
      description: "Créez des liens de paiement personnalisés pour faciliter les transactions en ligne sans nécessiter de développement complexe."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services Principaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MainServices