import Single from '@/components/Layout/single'
import AuthorBox from '@/components/AuthorBox'
import { GetStaticPaths, GetStaticProps } from 'next'
import Fetcher from '@/lib/fetcher'
import { parseMDXContent } from '@/lib/mdx'
import { IProject } from '@/interfaces/Project'
import ProjectsService from '@/services/ProjectsService'

interface IProps {
  project: IProject
}

const SingleWork = ({ project }: IProps) => {
  return (
    <Single {...project} urlPrefix="work" showViewCount={false}>
      <AuthorBox />
    </Single>
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
  const projectsService = ProjectsService.getInstance()
  const { data: rawProject } = await projectsService.getProjects({
    quantity: 1,
    filter: {
      field: 'slug',
      value: `"${params.slug}"`,
    },
  })

  const project = await parseMDXContent(rawProject)

  return {
    props: { project: project[0] },
  }
}
