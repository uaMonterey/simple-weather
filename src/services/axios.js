import axios from 'axios'

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?'
const apiKey = process.env.React_App_Weather_Api_Key

console.log(apiKey)

const baseImgURL = 'https://pixabay.com/api/'
const apiKeyImg = process.env.React_App_Image_Api_Key

export const fetchApi = (city) => {
  return axios.get(`${baseURL}q=${city}&units=metric&appid=${apiKey}`).then((response) => response.data)
}

export const fetchWeatherByCurrentPosition = (lat, lon) => {
  return axios.get(`${baseURL}&lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`).then((response) => response.data)
}

export const fetchImg = (searchQuery) => {
  return axios
    .get(
      `${baseImgURL}/?q='${searchQuery}}&page=1&key=${apiKeyImg}&image_type=photo&orientation=horizontal&per_page=20`
    )
    .then((response) => response.data)
}
