'use client'

import { ReactNode } from 'react'
import { IPost } from '@/types/Content'
import { formatDate, truncateText, getOGImage } from '@/utils'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@components/Content/MDXComponents'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { SEO_SNIPPET_LENGTH } from '@/constants'

interface IProps {
  children: ReactNode
  post: IPost
  urlPrefix: 'articles' | 'work' | 'pages'
}

const ArticleDetail = ({ children, post, urlPrefix }: IProps) => {
  const {
    title,
    date,
    featured_image: featuredImage,
    content,
    seo_description,
    excerpt,
    og_image,
    slug,
  } = post

  return (
    <>
      <NextSeo
        useAppDir
        title={title}
        description={
          seo_description
            ? truncateText(seo_description, SEO_SNIPPET_LENGTH, false)
            : truncateText(excerpt, SEO_SNIPPET_LENGTH, false)
        }
        openGraph={{
          type: 'website',
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${urlPrefix}/${slug}`,
          title,
          description: seo_description
            ? truncateText(seo_description, SEO_SNIPPET_LENGTH, false)
            : truncateText(excerpt, SEO_SNIPPET_LENGTH, false),
          images: [
            {
              url: getOGImage(og_image as string, featuredImage),
              width: 800,
              height: 600,
              alt: title,
            },
          ],
        }}
      />
      <article className="post--single px-4 md:px-8 lg:px-0 py-10 md:py-16">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center leading-10 lg:leading-snug px-2 lg:w-3/4 mb-4 lg:mb-10 text-white mx-auto">
          {title}
        </h1>
        <div className="text-yellow-900 text-center mb-10 font-normal text-sm md:text-base relative">
          Last update: {formatDate(date as string)}
        </div>
        {featuredImage && (
          <div className="pb-6 md:pb-10 lg:pb-14 text-center">
            <div className="content mx-auto ">
              <div className="w-full flex items-center flex-col">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${featuredImage}`}
                  alt={title}
                  width={500}
                  height={420}
                />
              </div>
            </div>
          </div>
        )}
        <div className="post-content mx-auto text-xl leading-8 space-y-6 text-gray-700 md:w-3/4 md:text-xl md:leading-8 lg:leading-9 lg:w-3/5">
          {/*// @ts-ignore*/}
          <MDXRemote {...content} components={MDXComponents} />
        </div>
      </article>
      {children}
    </>
  )
}

export default ArticleDetail
