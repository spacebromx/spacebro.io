import type { NextSeoProps } from 'next-seo';

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  titleTemplate: '%s | Alan Medina',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spacebro.io',
    siteName: 'Alan Medina aka spacebro',
  },
  twitter: {
    handle: '@spacebromx',
    site: '@site',
    cardType: 'summary_large_image',
  },
}
