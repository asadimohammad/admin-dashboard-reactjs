import axios from "axios";

const BASE_URL = 'https://64d9f2cfe947d30a260a83e3.mockapi.io/api/'

export const httpRequsts = axios.create({
    baseURL : BASE_URL
})