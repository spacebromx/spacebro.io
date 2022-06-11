import Single from '@/components/Layout/single'
import AuthorBox from '@/components/AuthorBox'
import { GetStaticPaths, GetStaticProps } from 'next'
import { parseMDXContent } from '@/lib/mdx'
import { IProject } from '@/interfaces/Project'
import ProjectsService from '@/services/ProjectsService'
import { IGeneratedPageProps } from '@/interfaces/Page'

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
  const projectsService = ProjectsService.getInstance()
  const { data: projects } = await projectsService.getProjects({
    quantity: 1000,
  })

  const paths: Array<IGeneratedPageProps> = projects.map(
    (project: IProject) => ({
      params: { id: project.id.toString(), slug: project.slug },
    })
  )

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
