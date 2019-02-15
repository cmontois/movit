import { theMovieDbApi } from '../constants'
import { decamelizeKeys } from 'humps'

// export const validateToken = () =>
//   xanyahApi.get('auth/validate_token')

// export const signIn = params =>
//   xanyahApi.post('auth/sign_in', decamelizeKeys(params))

// Movies API Calls

export const searchMovies = params =>
  theMovieDbApi.get('search/movie', decamelizeKeys({params}))
