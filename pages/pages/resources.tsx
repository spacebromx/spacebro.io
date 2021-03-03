import Single from '@/components/Layout/single'
import AuthorBox from '@/components/AuthorBox'

const SingleWork = () => {
  return (
    <div>
      <Single
        title="This is an example of recent project page"
        content="Hello world"
      >
        <AuthorBox />
      </Single>
    </div>
  )
}

export default SingleWork
