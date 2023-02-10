import '../styles/globals.css'
import { ReactNode } from 'react'
import Header from '@components/common/Header'
import Footer from '@components/common/Footer'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <div className="hidden lg:block bg-gradient-to-r from-teal-900 to-pink-900 h-0.5" />
        <div className="container mx-auto sticky top-0 opacity-90 bg-purple-800 flex flex-col h-16 items-center flex-row backdrop-blur-xl md:backdrop-filter-none">
          <div className="w-full relative h-full flex items-center">
            <Header />
            <div className="lg:hidden bg-gradient-to-r from-teal-900 to-pink-900 h-0.5 w-full absolute bottom-0" />
          </div>
        </div>
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
