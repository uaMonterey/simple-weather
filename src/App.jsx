import { useState, useEffect } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './App.scss'
import { fetchApi, fetchImg, fetchWeatherByCurrentPosition } from './services/axios'
import WeatherDisplay from './components/weatherDisplay/WeatherDisplay'

function App() {
  const [weatherData, setWeatherData] = useState({})
  const [image, setImage] = useState()
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

    fetchImg(searchQuery)
      .then((response) => setImage(response))
      .catch((error) => console.log(error))

    // document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + searchQuery + "')"
  }

  const randomIndex = Math.abs(image?.hits?.length - Math.floor(Math.random() * 20))

  return (
    <div className="App">
      <SwitchTransition>
        <CSSTransition
          key={image}
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          classNames="fade"
        >
          <div
            style={{
              width: '100vw',
              height: '100vh',
              position: 'absolute',
              backgroundImage: `url('${image?.hits[randomIndex]?.fullHDURL || image?.hits[0]?.imageURL}')`,
              zIndex: '-1',
            }}
          ></div>
        </CSSTransition>
      </SwitchTransition>

      <div
        className="bg-wrapper"
        // style={{
        //   backgroundImage: `url('${image?.hits[randomIndex]?.fullHDURL || image?.hits[0]?.imageURL}')`,
        // }}
      >
        <WeatherDisplay onSubmit={onSubmit} weatherData={weatherData} />
      </div>
    </div>
  )
}

export default App
