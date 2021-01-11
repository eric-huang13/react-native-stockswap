import {LOGIN_SUCCESS, LOGOUT, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_ERROR} from 'constants';
import axios from 'axios';



export const Register = (input) => {
  return (dispatch) => {
    dispatch({type: SIGNUP_START});
    axios
    .post('https://jiujitsux.herokuapp.com/api/users/register', input)
  
    .then(response =>{ dispatch({ type: SIGNUP_SUCCESS, payload: response.data }) 
})

.catch(error => {dispatch({ type: SIGNUP_ERROR, payload: error.response })
alert("Please try registering with a different username and password." )

})
  };
};


export const Login = () => (dispatch) => {
  return dispatch({
    type: LOGIN_SUCCESS,
  });
};

export const Logout = () => (dispatch) => {
  return dispatch({
    type: LOGOUT,
  });
};
