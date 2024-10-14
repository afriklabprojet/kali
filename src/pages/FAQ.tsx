import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Qu'est-ce que CICO-CASH ?",
    answer: "CICO-CASH est une plateforme de paiement innovante qui offre des solutions de paiement en ligne sécurisées et faciles à intégrer pour les entreprises de toutes tailles."
  },
  {
    question: "Comment puis-je intégrer CICO-CASH à mon site web ?",
    answer: "L'intégration de CICO-CASH est simple. Nous fournissons des API et des SDK pour différents langages de programmation. Consultez notre documentation technique pour des instructions détaillées."
  },
  {
    question: "Quels types de paiements CICO-CASH prend-il en charge ?",
    answer: "CICO-CASH prend en charge une large gamme de méthodes de paiement, y compris les cartes de crédit/débit, les virements bancaires, les portefeuilles électroniques et les paiements mobiles."
  },
  {
    question: "CICO-CASH est-il sécurisé ?",
    answer: "Absolument. La sécurité est notre priorité. Nous utilisons un cryptage de pointe et sommes conformes aux normes PCI DSS pour garantir la sécurité de toutes les transactions."
  },
  {
    question: "Quels sont les frais associés à l'utilisation de CICO-CASH ?",
    answer: "Nos frais varient en fonction du volume de transactions et des services utilisés. Contactez notre équipe commerciale pour obtenir un devis personnalisé adapté à vos besoins."
  },
  {
    question: "CICO-CASH offre-t-il une solution pour les paiements récurrents ?",
    answer: "Oui, CICO-CASH propose une fonctionnalité de paiements récurrents. Vous pouvez facilement configurer des abonnements ou des paiements automatiques pour vos clients."
  },
  {
    question: "Puis-je personnaliser l'interface de paiement CICO-CASH ?",
    answer: "Absolument. Nous offrons des options de personnalisation étendues pour que l'interface de paiement corresponde à l'identité visuelle de votre marque."
  },
  {
    question: "CICO-CASH fonctionne-t-il avec les applications mobiles ?",
    answer: "Oui, CICO-CASH est entièrement compatible avec les applications mobiles. Nous proposons des SDK pour iOS et Android pour une intégration facile dans vos applications."
  },
  {
    question: "Quel support CICO-CASH offre-t-il aux développeurs ?",
    answer: "Nous offrons une documentation complète, des exemples de code, un environnement de test (sandbox), et un support technique dédié pour aider les développeurs à intégrer notre solution rapidement et efficacement."
  },
  {
    question: "CICO-CASH peut-il gérer des transactions internationales ?",
    answer: "Oui, CICO-CASH prend en charge les transactions internationales et offre des options de conversion de devises pour faciliter les paiements transfrontaliers."
  },
  {
    question: "Quelles mesures anti-fraude CICO-CASH met-il en place ?",
    answer: "CICO-CASH utilise des algorithmes avancés de détection de fraude, une authentification 3D Secure, et des analyses en temps réel pour protéger contre les activités frauduleuses."
  },
  {
    question: "Comment CICO-CASH gère-t-il les remboursements ?",
    answer: "CICO-CASH offre un processus de remboursement simple et automatisé. Vous pouvez effectuer des remboursements partiels ou complets directement depuis votre tableau de bord ou via notre API."
  }
]

const FAQItem: React.FC<{ item: FAQItem, isOpen: boolean, toggleOpen: () => void }> = ({ item, isOpen, toggleOpen }) => {
  return (
    <motion.div 
      className="border-b border-gray-200 last:border-b-0 overflow-hidden"
      initial={false}
      animate={{ backgroundColor: isOpen ? "rgba(59, 130, 246, 0.1)" : "rgba(255, 255, 255, 0)" }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="flex justify-between items-center w-full py-6 px-6 text-left focus:outline-none transition-all duration-300 ease-in-out hover:bg-blue-50"
        onClick={toggleOpen}
      >
        <span className="font-semibold text-lg text-gray-900 pr-8">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          {isOpen ? <ChevronUp className="text-blue-500 w-6 h-6" /> : <ChevronDown className="text-gray-400 w-6 h-6" />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-6 text-gray-600 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Foire Aux Questions
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Trouvez rapidement des réponses à vos questions sur CICO-CASH
        </p>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ