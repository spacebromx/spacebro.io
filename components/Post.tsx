import Image from 'next/image'
import Link from 'next/link'
import PostFooter from '@/components/PostFooter'

interface IProps {
  isFeatured?: boolean
  url: string
  title: string
  excerpt: string
  readingTime: string
}

const Post = ({
  isFeatured = false,
  url,
  title,
  excerpt,
  readingTime,
}: IProps) => {
  return (
    <div className="post grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-4 md:gap-y-0 lg:gap-y-0 relative">
      {isFeatured && (
        <>
          <div className="absolute -left-1 md:-left-4 lg:-left-4 top-8 bg-teal-600 z-10 px-3 py-1 shadow-md">
            <span className="font-semibold">featured</span>
          </div>
          <div className="col-span-1 md:col-start-1 md:col-end-5 lg:col-start-1 lg:col-end-5">
            <Image
              src="/images/post-featured.jpg"
              alt="post"
              width="485"
              height="416"
              className="rounded-2xl"
            />
          </div>
        </>
      )}
      <div
        className={
          isFeatured
            ? 'col-span-1 md:col-start-6 md:col-end-13 lg:col-start-6 lg:col-end-13 relative'
            : 'col-span-12 relative'
        }
      >
        <h2
          className={
            isFeatured
              ? 'post--featured__title'
              : 'text-2xl font-bold leading-9 mb-4 md:mb-6 lg:mb-8'
          }
        >
          <Link href={url}>
            <a>{title}</a>
          </Link>
        </h2>
        <div
          className={`post-content text-gray-600 leading-7 lg:leading-8 ${
            isFeatured
              ? 'text-lg md:text-lg lg:text-2xl lg:leading-9'
              : 'text-lg md:text-xl'
          }`}
        >
          <div
            className={isFeatured ? 'mb-12' : 'mb-12 lg:mb-20'}
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
        <div className="absolute bottom-0 flex w-full">
          <PostFooter url={url} readingText={readingTime} />
        </div>
      </div>
    </div>
  )
}

export default Post
