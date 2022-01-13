import {
  USERPOST_START,
  USERPOST_SUCCESS,
  USERPOST_ERROR,
  EDITPOST_START,
  EDITPOST_SUCCESS,
  EDITPOST_ERROR,
  GETCOMMENTS_START,
  GETCOMMENTS_SUCCESS,
  GETCOMMENTS_ERROR,
  GETLIKES_START,
  GETLIKES_SUCCESS,
  GETLIKES_ERROR,
  GETPOSTS_START,
  GETPOSTS_SUCCESS,
  GETPOSTS_ERROR,
  
} from 'constants';
import axios from 'axios';
import deviceStorage from '../util/DeviceStorage';
import apiInstance from '../util/axiosConfig';
import {navigate} from '../../RootNavigation';
import { API_SERVER } from '../constants';

//Get Posts
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({type: GETPOSTS_START});
    apiInstance
      .get(API_SERVER + `/stocks/daily/gainers`)
      // .then(response => console.log (response.data.result.statType, "From MARKETGAINERS API"))
      .then((response) =>
        dispatch({
          type: GETPOSTS_SUCCESS,
          payload: response.data,
        }),
      )
      .catch((error) =>
        dispatch({type: GETPOSTS_ERROR, payload: error.response}),
      );
  };
};

//Get Likes
export const fetchLikes = () => {
  return (dispatch) => {
    dispatch({type: GETLIKES_START});
    apiInstance
      .get(API_SERVER + `/stocks/daily/gainers`)
      // .then(response => console.log (response.data.result.statType, "From MARKETGAINERS API"))
      .then((response) =>
        dispatch({
          type: GETLIKES_SUCCESS,
          payload: response.data,
        }),
      )
      .catch((error) =>
        dispatch({type: GETLIKES_ERROR, payload: error.response}),
      );
  };
};

//Get Comments
export const fetchComments = () => {
  return (dispatch) => {
    dispatch({type: GETCOMMENTS_START});
    apiInstance
      .get(API_SERVER + `/stocks/daily/gainers`)
      // .then(response => console.log (response.data.result.statType, "From MARKETGAINERS API"))
      .then((response) =>
        dispatch({
          type: GETCOMMENTS_SUCCESS,
          payload: response.data,
        }),
      )
      .catch((error) =>
        dispatch({type: GETCOMMENTS_ERROR, payload: error.response}),
      );
  };
};

//Working POST with token sent on headers

export const UserPost = (input) => {
  return (dispatch) => {
    dispatch({type: USERPOST_START});
    apiInstance
      .post(API_SERVER + `/stocks/daily/gainers`, input)
      .then((response) => {
        console.log(response, 'TAKEDOWN response');
        // window.location.reload();
      })
      // .then(response =>{ deviceStorage.saveItem('token', response.data.token), dispatch({ type: USERPOST_SUCCESS, payload: response.data })

      .catch((error) => {
        dispatch({type: USERPOST_ERROR, payload: error.response});
        console.log(error.response, 'ERROR response');
      });
  };
};

export const EditPost = (input, id) => {
  return (dispatch) => {
    dispatch({type: EDITPOST_START});
    apiInstance
      .put(API_SERVER + `/stocks/daily/gainers${id}`, input)
      .then((response) => {
        console.log(response, 'TAKEDOWN edit response');
        // window.location.reload();
      })
      // .then(response =>{ deviceStorage.saveItem('token', response.data.token), dispatch({ type: EDITPOST_SUCCESS, payload: response.data })

      .catch((error) => {
        dispatch({type: EDITPOST_ERROR, payload: error.response});
        console.log(error.response);
      });
  };
};

// export const UserPost = (input) => {
//   return (dispatch) => {
//     dispatch({type: USERPOST_START});
//     axios
//     .post('https://jiujitsux.herokuapp.com/api/users/register', input)

//     .then(response =>{ dispatch({ type: USERPOST_SUCCESS, payload: response.data })
//     // navigate('Login')
// })

// .catch(error => {dispatch({ type: USERPOST_ERROR, payload: error.response })
// alert("Error creating profile" )

// })
//   };
// };
