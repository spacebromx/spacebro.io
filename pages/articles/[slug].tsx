import Link from 'next/link'
import Image from 'next/image'
import AuthorBox from '@/components/AuthorBox'

export default function Post() {
  return (
    <>
      <article className="post--single px-4 md:px-8 lg:px-0 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-10 lg:leading-snug px-2 lg:w-3/4 mb-4 lg:mb-10 text-white mx-auto">
          This is yet another fake title of another blog post{' '}
        </h1>
        <div className="text-center mb-10 font-normal text-sm md:text-base italic">
          Feb 22, 2020 |{' '}
          <Link href="/">
            <a className="text-green-500">Category</a>
          </Link>
        </div>
        <div className="pb-6 md:pb-10 lg:pb-14 text-center">
          <Image src="/images/post-featured.jpg" width="450" height="330" />
        </div>
        <div className="post-content mx-auto text-lg space-y-6 text-gray-700 md:w-3/4 md:text-xl md:leading-8 lg:leading-9 lg:w-3/5">
          <p>
            And this is a brief description of the text of the post that is
            going to appear as a excerpt in the home page just to simulate how
            the content will <a href="#">look and</a> once the articles have
            been published. This preview shows the separation between
            paragraphs, so it’s easily spottable for text formatting and how it
            will look once the site goes live.
          </p>
          <p>
            And this is a brief description of the text of the post that is
            going to appear as a excerpt in the home page just to simulate how
            the content will look once the articles have been published. This
            preview shows the separation between paragraphs, so it’s easily
            spottable for text formatting and how it will look once the site
            goes live.
          </p>
          <p>
            And this is a brief description of the text of the post that is
            going to appear as a excerpt in the home page just to simulate how
            the content will look once the articles have been published. This
            preview shows the separation between paragraphs, so it’s easily
            spottable for text formatting and how it will look once the site
            goes live.
          </p>
        </div>
      </article>
      <AuthorBox />
    </>
  )
}
