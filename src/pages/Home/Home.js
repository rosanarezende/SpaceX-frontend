import { useEffect, useState } from 'react'

export const Home = () => {
  const [launches, setLaunches] = useState([])

  const getUpcomingLaunches = async () => {
    try {
      const response = await fetch('http://localhost:1234/upcoming')
      const data = await response.json()
      setLaunches(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUpcomingLaunches()
  }, [])

  return (
    <div>
      {launches.map((launch, index) => (
        <div key={index}>
          {launch.name}
        </div>
      ))}
    </div>
  )
}
