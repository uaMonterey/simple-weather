function WeatherDisplay({weatherData}) {

    return (
        <>
            <div>
                {weatherData.main &&
                    <div>
                        <img src={'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png'}
                             alt={weatherData.weather[0].description}/>
                        <h1>{weatherData.weather[0].main} in {weatherData.name}</h1>
                        <h3> Feels Like: {Math.round(weatherData.main?.feels_like)}°C</h3>

                        <p>Current: {Math.round(weatherData.main?.temp)}°C</p>
                        <p>High: {Math.round(weatherData.main?.temp_max)}°C</p>
                        <p>Low: {Math.round(weatherData.main?.temp_min)}°C</p>
                        <p>Wind Speed: {(weatherData?.wind.speed / 2.237).toFixed(1)} m/s</p>
                    </div>


                }
            </div>
        </>

    )
}

export default WeatherDisplay