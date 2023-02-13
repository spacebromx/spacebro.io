import '../styles/globals.css'
import { ReactNode } from 'react'
import Header from '@components/common/Header'
import Footer from '@components/common/Footer'
import localFont from '@next/font/local'
import { NextSeo } from 'next-seo'
import { NEXT_SEO_DEFAULT } from '@/next-seo.config'
import Fathom from "@components/common/Fathom";

const SFFont = localFont({
  src: [
    {
      path: '../public/fonts/SF-Pro-Display-Thin.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/SF-Pro-Display-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/SF-Pro-Display-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/SF-Pro-Display-Heavy.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sf',
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo useAppDir {...NEXT_SEO_DEFAULT} />
      </head>
      <body>
        <div className="hidden lg:block bg-gradient-to-r from-teal-900 to-pink-900 h-0.5" />
        <div className="bg-purple-800 sticky top-0 opacity-90 bg-purple-800 flex flex-col h-16 items-center flex-row backdrop-blur-xl md:backdrop-filter-none z-20">
          <div className="w-full relative h-full flex items-center">
            <div className="container mx-auto">
              <Header />
            </div>
            <div className="lg:hidden bg-gradient-to-r from-teal-900 to-pink-900 h-0.5 w-full absolute bottom-0" />
          </div>
        </div>
        <main className={`${SFFont.variable} font-sans`}>
          {children}
          <Footer />
        </main>
        <Fathom />
      </body>
    </html>
  )
}
