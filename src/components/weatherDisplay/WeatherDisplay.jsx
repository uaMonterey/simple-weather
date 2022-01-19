import moment from "moment";
import BasicTextFields from "../search/Search";

function WeatherDisplay({weatherData, onSubmit}) {

    //
    // function getTime({sys}) {
    //
    //     function getSunrise(sys) {
    //         let date = new Date(sys.sunrise * 1000)
    //         let hours = '0' + date.getHours()
    //         let minutes = '0' + date.getMinutes()
    //         let sunrise = hours.substr(-2) + ':' + minutes.substr(-2)
    //         return sunrise
    //     }
    //
    //     function getSunset(sys) {
    //         let date = new Date(sys.sunset * 1000)
    //         let hours = '0' + date.getHours()
    //         let minutes = '0' + date.getMinutes()
    //         let sunset = hours.substr(-2) + ':' + minutes.substr(-2)
    //         return sunset
    //     }
    //
    //     function getDayLength(sys) {
    //         let dayLength = null
    //     }

    // let timeSunrise = new Date(sys.sunrise * 1000)
    // let timeSunset = new Date(sys.sunset * 1000)
    // let hours = '0' + date.getHours()
    // let minutes = '0' + date.getMinutes()
    // let times = hours.substr(-2) + ':' + minutes.substr(-2)
    //     return {sunrise: getSunrise(), sunset: getSunset()}
    // }

    // console.log(getTime(weatherData))

    return (
        <>
            <div className='weather-card'>
                <BasicTextFields onSubmit={onSubmit}/>
                {weatherData.main &&
                    <div className='weather-card__data'>
                        <p className='title'>Weather in {weatherData.name}</p>
                        <p className='date'>{moment().format("dddd, Do MMMM")}</p>
                        <div className='temp-wrapper'>
                            <p className='main-temp'>{Math.round(weatherData.main?.temp)}°C</p>
                            <div className='wrapper'>
                                <p className='temp'>High: {Math.round(weatherData.main?.temp_max)}°C </p>
                                <p className='temp'>Low : {Math.round(weatherData.main?.temp_min)}°C </p>
                            </div>
                        </div>

                        <div className='description-wrapper'>
                            <img src={'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '.png'}
                                 alt={weatherData.weather[0].description}/>
                            <p className='weather'>{weatherData.weather[0].description}</p>

                        </div>
                        <p className='humidity'>Humidity: {weatherData.main?.humidity}% 💧</p>
                        <p className='wind'>Wind Speed: {(weatherData?.wind.speed / 2.237).toFixed(1)} m/s 💨🍃</p>
                        <div className='sun'>
                            {/*<p className='sunrise'>{weatherData.sys?.sunrise}</p>*/}
                            {/*<p className='sunset'>{weatherData.sys?.sunset}</p>*/}

                        </div>
                    </div>


                }
            </div>
        </>

    )
}

export default WeatherDisplay