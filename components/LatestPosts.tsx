import Post from '@/components/Post'
const LatestPosts = () => {
  return (
    <div className="px-4 md:px-8 lg:px-0">
      <Post
        key="001"
        isFeatured
        title="This is a title of a Fake Blog Post That Lives Here"
        excerpt="And this is a brief description of the text of the post that is
            going to appear as a excerpt in the home page just to simulate how
            the content will look once the articles have been published on the
            site."
        url="/"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-24 my-24 lg:my-44">
        {new Array(6).fill(0).map((item) => (
          <Post
            key={item}
            title="This is a title of a Fake Blog Post That Lives Here"
            excerpt="And this is a brief description of the text of the post that is
            going to appear as a excerpt in the home page just to simulate how
            the content will look once the articles have been published on the
            site."
            url="/"
          />
        ))}
      </div>
    </div>
  )
}

export default LatestPosts
