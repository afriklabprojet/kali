import React from 'react'
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/Button"

const YourComponent: React.FC = () => {
  const { toast } = useToast()

  const handleClick = () => {
    toast({
      title: "Action réussie",
      description: "Votre action a été effectuée avec succès.",
    })
  }

  return (
    <div>
      <h1>Votre Composant</h1>
      <Button onClick={handleClick}>Afficher Toast</Button>
    </div>
  )
}

export default YourComponent