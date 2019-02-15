import axios from 'axios'
import {
  camelizeKeys,
  decamelizeKeys,
} from 'humps'

const authHeaders = [
  'access-token',
  'client',
  'expiry',
  'token-type',
  'uid',
]

export const theMovieDbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 5000,
})

theMovieDbApi.interceptors.request.use(
  config => {
    authHeaders.forEach(key =>
      config.headers[key] = localStorage.getItem(`TheMovieDb:${key}`))

    if (config.headers['Content-Type'] === 'application/json') {
      config.data = decamelizeKeys(config.data)
      config.params = decamelizeKeys(config.params)
    }

    return config
  },
  error => Promise.reject(error))

theMovieDbApi.interceptors.response.use(
  response => {
    authHeaders.forEach(key => {
      if (response.headers[key]) {
        localStorage.setItem(`TheMovieDb:${key}`, response.headers[key])
      }
    })
    response.data = camelizeKeys(response.data)
    return response
  },
  error => Promise.reject(error))
