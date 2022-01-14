import axios from "axios";

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
const baseImgURL = 'https://pixabay.com/api/'
const apiKey = '&appid=232c6882f35ecce220c208a8e355aeb9'
// const apiKey = '&appid=b1b35bba8b434a28a0be2a3e1071ae5b'
const apiKeyImg = '20675292-983eeb99019a7539d0696693a'

export const fetchApi = (city) => {
    return axios.get(`${baseURL}${city}${apiKey}`).then(response => response.data)
}

export const fetchImg = (searchQuery) => {
    return axios.get(
        `${baseImgURL}/?q='${searchQuery}}&page=1&key=${apiKeyImg}&image_type=photo&orientation=horizontal&per_page=100`,
    ).then(response => response.data)

}

