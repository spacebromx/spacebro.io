import { NextApiRequest, NextApiResponse } from 'next'
import db from '@/lib/firebase'
import Fetcher from '@/lib/fetcher'

const logViews =  async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const ref = db.ref('views').child(req.query.slug as string)
    const post = await Fetcher(
      `${process.env.NEXT_PUBLIC_API_URL}/items/articles?filter={"slug":{"_eq":"${req.query.slug}"},"status":{"_eq": "published"}}`
    )

    const { snapshot } = await ref.transaction((currentViews) => {
      if (currentViews === null) {
        return { title: post.data[0].title, count: 1 }
      }

      return { title: post.data[0].title, count: currentViews.count + 1 }
    })

    return res.status(200).json({
      total: snapshot.val(),
    })
  }

  if (req.method === 'GET') {
    const snapshot = await db
      .ref('views')
      .child(req.query.slug as string)
      .once('value')
    const views = snapshot.val()

    return res.status(200).json({ total: views })
  }
}

export default logViews