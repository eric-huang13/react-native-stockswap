import {
    NEWS_FETCHING,
    NEWS_SUCCESS,
    NEWS_ERROR,
    NEWS_STOP,
  } from '../constants';
  
  const defaultState = {

    articles: [
      {
        id: '1',
        source: 'The Wall Street Journal',
        released: '3h',
        headline: 'Global Stocks Edge Higher on Optimism Over Economic Reopening',
        intro:
          'Stocks rose Wednesday after closing slightly below all-time highs a day earlier in one of the final sessions of 2020.',
        img:
          'https://images.unsplash.com/photo-1476711656344-4ffe053f6b2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: '2',
        source: 'The New York Times',
        released: '4h',
        headline: 'Stocks up 30%',
        intro:
          'Stock market at an all time high for 2021.',
        img:
          'https://images.unsplash.com/photo-1600478750228-8b894da7bc48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      },
    ],
    loading:false,
    page:1,
    offset:10,
    loadMore:true,
  };
  
  const newsReducer = (state = defaultState, action) => {
    switch (action.type) {
      case NEWS_FETCHING:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case NEWS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: "",
          articles: action.payload,
          // articles: [...state.articles, ...action.payload],
          page:(state.page+1)
        };
      case NEWS_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case NEWS_STOP:
      return {
        ...state,
        loading: false,
        error: '',
        loadMore:action.payload
      };
      default:
        return state;
    }
  };
  
  export default newsReducer;
  