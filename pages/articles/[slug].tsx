import AuthorBox from '@/components/AuthorBox'
import Single from '@/components/Layout/single'

export default function Post() {
  return (
    <Single
      title="This is yet another fake title of another blog post"
      content="And this is a brief description of the"
    >
      <AuthorBox />
    </Single>
  )
}
