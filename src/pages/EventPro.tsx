import React from 'react'
import { Ticket, QrCode, CreditCard, ShieldCheck } from 'lucide-react'

const EventPro: React.FC = () => {
  return (
    <section id="event-pro" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Event Pro</h2>
        <p className="text-center mb-8 text-lg text-gray-600">
          Vous souhaitez organiser un spectacle ? Profitez de notre module de gestion des tickets en ligne pour organiser votre événement en ligne.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Ticket className="h-12 w-12 text-primary-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Édition de tickets</h3>
            <p className="text-gray-600 text-center">Éditez vos tickets électroniques avec un QR code de sécurité.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CreditCard className="h-12 w-12 text-primary-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Vente en ligne</h3>
            <p className="text-gray-600 text-center">Vendez vos tickets directement à partir de notre plateforme et encaissez en ligne en temps réel.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ShieldCheck className="h-12 w-12 text-primary-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Sécurité des entrées</h3>
            <p className="text-gray-600 text-center">Sécurisez l'entrée de vos spectacles en téléchargeant l'application de vérification des tickets.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <QrCode className="h-12 w-12 text-primary-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Vérification mobile</h3>
            <p className="text-gray-600 text-center">Scannez les tickets imprimés à partir de votre téléphone pour vérifier l'authenticité du ticket.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold mb-4">Avec EventPro, organisez vos événements avec efficacité</p>
          <a href="#" className="btn">Commencer maintenant</a>
        </div>
      </div>
    </section>
  )
}

export default EventPro