import Link from 'next/link'
const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-teal-900 to-pink-900 h-0.5 mb-14 lg:mb-20" />
      <div className="footer grid grid-cols-4 gap-y-8 lg:gap-y-0 px-4 lg:px-0 lg:grid-cols-12 mb-20">
        <div className="col-span-4 lg:col-span-4">
          <div className="text-center flex items-center">
            <svg
              className="mb-8"
              width="106"
              height="45"
              viewBox="0 0 106 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.4375 5.84375L9.8125 22.5312L28.4375 38.8438H16.7188L1.625 25.5938C0.6875 24.8229 0.21875 23.8021 0.21875 22.5312C0.21875 21.9479 0.333333 21.3958 0.5625 20.875C0.8125 20.3542 1.14583 19.9062 1.5625 19.5312L16.8438 5.84375H28.4375ZM88.5625 5.84375L103.875 19.5312C104.292 19.9062 104.615 20.3542 104.844 20.875C105.094 21.3958 105.219 21.9479 105.219 22.5312C105.219 23.1354 105.094 23.7083 104.844 24.25C104.594 24.7708 104.25 25.2188 103.812 25.5938L88.6875 38.8438H77L95.625 22.5312L77 5.84375H88.5625Z"
                fill="#FC2EB1"
              />
              <path
                d="M71.2812 0.1875L43 45H34.2812L62.5938 0.1875H71.2812Z"
                fill="#07EDF8"
              />
            </svg>
          </div>
          <div className="text-gray-600 font-normal space-y-2">
            <p>
              &copy; {new Date().getFullYear()} spacebro.io. Some rights
              reserved.
            </p>
            <p>
              Made with love from <span className="mr-2">🇲🇽</span> Mexico City
              by <strong>Alan Medina</strong>, a Software Engineer.
            </p>
          </div>
        </div>
        <div className="col-start-1 col-span-2 lg:col-start-6 lg:col-end-8">
          <h3 className="font-bold text-lg mb-4 text-teal-600 glow-teal">
            Sections
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <a className="text-orange-300">About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-orange-300">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-orange-300 text-green-500 font-bold">
                  Resources
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-orange-300">Articles</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-orange-300">Uses</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-start-3 col-span-2 lg:col-start-8 lg:col-end-10">
          <h3 className="font-bold text-lg mb-4 text-teal-600 glow-teal">
            Social
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <a className="text-orange-300">YouTube</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-orange-300">Instagram</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-orange-300">LinkedIn</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-orange-300">Github</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-orange-300">Facebook</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-start-1 col-end-2 lg:col-start-10 lg:col-end-10">
          <h3 className="font-bold text-lg mb-4 text-teal-600 glow-teal">
            Legal
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <a className="text-orange-300">Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-orange-300">Terms of Use</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-orange-300">Cookies</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-start-3 col-end-4 lg:col-start-12 lg:col-end-12">
          <h3 className="font-bold text-lg mb-4 text-teal-600 glow-teal">
            Cool
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <a className="text-orange-300">freeCodeCamp</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-orange-300">MDN</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
