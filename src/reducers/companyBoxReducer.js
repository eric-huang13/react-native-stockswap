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
      price: '30.78',
      priceHistory: [
        61,
        49,
        19,
        85,
        18,
        86,
        96,
        44,
        99,
        93,
        87,
        46,
        40,
        22,
        96,
        88,
        95,
        46,
        71,
        15,
        34,
        47,
        56,
        82,
        41,
        81,
        44,
        39,
        63,
        76,
        69,
        85,
      ],
      dates: [
        1604188800,
        1604275200,
        1604361600,
        1604448000,
        1604534400,
        1604620800,
        1604707200,
        1604793600,
        1604966400,
        1605052800,
        1605139200,
        1605225600,
        1605312000,
        1605398400,
        1605484800,
        1605571200,
        1605657600,
        1605744000,
        1605830400,
        1605916800,
        1606003200,
        1606089600,
        1606176000,
        1606262400,
        1606348800,
        1606435200,
        1606521600,
        1606608000,
        1606694400,
        1606780800,
        1606867200,
      ],
    },
    {
      id: '2',
      title: 'Genesis Healthcare',
      symbol: 'GEN',
      percentage: '+35.06%',
      category: 'gainers',
      price: '12.73',
    },
    {
      id: '3',
      title: 'Therapeutics MD',
      symbol: 'TXMD',
      percentage: '+70.08%',
      category: 'gainers',
      price: '48.58',
    },
  ],
  losers: [
    {
      id: '1',
      title: 'Coty',
      symbol: 'COTY',
      percentage: '-15.25%',
      category: 'losers',
      price: '30.78',
    },
    {
      id: '2',
      title: 'Nio',
      symbol: 'NIO',
      percentage: '-8.90%',
      category: 'losers',
      price: '30.78',
    },
    {
      id: '3',
      title: 'Canopy Growth',
      symbol: 'CGC',
      percentage: '-10.87%',
      category: 'losers',
      price: '30.78',
    },
  ],
  highestByVolume: [
    {
      id: '1',
      title: 'FORD',
      symbol: 'F',
      percentage: '+0.75%',
      category: 'HBV',
      price: '30.78',
    },
    {
      id: '2',
      title: 'General Electric',
      symbol: 'GE',
      percentage: '-1.08%',
      category: 'HBV',
      price: '30.78',
    },
    {
      id: '3',
      title: 'Bank of America',
      symbol: 'BAC',
      percentage: '-1.05%',
      category: 'HBV',
      price: '30.78',
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
  users: [
    {
      id: 1,
      name: 'Hallie Fields',
      posts: 19182,
      followers: 92,
      percentage: 31.1,
      img:
        'https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'Viola Casey',
      posts: 99,
      followers: 15,
      percentage: 24,
      img:
        'https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      name: 'Rosa Clark',
      posts: 267,
      followers: 120,
      percentage: 43,
      img:
        'https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
