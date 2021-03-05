import { MDXEmbedProvider } from 'mdx-embed'
import { AppProps } from 'next/app'
import Layout from '@/components/Layout.tsx'
import { DefaultSeo } from 'next-seo'

import '../styles/globals.scss'
import SEO from '@/next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
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
