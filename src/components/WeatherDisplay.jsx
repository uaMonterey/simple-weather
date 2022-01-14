function WeatherDisplay({data}) {
    console.log(data)
    return (<>

            <div>
                {data.main &&
                    <>
                        <h1>Displaying weather for city {data.name}</h1>
                        <h3> Feels Like: {data.main?.feels_like}°C</h3>
                    </>

                }
            </div>
        </>

    )
}

export default WeatherDisplay