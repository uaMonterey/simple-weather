import axios from "axios";

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
const baseImgURL = 'https://pixabay.com/api/'
const apiKey = '&appid=232c6882f35ecce220c208a8e355aeb9'
const apiKeyImg = '20675292-983eeb99019a7539d0696693a'


export const fetchApi = (city) => {
    return axios.get(`${baseURL}${city}&units=metric${apiKey}`).then(response => response.data)
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

