import { useState, useEffect } from 'react'

export const useFetchData = (path) => {
  const initialState = (path === 'proximo' || path === 'ultimo') ? {} : []
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://challenge-plg-spacex.herokuapp.com/lancamentos/${path}`)
        const result = await response.json()
        setData(result)
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [path])

  return [ data, loading, error ]
}
