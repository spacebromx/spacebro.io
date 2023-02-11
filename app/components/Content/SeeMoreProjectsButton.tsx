'use client'

import Link from 'next/link'

const SeeMoreProjectsButton = () => {
  return (
    <Link href="/work">
      <button
        className="font-normal text-lg bg-gradient-to-r hover:bg-gradient-to-l from-teal-900 to-pink-900 px-6 py-2 rounded-lg text-white"
        aria-label="see more projects"
      >
        <span className="drop-shadow-md shadow-gray-800">
          See more projects
        </span>
        🔥
      </button>
    </Link>
  )
}

export default SeeMoreProjectsButton
