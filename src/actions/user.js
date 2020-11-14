import {LOGIN_SUCCESS, LOGOUT} from 'constants';

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
