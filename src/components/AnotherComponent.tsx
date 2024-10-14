import React from 'react'
import { useCustomToast } from "@/hooks/useCustomToast"
import { Button } from "@/components/ui/Button"

const AnotherComponent: React.FC = () => {
  const toast = useCustomToast()

  const handleClick = () => {
    toast({
      title: "Notification",
      description: "Ceci est une notification de test.",
    })
  }

  return (
    <div>
      <h1>Autre Composant</h1>
      <Button onClick={handleClick}>Afficher Notification</Button>
    </div>
  )
}

export default AnotherComponent