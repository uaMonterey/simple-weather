import {useState} from "react";
import './App.css';
import {fetchApi, fetchImg} from "./services/axios";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchForm from "./components/SearchForm";

function App() {

    const [weatherData, setWeatherData] = useState({})
    const [cityImg, setCityImg] = useState([])

    const onSubmit = (e, searchQuery) => {
        e.preventDefault()
        fetchApi(searchQuery).then(response => setWeatherData(response))
        fetchImg(searchQuery).then(response => setCityImg(response.hits))
    }
    const getBgImg = Math.ceil(Math.random() * 20)

    return (
        <div className="App"
             style={{
                 backgroundImage: `url(${cityImg[getBgImg]?.largeImageURL})`,
                 backgroundRepeat: "no-repeat",
                 height: '100vh',

             }}>
            <SearchForm onSubmit={onSubmit}/>
            <WeatherDisplay data={weatherData}/>
        </div>
    );
}

export default App;
