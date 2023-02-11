'use client'

import Image from 'next/image'
import Link from 'next/link'
import PostFooter from '@components/Content/PostFooter'
import { MDXEmbedProvider } from 'mdx-embed'
import clsx from 'clsx'

interface IProps {
  isFeatured?: boolean
  url: string
  title: string
  excerpt: string
  readingTime: string
  featuredImage: string
}

const Post = ({
  isFeatured = false,
  url,
  title,
  excerpt,
  readingTime,
  featuredImage,
}: IProps) => {
  // return <div>hello</div>
  return (
    // @ts-ignore
    <MDXEmbedProvider>
      <div className="post grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-4 md:gap-y-0 lg:gap-y-0 relative">
        {isFeatured && (
          <>
            <div className="absolute -left-1 md:-left-4 lg:-left-4 top-8 bg-orange-900 z-10 px-3 py-1 shadow-md rounded-lg">
              <span className="font-semibold">featured</span>
            </div>
            <div className="col-span-1 md:col-start-1 md:col-end-5 lg:col-start-1 lg:col-end-5">
              <Link href={url}>
                <Image
                  src={
                    featuredImage
                      ? `${process.env.NEXT_PUBLIC_API_URL}/assets/${featuredImage}?fit=cover&width=400&height=343&quality=75`
                      : `${process.env.NEXT_PUBLIC_SITE_URL}/images/featured-placeholder.jpg`
                  }
                  alt="post"
                  width="400"
                  height="343"
                  className="rounded-2xl"
                />
              </Link>
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
            className={clsx(
              'text-2xl text-white font-bold leading-9 mb-4 md:mb-6 lg:mb-8 hover:text-teal-600 transition-all',
              isFeatured &&
                'text-3xl lg:text-4xl font-bold leading-10 lg:leading-snug mb-4 lg:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-900 to-orange-900'
            )}
          >
            <Link href={url}>{title}</Link>
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
              // rome-ignore lint/security/noDangerouslySetInnerHtml: content already sanitized
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
          </div>
          <div className="absolute bottom-0 flex w-full">
            <PostFooter url={url} readingText={readingTime} />
          </div>
        </div>
      </div>
    </MDXEmbedProvider>
  )
}

export default Post
