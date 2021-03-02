import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="sticky flex space-between justify-between pt-16 ">
      <Link href="/">
        <a>
          <Image
            src="/images/logo.svg"
            width="279"
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
