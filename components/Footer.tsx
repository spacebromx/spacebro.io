import Link from 'next/link'
const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-teal-900 to-pink-900 h-0.5 mb-14 lg:mb-20" />
      <div className="footer grid grid-cols-4 gap-y-8 md:gap-y-0 md:gap-x-8 lg:gap-y-0 px-4 md:px-8 lg:px-0 md:grid-cols-6 lg:grid-cols-12 mb-20">
        <div className="col-span-4 md:col-span-2 lg:col-span-4">
          <div className="text-center flex items-center">
            <svg
              className="mb-8"
              width="89"
              height="51"
              viewBox="0 0 89 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.9813 13.6L10.8729 32.5125L31.9813 51H18.7L1.59375 35.9833C0.53125 35.1097 0 33.9528 0 32.5125C0 31.8514 0.129861 31.2257 0.389583 30.6354C0.672917 30.0451 1.05069 29.5375 1.52292 29.1125L18.8417 13.6H31.9813Z"
                fill="#FC2EB1"
              />
              <path
                d="M64.6 0L32.5479 50.7875H22.6667L54.7542 0H64.6Z"
                fill="#07EDF8"
              />
              <path
                d="M69.7709 13.6L87.125 29.1125C87.5972 29.5375 87.9632 30.0451 88.2229 30.6354C88.5063 31.2257 88.6479 31.8514 88.6479 32.5125C88.6479 33.1972 88.5063 33.8465 88.2229 34.4604C87.9396 35.0507 87.55 35.5583 87.0542 35.9833L69.9125 51H56.6667L77.775 32.5125L56.6667 13.6H69.7709Z"
                fill="#FC2EB1"
              />
            </svg>
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
              <Link href="/articles">
                <a className="text-orange-300">Articles</a>
              </Link>
            </li>
            <li>
              <Link href="/work">
                <a className="text-orange-300">Work</a>
              </Link>
            </li>
            <li>
              <Link href="/pages/resources">
                <a className="text-orange-300 text-green-500 font-bold">
                  Resources
                </a>
              </Link>
            </li>
            <li>
              <Link href="/pages/about">
                <a className="text-orange-300">About</a>
              </Link>
            </li>
            <li>
              <Link href="/pages/uses">
                <a className="text-orange-300">Uses</a>
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
                YouTube
              </a>
            </li>
            <li>
              <a href="#/" className="text-orange-300">
                Instagram
              </a>
            </li>
            <li>
              <a href="#/" className="text-orange-300">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#/" className="text-orange-300">
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
              <Link href="/pages/privacy-policy">
                <a className="text-orange-300">Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/pages/terms-of-use">
                <a className="text-orange-300">Terms of Use</a>
              </Link>
            </li>
            <li>
              <Link href="/pages/cookies">
                <a className="text-orange-300">Cookies</a>
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
                rel="nofollow"
                className="text-orange-300 break-words"
              >
                freeCodeCamp
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/"
                rel="nofollow"
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
