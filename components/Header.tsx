import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div
      className="nav bg-purple-800 mx-4 lg:mx-0 flex flex-col lg:flex-row space-between justify-between pt-4 pb-4 lg:pb-0 sticky top-0 z-10 text-center lg:text-left"
      style={{
        backdropFilter: 'blur(20px)',
        opacity: 0.9,
      }}
    >
      <Link href="/">
        <a>
          <Image
            src="/images/logo.svg"
            width="219"
            height="59"
            alt="spacebro by Alan Medina"
          />
        </a>
      </Link>
      <ul className="inline-flex space-x-8 items-center justify-center lg:justify-items-start">
        <li className="menu__item">
          <a href="#" className="text-base lg:text-xl">
            Articles
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
    </div>
  )
}
