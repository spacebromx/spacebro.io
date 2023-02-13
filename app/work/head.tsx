import { NEXT_SEO_DEFAULT } from '@/next-seo.config'
import { NextSeo, NextSeoProps } from 'next-seo'

export default function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: 'Work & Recent Projects',
    description:
      'Get to know more about my professional experience and the projects I have worked on.',
  }
  return <NextSeo useAppDir {...updateMeta} />
}
