import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { Button } from '../components/ui/Button'
import DOMPurify from 'dompurify'

const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sanitizeInput = useCallback((input: string) => {
    return DOMPurify.sanitize(input.trim())
  }, [])

  const validateEmail = useCallback((email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).toLowerCase())
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedMessage = sanitizeInput(message)

    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      setError('Veuillez remplir tous les champs.')
      return
    }

    if (!validateEmail(sanitizedEmail)) {
      setError('Veuillez entrer une adresse email valide.')
      return
    }

    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitting(false)
      setIsSubmitted(true)
      setError(null)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      setIsSubmitting(false)
      setError('Une erreur est survenue. Veuillez réessayer plus tard.')
    }
  }

  const inputClasses = "w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1"

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
              <p className="mb-8 text-blue-100">
                Nous sommes là pour répondre à toutes vos questions et vous aider dans vos projets technologiques.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <span>contact@cico-cash.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <span>+225 27 22 59 49 00</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4" />
                  <span>Abidjan, Cocody Riviera 3, Cité Zinsou, Côte d'Ivoire</span>
                </div>
              </div>
              <div className="mt-12">
                <p className="text-sm text-blue-200">
                  CICO-CASH, une initiative d'AfrikLabTech Technologies, est fière d'être basée en Côte d'Ivoire. Nous sommes dédiés à fournir des solutions technologiques innovantes à travers l'Afrique.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 p-12">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message envoyé !</h3>
                    <p className="text-gray-600">
                      Merci de nous avoir contactés. Notre équipe basée en Côte d'Ivoire vous répondra dans les plus brefs délais.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className={labelClasses}>Nom</label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={`${inputClasses} ${!name && 'border-red-300'}`}
                          required
                          maxLength={100}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClasses}>Email</label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`${inputClasses} ${!email && 'border-red-300'}`}
                          required
                          maxLength={100}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className={labelClasses}>Message</label>
                        <textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={4}
                          className={`${inputClasses} ${!message && 'border-red-300'}`}
                          required
                          maxLength={1000}
                        ></textarea>
                      </div>
                      {error && (
                        <motion.div 
                          className="text-red-500 text-sm bg-red-100 border border-red-400 px-4 py-3 rounded relative mt-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {error}
                        </motion.div>
                      )}
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting || !name || !email || !message}
                      >
                        {isSubmitting ? (
                          <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Envoyer
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact