const formatDate = (inputDate: string): string => {
  const date = new Date(inputDate)
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
}

export { formatDate }
