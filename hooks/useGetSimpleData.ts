// custom hook to get data from api with query parameters
import { useState, useEffect } from 'react'
import axios from 'axios'

// This Hook works to get data from api
// endPoint: is the url where the data is stored,

const useGetSimpleData = <DataType>(endPoint: string): [DataType[], boolean, any] => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  // Effect that executes for schools
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
  }
  , [])

  return [data, loading, error]
}

export { useGetSimpleData }
