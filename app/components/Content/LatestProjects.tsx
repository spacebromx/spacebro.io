import { IProject } from '@/types/Content'
import ProjectPreview from '@components/Content/ProjectPreview'
import { truncateText } from '@/utils'
import { MAX_PROJECT_EXCERPT_CHARS } from '@/constants'
import SeeMoreProjectsButton from '@components/Content/SeeMoreProjectsButton'

interface IProps {
  projects: Array<IProject>
}

const LatestProjects = ({ projects }: IProps) => {
  return (
    <div>
      <div className="projects-list pb-32">
        <h3 className="text-center font-black text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700 mb-14 md:mb-24 lg:mb-40">
          Recent Projects
        </h3>
        {projects.map(({ id, title, slug, excerpt, featured_image }) => (
          <ProjectPreview
            key={id}
            title={title}
            description={truncateText(excerpt, MAX_PROJECT_EXCERPT_CHARS)}
            slug={`/work/${slug}`}
            image={`${process.env.NEXT_PUBLIC_API_URL}/assets/${featured_image}`}
          />
        ))}
        <div className="text-center">
          <SeeMoreProjectsButton />
        </div>
      </div>
    </div>
  )
}

export default LatestProjects
