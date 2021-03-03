import React from 'react'
import Image from 'next/image'

interface IProps {
  title: string
  image?: string
  content: string
  children?: React.ReactNode
}

const Single = ({ title, image, content, children }: IProps) => {
  return (
    <>
      <article className="post--single px-4 md:px-8 lg:px-0 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-10 lg:leading-snug px-2 lg:w-3/4 mb-4 lg:mb-10 text-white mx-auto">
          {title}
        </h1>
        <div className="text-center mb-10 font-normal text-sm md:text-base italic">
          Last update: Feb 22, 2020
        </div>
        {image && (
          <div className="pb-6 md:pb-10 lg:pb-14 text-center">
            <Image src="/images/post-featured.jpg" width="450" height="330" />
          </div>
        )}
        <div className="post-content mx-auto text-lg space-y-6 text-gray-700 md:w-3/4 md:text-xl md:leading-8 lg:leading-9 lg:w-3/5">
          {content}
        </div>
      </article>
      {children}
    </>
  )
}

export default Single
