export const truncateText = (
  text: string,
  len: number,
  appendEllipsis: boolean = true
): string => {
  return `${text.slice(0, len)}${appendEllipsis ? '[…]' : ''}`
}

export const formatDate = (dateString: string): string => {
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const tmpDate: string = dateString ? dateString : new Date().toISOString()

  // @ts-ignore
  return new Date(tmpDate).toLocaleString('en-US', options)
}

export function getOGImage(og_image: string, featured_image: string): string {
  if (og_image) {
    return `${process.env.NEXT_PUBLIC_API_URL}/assets/${og_image}`
  } else if (featured_image) {
    return `${process.env.NEXT_PUBLIC_API_URL}/assets/${featured_image}`
  } else {
    return `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-placeholder.jpg`
  }
}
