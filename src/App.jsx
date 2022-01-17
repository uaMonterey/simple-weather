import {useState} from "react";
import './App.scss';
import {fetchApi, fetchImg} from "./services/axios";
import WeatherDisplay from "./components/weatherDisplay/WeatherDisplay";
import BasicTextFields from "./components/search/Search";

function App() {

    const [weatherData, setWeatherData] = useState({})
    // const [cityImg, setCityImg] = useState([])

    const onSubmit = (e, searchQuery) => {
        e.preventDefault()
        fetchApi(searchQuery).then(response => setWeatherData(response))
        // fetchImg(searchQuery).then(response => setCityImg(response.hits))
    }
    // const getRandomIndex = Math.ceil(Math.random() * 20)

    return (
        <div className="App"
             style={{
                 // backgroundImage: `url(${cityImg[getBgImg]?.fullHDURL})`,
                 backgroundSize: 'cover',
                 backgroundRepeat: "no-repeat",
                 height: '100vh',

             }}>
            {/*<BasicTextFields onSubmit={onSubmit}/>*/}
            <WeatherDisplay onSubmit={onSubmit} weatherData={weatherData}/>
        </div>
    );
}

export default App;
