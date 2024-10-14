import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Presentation from '../components/Presentation'
import { CreditCard, Zap, PhoneCall, Mic, Gift, Lock, Globe, Shield, ChartBar } from 'lucide-react'
import { Button } from '../components/ui/Button'

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <div className="text-blue-600 mb-4">{icon}</div>
    <h2 className="text-xl font-semibold text-blue-800 mb-3">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

const Home: React.FC = () => {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Paiements sécurisés",
      description: "Protégez vos transactions avec notre technologie de pointe en matière de sécurité des paiements."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Intégration facile",
      description: "Intégrez CICO-CASH à votre plateforme en quelques minutes grâce à notre API simple et bien documentée."
    },
    {
      icon: <PhoneCall className="h-8 w-8" />,
      title: "Support 24/7",
      description: "Notre équipe d'experts est disponible à tout moment pour vous aider et répondre à vos questions."
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Paiements vocaux",
      description: "Effectuez des paiements sécurisés en utilisant uniquement votre voix, idéal pour l'accessibilité."
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Programme de fidélité blockchain",
      description: "Gagnez des jetons CICO pour chaque transaction et échangez-les contre des récompenses exclusives."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Identité numérique décentralisée",
      description: "Profitez d'une authentification sécurisée et privée grâce à notre système d'identité décentralisée."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Couverture panafricaine",
      description: "Opérez dans plusieurs pays africains avec une seule intégration."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Protection contre la fraude IA",
      description: "Bénéficiez de notre système avancé de détection et de prévention de la fraude basé sur l'IA."
    },
    {
      icon: <ChartBar className="h-8 w-8" />,
      title: "Analyses en temps réel",
      description: "Accédez à des analyses détaillées et des rapports en temps réel sur vos transactions."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <Presentation />
      <main className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Nos Services Innovants
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </main>

      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Expérimentez le futur des paiements en Afrique
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Avec CICO-CASH, vous n'obtenez pas seulement une solution de paiement, mais un partenaire innovant qui évolue constamment pour répondre aux besoins changeants du marché africain.
            </p>
            <Button className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-full">
              Demander une démo
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pourquoi choisir CICO-CASH ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation constante</h3>
              <p className="text-gray-600">
                Nous investissons continuellement dans la recherche et le développement pour vous offrir les solutions de paiement les plus avancées du marché africain.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sécurité de pointe</h3>
              <p className="text-gray-600">
                Notre technologie blockchain et nos systèmes de détection de fraude basés sur l'IA garantissent la sécurité maximale de vos transactions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Adapté au marché africain</h3>
              <p className="text-gray-600">
                Nos solutions sont spécialement conçues pour répondre aux défis uniques et aux opportunités du paysage financier africain.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Support local 24/7</h3>
              <p className="text-gray-600">
                Notre équipe d'experts basée en Afrique est disponible à tout moment pour vous aider et répondre à vos questions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home