export default async function Fetcher(...args) {
  try {
    // @ts-ignore
    const res = await fetch(...args)

    return res.json()
  } catch (e) {
    return null
  }
}
