import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Globe, Zap, Code } from 'lucide-react'

const Presentation: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4" variants={itemVariants}>
            Découvrez CICO-CASH par AfrikLabTech Technologies
          </motion.h2>
          <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={itemVariants}>
            Votre partenaire de confiance pour l'intégration de solutions technologiques innovantes en Afrique
          </motion.p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants}>
          <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
            <Cpu className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Agrégateur de Services</h3>
            <p className="text-gray-600">
              CICO-CASH agrège une variété de services financiers et technologiques pour simplifier vos opérations.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
            <Globe className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Présence Panafricaine</h3>
            <p className="text-gray-600">
              Nous opérons à travers l'Afrique, apportant des solutions adaptées aux besoins locaux.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
            <Zap className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Technologique</h3>
            <p className="text-gray-600">
              Nous intégrons les dernières technologies pour propulser votre entreprise vers l'avenir.
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={itemVariants}>
            <Code className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Solutions Sur Mesure</h3>
            <p className="text-gray-600">
              Nos experts développent des solutions personnalisées pour répondre à vos besoins spécifiques.
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="mt-16 text-center" variants={containerVariants}>
          <motion.p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto" variants={itemVariants}>
            AfrikLabTech Technologies, à travers CICO-CASH, s'engage à révolutionner le paysage technologique africain en offrant des solutions intégrées dans tous les secteurs touchant aux nouvelles technologies.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
            variants={itemVariants}
          >
            Découvrez nos services
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Presentation