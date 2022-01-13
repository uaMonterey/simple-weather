import {useState} from "react";
import './App.css';
import fetchApi from "./services/axios";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchForm from "./components/SearchForm";

function App() {

    const [weatherData, setWeatherData] = useState({})

    const onSubmit = (e, searchQuery) => {
        e.preventDefault()
        fetchApi(searchQuery).then(response => setWeatherData(response))
    }
    console.log(weatherData)
    return (
        <div className="App">
            <SearchForm onSubmit={onSubmit}/>
            <WeatherDisplay city={weatherData?.name}/>
        </div>
    );
}

export default App;
