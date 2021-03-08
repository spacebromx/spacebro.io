import { useEffect } from 'react'
import useSWR from 'swr'
import format from 'comma-number'
import Fetcher from '@/lib/fetcher'

const ViewCounter = ({ slug }: { slug: string }) => {
  const { data } = useSWR(`/api/views/${slug}`, Fetcher)
  const views = data?.total

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      })

    if (process.env.NODE_ENV === 'production') registerView()
  }, [slug])

  return (
    <span className="text-yellow-900">{`${
      views ? format(views.count) : '–––'
    } views`}</span>
  )
}

export default ViewCounter
