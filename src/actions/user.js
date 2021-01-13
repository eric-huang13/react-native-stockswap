import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_ERROR} from 'constants';
import axios from 'axios';



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


export const Login = (input) => {
  return (dispatch) => {
    dispatch({type: LOGIN_START});
    axios
    .post('https://jiujitsux.herokuapp.com/api/users/login', input)
  // .then((response) => {
  //               console.log(response, 'LOGIN RES')
  //           })
    .then(response =>{ dispatch({ type: LOGIN_SUCCESS, payload: response.data }) 
})

.catch(error => {dispatch({ type: SIGNUP_ERROR, payload: error.response })
alert("Incorrect email or password." )

})
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
