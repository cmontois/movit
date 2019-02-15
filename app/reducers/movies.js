import {UPDATE_MOVIES_FIELD} from '../constants/actions';

const initialState = {
  loading: false,
  movies: [],
  selectedMovie: {},
}

export default (state = initialState, action) => {
  switch(action.type) {
  case UPDATE_MOVIES_FIELD:
    return {
      ...state,
      [action.field]: action.value,
    }
  default:
    return state
  }
}
