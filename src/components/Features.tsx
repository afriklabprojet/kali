import React from 'react'
import { CreditCard, Lock, Clock, Headphones } from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    { icon: <CreditCard className="h-12 w-12 text-blue-500" />, title: 'Simplicité', description: 'Une interface unique pour centraliser les transactions financières.' },
    { icon: <Lock className="h-12 w-12 text-blue-500" />, title: 'Sécurité', description: 'Conformité avec les normes internationales et technologies anti-fraude avancées.' },
    { icon: <Clock className="h-12 w-12 text-blue-500" />, title: 'Économie', description: "Réduction des coûts opérationnels grâce à l'unification des services de paiement." },
    { icon: <Headphones className="h-12 w-12 text-blue-500" />, title: 'Support', description: 'Assistance technique dédiée 24/7 pour une résolution rapide des problèmes.' },
  ]

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Fonctionnalités</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features