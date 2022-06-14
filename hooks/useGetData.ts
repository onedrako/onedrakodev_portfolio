// customhook to get data from api
import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetData = (endPoint: string): [any[], boolean, any] => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await axios(endPoint)
        setData(result.data)
        console.log(result.data)
      } catch (error: any) {
        setError(error)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return [data, loading, error]
}

export { useGetData }
