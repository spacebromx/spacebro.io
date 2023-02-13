import { NEXT_SEO_DEFAULT } from '@/next-seo.config'
import { NextSeo, NextSeoProps } from 'next-seo'

export default function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: 'Spacebro, Software Engineer',
    description:
      "I'm a Software Engineer who enjoys technology, music, video games and coding. I write useful articles and share great resources for web developers.",
  }
  return (
    <>
      <NextSeo useAppDir {...updateMeta} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
