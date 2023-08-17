import axios from "axios"

const BASE_URL = 'https://react-mini-projects-api.classbon.com'
// const BASE_URL = 'https://dummyjson.com/auth/login'

export const httpService = axios.create({
    baseURL : BASE_URL
})