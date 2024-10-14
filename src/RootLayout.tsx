import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import FAQPage from '@/pages/FAQ'
import BoutiqueProPage from '@/pages/BoutiquePro'
import DevSpacePage from '@/pages/DevSpace'
import ContactPage from '@/pages/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from "@/components/ui/toaster"

const Dashboard = lazy(() => import('@/components/Dashboard').then(module => ({ default: module.Dashboard })))

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<div>Chargement...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/boutique-pro" element={<BoutiqueProPage />} />
            <Route path="/dev" element={<DevSpacePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}