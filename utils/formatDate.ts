const formatDate = (date: string, options?: ('day' | 'month'| 'year')[]) => {
  if (date === 'Present') {
    return date
  }

  const formatDate = new Date(`${date}T00:00:00`)
  const month = formatDate.toLocaleDateString('en-US', { month: 'short' })
  const year = formatDate.getFullYear()

  if (options?.includes('day')) {
    const day = formatDate.getDate()
    return `${day} ${month} ${year}`
  } else {
    return `${month} ${year}`
  }
}

export { formatDate }
