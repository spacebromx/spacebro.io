import Link from 'next/link'

interface IProps {
  onClose: () => void
}

const MobileMenu = ({ onClose }: IProps) => {
  return (
    <div className="fixed inset-0 bg-gray-800 h-screen opacity-100 z-40 grid place-items-center overflow-y-hidden">
      <button
        aria-label="close mobile menu"
        className="absolute top-0 right-0 mr-6 mt-4 bg-none flex items-center justify-center"
        onClick={onClose}
      >
        <span className="text-orange-500 text-3xl font-bold">Close</span>
      </button>
      <ul className="lg:hidden space-y-8 items-center justify-center lg:justify-items-start text-white">
        <li className="bg-clip-text hover:text-transparent bg-gradient-to-r from-orange-900 to-yellow-900 font-bold text-white transition-all">
          <Link
            href="/articles"
            className="text-4xl text-white"
            onClick={onClose}
          >
            Articles
          </Link>
        </li>
        <li className="bg-clip-text hover:text-transparent bg-gradient-to-r from-orange-900 to-yellow-900 font-bold text-white transition-all">
          <Link href="/work" className="text-4xl" onClick={onClose}>
            Work
          </Link>
        </li>
        <li className="bg-clip-text hover:text-transparent bg-gradient-to-r from-orange-900 to-yellow-900 font-bold text-white transition-all">
          <Link href="/pages/resources" className="text-4xl" onClick={onClose}>
            Resources
          </Link>
        </li>
        <li className="bg-clip-text hover:text-transparent bg-gradient-to-r from-orange-900 to-yellow-900 font-bold text-white transition-all">
          <Link href="/pages/about" className="text-4xl" onClick={onClose}>
            About
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
