import db from '@/lib/firebase'

export default async (_, res) => {
  const snapshot = await db.ref('views').once('value')
  const views = snapshot.val()

  console.log(views)

  return res.status(200).json({ items: views })
}
