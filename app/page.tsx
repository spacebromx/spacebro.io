import directus from '@lib/directus'
import Hero from '@components/common/Hero'
import LatestPosts from '@components/Content/LatestPosts'
import LatestProjects from '@components/Content/LatestProjects'
import { IPost } from '@/types/Content'

const HomePage = async () => {
  const { data: posts } = await directus.items('articles').readByQuery({
    filter: { featured: { _eq: false } },
    limit: 6,
  })

  const { data: featuredPost } = await directus.items('articles').readByQuery({
    filter: { featured: { _eq: true } },
    limit: 1,
  })

  const { data: projects } = await directus.items('projects').readByQuery({
    // @ts-ignore
    sort: ['-date_created'],
    limit: 3,
  })

  return (
    <div className="container mx-auto">
      <Hero />
      <LatestPosts
        featuredPost={featuredPost as Array<IPost>}
        posts={posts as Array<IPost>}
      />
      <LatestProjects projects={projects as Array<IPost>} />
    </div>
  )
}

export default HomePage
