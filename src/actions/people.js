import {EDITUSER_START, EDITUSER_SUCCESS, EDITUSER_ERROR, USERS_FETCHING, USERS_SUCCESS, USERS_ERROR} from 'constants';
import axios from 'axios';
import deviceStorage from '../util/DeviceStorage';
import apiInstance from '../util/axiosConfig';
import {navigate} from '../../RootNavigation';

//Working POST with token sent on headers

// export const EditUser = (input) => {
//   return (dispatch) => {
//     dispatch({type: EDITUSER_START});
//     apiInstance
//             .post('https://jiujitsux.herokuapp.com/api/moves/takedown', (input))
//             .then((response) => {
//                 console.log(response, 'TAKEDOWN response')
//                 // window.location.reload();
//             })
//         // .then(response =>{ deviceStorage.saveItem('token', response.data.token), dispatch({ type: EDITUSER_SUCCESS, payload: response.data })

//  .catch(error => {dispatch({ type: EDITUSER_ERROR, payload: error.response })
// console.log(error.response )

// })
//   };
// };
export const fetchFake = (page, offset) => {
    return (dispatch) => {
      dispatch({type: USERS_FETCHING});  
      axios
        .get(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=${offset}`)
        // .then(response => console.log (response.data, "From USERS API"))
        .then((response) =>
          dispatch({type: USERS_SUCCESS, payload: response.data}),
        )
        
    
        .catch((error) =>
          dispatch({type: USERS_FAILURE, payload: error.response}),
        );
    };
  };
  