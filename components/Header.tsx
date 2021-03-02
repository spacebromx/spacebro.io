import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div
      className="nav bg-purple-800 flex space-between justify-between pt-4 sticky top-0 z-10"
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
      <ul className="inline-flex space-x-8 items-center">
        <li className="menu__item">
          <a href="#" className="text-xl">
            Articles
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="text-xl">
            Resources
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="text-xl">
            About
          </a>
        </li>
      </ul>
    </div>
  )
}
