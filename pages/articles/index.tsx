import Post from '@/components/Post'
import TopArticles from '@/components/TopArticles'

const mockData = new Array(20).fill({
  title:
    'This is an example of a post title that will be populated from the database',
  url: '/',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
})

export default function Articles() {
  return (
    <div className="posts-listing grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-24 md:gap-12 lg:gap-24 mx-4 md:mx-8 lg:mx-0 mt-14 mb-16 lg:my-20">
      <div className="col-span-1 md:col-span-4 lg:col-span-8">
        <h2 className="text-3xl lg:text-5xl font-bold leading-10 lg:leading-snug mb-12 lg:mb-14 bg-clip-text text-transparent bg-gradient-to-r from-pink-900 via-teal-600 to-teal-900">
          All Articles
        </h2>
        <div className="space-y-16">
          {mockData.map(({ title, content, url }, index) => (
            <Post
              key={index}
              url={url}
              title={title}
              excerpt={content.substr(0, 150)}
            />
          ))}
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-4">
        <TopArticles />
      </div>
    </div>
  )
}
