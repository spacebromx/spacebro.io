import {
  MAX_NORMAL_EXCERPT_CHARS,
  MAX_FEATURED_EXCERPT_CHARS,
} from '@/constants.ts'
import { truncateText } from 'utils'
import Post from '@/components/Post'
import { IPost } from '@/interfaces/Posts'

interface IProps {
  featuredPost: IPost
  posts: Array<IPost>
}

const LatestPosts = ({ featuredPost, posts }: IProps) => {
  const { id, title, featured, excerpt, slug } = featuredPost

  return (
    <div className="px-4 md:px-8 lg:px-0">
      <Post
        key={id}
        isFeatured={featured}
        title={title}
        excerpt={truncateText(excerpt, MAX_FEATURED_EXCERPT_CHARS)}
        url={`/articles/${slug}`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-24 my-24 lg:my-44">
        {posts.map((post) => {
          const { id, title, excerpt, slug } = post
          return (
            <Post
              key={id}
              title={title}
              excerpt={truncateText(excerpt, MAX_NORMAL_EXCERPT_CHARS)}
              url={`/articles/${slug}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default LatestPosts
