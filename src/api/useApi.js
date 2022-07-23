import axios from 'axios'
import { useState } from 'react'

const useApi = (config) => {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  const sendReq = async () => {

    setIsLoading(true)
    setError(null)

    try {
      const {data} =  await axios({
        url: config.url,
        method: 'GET',
        data: config.body && config.body
      })

      setData(data)
      // console.log(data);

    } catch (err) {
      if (err.response) {
        // Request made and server responded
        setError(error.response.data.message || 'error')
      } else if (err.request) {
        // The request was made but no response was received
        console.log(err.request)
        setError('No response!' || 'error')
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', err.message)
        setError('Somthing wrong!' || 'error')
      }
    }
    setIsLoading(false)
  }

  return {
    isLoading,
    error,
    data,
    sendReq
  }
}

export default useApi