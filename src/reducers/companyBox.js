// import {LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT} from 'constants';

const defaultState = {
  gainers: [
    {id: '1', title: 'AT&T', symbol: 'T', percentage: '+3.25%'},
    {
      id: '2',
      title: 'Genesis Healthcare',
      symbol: 'GEN',
      percentage: '+35.06%',
    },
    {id: '3', title: 'Therapeutics MD', symbol: 'TXMD', percentage: '+70.08%'},
  ],
  losers: [
    {id: '1', title: 'Coty', symbol: 'COTY', percentage: '-15.25%'},
    {
      id: '2',
      title: 'Nio',
      symbol: 'NIO',
      percentage: '-8.90%',
    },
    {id: '3', title: 'Canopy Growth', symbol: 'CGC', percentage: '+-10.87%'},
  ],
  highestByVolume: [
    {id: '1', title: 'FORD', symbol: 'F', percentage: '+0.75%'},
    {
      id: '2',
      title: 'General Electric',
      symbol: 'GE',
      percentage: '-1.08%',
    },
    {id: '3', title: 'Bank of America', symbol: 'BAC', percentage: '-1.05%'},
  ],
};

const companyBoxReducer = (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default companyBoxReducer;
