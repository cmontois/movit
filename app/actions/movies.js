import { UPDATE_MOVIES_FIELD } from '../constants/actions'

// import { I18n } from 'react-redux-i18n'

import { searchMovies as apiSearchMovies } from '../utils/api-helper'
import { isSafeGithubName } from 'app-builder-lib/out/platformPackager';
import { S_IFCHR } from 'constants';

// import {
//   showSuccessToast,
//   showErrorToast,
// } from '../utils/notification-helper'

export const updateMoviesField = (field, value) => ({
  field,
  type: UPDATE_MOVIES_FIELD,
  value,
})

export const searchMovies = params =>
  (dispatch, currentState) => {
    dispatch(updateMoviesField('loading', true))
    apiSearchMovies(params)
      .then(({ data }) => {
        let databis = data.results.sort(this.functionTest);
        dispatch(updateMoviesField('movies', data));
        dispatch(updateMoviesField('loading', false));
      })
      .catch(() => {
        console.log("ERROR !!!!!");
        // showErrorToast(I18n.t('toast.error'))
      })
  }

  const functionTest = (el1, el2) => {
    if(el2.vote_count < el1.vote_count) {
      return -1;
    }
    if(el2.vote_count > el1.vote_count) {
      return 1;
    }
    return 0;
  }