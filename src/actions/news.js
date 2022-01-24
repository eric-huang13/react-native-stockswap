import {NEWS_FETCHING, NEWS_SUCCESS, NEWS_ERROR, NEWS_STOP} from 'constants';
import HttpClient from '../httpclient';
import {NEWS} from './api';

export const fetchNews = (page, offset) => {
  return (dispatch) => {
    dispatch({type: NEWS_FETCHING});
    HttpClient.get(NEWS)
      // .then(response => console.log (response.data, "From NEWS API"))
      .then(
        (response) =>
          // response.data.length > 0 ?
          dispatch({type: NEWS_SUCCESS, payload: response.data.data}),
        // dispatch({type: NEWS_STOP, payload: false})
      )

      .catch(
        (error) => console.log(error, 'error news'),
        // dispatch({type: NEWS_ERROR, payload: error.response}),
      );
  };
};
