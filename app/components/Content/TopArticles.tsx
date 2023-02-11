import { IPost } from '@/types/Content'
import Link from 'next/link'

interface IProps {
  articles: Array<IPost>
}

const TopArticles = ({ articles }: IProps) => {
  return (
    <>
      <h3 className="text-green-500 font-bold text-2xl mb-8 md:mt-24 lg:mt-32">
        Most Popular 🔥
      </h3>
      <ul className="space-y-6">
        {(articles as Array<Pick<IPost, 'title' | 'slug'>>)!.map(
          ({ title, slug }) => (
            <li className="flex" key={slug}>
              <div className="mr-4">⭐️</div>
              <Link href={slug}>
                <h2 className="text-yellow-900 hover:text-green-900 transition-colors font-bold">
                  {title}
                </h2>
              </Link>
            </li>
          )
        )}
      </ul>
    </>
  )
}

export default TopArticles
