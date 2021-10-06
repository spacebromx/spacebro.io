import db from '@/lib/firebase'

const getViews =  async (_, res) => {
  const snapshot = await db.ref('views').once('value')
  const views = snapshot.val()

  return res.status(200).json({ items: views })
}

export default getViews