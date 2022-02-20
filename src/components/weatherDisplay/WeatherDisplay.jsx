import React from 'react'
import moment from 'moment'

function WeatherDisplay({ weatherData, onSubmit }) {
  function getSunrise({ sys }) {
    let date = new Date(sys.sunrise * 1000)
    let hours = '0' + date.getHours()
    let minutes = '0' + date.getMinutes()
    let sunrise = hours.substr(-2) + ':' + minutes.substr(-2)

    return sunrise
  }

  function getSunset({ sys }) {
    let date = new Date(sys.sunset * 1000)
    let hours = '0' + date.getHours()
    let minutes = '0' + date.getMinutes()
    let sunset = hours.substr(-2) + ':' + minutes.substr(-2)
    return sunset
  }

  function getDayLength({ sys }) {
    return Math.floor(moment(sys.sunset * 1000).diff(sys.sunrise * 1000) / (1000 * 60)) / 60
  }

  return (
    <>
      <div className="weather-card">
        {weatherData.main && (
          <div className="weather-card__data">
            <p className="title">
              {weatherData.name}, {weatherData.sys.country}
            </p>
            <p className="date">{moment().format('dddd, Do MMMM')} </p>
            <div className="description-wrapper">
              <img
                src={'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '.png'}
                alt={weatherData.weather[0].description}
              />
              <p className="weather">{weatherData.weather[0].description}</p>
            </div>

            <div className="temp-wrapper">
              <p className="main-temp">{Math.round(weatherData.main?.temp)}</p>
              <div className="utilities">
                <p className="utilities__grad">°</p>
                <p className="utilities__celsium">C</p>
              </div>
            </div>

            <div className="sun-time">
              <p className="sunrise">🌅{getSunrise(weatherData)}</p>
              <p className="sunset">🌄{getSunset(weatherData)}</p>
              {/* <p className="day">Day length: {Math.floor(getDayLength(weatherData))}</p> */}
            </div>

            <div className="info-wrapper">
              <div className="option-wrapper">
                <p className="humidity">Humidity: {weatherData.main?.humidity}% 💧</p>
                <p className="wind">Wind Speed: {(weatherData?.wind.speed / 2.237).toFixed(1)} m/s 💨🍃</p>
              </div>
              <div className="temperatures-wrapper">
                <p className="temp-high">High: {Math.round(weatherData.main?.temp_max)}°C </p>
                <p className="temp-low">Low : {Math.round(weatherData.main?.temp_min)}°C </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default WeatherDisplay
