import axios, { AxiosError } from 'axios'
import { API_BASE_URL } from '../config'

export function createHttpClient(prefix: string = null) {
  const api = axios.create({
    baseURL: `${API_BASE_URL}${prefix ? '/' + prefix : ''}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  // attach token in request header
  api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      'ACCESS_TOKEN'
    )}`

    return config
  })

  api.interceptors.response.use(
    respons => respons,
    (error: AxiosError) => {
      if (error.response) {
        // handle invalid token
        const TOKEN = localStorage.getItem('ACCESS_TOKEN')
        if (error.response.status === 401 && TOKEN) {
          localStorage.removeItem('ACCESS_TOKEN')
          window.location.reload()
        }
        // The request was made, but the server responded with a status code outside of 2xx
        return Promise.reject(error.response.data)
      } else if (error.request) {
        // The request was made, but no response was received
        return Promise.reject(error.request)
      } else {
        // Something happened in setting up the request that triggered an error
        return Promise.reject('Request failed! Something went wrong')
      }
    }
  )

  return api
}
