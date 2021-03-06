import Link from 'next/link'
import ProjectPreview from '@/components/ProjectPreview'
import { IProject } from '@/interfaces/Project'
import { truncateText } from '@/utils'
import { MAX_PROJECT_EXCERPT_CHARS } from '@/constants'

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
          <Link href="/work">
            <a>
              <button
                className="font-normal text-lg bg-gradient-to-r hover:bg-gradient-to-l from-teal-900 to-pink-900 px-6 py-2 rounded-lg"
                aria-label="see more projects"
              >
                See more projects 🔥
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LatestProjects
