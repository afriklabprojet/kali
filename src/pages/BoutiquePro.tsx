"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Store, Share2, DollarSign, BarChart, Link as LinkIcon, PlusCircle } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Head from 'next/head'
import { BoutiqueProSignup } from '@/components/BoutiqueProSignup'

const features = [
  {
    icon: <Store className="h-6 w-6 text-primary" />,
    title: "Créez votre boutique en ligne",
    description: "Lancez facilement votre boutique en ligne et commencez à vendre vos produits ou services."
  },
  {
    icon: <Share2 className="h-6 w-6 text-primary" />,
    title: "Gérez votre réseau d'affiliés",
    description: "Créez et gérez un réseau d'affiliés pour promouvoir vos produits et augmenter vos ventes."
  },
  {
    icon: <DollarSign className="h-6 w-6 text-primary" />,
    title: "Commissions personnalisées",
    description: "Définissez des taux de commission personnalisés pour différents produits ou affiliés."
  },
  {
    icon: <BarChart className="h-6 w-6 text-primary" />,
    title: "Suivi en temps réel",
    description: "Suivez les performances de vos affiliés et vos ventes en temps réel avec des tableaux de bord détaillés."
  },
  {
    icon: <LinkIcon className="h-6 w-6 text-primary" />,
    title: "Liens de vente rapides",
    description: "Créez des liens de vente en un clin d'œil pour vos produits ou services."
  },
  {
    icon: <PlusCircle className="h-6 w-6 text-primary" />,
    title: "Ajout facile de produits",
    description: "Ajoutez rapidement de nouveaux produits avec des détails complets et des informations SEO."
  }
]

const BoutiquePro: React.FC = () => {
  const [showSignup, setShowSignup] = useState(false)

  return (
    <>
      <Head>
        <title>Boutique Pro CICO-CASH | Créez votre boutique en ligne et gérez vos affiliés</title>
        <meta name="description" content="Lancez votre boutique en ligne, gérez votre réseau d'affiliés et créez des liens de vente rapides avec CICO-CASH Boutique Pro. Solutions de paiement et gestion financière pour professionnels." />
        <meta name="keywords" content="CICO-CASH, boutique en ligne, affiliés, liens de vente, paiement, gestion financière, e-commerce" />
        <link rel="canonical" href="https://www.cico-cash.com/boutique-pro" />
        <meta property="og:title" content="Boutique Pro CICO-CASH | Votre solution e-commerce complète" />
        <meta property="og:description" content="Créez votre boutique en ligne, gérez vos affiliés et générez des liens de vente rapides avec CICO-CASH Boutique Pro." />
        <meta property="og:image" content="https://www.cico-cash.com/images/boutique-pro-og.jpg" />
        <meta property="og:url" content="https://www.cico-cash.com/boutique-pro" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="bg-background">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl sm:tracking-tight lg:text-6xl">
                Boutique Pro CICO-CASH
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Lancez votre boutique en ligne, gérez votre réseau d'affiliés et créez des liens de vente rapides avec Boutique Pro
              </p>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="pt-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="inline-flex items-center justify-center p-3 bg-primary-foreground rounded-md shadow-lg">
                          {feature.icon}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="mb-2">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" className="px-8" onClick={() => setShowSignup(true)}>
                Commencer avec Boutique Pro
              </Button>
            </div>

            <AnimatePresence>
              {showSignup && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.3 }}
                  className="mt-12"
                >
                  <BoutiqueProSignup />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <section className="bg-secondary py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-8 text-center">
              Prêt à booster votre business ?
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Button size="lg" onClick={() => setShowSignup(true)}>
                  Contactez-nous
                </Button>
              </div>
              <div className="ml-3 inline-flex">
                <Button size="lg" variant="outline">
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BoutiquePro