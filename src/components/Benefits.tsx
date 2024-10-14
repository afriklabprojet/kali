import React from 'react'

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Avantages de CICO-CASH</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Pour les Entreprises</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Réduction des coûts opérationnels</li>
              <li>Simplification des processus financiers</li>
              <li>Amélioration de la sécurité des transactions</li>
              <li>Accès à une plateforme unifiée de paiement</li>
            </ul>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Pour les Clients</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Expérience utilisateur fluide et personnalisée</li>
              <li>Multiples options de paiement</li>
              <li>Transactions sécurisées</li>
              <li>Support client réactif</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits