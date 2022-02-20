import { useState, useEffect } from 'react'
import './App.scss'
import { fetchApi, fetchWeatherByCurrentPosition } from './services/axios'
import SearchForm from './components/searchForm/SearchForm'
import WeatherDisplay from './components/weatherDisplay/WeatherDisplay'

function App() {
  const [weatherData, setWeatherData] = useState({})
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  const savePosition = (position) => {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
  }

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(savePosition)

    const fetchWeather = () => {
      fetchWeatherByCurrentPosition(latitude, longitude)
        .then((response) => setWeatherData(response))
        .catch((error) => console.log(error))
    }

    if (latitude !== null && longitude !== null) {
      fetchWeather()
    }
  }, [latitude, longitude])

  const onSubmit = (e, searchQuery) => {
    e.preventDefault()
    fetchApi(searchQuery)
      .then((response) => setWeatherData(response))
      .catch((error) => console.log(error))
  }

  // const randomIndex = Math.abs(image?.hits?.length - Math.floor(Math.random() * 20))

  return (
    <div className="App">
      <SearchForm onSubmit={onSubmit} />
      <WeatherDisplay onSubmit={onSubmit} weatherData={weatherData} />
    </div>
  )
}

export default App
