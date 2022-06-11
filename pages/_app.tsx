// @ts-nocheck

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { MDXEmbedProvider } from 'mdx-embed'
import { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { DefaultSeo } from 'next-seo'
import * as Fathom from 'fathom-client'

import '../styles/globals.scss'
import SEO from '@/next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
        includedDomains: ['spacebro.io'],
      })
    }

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])

  return (
    <>
      <DefaultSeo {...SEO} />
      <div className="hidden lg:block bg-gradient-to-r from-teal-900 to-pink-900 h-0.5" />
      <MDXEmbedProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXEmbedProvider>
    </>
  )
}

export default MyApp
