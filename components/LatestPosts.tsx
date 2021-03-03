import Post from '@/components/Post'

const LatestPosts = ({ featuredPost, posts }) => {
  const { id, title, featured, content, slug } = featuredPost.data[0]

  return (
    <div className="px-4 md:px-8 lg:px-0">
      <Post
        key={id}
        isFeatured={featured}
        title={title}
        excerpt={content}
        url={`/articles/${slug}`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-24 my-24 lg:my-44">
        {posts.data.map((post) => {
          const { id, title, content, slug } = post
          return (
            <Post
              key={id}
              title={title}
              excerpt={content}
              url={`/articles/${slug}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default LatestPosts
