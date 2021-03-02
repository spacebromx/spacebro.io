interface IProps {
  onClose: (boolean) => void
}

const MobileMenu = ({ onClose }: IProps) => {
  return (
    <div className="mobile-menu absolute top-0 bottom-0 left-0 right-0 bg-gray-800 h-screen opacity-100 z-30 grid place-items-center overflow-y-hidden">
      <button className="absolute top-0 right-0 mr-2 mt-4" onClick={onClose}>
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.3333 14.9567L41.0433 11.6667L28 24.71L14.9567 11.6667L11.6667 14.9567L24.71 28L11.6667 41.0433L14.9567 44.3333L28 31.29L41.0433 44.3333L44.3333 41.0433L31.29 28L44.3333 14.9567Z"
            fill="white"
          />
          <path
            d="M44.3333 14.9567L41.0433 11.6667L28 24.71L14.9567 11.6667L11.6667 14.9567L24.71 28L11.6667 41.0433L14.9567 44.3333L28 31.29L41.0433 44.3333L44.3333 41.0433L31.29 28L44.3333 14.9567Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="49.5"
              y1="28"
              x2="-14"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEDE5D" />
              <stop offset="1" stopColor="#F97E72" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <ul className="lg:hidden space-y-8 items-center justify-center lg:justify-items-start">
        <li className="menu__item">
          <a href="#" className="text-4xl">
            Articles
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="text-4xl">
            Projects
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="text-4xl">
            Resources
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="text-4xl">
            About
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
