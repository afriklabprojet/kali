import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Loader2, CheckCircle2, User, Briefcase, Lock, MapPin, FileText } from 'lucide-react'

const formSchema = z.object({
  accountType: z.enum(['personal', 'business'], {
    required_error: "Veuillez sélectionner un type de compte.",
  }),
  firstName: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères.",
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Le numéro de téléphone doit contenir au moins 10 chiffres.",
  }),
  password: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères.",
  }),
  confirmPassword: z.string(),
  country: z.string({
    required_error: "Veuillez sélectionner un pays.",
  }),
  city: z.string().min(2, {
    message: "La ville doit contenir au moins 2 caractères.",
  }),
  companyName: z.string().optional(),
  businessType: z.string().optional(),
  businessCategory: z.string().optional(),
  websiteUrl: z.string().url().optional().or(z.literal('')),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "Vous devez accepter les conditions d'utilisation.",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas.",
  path: ["confirmPassword"],
})

type FormValues = z.infer<typeof formSchema>

export default function RegistrationForm() {
  const [accountType, setAccountType] = useState<'personal' | 'business'>('personal')
  const [currentStep, setCurrentStep] = useState("account")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accountType: 'personal',
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      country: "",
      city: "",
      companyName: "",
      businessType: "",
      businessCategory: "",
      websiteUrl: "",
      termsAccepted: false,
    },
  })

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const steps = [
    { id: "account", title: "Compte", icon: <User size={18} /> },
    { id: "personal", title: "Personnel", icon: <User size={18} /> },
    { id: "security", title: "Sécurité", icon: <Lock size={18} /> },
    { id: "location", title: "Localisation", icon: <MapPin size={18} /> },
    { id: "business", title: "Professionnel", icon: <Briefcase size={18} /> },
    { id: "terms", title: "Conditions", icon: <FileText size={18} /> },
  ]

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg rounded-xl overflow-hidden">
      <CardHeader>
        <h2 className="text-2xl font-bold text-center">Inscription CICO-CASH</h2>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs value={currentStep} className="w-full">
          <div className="flex flex-col sm:flex-row">
            <TabsList className="h-auto flex-col space-y-1 rounded-none bg-gray-100 p-4 border-r w-full sm:w-auto">
              {steps.map((step) => (
                <TabsTrigger
                  key={step.id}
                  value={step.id}
                  className={`w-full justify-start px-4 py-2 ${currentStep === step.id ? 'bg-white shadow-sm' : ''}`}
                  onClick={() => setCurrentStep(step.id)}
                >
                  <div className="flex items-center space-x-2">
                    {step.icon}
                    <span>{step.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex-grow p-6 space-y-6 w-full sm:w-2/3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <TabsContent value="account" className="mt-0 border-0 p-0">
                      <FormField
                        control={form.control}
                        name="accountType"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Type de compte</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={(value) => {
                                  field.onChange(value)
                                  setAccountType(value as 'personal' | 'business')
                                }}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                                aria-label="Type de compte"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="personal" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Compte personnel
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="business" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Compte professionnel
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TabsContent>

                    <TabsContent value="personal" className="mt-0 border-0 p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Prénom</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nom</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Numéro de téléphone</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+225 0123456789" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TabsContent>

                    <TabsContent value="security" className="mt-0 border-0 p-0">
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mot de passe</FormLabel>
                              <FormControl>
                                <Input type="password" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="confirmPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Confirmer le mot de passe</FormLabel>
                              <FormControl>
                                <Input type="password" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="location" className="mt-0 border-0 p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pays</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Sélectionnez votre pays" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="ci">Côte d'Ivoire</SelectItem>
                                  <SelectItem value="sn">Sénégal</SelectItem>
                                  <SelectItem value="cm">Cameroun</SelectItem>
                                  <SelectItem value="bf">Burkina Faso</SelectItem>
                                  <SelectItem value="ml">Mali</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ville</FormLabel>
                              <FormControl>
                                <Input placeholder="Abidjan" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="business" className="mt-0 border-0 p-0">
                      {accountType === 'business' && (
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nom de l'entreprise</FormLabel>
                                <FormControl>
                                  <Input placeholder="CICO-CASH Inc." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="businessType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Type d'entreprise</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Sélectionnez le type d'entreprise" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="sarl">SARL</SelectItem>
                                    <SelectItem value="sa">SA</SelectItem>
                                    <SelectItem value="ei">Entreprise Individuelle</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="businessCategory"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Catégorie d'entreprise</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Sélectionnez la catégorie d'entreprise" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                                    <SelectItem value="services">Services</SelectItem>
                                    <SelectItem  value="technology">Technologie</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="websiteUrl"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Site web (optionnel)</FormLabel>
                                <FormControl>
                                  <Input type="url" placeholder="https://www.example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}
                      {accountType === 'personal' && (
                        <p>Cette section est réservée aux comptes professionnels.</p>
                      )}
                    </TabsContent>

                    <TabsContent value="terms" className="mt-0 border-0 p-0">
                      <FormField
                        control={form.control}
                        name="termsAccepted"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                J'accepte les conditions d'utilisation et la politique de confidentialité
                              </FormLabel>
                              <FormDescription>
                                En cochant cette case, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                    </TabsContent>
                  </motion.div>
                </AnimatePresence>

                <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      const currentIndex = steps.findIndex(step => step.id === currentStep)
                      if (currentIndex > 0) {
                        setCurrentStep(steps[currentIndex - 1].id)
                      }
                    }}
                    disabled={currentStep === steps[0].id}
                    className="w-full sm:w-auto"
                  >
                    Précédent
                  </Button>
                  {currentStep !== steps[steps.length - 1].id ? (
                    <Button
                      type="button"
                      onClick={() => {
                        const currentIndex = steps.findIndex(step => step.id === currentStep)
                        if (currentIndex < steps.length - 1) {
                          setCurrentStep(steps[currentIndex + 1].id)
                        }
                      }}
                      className="w-full sm:w-auto"
                    >
                      Suivant
                    </Button>
                  ) : (
                    <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Inscription en cours...
                        </>
                      ) : (
                        "S'inscrire"
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </Tabs>
      </CardContent>
      {isSubmitted && (
        <CardFooter>
          <div className="w-full text-center text-green-600">
            <CheckCircle2 className="mx-auto h-8 w-8 mb-2" />
            <p>Inscription réussie ! Vous allez recevoir un email de confirmation.</p>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}