import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Code, BookOpen, Download, Globe, Terminal, ChevronRight, Copy } from 'lucide-react'

const DevSpace: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Espace Développeur</h1>
        <p className="text-xl mb-12 text-center text-gray-600 max-w-3xl mx-auto">
          Bienvenue dans l'espace dédié aux développeurs. Ici, vous trouverez tous les outils nécessaires pour intégrer CICO-CASH à vos applications.
        </p>

        <Tabs defaultValue="documentation" className="mb-16">
          <TabsList className="grid w-full grid-cols-4 rounded-full bg-blue-100 p-1">
            <TabsTrigger value="documentation" className="rounded-full">Documentation</TabsTrigger>
            <TabsTrigger value="api" className="rounded-full">API</TabsTrigger>
            <TabsTrigger value="sdk" className="rounded-full">SDK</TabsTrigger>
            <TabsTrigger value="outils" className="rounded-full">Outils</TabsTrigger>
          </TabsList>
          <div className="mt-8">
            <TabsContent value="documentation">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-blue-500 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Documentation</CardTitle>
                  <CardDescription className="text-blue-100">Guides détaillés et références pour l'intégration de CICO-CASH</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {['Guide de démarrage rapide', 'Intégration des paiements', 'Gestion des transactions', 'Sécurité et authentification', 'Webhooks et notifications'].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <ChevronRight className="mr-2 h-5 w-5 text-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    <BookOpen className="mr-2 h-5 w-5" /> Accéder à la documentation
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="api">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-green-500 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">API Reference</CardTitle>
                  <CardDescription className="text-green-100">Explorez notre API RESTful complète</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4 text-gray-600">Notre API vous permet d'effectuer les opérations suivantes :</p>
                  <ul className="space-y-2">
                    {['Création et gestion des transactions', 'Vérification du statut des paiements', 'Gestion des utilisateurs et des comptes', 'Génération de rapports'].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <ChevronRight className="mr-2 h-5 w-5 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    <Code className="mr-2 h-5 w-5" /> Explorer l'API
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="sdk">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-purple-500 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">SDK</CardTitle>
                  <CardDescription className="text-purple-100">Intégrez CICO-CASH rapidement avec nos SDK</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4 text-gray-600">Nous proposons des SDK pour les langages et plateformes suivants :</p>
                  <div className="grid grid-cols-2 gap-4">
                    {['JavaScript', 'Python', 'PHP', 'Java', 'iOS', 'Android'].map((sdk, index) => (
                      <Button key={index} variant="outline" className="justify-start">
                        <Download className="mr-2 h-5 w-5 text-purple-500" /> {sdk}
                      </Button>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                    <Globe className="mr-2 h-5 w-5" /> Voir tous les SDK
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="outils">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-orange-500 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Outils de développement</CardTitle>
                  <CardDescription className="text-orange-100">Ressources pour faciliter votre intégration</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-6">
                    {[
                      { title: 'Environnement de test', description: 'Testez vos intégrations sans risque', action: 'Accéder au sandbox' },
                      { title: 'Générateur de code', description: 'Créez rapidement des snippets pour vos intégrations', action: 'Utiliser le générateur' },
                      { title: 'Webhooks tester', description: 'Vérifiez la réception de vos webhooks', action: 'Tester les webhooks' },
                    ].map((tool, index) => (
                      <li key={index} className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2 text-orange-700">{tool.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                        <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
                          {tool.action}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Obtenir vos clés API</h2>
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-blue-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Clés API</CardTitle>
              <CardDescription className="text-blue-100">Générez et gérez vos clés API pour l'intégration</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {[
                  { label: 'Clé API (Environnement de test)', value: 'sk_test_1234567890abcdefghijklmnop' },
                  { label: 'Clé publique (Environnement de test)', value: 'pk_test_1234567890abcdefghijklmnop' },
                ].map((key, index) => (
                  <div key={index} className="space-y-2">
                    <Label htmlFor={`key-${index}`} className="text-sm font-medium text-gray-700">{key.label}</Label>
                    <div className="flex">
                      <Input id={`key-${index}`} value={key.value} readOnly className="flex-grow bg-gray-50" />
                      <Button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full text-blue-500 border-blue-500 hover:bg-blue-50">Gérer les clés API</Button>
            </CardFooter>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Support développeur</h2>
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-green-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Besoin d'aide ?</CardTitle>
              <CardDescription className="text-green-100">Notre équipe de support est là pour vous aider</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {[
                  { label: 'Email', value: 'support-dev@cico-cash.com' },
                  { label: 'Forum développeurs', value: 'forum.cico-cash.com', link: true },
                  { label: 'Chat en direct', value: 'Disponible 24/7 pour les questions urgentes' },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-semibold text-gray-700 mr-2">{item.label}:</span>
                    {item.link ? (
                      <a href="#" className="text-blue-600 hover:underline">{item.value}</a>
                    ) : (
                      <span className="text-gray-600">{item.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                <Terminal className="mr-2 h-5 w-5" /> Ouvrir un ticket de support
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default DevSpace