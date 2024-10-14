import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/Button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom du produit doit contenir au moins 2 caractères.",
  }),
  description: z.string().min(10, {
    message: "La description doit contenir au moins 10 caractères.",
  }),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Le prix doit être un nombre positif.",
  }),
  image: z.string().url({
    message: "Veuillez entrer une URL d'image valide.",
  }),
  seoTitle: z.string().min(5, {
    message: "Le titre SEO doit contenir au moins 5 caractères.",
  }),
  seoDescription: z.string().min(50, {
    message: "La description SEO doit contenir au moins 50 caractères.",
  }),
  seoKeywords: z.string().min(3, {
    message: "Veuillez entrer au moins quelques mots-clés SEO.",
  }),
})

const ProductForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      image: "",
      seoTitle: "",
      seoDescription: "",
      seoKeywords: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      console.log(values)
      toast({
        title: "Produit ajouté",
        description: "Le produit a été ajouté avec succès.",
      })
      form.reset()
    }, 2000)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Ajouter un nouveau produit</CardTitle>
        <CardDescription>Remplissez les détails du produit et les informations SEO</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom du produit</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Terminal de Paiement Pro" {...field} />
                  </FormControl>
                  <FormDescription>
                    Le nom de votre produit tel qu'il apparaîtra sur le site.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description du produit</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Décrivez votre produit en détail..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Une description détaillée de votre produit pour informer les clients.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prix (XOF)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Ex: 50000" {...field} />
                  </FormControl>
                  <FormDescription>
                    Le prix de votre produit en Francs CFA.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL de l'image</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/image.jpg" {...field} />
                  </FormControl>
                  <FormDescription>
                    L'URL de l'image principale de votre produit.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="seoTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titre SEO</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Terminal de Paiement Pro CICO-CASH" {...field} />
                  </FormControl>
                  <FormDescription>
                    Le titre qui apparaîtra dans les résultats de recherche (50-60 caractères recommandés).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="seoDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description SEO</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Une brève description pour les moteurs de recherche..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    La description qui apparaîtra dans les résultats de recherche (150-160 caractères recommandés).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="seoKeywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mots-clés SEO</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: terminal, paiement, CICO-CASH" {...field} />
                  </FormControl>
                  <FormDescription>
                    Les mots-clés pertinents pour votre produit, séparés par des virgules.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Ajout en cours...
                </>
              ) : (
                "Ajouter le produit"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default ProductForm