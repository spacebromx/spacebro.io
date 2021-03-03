import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto text-white font-sf">
      <>
        <h2 className="hidden">Alan Medina - spacebro | Software Engineer</h2>
        <Header />
        {children}
        <Footer />
      </>
    </div>
  )
}
