import axios from "axios";

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '&appid=232c6882f35ecce220c208a8e355aeb9'
// const apiKey = '&appid=b1b35bba8b434a28a0be2a3e1071ae5b'

const fetchApi = (city) => {
    return axios.get(`${baseURL}${city}${apiKey}`).then(response => response.data)
}

export default fetchApi