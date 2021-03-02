import Layout from '../components/Layout.tsx'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="bg-gradient-to-r from-teal-900 to-pink-900 h-0.5" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
