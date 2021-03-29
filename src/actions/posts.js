import {
  USERPOST_START,
  USERPOST_SUCCESS,
  USERPOST_ERROR,
  EDITPOST_START,
  EDITPOST_SUCCESS,
  EDITPOST_ERROR,
} from 'constants';
import axios from 'axios';
import deviceStorage from '../util/DeviceStorage';
import apiInstance from '../util/axiosConfig';
import {navigate} from '../../RootNavigation';

//Working POST with token sent on headers

export const UserPost = (input) => {
  return (dispatch) => {
    dispatch({type: USERPOST_START});
    apiInstance
      .post('https://jiujitsux.herokuapp.com/api/moves/takedown', input)
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
      .put(`https://jiujitsux.herokuapp.com/api/moves/takedown/${id}`, input)
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
