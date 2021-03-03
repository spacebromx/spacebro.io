import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from '@/components/MobileMenu'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      {showMenu && <MobileMenu onClose={() => setShowMenu(false)} />}
      <div
        className="nav bg-purple-800 lg:mx-0 flex flex-col md:flex-row lg:flex-row space-between justify-between pt-4 sticky top-0 z-20 text-left"
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
          <button onClick={() => setShowMenu(true)}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 30H35V26.6667H5V30ZM5 21.6667H35V18.3333H5V21.6667ZM5 10V13.3333H35V10H5Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="-11.6667"
                  y1="15.8333"
                  x2="45.8333"
                  y2="15.8333"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.264212" stopColor="#07EDF8" />
                  <stop offset="1" stopColor="#FC2EB1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
        <ul className="hidden md:inline-flex lg:inline-flex space-x-12 items-center justify-center md:justify-items-start lg:justify-items-start">
          <li className="menu__item">
            <a href="#" className="text-base lg:text-xl">
              Articles
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="text-base lg:text-xl">
              Work
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="text-base lg:text-xl">
              Resources
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="text-base lg:text-xl">
              About
            </a>
          </li>
        </ul>
        <div className="lg:hidden bg-gradient-to-r from-teal-900 to-pink-900 h-0.5" />
      </div>
    </>
  )
}
