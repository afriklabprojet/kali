import React, { useState } from 'react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export function BoutiqueProSignup() {
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous ajouteriez la logique pour traiter l'inscription
    console.log('Inscription avec:', { email, companyName, phoneNumber })
    toast({
      title: "Inscription réussie !",
      description: "Nous vous contacterons bientôt pour finaliser votre inscription à Boutique Pro.",
    })
    setEmail('')
    setCompanyName('')
    setPhoneNumber('')
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Commencer avec Boutique Pro</CardTitle>
        <CardDescription>Remplissez ce formulaire pour démarrer votre boutique en ligne.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email *</Label>
              <Input 
                id="email" 
                placeholder="votre@email.com" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="companyName">Nom de l'entreprise *</Label>
              <Input 
                id="companyName" 
                placeholder="Votre entreprise" 
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phoneNumber">Numéro de téléphone *</Label>
              <Input 
                id="phoneNumber" 
                placeholder="Votre numéro de téléphone" 
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <CardFooter className="flex justify-between mt-4 px-0">
            <Button type="submit">S'inscrire</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}