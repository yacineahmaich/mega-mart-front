import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASEURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(config => {
  // add token in request header
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    'ACCESS_TOKEN'
  )}`

  return config
})

export default api
