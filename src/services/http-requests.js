// @ts-nocheck
import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export const httpRequsts = axios.create({
    baseURL: BASE_URL,
});

export const httpInterceptedServices = axios.create({
    baseURL: BASE_URL,
});

httpInterceptedServices.interceptors.request.use(
    // Access to details that sent by requests
    async (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers = {
                Authorization: "Bearer " + token,
            };
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

httpInterceptedServices.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response.status === 404) {
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);
