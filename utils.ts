import { SITE_URL } from '@/constants'
import { TQueryFilter } from '@/services/types'

export const truncateText = (
  text: string,
  len: number,
  appendEllipsis: boolean = true
): string => {
  return `${text.substr(0, len)}${appendEllipsis ? '[…]' : ''}`
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
    return `${SITE_URL}/images/og-placeholder.jpg`
  }
}

interface IQueryBuilderParams {
  endpoint: string
  quantity?: number
  filter?: TQueryFilter
  extra?: string
}

/**
 * Builds a query compatible with Directus' API
 * @param endpoint
 * @param quantity
 * @param filter
 * @param extra
 */
export function queryStringBuilder({
  endpoint,
  quantity = 1,
  filter = {},
  extra = '',
}: IQueryBuilderParams): string {
  let appliedFilter =
    Object.keys(filter).length === 0
      ? ''
      : `,"${filter.field}":{"_eq": ${filter.value}}`
  return `${process.env.NEXT_PUBLIC_API_URL}/items/${endpoint}?filter={"status":{"_eq": "published"}${appliedFilter}}&limit=${quantity}${extra}`
}
