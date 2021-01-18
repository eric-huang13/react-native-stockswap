import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_ERROR} from 'constants';
import axios from 'axios';
import deviceStorage from '../components/screens/DeviceStorage'
import apiInstance from '../util/axiosConfig'




export const Register = (input) => {
  return (dispatch) => {
    dispatch({type: SIGNUP_START});
    axios
    .post('https://jiujitsux.herokuapp.com/api/users/register', input)
  
    .then(response =>{ dispatch({ type: SIGNUP_SUCCESS, payload: response.data }) 
})

.catch(error => {dispatch({ type: SIGNUP_ERROR, payload: error.response })
alert("Please try registering with a different email and password." )

})
  };
};

 
//Working POST with token sent on headers
 
// export const Login = (input) => {
//   return (dispatch) => {
//     dispatch({type: LOGIN_START});
//     apiInstance        
//             .post('https://jiujitsux.herokuapp.com/api/moves/takedown', (input))
//             .then((response) => {
//                 console.log(response, 'TAKEDOWN response')
//                 // window.location.reload();
//             })
//         // .then(response =>{ deviceStorage.saveItem('token', response.data.token), dispatch({ type: LOGIN_SUCCESS, payload: response.data })     
                 
 // .catch(error => {dispatch({ type: SIGNUP_ERROR, payload: error.response })
// console.log(error.response )
 
// })
//   };
// };



//Ready for hookup Login

export const Login = (input) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_START });
    axios
      .post("https://jiujitsux.herokuapp.com/api/users/login", input)
      // .then((response) => {
      //     console.log(response, 'response')
      // })
      .then((response) => {
        deviceStorage.saveItem("token", response.data.token),
          dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      })

      .catch((error) => {
        dispatch({ type: SIGNUP_ERROR, payload: error.response });
        alert("Incorrect email or password.");
      });
  };
};


// export const Login = () => (dispatch) => {
//   return dispatch({
//     type: LOGIN_SUCCESS,
//   });
// };

export const Logout = () => (dispatch) => {
  return dispatch({
    type: LOGOUT,
  });
};
