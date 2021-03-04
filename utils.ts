export const truncateText = (text: string, len: number): string => {
  return `${text.substr(0, len)} […]`
}

export const formatDate = (dateString: string): string => {
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return new Date(dateString).toLocaleString('en-US', options)
}
