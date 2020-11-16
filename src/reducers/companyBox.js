// import {LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT} from 'constants';

const defaultState = {
  companies: [
    {id: '1', title: 'AT&T', symbol: 'T', percentage: '+3.25%'},
    {
      id: '2',
      title: 'Genesis Healthcare',
      symbol: 'GEN',
      percentage: '+35.06%',
    },
    {id: '3', title: 'Therapeutics MD', symbol: 'TXMD', percentage: '+70.08%'},
  ],
};

const companyBoxReducer = (state = defaultState, action) => {
  switch (action.type) {
    // case LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     isLoggedIn: true,
    //   };
    // case LOGIN_ERROR:
    //   return {
    //     ...state,
    //   };
    // case LOGOUT:
    //   return defaultState;
    default:
      return state;
  }
};

export default companyBoxReducer;
