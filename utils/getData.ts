import { useEffect } from 'react'

export const getData = async (endPoint: string) => {
  useEffect(() => {
    const result = await axios(endPoint)
  }, [endPoint])
  return result.data
}
