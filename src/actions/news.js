import {NEWS_FETCHING, NEWS_SUCCESS, NEWS_ERROR, NEWS_STOP} from 'constants';
import axios from 'axios';
import apiInstance from '../util/axiosConfig';
import {NEWS} from './api';

export const fetchNews = (page, offset) => {
  return (dispatch) => {
    dispatch({type: NEWS_FETCHING});
    apiInstance
      .get(NEWS)
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

// export const fetchNews = (page, offset) => {
//   return (dispatch) => {
//     dispatch({type: NEWS_FETCHING});
//     axios
//       .get(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=${offset}&by_state=ohio`)
//       // .then(response => console.log (response.data, "From NEWS API"))
//       .then((response) =>
//       response.data.length > 0 ?
//         dispatch({type: NEWS_SUCCESS, payload: response.data}) :
//         dispatch({type: NEWS_STOP, payload: false})
//       )

//       .catch((error) =>
//         dispatch({type: NEWS_ERROR, payload: error.response}),
//       );
//   };
// };
