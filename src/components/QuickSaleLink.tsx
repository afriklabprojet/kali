import React, { useState } from 'react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

const QuickSaleLink: React.FC = () => {
  const [productName, setProductName] = useState('')
  const [price, setPrice] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [generatedLink, setGeneratedLink] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Generate a unique ID for the product (in a real app, this would come from the backend)
    const productId = Math.random().toString(36).substr(2, 9)
    const link = `https://cico-cash.com/vente/${productId}`

    setGeneratedLink(link)
    setIsLoading(false)

    toast({
      title: "Lien de vente créé",
      description: "Votre lien de vente rapide a été généré avec succès.",
      action: <ToastAction altText="Copier le lien">Copier</ToastAction>,
    })
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink)
    toast({
      title: "Lien copié",
      description: "Le lien de vente a été copié dans votre presse-papiers.",
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Créer un lien de vente rapide</CardTitle>
        <CardDescription>Générez un lien de vente en quelques secondes</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="productName">Nom du produit</Label>
            <Input
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Ex: Consultation vidéo"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Prix (XOF)</Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Ex: 5000"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Génération en cours...
              </>
            ) : (
              "Générer le lien de vente"
            )}
          </Button>
        </form>
      </CardContent>
      {generatedLink && (
        <CardFooter className="flex flex-col items-start space-y-2">
          <p className="text-sm font-medium">Votre lien de vente :</p>
          <p className="text-sm text-muted-foreground break-all">{generatedLink}</p>
          <Button onClick={copyToClipboard} variant="outline" className="mt-2">
            Copier le lien
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

export default QuickSaleLink