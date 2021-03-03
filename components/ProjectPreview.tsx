import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  title: string
  slug: string
  description: string
  image: string
}

const ProjectPreview = ({ title, slug, description, image }: IProps) => {
  return (
    <div className="project-preview grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-14 md:mb-24 lg:mb-40 px-4 md:px-8 lg:px-0">
      <div className="md:w-5/6 lg:w-3/4 mx-auto place-items-center grid">
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-8 leading-9 lg:leading-10">
            <Link href={slug}>
              <a>{title}</a>
            </Link>
          </h3>
          <p className="text-lg lg:text-xl leading-7 lg:leading-9 text-gray-600">
            {description}
          </p>
        </div>
      </div>
      <div>
        <Link href={slug}>
          <a>
            <Image
              className="rounded-2xl lg:rounded-3xl"
              src={image}
              width="450"
              height="330"
            />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ProjectPreview
