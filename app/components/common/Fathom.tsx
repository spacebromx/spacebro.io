'use client'

import { load, trackPageview } from 'fathom-client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import * as process from "process";

export default function Fathom() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return

    load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID!, {
      includedDomains: ['spacebro.io']
    })
  }, [])

  useEffect(() => {
    trackPageview()

  }, [pathname, searchParams])

  return null
}
