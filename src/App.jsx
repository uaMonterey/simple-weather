import {useState} from "react";
import './App.scss';
import {fetchApi, fetchImg} from "./services/axios";
import WeatherDisplay from "./components/weatherDisplay/WeatherDisplay";


function App() {

    const [weatherData, setWeatherData] = useState({})


    const onSubmit = (e, searchQuery) => {
        e.preventDefault()
        fetchApi(searchQuery).then(response => setWeatherData(response)).catch((error) => console.log(error))
        document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1600x900/?" + searchQuery + "')";

    }


    return (
        <div className="App"
             style={{

                 backgroundSize: 'cover',
                 backgroundRepeat: "no-repeat",
                 height: '100vh',
             }}>
            <WeatherDisplay onSubmit={onSubmit} weatherData={weatherData}/>
        </div>
    );
}

export default App;
