import BasicTextFields from "../search/Search";

function WeatherDisplay({weatherData, onSubmit}) {

    return (
        <>
            <div className='weather-card'>
                <BasicTextFields onSubmit={onSubmit}/>
                {weatherData.main &&
                    <div className='weather-card__data'>
                        <p className='title'>Weather in {weatherData.name}</p>
                        <div className='temp-wrapper'>
                            <p className='main-temp'>{Math.round(weatherData.main?.temp)}°C</p>
                            <div className='wrapper'>
                                <p className='temp'>High: {Math.round(weatherData.main?.temp_max)}°C</p>
                                <p className='temp'>Low : {Math.round(weatherData.main?.temp_min)}°C</p>
                            </div>
                        </div>

                        <div className='description-wrapper'>
                            <img src={'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png'}
                                 alt={weatherData.weather[0].description}/>
                            <p className='weather'>{weatherData.weather[0].description}</p>
                        </div>
                        <p className='humidity'>Humidity: {weatherData.main?.humidity}%</p>
                        <p className='wind'>Wind Speed: {(weatherData?.wind.speed / 2.237).toFixed(1)} m/s</p>
                    </div>
                }
            </div>
        </>

    )
}

export default WeatherDisplay