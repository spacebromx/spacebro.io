'use client'

import Link from 'next/link'
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-teal-900 to-pink-900 h-0.5 mb-14 lg:mb-20" />
      <div className="footer container mx-auto grid grid-cols-4 gap-y-8 md:gap-y-0 md:gap-x-8 lg:gap-y-0 px-4 md:px-8 lg:px-0 md:grid-cols-6 lg:grid-cols-12 mb-20 text-white">
        <div className="col-span-4 md:col-span-2 lg:col-span-4">
          <div className="text-center flex items-center">
            <Image src="/images/logo.svg" alt="spacebro - alan medina" width={190} height={45} className="mb-9" />
          </div>
          <div className="text-gray-600 font-normal space-y-2 md:text-sm">
            <p>
              &copy; {new Date().getFullYear()} spacebro.io. Some rights
              reserved.
            </p>
            <p>
              Made with love from <span className="mr-2">🇲🇽</span> Mexico City
              by <strong>Alan Medina</strong>, Software Engineer.
            </p>
          </div>
        </div>
        <div className="col-start-1 col-span-2 md:col-start-3 md:col-end-4 lg:col-start-6 lg:col-end-8">
          <h3 className="font-bold text-lg mb-4 text-teal-600 glow-teal">
            Sections
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/articles" className="text-orange-300">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/work" className="text-orange-300">
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/pages/resources"
                className="text-orange-300 text-green-500 font-bold"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link href="/pages/about" className="text-orange-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/pages/uses" className="text-orange-300">
                Uses
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-start-3 col-span-2 md:col-start-4 md:col-end-5 lg:col-start-8 lg:col-end-10">
          <h3 className="font-bold text-lg mb-4 text-teal-600 glow-teal">
            Social
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#/" className="text-orange-300">
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alan-medina/"
                rel="me noopener noreferrer"
                className="text-orange-300"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/spacebromx"
                rel="me noopener noreferrer"
                target="_blank"
                className="text-orange-300"
              >
                Github
              </a>
            </li>
            <li>
              <a href="#/" className="text-orange-300">
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="col-start-1 col-end-2 md:col-start-5 md:col-end-6 lg:col-start-10 lg:col-end-10">
          <h3 className="font-bold text-lg mb-4 text-teal-600 glow-teal">
            Legal
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/pages/privacy-policy" className="text-orange-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/pages/terms-of-use" className="text-orange-300">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/pages/cookies" className="text-orange-300">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-start-3 col-end-4 md:col-start-6 md:col-end-7 lg:col-start-12 lg:col-end-12">
          <h3 className="font-bold text-lg mb-4 text-teal-600 glow-teal">
            Cool
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.freecodecamp.org/"
                className="text-orange-300 break-words"
              >
                freeCodeCamp
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/"
                className="text-orange-300"
              >
                MDN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
