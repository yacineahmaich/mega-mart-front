import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASEURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    'ACCESS_TOKEN'
  )}`

  return config
})

// api.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.status === 401) {
//       localStorage.removeItem('ACCESS_TOKEN')
//     }
//     return error
//   }
// )

export default api
