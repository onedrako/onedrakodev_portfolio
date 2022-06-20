// custom hook to get data from api with query parameters
import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetData = <DataType>(endPoint: string, inView?:boolean, searchValue?: string): [DataType[], boolean, any] => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  const defineQueryParameters = () => {
    let queryParameters
    if (data.length > 0) {
      queryParameters = `limit=10&offset=${data.length}`
    } else {
      queryParameters = 'limit=10&offset=0'
    }
    return queryParameters
  }

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
  }, [])

  // It turnes more complex, have 2 cases: when have inview for intersection observer , but it depends on if this is a search o normal certificates list
  useEffect(() => {
    // For normal list
    if (inView && !endPoint.includes('search')) {
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

      // For search list
    } else if (inView && endPoint.includes('search')) {
      if (data.length % 10) {
        return
      }
      const queryParameters = defineQueryParameters()
      const fetchData = async () => {
        setLoading(true)
        try {
          const result = await axios(`${endPoint}${searchValue}&${queryParameters}`)
          setData([...data, ...result.data])
        } catch (error: any) {
          setError(error)
        }
        setLoading(false)
      }
      fetchData()
    }
  }, [inView])

  // It executes for search, only when user type on search bar bringing the initial data, always start on offset 0
  useEffect(() => {
    if ((endPoint.includes('search') && searchValue) && searchValue.length > 3) {
      const queryParameters = 'limit=10&offset=0'
      const fetchData = async () => {
        setLoading(true)
        try {
          const result = await axios(`${endPoint}${searchValue}&${queryParameters}`)
          setData(result.data)
        } catch (error: any) {
          setError(error)
        }
        setLoading(false)
      }
      fetchData()
    }
  }, [searchValue])

  return [data, loading, error]
}

export { useGetData }
