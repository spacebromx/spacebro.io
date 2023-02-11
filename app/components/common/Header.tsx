'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useState } from 'react'
import MobileMenu from '@components/common/MobileMenu'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const pathname = usePathname()

  const menuLinks = [
    { label: 'Articles', href: '/articles' },
    { label: 'Work', href: '/work' },
    { label: 'Resources', href: '/pages/resources' },
    { label: 'About', href: '/pages/about' },
  ]

  return (
    <>
      {showMenu && (
        <MobileMenu
          onClose={() => {
            setShowMenu(false)
            enableBodyScroll(document.body)
          }}
        />
      )}
      <div className="flex w-full mt-0 md:mt-2">
        <Link href="/" className="ml-4 md:ml-8 lg:ml-0 flex-1">
          <Image
            src="/images/logo.svg"
            width="220"
            height="60"
            alt="spacebro by Alan Medina"
          />
        </Link>
        <div className="z-10 md:hidden lg:hidden absolute right-0 mr-4">
          <button
            aria-label="show mobile menu"
            className="pt-1"
            onClick={() => {
              setShowMenu(true)
              disableBodyScroll(document.body)
            }}
          >
            <Image src="/images/menu.png" height={40} width={40} alt="menu" />
          </button>
        </div>
        <ul>
          <li className="hidden md:flex items-center h-full gap-10">
            {menuLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={clsx(
                  ' bg-clip-text hover:text-transparent bg-gradient-to-r from-orange-900 to-yellow-900 font-bold text-white transition-all text-xl',
                  !!pathname?.startsWith(link.href) &&
                    'bg-green-500 text-transparent bg-gradient-to-r from-orange-900 to-yellow-900'
                )}
                title={`Go to ${link.label}`}
              >
                {link.label}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
