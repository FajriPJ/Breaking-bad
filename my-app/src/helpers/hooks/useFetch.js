import React, {useState, useEffect} from 'react'


export default function useFetch(url) {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState([false])
  const [ error, setError ] = useState(null)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {

      fetch(url)
        .then(res => res.json())
        .then(data => {
          setData(data)
        })
        .catch(err => setError(err))
        .finally(() => setLoading(false)) 
    }, 1000)

  }, [])

  return {
    data,
    loading,
    error
  }
}
