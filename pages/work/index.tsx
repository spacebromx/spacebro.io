import React from 'react'
import ProjectPreview from '@/components/ProjectPreview'
import Link from 'next/link'

const Index = () => {
  return (
    <div className="projects-list py-14 lg:py-20 px-0 lg:px-0">
      <div className="px-4 md:px-8">
        <h3 className="font-black text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-700 mb-6">
          Recent Projects
        </h3>
        <p className="mb-14 md:mb-24 md:text-lg lg:text-xl lg:w-3/5 lg:leading-9 lg:mb-40">
          Here's a list of recent projects that I've worked on. They range from
          WordPress to full fledged apps with Node, React and GraphQL.
        </p>
      </div>
      <ProjectPreview
        title="Project Title Goes Here In This Place"
        description="Invite your team to call and text from the same number. Every message shows who sent it - no more guessing. You can even see when someone is viewing a conversation or typing."
        slug="/work/sample-project"
        image="/images/project-preview.jpg"
      />
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
    </div>
  )
}

export default Index
