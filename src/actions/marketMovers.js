import {
  MARKETGAINERS_FETCHING,
  MARKETGAINERS_SUCCESS,
  MARKETGAINERS_FAILURE,
  MARKETLOSERS_FETCHING,
  MARKETLOSERS_SUCCESS,
  MARKETLOSERS_FAILURE,
  FETCHTICKERS_START,
  FETCHTICKERS_SUCCESS,
  FETCHTICKERS_ERROR,
  FETCHTICKERSALL_SUCCESS,
  FETCHSTOCKMONTH_START,
  FETCHSTOCKMONTH_SUCCESS,
  FETCHSTOCKMONTH_ERROR,
} from 'constants';
import axios from 'axios';

export const fetchStockMonth = (ticker) => {
  return (dispatch) => {
    dispatch({type: FETCHSTOCKMONTH_START});
    axios
      .get(
        `http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/stocks/${ticker}/quote/historic?interval=month`,
      )

      // .then(response => console.log (response.data.result, "Month Stock DATA"))
      .then((response) => {
        dispatch({
          type: FETCHSTOCKMONTH_SUCCESS,
          payload: response.data.result.quotes,
        });
      })

      .catch((error) =>
        dispatch({type: FETCHSTOCKMONTH_ERROR, payload: error.response}),
      );
  };
};

export const fetchTickers = () => {
  return (dispatch) => {
    dispatch({type: FETCHTICKERS_START});
    axios
      .get(`http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/tickers/all`)

      // .then(response => console.log (response.data.result.tickers, "From TICKERS"))
      .then((response) => {
        const entries = Object.keys(response.data.result.tickers);
        const slicedTickers = entries.slice(0, 50);

        dispatch({type: FETCHTICKERS_SUCCESS, payload: slicedTickers});
        dispatch({
          type: FETCHTICKERSALL_SUCCESS,
          payload: response.data.result.tickers,
        });
      })

      .catch((error) =>
        dispatch({type: FETCHTICKERS_ERROR, payload: error.response}),
      );
  };
};

export const fetchMarketGainers = () => {
  return (dispatch) => {
    dispatch({type: MARKETGAINERS_FETCHING});
    axios
      .get(
        `http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/stocks/daily/gainers`,
      )

      // .then(response => console.log (response.data.result.statType, "From MARKETGAINERS API"))
      .then((response) =>
        dispatch({
          type: MARKETGAINERS_SUCCESS,
          payload: response.data.result.statType,
        }),
      )

      .catch((error) =>
        dispatch({type: MARKETGAINERS_FAILURE, payload: error.response}),
      );
  };
};

export const fetchMarketLosers = () => {
  return (dispatch) => {
    dispatch({type: MARKETLOSERS_FETCHING});
    axios
      .get(
        `http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/stocks/daily/losers`,
      )

      // .then(response => console.log (response.data.result.statType, "From MARKETLOSERS API"))
      .then((response) =>
        dispatch({
          type: MARKETLOSERS_SUCCESS,
          payload: response.data.result.statType,
        }),
      )

      .catch((error) =>
        dispatch({type: MARKETLOSERS_FAILURE, payload: error.response}),
      );
  };
};

// export const GetProfile = () => {
//   return (dispatch) => {
//     dispatch({type: GETPROFILE_START});
//     axios
//       .get(`http://ec2-18-218-127-202.us-east-2.compute.amazonaws.com/profile`)
//       .then((response) => {
//         dispatch({type: GETPROFILE_SUCCESS, payload: response.data});
//       })
//       .catch((error) => {
//         console.log(error.response);
//         Toast.show({
//           type: 'error',
//           text2: 'Error getting profile.',
//         });
//       });
//   };
// };
