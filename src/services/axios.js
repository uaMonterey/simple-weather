import axios from "axios";

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
const baseImgURL = 'https://pixabay.com/api/'
const apiKey = process.env.React_App_Weather_Api_Key
const apiKeyImg = process.env.React_App_Weather_Api_Key


export const fetchApi = (city) => {
    return axios.get(`${baseURL}${city}&units=metric&appid=${apiKey}`).then(response => response.data)
}

export default async function getWeatherByCity(city) {
    try {
        const response = await axios.get(`${baseURL}${city}&units=metric${apiKey}`).then(response => response.data)
        console.log(response)
    } catch (error) {
        console.log(error)

    }
}


export const fetchImg = (searchQuery) => {
    return axios.get(
        `${baseImgURL}/?q='${searchQuery}}&page=1&key=${apiKeyImg}&image_type=photo&orientation=horizontal&per_page=100`,
    ).then(response => response.data)

}

