import directus from '@lib/directus'
import Hero from '@components/common/Hero'

const HomePage = async () => {
  const articles = await directus.items('articles').readByQuery({
    filter: { featured: { _eq: false } },
    limit: 6,
  })

  const featuredArticles = await directus.items('articles').readByQuery({
    filter: { featured: { _eq: true } },
    limit: 1,
  })

  const projects = await directus.items('projects').readByQuery({
    // @ts-ignore
    sort: ['-date_created'],
    limit: 3,
  })

  return (
    <>
      <Hero />
    </>
  )
}

export default HomePage
