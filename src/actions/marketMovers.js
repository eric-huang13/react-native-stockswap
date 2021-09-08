import {
  MARKETGAINERS_FETCHING,
  MARKETGAINERS_SUCCESS,
  MARKETGAINERS_FAILURE,
} from 'constants';
import axios from 'axios';

export const fetchMarketGainers = () => {
  return (dispatch) => {
    dispatch({type: MARKETGAINERS_FETCHING});
    axios
      .get(`http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/stocks/daily/gainers`)

      // .then(response => console.log (response.data.result.statType, "From MARKETGAINERS API"))
      .then((response) =>
        dispatch({type: MARKETGAINERS_SUCCESS, payload: response.data.result.statType}),
      )

      .catch((error) =>
        dispatch({type: MARKETGAINERS_FAILURE, payload: error.response}),
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
