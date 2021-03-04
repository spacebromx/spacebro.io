import { NextSeo } from 'next-seo'
import ProjectPreview from '@/components/ProjectPreview'
import { GetStaticProps } from 'next'
import Fetcher from '@/lib/fetcher'
import { truncateText } from '@/utils'
import { MAX_PROJECT_EXCERPT_CHARS } from '@/constants'

const WorkIndex = ({ projects }) => {
  return (
    <>
      <NextSeo title="Work & Recent Projects" />
      <div className="projects-list py-14 lg:py-20 px-0 lg:px-0">
        <div className="px-4 md:px-8">
          <h3 className="font-black text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700 mb-6">
            Recent Projects
          </h3>
          <p className="mb-14 md:mb-24 md:text-lg lg:text-xl lg:w-3/5 lg:leading-9 lg:mb-40">
            Here's a list of recent projects that I've worked on. They range
            from WordPress to full fledged apps with Node, React and GraphQL.
          </p>
        </div>
        {projects.map(({ id, title, slug, excerpt, featured_image }) => (
          <ProjectPreview
            key={id}
            title={title}
            description={truncateText(excerpt, MAX_PROJECT_EXCERPT_CHARS)}
            slug={`/work/${slug}`}
            image={`${process.env.NEXT_PUBLIC_API_URL}/assets/${featured_image}`}
          />
        ))}
      </div>
    </>
  )
}

export default WorkIndex

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = await Fetcher(
    `${process.env.NEXT_PUBLIC_API_URL}/items/projects?filter={"status":{"_eq": "published"}}&limit=2`
  )

  return {
    props: {
      projects: projects.data,
    },
    revalidate: 1,
  }
}
