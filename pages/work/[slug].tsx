import Single from '@/components/Layout/single'
import AuthorBox from '@/components/AuthorBox'
import { GetStaticPaths, GetStaticProps } from 'next'
import Fetcher from '@/lib/fetcher'
import { parseMDXContent } from '@/lib/mdx'
import { IProject } from '@/interfaces/Project'

interface IProps {
  project: IProject
}

const SingleWork = ({
  project: { title, date_updated, featured_image, content },
}: IProps) => {
  return (
    <div>
      <Single
        title={title}
        date={date_updated}
        featuredImage={featured_image}
        content={content}
      >
        <AuthorBox />
      </Single>
    </div>
  )
}

export default SingleWork

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: projects } = await Fetcher(
    `${process.env.NEXT_PUBLIC_API_URL}/items/projects?filter={"status":{"_eq": "published"}}`
  )

  const paths = projects.map((project: IProject) => ({
    params: { id: project.id, slug: project.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: rawProject } = await Fetcher(
    `${process.env.NEXT_PUBLIC_API_URL}/items/projects?filter={"slug":{"_eq":"${params.slug}"},"status":{"_eq": "published"}}`
  )

  const project = await parseMDXContent(rawProject)

  return {
    props: { project: project[0] },
  }
}
