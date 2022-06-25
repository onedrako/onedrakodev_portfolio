// custom hook to get data from api with query parameters
import { useState, useEffect, RefObject } from 'react'
import axios from 'axios'

// This Hook works to get data from api for certificates page, get the list of certifications and get more data when user scroll. Also works for search bar for certificates

// endPoint: is the url where the data is stored,
// inView: When user makes scroll, the hook will call the api to get more data,
// searchValue: the value of the search bar
// searchSection: the section where the results will be shown, use it to reload the scroll

const limit = 5

const useGetData = <DataType>(endPoint: string, inView?:boolean, searchValue?: string, searchSection?: RefObject<HTMLDivElement>): [DataType[], boolean, any, boolean] => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)
  const [fullData, setFullData] = useState<boolean>(false)

  const defineQueryParameters = () => {
    let queryParameters
    if (data.length > 0) {
      queryParameters = `limit=${limit}&offset=${data.length}`
    } else {
      queryParameters = `limit=${limit}&offset=0`
    }
    return queryParameters
  }

  // Effect that executes for schools
  useEffect(() => {
    if (!endPoint.includes('search')) {
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
  }, [])

  // It turnes more complex, have 2 cases: when have inview for intersection observer , but it depends on if this is a search o normal certificates list
  useEffect(() => {
    // For normal list
    if (inView && !endPoint.includes('search')) {
      const fetchData = async () => {
        setLoading(true)
        const queryParameters = defineQueryParameters()
        try {
          const result = await axios(`${endPoint}${queryParameters}`)
          setData([...data, ...result.data])
          if (result.data.length < limit) {
            setFullData(true)
            setLoading(false)
            return
          }
        } catch (error: any) {
          setError(error)
        }
        setLoading(false)
      }
      fetchData()

      // For search list
    } else if (inView && endPoint.includes('search')) {
      const queryParameters = defineQueryParameters()
      const fetchData = async () => {
        setLoading(true)
        try {
          const result = await axios(`${endPoint}${searchValue}&${queryParameters}`)
          setData([...data, ...result.data])
          if (result.data.length < limit) {
            setFullData(true)
            setLoading(false)
            return
          }
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
    searchSection?.current?.scrollTo(0, 0)
    if ((endPoint.includes('search') && searchValue) && searchValue.length > 2) {
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

  return [data, loading, error, fullData]
}

export { useGetData }
