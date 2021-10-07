import React from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import ViewCounter from '@/components/ViewCounter'
import MDXComponents from '@/components/MDXComponents'
import { MDXRemote } from 'next-mdx-remote'
import { formatDate, getOGImage, truncateText } from '@/utils'
import { SEO_SNIPPET_LENGTH, SITE_URL } from '@/constants'

interface IProps {
  title: string
  date?: string
  featured_image?: string
  content: unknown | string
  excerpt?: string
  children?: React.ReactNode
  seo_description?: string
  slug: string
  og_image?: string
  urlPrefix: 'articles' | 'work' | 'pages'
  showViewCount?: boolean
}

const Single = (props: IProps) => {
  const {
    title,
    date,
    featured_image: featuredImage,
    content,
    children = null,
    seo_description,
    excerpt,
    slug,
    og_image,
    urlPrefix,
    showViewCount = false,
  } = props
  return (
    <>
      <NextSeo
        title={title}
        description={
          seo_description
            ? truncateText(seo_description, SEO_SNIPPET_LENGTH, false)
            : truncateText(excerpt, SEO_SNIPPET_LENGTH, false)
        }
        openGraph={{
          type: 'website',
          url: `${SITE_URL}/${urlPrefix}/${slug}`,
          title,
          description: seo_description
            ? truncateText(seo_description, SEO_SNIPPET_LENGTH, false)
            : truncateText(excerpt, SEO_SNIPPET_LENGTH, false),
          images: [
            {
              url: getOGImage(og_image, featuredImage),
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
        <div className="text-center mb-10 font-normal text-sm md:text-base relative">
          Last update: {formatDate(date)}
          {showViewCount ? (
            <>
              {' : '} <ViewCounter slug={slug} />
            </>
          ) : null}
        </div>
        {featuredImage && (
          <div className="pb-6 md:pb-10 lg:pb-14 text-center">
            <div className="content mx-auto ">
              <div className="w-full">
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

export default Single
