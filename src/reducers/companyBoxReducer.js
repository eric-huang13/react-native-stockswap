import {
  MARKETGAINERS_FETCHING,
  MARKETGAINERS_SUCCESS,
  MARKETGAINERS_FAILURE,
} from '../constants';

const defaultState = {
  gainers: [
    {
      id: '1',
      title: 'AT&T',
      symbol: 'T',
      percentage: '+3.25%',
      category: 'gainers',
    },
    {
      id: '2',
      title: 'Genesis Healthcare',
      symbol: 'GEN',
      percentage: '+35.06%',
      category: 'gainers',
    },
    {
      id: '3',
      title: 'Therapeutics MD',
      symbol: 'TXMD',
      percentage: '+70.08%',
      category: 'gainers',
    },
  ],
  losers: [
    {
      id: '1',
      title: 'Coty',
      symbol: 'COTY',
      percentage: '-15.25%',
      category: 'losers',
    },
    {
      id: '2',
      title: 'Nio',
      symbol: 'NIO',
      percentage: '-8.90%',
      category: 'losers',
    },
    {
      id: '3',
      title: 'Canopy Growth',
      symbol: 'CGC',
      percentage: '-10.87%',
      category: 'losers',
    },
  ],
  highestByVolume: [
    {
      id: '1',
      title: 'FORD',
      symbol: 'F',
      percentage: '+0.75%',
      category: 'HBV',
    },
    {
      id: '2',
      title: 'General Electric',
      symbol: 'GE',
      percentage: '-1.08%',
      category: 'HBV',
    },
    {
      id: '3',
      title: 'Bank of America',
      symbol: 'BAC',
      percentage: '-1.05%',
      category: 'HBV',
    },
  ],
  marketGainers: [],
  articles: [
    {
      id: '1',
      source: 'The Wall Street Journal',
      released: '3h',
      headline: 'Global Stocks Edge Higher on Optimism Over Economic Reopening',
      img:
        'https://images.unsplash.com/photo-1476711656344-4ffe053f6b2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
  ],
};

const companyBoxReducer = (state = defaultState, action) => {
  switch (action.type) {
    //Ready for hook up
    // case MARKETGAINERS_FETCHING:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: "",
    //   };
    // case MARKETGAINERS_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: "",
    //     marketGainers: action.payload,
    //   };
    // case MARKETGAINERS_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
};

export default companyBoxReducer;
