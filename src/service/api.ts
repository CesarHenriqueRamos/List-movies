import axios from "axios";


export const api = axios.create({
    baseURL: 'https://tools.texoit.com/backend-java/api'
})