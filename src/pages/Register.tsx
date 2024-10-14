import React from 'react'
import RegistrationForm from '@/components/RegistrationForm'

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Créez votre compte CICO-CASH</h1>
      <RegistrationForm />
    </div>
  )
}