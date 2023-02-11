import SEO from '@/next-seo.config'
import { NextSeo } from 'next-seo'

export default function Head() {
  return (
    <>
      <NextSeo useAppDir {...SEO} title={'Home'} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
