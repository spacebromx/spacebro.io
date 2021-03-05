import Image from 'next/image'

const AuthorBox = () => {
  return (
    <div className="author-bio px-4 md:px-8 py-10 lg:py-14 grid grid-cols-4 md:grid-cols-6 gap-4 mb-12 md:w-3/4 lg:w-4/6 mx-auto">
      <div className="col-span-1">
        <Image
          src="/images/avatar-small.jpg"
          width="90"
          height="90"
          className="rounded-full"
        />
      </div>
      <div className="col-start-2 col-end-5 text-normal md:col-start-2 md:col-end-7">
        <p className="font-bold mb-2 text-lg lg:text-xl">About the author</p>
        <p className="text-lg text-gray-600">
          Alan Medina is a Software Engineer based in Mexico City. He is
          passionate about Frontend and continuous learning.
        </p>
      </div>
    </div>
  )
}

export default AuthorBox
