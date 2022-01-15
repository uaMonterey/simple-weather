import {useState} from "react";
import './App.css';
import {fetchApi, fetchImg} from "./services/axios";
import WeatherDisplay from "./components/WeatherDisplay";
import BasicTextFields from "./components/inputMUI";

function App() {

    const [weatherData, setWeatherData] = useState({})
    const [cityImg, setCityImg] = useState([])

    const onSubmit = (e, searchQuery) => {
        e.preventDefault()
        fetchApi(searchQuery).then(response => setWeatherData(response))
        fetchImg(searchQuery).then(response => setCityImg(response.hits))
    }
    const getRandomIndex = Math.ceil(Math.random() * 20)

    return (
        <div className="App"
             style={{
                 // backgroundImage: `url(${cityImg[getBgImg]?.fullHDURL})`,
                 // backgroundRepeat: "no-repeat",
                 backgroundImage: 'https://d3q33rbmdkxzj.cloudfront.net/1589466137456_aFz3CE.png',
                 height: '100vh',

             }}>
            <BasicTextFields onSubmit={onSubmit}/>
            <WeatherDisplay weatherData={weatherData}/>
        </div>
    );
}

export default App;
