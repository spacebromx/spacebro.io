export default async function Fetcher(...args) {
  try {
    // @ts-ignore
    const res = await fetch(...args)

    return res.json()
  } catch (e) {
    console.error(e)
    return null
  }
}
