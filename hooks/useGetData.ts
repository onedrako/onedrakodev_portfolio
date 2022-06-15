// custom hook to get data from api with query parameters
import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetData = (endPoint: string, inView?:boolean): [any[], boolean, any] => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  const defineQueryParameters = () => {
    let queryParameters
    if (data.length > 0) {
      queryParameters = `?limit=10&offset=${data.length}`
    } else {
      queryParameters = '?limit=10&offset=0'
    }
    return queryParameters
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await axios(endPoint)
        setData(result.data)
      } catch (error: any) {
        setError(error)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (inView) {
      const queryParameters = defineQueryParameters()
      const fetchData = async () => {
        setLoading(true)
        try {
          const result = await axios(`${endPoint}${queryParameters}`)
          setData([...data, ...result.data])
        } catch (error: any) {
          setError(error)
        }
        setLoading(false)
      }
      fetchData()
    }
  }, [inView])

  return [data, loading, error]
}

export { useGetData }
