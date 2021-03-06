import Link from 'next/link'
import useSWR from 'swr'
import format from 'comma-number'
import Fetcher from '@/lib/fetcher'

const mockData = new Array(5).fill({
  title: 'This is an example title of a popular post on the sidebar',
  slug: '/articles/hello-world',
  views: 1222,
})

const TopArticles = () => {
  const { data } = useSWR(`/api/views/`, Fetcher)
  let posts = []

  if (data) {
    posts = Object?.keys(data.items).map((obj) => {
      const tmpItem = data.items[obj]
      return {
        title: tmpItem.title,
        slug: `/articles/${obj}`,
        views: format(tmpItem.count),
      }
    })
  }

  return (
    <>
      <h3 className="text-green-500 font-bold text-2xl mb-8 md:mt-24 lg:mt-32">
        Most Popular 🔥
      </h3>
      <ul className="space-y-6">
        {posts
          .sort((a, b) => b.views - a.views)
          .map(({ title, slug, views }, index) => (
            <li className="flex" key={index}>
              <div className="mr-4">⭐️</div>
              <Link href={slug}>
                <a>
                  <h2 className="text-yellow-900 hover:text-green-900 transition-colors font-bold">
                    {title}
                  </h2>
                  <p className="text-sm italic text-gray-700">{views} views</p>
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </>
  )
}

export default TopArticles
