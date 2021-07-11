import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL

export const fetch = (endpoint, data) => {
    const url = `${baseUrl}/${endpoint}`
    return axios.post(url, data)
}