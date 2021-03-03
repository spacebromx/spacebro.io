import Link from 'next/link'
import ProjectPreview from '@/components/ProjectPreview'

const LatestProjects = () => {
  return (
    <div>
      <div className="projects-list pb-32">
        <h3 className="text-center font-black text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700 mb-14 md:mb-24 lg:mb-40">
          Recent Projects
        </h3>
        <ProjectPreview
          title="Project Title Goes Here In This Place"
          description="Invite your team to call and text from the same number. Every message shows who sent it - no more guessing. You can even see when someone is viewing a conversation or typing."
          slug="/"
          image="/images/project-preview.jpg"
        />
        <ProjectPreview
          title="Project Title Goes Here In This Place"
          description="Invite your team to call and text from the same number. Every message shows who sent it - no more guessing. You can even see when someone is viewing a conversation or typing."
          slug="/"
          image="/images/project-preview.jpg"
        />
        <div className="text-center">
          <Link href="/work">
            <a>
              <button className="font-normal text-lg bg-gradient-to-r hover:bg-gradient-to-l from-teal-900 to-pink-900 px-6 py-2 rounded-lg">
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
