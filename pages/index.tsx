import { GetStaticProps } from 'next'
import Hero from '@/components/Hero'
import LatestPosts from '@/components/LatestPosts'
import LatestProjects from '@/components/LatestProjects'
import { IPost } from '@/interfaces/Post'
import { IProject } from '@/interfaces/Project'
import ArticlesService from '@/services/ArticlesService'
import ProjectsService from '@/services/ProjectsService'

interface IProps {
  featuredPost: IPost
  posts: Array<IPost>
  projects: Array<IProject>
}

export default function Home({ featuredPost, posts, projects }: IProps) {
  return (
    <div>
      <Hero />
      <LatestPosts featuredPost={featuredPost} posts={posts} />
      <LatestProjects projects={projects} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const articlesService = ArticlesService.getInstance()
  const projectsService = ProjectsService.getInstance()
  const [featuredPost, posts, projects] = await Promise.all([
    articlesService.getFeaturedPosts(),
    articlesService.getNonFeaturedPosts(6),
    projectsService.getProjects(3),
  ])

  return {
    props: {
      featuredPost: featuredPost.data[0],
      posts: posts.data,
      projects: projects.data,
    },
    revalidate: 1,
  }
}
