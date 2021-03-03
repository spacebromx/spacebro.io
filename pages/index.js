import Hero from '@/components/Hero'
import LatestPosts from '@/components/LatestPosts'
import SubscriptionForm from '@/components/SubscriptionForm'
import LatestProjects from '@/components/LatestProjects'

export default function Home() {
  return (
    <div>
      <Hero />
      <LatestPosts />
      <LatestProjects />
      <div className="mb-14 md:mb-24 lg:mb-40">
        <SubscriptionForm />
      </div>
    </div>
  )
}
