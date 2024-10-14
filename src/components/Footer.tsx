import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Button } from './ui/Button'

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">CICO-CASH</h3>
            <p className="text-blue-200">Simplifiez vos paiements en ligne et développez votre réseau d'affiliés.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Produits</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Paiements en ligne</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Boutique Pro</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Réseau d'affiliés</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">API pour développeurs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Partenaires</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-blue-200 mb-4">Restez informé de nos dernières nouveautés et offres.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-3 py-2 bg-white text-blue-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                S'abonner
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-blue-200">&copy; 2023 CICO-CASH. Tous droits réservés.</p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-blue-200 hover:text-white transition-colors mr-4">Conditions d'utilisation</a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer