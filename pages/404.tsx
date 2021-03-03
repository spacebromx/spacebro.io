import Link from 'next/link'

export default function ErrorPage() {
  return (
    <div className="grid grid-1 place-items-center h-screen text-center">
      <div>
        <h2 className="text-6xl lg:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-900 to-teal-600 mb-8">
          Uh, oh!
        </h2>
        <p className="text-3xl font-light mb-12">Error 404: Page Not Found</p>
        <p className="w-4/5 lg:w-3/5 mx-auto text-lg lg:text-xl leading-8 lg:leading-10 mb-16 lg:mb-32">
          Well, this is embarrassing. Something is broken and unfortunately, you
          have reached this page. Use the navigation to browse the site instead,
          or if you got a URL, it's possible that the content has been moved or
          deleted permanently.
        </p>
        <div className="text-center">
          <Link href="/">
            <a>
              <button className="font-normal text-lg bg-gradient-to-r hover:bg-gradient-to-l from-yellow-900 to-teal-900 px-6 py-2 rounded-lg">
                &larr; Go back
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
