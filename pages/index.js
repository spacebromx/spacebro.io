import Hero from '@/components/Hero'
import LatestPosts from '@/components/LatestPosts'
import SubscriptionForm from '@/components/SubscriptionForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Hero />
      <LatestPosts />
      <div className="mb-24">
        <SubscriptionForm />
      </div>
      <Footer />
    </div>
  )
}
