import axios from "axios"
import { store } from "../store/store"

export const axiosBase = axios.create({
    baseURL: "https://stablehorde.net/api/v2/"
})

axiosBase.interceptors.request.use(
    function (config) {
        const apiKey = store.getState().persist.apikey
        if (config.headers != null && apiKey != null) {
            config.headers["apikey"] = apiKey
        }
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

export const axiosLocal = axios.create({
    baseURL: ""
})
