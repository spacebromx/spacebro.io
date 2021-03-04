import React from 'react'
import Image from 'next/image'
import MDXComponents from '@/components/MDXComponents'
import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'
import { formatDate } from '@/utils'

interface IProps {
  title: string
  date: string
  featuredImage: string
  content: unknown | string
  children?: React.ReactNode
}

const Single = ({
  title,
  date,
  featuredImage,
  content,
  children = null,
}: IProps) => {
  return (
    <>
      <article className="post--single px-4 md:px-8 lg:px-0 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-10 lg:leading-snug px-2 lg:w-3/4 mb-4 lg:mb-10 text-white mx-auto">
          {title}
        </h1>
        <div className="text-center mb-10 font-normal text-sm md:text-base italic">
          Last update: {formatDate(date)}
        </div>
        {featuredImage && (
          <div className="pb-6 md:pb-10 lg:pb-14 text-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${featuredImage}`}
              width="450"
              height="330"
            />
          </div>
        )}
        <div className="post-content mx-auto text-lg space-y-6 text-gray-700 md:w-3/4 md:text-xl md:leading-8 lg:leading-9 lg:w-3/5">
          {hydrate(content as MdxRemote.Source, {
            components: MDXComponents,
          })}
        </div>
      </article>
      {children}
    </>
  )
}

export default Single
