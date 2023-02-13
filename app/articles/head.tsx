import { NEXT_SEO_DEFAULT } from '@/next-seo.config'
import { NextSeo, NextSeoProps } from 'next-seo'

export default function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: 'All My Articles',
    description:
      'This is the index of all articles written in this site. You can find articles about web development, programming, and other topics.',
  }
  return <NextSeo useAppDir {...updateMeta} />
}
