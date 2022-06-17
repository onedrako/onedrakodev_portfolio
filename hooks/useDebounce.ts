import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, wait = 0) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value)
    }, wait)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [value])

  return debouncedValue
}
