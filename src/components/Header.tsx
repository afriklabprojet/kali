import React, { useState } from 'react'
import { Menu, X, User, Lock, ChevronDown, CreditCard, ArrowRightLeft, Smartphone, Link } from 'lucide-react'
import { Button } from './ui/Button'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { Link as RouterLink } from 'react-router-dom'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement sign up logic here
    console.log('Sign up:', { name, email, password })
    setIsSignUpModalOpen(false)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement login logic here
    console.log('Login:', { email, password })
    setIsLoginModalOpen(false)
  }

  const services = [
    { icon: <CreditCard size={20} />, name: 'API de Paiement', description: 'Intégrez des paiements sécurisés' },
    { icon: <ArrowRightLeft size={20} />, name: 'API de Transfert', description: 'Effectuez des transferts rapides' },
    { icon: <Smartphone size={20} />, name: 'API Airtime', description: 'Recharges de crédit téléphonique' },
    { icon: <Link size={20} />, name: 'Lien de Paiement', description: 'Créez des liens de paiement personnalisés' },
  ]

  const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ isOpen, onClose, children }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <RouterLink to="/">
              <Logo />
            </RouterLink>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          <nav className="hidden md:flex space-x-8">
            <div className="relative">
              <button
                className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center"
                onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
              >
                Services
                <ChevronDown size={20} className={`ml-1 transform transition-transform ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isServicesMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-10 mt-2 w-72 bg-white rounded-md shadow-lg py-1"
                  >
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      >
                        <div className="text-blue-600">{service.icon}</div>
                        <div>
                          <div className="font-medium">{service.name}</div>
                          <div className="text-xs text-gray-500">{service.description}</div>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <RouterLink to="/boutique-pro" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Boutique Pro
            </RouterLink>
            <RouterLink to="/dev" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Espace Dev
            </RouterLink>
            <RouterLink to="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </RouterLink>
            <RouterLink to="/faq" className="text-base font-medium text-gray-500 hover:text-gray-900">
              FAQ
            </RouterLink>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button 
              variant="outline" 
              className="mr-4 border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => setIsLoginModalOpen(true)}
            >
              Se connecter
            </Button>
            <Button 
              className="bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => setIsSignUpModalOpen(true)}
            >
              S'inscrire
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
          >
            <div className="pt-2 pb-3 px-2 space-y-1 sm:px-3">
              <div className="relative">
                <button
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                >
                  Services
                  <ChevronDown size={20} className={`ml-1 inline-block transform transition-transform ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isServicesMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gray-50 py-2"
                    >
                      {services.map((service, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <div className="text-blue-600">{service.icon}</div>
                          <div>
                            <div className="font-medium">{service.name}</div>
                            <div className="text-xs text-gray-500">{service.description}</div>
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <RouterLink to="/boutique-pro" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Boutique Pro</RouterLink>
              <RouterLink to="/dev" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Espace Dev</RouterLink>
              <RouterLink to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</RouterLink>
              <RouterLink to="/faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">FAQ</RouterLink>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <Button 
                  variant="outline" 
                  className="w-full mr-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  Se connecter
                </Button>
                <Button 
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => setIsSignUpModalOpen(true)}
                >
                  S'inscrire
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Modal isOpen={isSignUpModalOpen} onClose={() => setIsSignUpModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4 text-blue-600">S'inscrire</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
            <User className="w-4 h-4 mr-2" />
            S'inscrire
          </Button>
        </form>
      </Modal>

      <Modal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Se connecter</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              id="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
            <Lock className="w-4 h-4 mr-2" />
            Se connecter
          </Button>
        </form>
      </Modal>
    </header>
  )
}

export default Header