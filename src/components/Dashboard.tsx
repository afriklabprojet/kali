"use client"

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { PlusCircle, Pencil, Trash2, Eye, Truck, Package, Users, CreditCard } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Types
type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
}

type Order = {
  id: string;
  customerName: string;
  date: string;
  total: number;
  status: 'pending' | 'shipped' | 'delivered';
}

type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
}

// Mock data
const initialProducts: Product[] = [
  { id: '1', name: 'Produit A', price: 19.99, stock: 100, description: 'Description du produit A' },
  { id: '2', name: 'Produit B', price: 29.99, stock: 50, description: 'Description du produit B' },
]

const initialOrders: Order[] = [
  { id: '1', customerName: 'John Doe', date: '2023-05-01', total: 59.98, status: 'pending' },
  { id: '2', customerName: 'Jane Smith', date: '2023-05-02', total: 29.99, status: 'shipped' },
  { id: '3', customerName: 'Bob Johnson', date: '2023-05-03', total: 89.97, status: 'delivered' },
]

const initialCustomers: Customer[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', phone: '0123456789', totalOrders: 3 },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '9876543210', totalOrders: 1 },
]

const salesData = [
  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jul", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Aug", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Sep", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Oct", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Nov", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Dec", total: Math.floor(Math.random() * 5000) + 1000 },
]

export function Dashboard() {
  const { toast } = useToast()
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [orders, setOrders] = useState<Order[]>(initialOrders)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers)

  const [isAddProductOpen, setIsAddProductOpen] = useState(false)
  const [isEditProductOpen, setIsEditProductOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newProduct: Product = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.get('name') as string,
      price: parseFloat(formData.get('price') as string),
      stock: parseInt(formData.get('stock') as string),
      description: formData.get('description') as string,
    }
    setProducts([...products, newProduct])
    setIsAddProductOpen(false)
    toast({
      title: "Nouveau produit ajouté",
      description: "Le produit a été ajouté à votre catalogue avec succès.",
    })
  }

  const handleEditProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!editingProduct) return
    const formData = new FormData(event.currentTarget)
    const updatedProduct: Product = {
      ...editingProduct,
      name: formData.get('name') as string,
      price: parseFloat(formData.get('price') as string),
      stock: parseInt(formData.get('stock') as string),
      description: formData.get('description') as string,
    }
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p))
    setIsEditProductOpen(false)
    toast({
      title: "Produit mis à jour",
      description: "Les modifications ont été enregistrées avec succès.",
    })
  }

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId))
    toast({
      title: "Produit supprimé",
      description: "Le produit a été retiré de votre catalogue.",
      variant: "destructive",
    })
  }

  const handleShipOrder = (orderId: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: 'shipped' } : order
    ))
    toast({
      title: "Commande expédiée",
      description: `La commande ${orderId} a été marquée comme expédiée.`,
    })
  }

  const getStatusBadge = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary">En attente</Badge>
      case 'shipped':
        return <Badge variant="default">Expédiée</Badge>
      case 'delivered':
        return <Badge variant="success">Livrée</Badge>
    }
  }

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Tableau de Bord CICO-CASH</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenu Total</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,231.89 CFA</div>
            <CardDescription className="text-xs text-muted-foreground">
              +20.1% par rapport au mois dernier
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Commandes</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <CardDescription className="text-xs text-muted-foreground">
              +180.1% par rapport au mois dernier
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ventes</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <CardDescription className="text-xs text-muted-foreground">
              +19% par rapport au mois dernier
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clients Actifs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <CardDescription className="text-xs text-muted-foreground">
              +201 depuis la semaine dernière
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Vue d'ensemble des ventes</CardTitle>
          <CardDescription>Ventes mensuelles en CFA</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={salesData}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value} CFA`} />
              <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Tabs defaultValue="products" className="space-y-4">
        <TabsList>
          <TabsTrigger value="products">Produits</TabsTrigger>
          <TabsTrigger value="orders">Commandes</TabsTrigger>
          <TabsTrigger value="customers">Clients</TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Gestion des Produits</CardTitle>
                <Button onClick={() => setIsAddProductOpen(true)}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Ajouter un produit
                </Button>
              </div>
              <CardDescription>Gérez votre catalogue de produits ici</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>Liste de vos produits actuels</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Prix (CFA)</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.price.toFixed(2)} CFA</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>{product.description}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => {
                          setEditingProduct(product)
                          setIsEditProductOpen(true)
                        }}>
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Modifier</span>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteProduct(product.id)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Supprimer</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Gestion des Commandes</CardTitle>
              <CardDescription>Suivez et gérez les commandes de vos clients</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>Liste de vos commandes récentes</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Total (CFA)</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customerName}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.total.toFixed(2)} CFA</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">Voir les détails</span>
                        
                        </Button>
                        {order.status === 'pending' && (
                          <Button variant="ghost" size="icon" onClick={() => handleShipOrder(order.id)}>
                            <Truck className="h-4 w-4" />
                            <span className="sr-only">Marquer comme expédié</span>
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers">
          <Card>
            <CardHeader>
              <CardTitle>Gestion des Clients</CardTitle>
              <CardDescription>Visualisez et gérez les informations de vos clients</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>Liste de vos clients</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Téléphone</TableHead>
                    <TableHead>Total des commandes</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>{customer.email}</TableCell>
                      <TableCell>{customer.phone}</TableCell>
                      <TableCell>{customer.totalOrders}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">Voir les détails</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Modifier</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Ajouter un nouveau produit</DialogTitle>
            <DialogDescription>
              Remplissez les détails du nouveau produit à ajouter à votre catalogue.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddProduct}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nom
                </Label>
                <Input id="name" name="name" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Prix (CFA)
                </Label>
                <Input id="price" name="price" type="number" min="0" step="0.01" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="stock" className="text-right">
                  Stock
                </Label>
                <Input id="stock" name="stock" type="number" min="0" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input id="description" name="description" className="col-span-3" required />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Ajouter le produit</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditProductOpen} onOpenChange={setIsEditProductOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Modifier le produit</DialogTitle>
            <DialogDescription>
              Modifiez les détails du produit sélectionné.
            </DialogDescription>
          </DialogHeader>
          {editingProduct && (
            <form onSubmit={handleEditProduct}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-name" className="text-right">
                    Nom
                  </Label>
                  <Input id="edit-name" name="name" defaultValue={editingProduct.name} className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-price" className="text-right">
                    Prix (CFA)
                  </Label>
                  <Input id="edit-price" name="price" type="number" min="0" step="0.01" defaultValue={editingProduct.price} className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-stock" className="text-right">
                    Stock
                  </Label>
                  <Input id="edit-stock" name="stock" type="number" min="0" defaultValue={editingProduct.stock} className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-description" className="text-right">
                    Description
                  </Label>
                  <Input id="edit-description" name="description" defaultValue={editingProduct.description} className="col-span-3" required />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Enregistrer les modifications</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}