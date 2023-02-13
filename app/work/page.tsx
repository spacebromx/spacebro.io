import ProjectPreview from '@components/Content/ProjectPreview'
import { truncateText } from '@/utils'
import { MAX_PROJECT_EXCERPT_CHARS } from '@/constants'
import directus from '@lib/directus'
import { IPost } from '@/types/Content'

const ProjectsPage = async () => {
  const { data: projects } = await directus.items('projects').readByQuery({
    // @ts-ignore
    sort: ['-date_created'],
  })

  return (
    <div className="container mx-auto">
      <div className="projects-list py-14 lg:py-20 px-0 lg:px-0">
        <div className="px-4 md:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold leading-10 lg:leading-snug mb-12 lg:mb-14 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-900 to-teal-900">
            Recent Projects
          </h2>
          <p className="text-white mb-14 md:mb-24 md:text-lg lg:text-xl lg:w-3/5 lg:leading-9 lg:mb-40">
            Here's a list of recent projects that I've worked on. They range
            from WordPress to full fledged apps with Node, React and GraphQL.
          </p>
        </div>
        {(projects as Array<IPost>).map(
          ({ id, title, slug, excerpt, featured_image }) => (
            <ProjectPreview
              key={id}
              title={title}
              description={truncateText(excerpt, MAX_PROJECT_EXCERPT_CHARS)}
              slug={`/work/${slug}`}
              image={`${process.env.NEXT_PUBLIC_API_URL}/assets/${featured_image}`}
            />
          )
        )}
      </div>
    </div>
  )
}

export default ProjectsPage
