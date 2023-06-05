import axios, { isAxiosError } from 'axios'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_BASEURL}/admin`,
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

api.interceptors.response.use(
  respons => respons,
  err => {
    if (isAxiosError(err) && err.response.status === 401) {
      localStorage.removeItem('ACCESS_TOKEN')
      window.location.reload()
    }
  }
)

export default api
