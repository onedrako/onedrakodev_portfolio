import axios from 'axios'

export const getData = async (endPoint: string) => {
  let data
  const result = await axios(endPoint).then(res => {
    data = res.data
  }
  ).catch(err => {
    console.log(err)
  }

  )
  return data
}
