import Image from 'next/image'
import Link from 'next/link'
import PostFooter from '@/components/PostFooter'

interface IProps {
  isFeatured?: boolean
  url: string
  title: string
  excerpt: string
}

const Post = ({ isFeatured = false, url, title, excerpt }: IProps) => {
  return (
    <div className="post grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-y-0">
      {isFeatured && (
        <div className="col-span-1 lg:col-start-1 lg:col-end-5">
          <Image
            src="/images/post-featured.jpg"
            alt="post"
            width="485"
            height="416"
            className="rounded-2xl"
          />
        </div>
      )}
      <div
        className={
          isFeatured
            ? 'col-span-1 lg:col-start-6 lg:col-end-13 relative'
            : 'col-span-12 relative'
        }
      >
        <h2
          className={
            isFeatured
              ? 'post--featured__title'
              : 'text-2xl font-bold leading-9 mb-4 lg:mb-8'
          }
        >
          <Link href="/">
            <a>{title}</a>
          </Link>
        </h2>
        <div
          className={`text-gray-500 leading-7 lg:leading-8 ${
            isFeatured ? 'text-lg lg:text-xl' : 'text-lg'
          }`}
        >
          <div className={isFeatured ? 'mb-12' : 'mb-12 lg:mb-20'}>
            {excerpt}
          </div>
        </div>
        <div className="absolute bottom-0 flex w-full">
          <PostFooter url={url} readingText="5 mins read" />
        </div>
      </div>
    </div>
  )
}

export default Post
