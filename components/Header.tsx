import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MobileMenu from '@/components/MobileMenu'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

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
      <div
        className="nav bg-purple-800 lg:mx-0 flex flex-col md:flex-row lg:flex-row space-between justify-between pt-4 sticky md:sticky lg:sticky w-full top-0 z-20 text-left"
        style={{
          backdropFilter: 'blur(20px)',
          opacity: 0.9,
        }}
      >
        <Link href="/">
          <a className="ml-4 md:ml-8 lg:ml-0">
            <Image
              src="/images/logo.svg"
              width="219"
              height="59"
              alt="spacebro by Alan Medina"
            />
          </a>
        </Link>
        <div className="burger-menu md:hidden lg:hidden absolute right-0 mr-4 mt-1.5">
          <button
            className="pt-1"
            onClick={() => {
              setShowMenu(true)
              disableBodyScroll(document.body)
            }}
          >
            <Image src="/images/menu.png" height={40} width={40} alt="menu" />
          </button>
        </div>
        <ul className="hidden md:inline-flex lg:inline-flex space-x-12 items-center justify-center md:justify-items-start lg:justify-items-start">
          <li
            className={`${
              router.pathname === '/articles' ||
              router.pathname === '/articles/[slug]'
                ? 'menu__item menu__item--active'
                : 'menu__item'
            }`}
          >
            <Link href="/articles">
              <a className="text-base lg:text-xl">Articles</a>
            </Link>
          </li>
          <li
            className={`${
              router.pathname === '/work'
                ? 'menu__item menu__item--active'
                : 'menu__item'
            }`}
          >
            <Link href="/work">
              <a className="text-base lg:text-xl">Work</a>
            </Link>
          </li>
          <li
            className={`${
              router.asPath === '/pages/resources'
                ? 'menu__item menu__item--active'
                : 'menu__item'
            }`}
          >
            <Link href="/pages/resources">
              <a className="text-base lg:text-xl">Resources</a>
            </Link>
          </li>
          <li
            className={`${
              router.asPath === '/pages/about'
                ? 'menu__item menu__item--active'
                : 'menu__item'
            }`}
          >
            <Link href="/pages/about">
              <a className="text-base lg:text-xl">About</a>
            </Link>
          </li>
        </ul>
        <div className="lg:hidden bg-gradient-to-r from-teal-900 to-pink-900 h-0.5" />
      </div>
    </>
  )
}
