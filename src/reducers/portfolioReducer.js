import {
  FETCHSTOCKMONTHPORTFOLIO_START,
  FETCHSTOCKMONTHPORTFOLIO_SUCCESS,
  FETCHSTOCKMONTHPORTFOLIO_ERROR,
  FETCHSTOCKWEEKPORTFOLIO_START,
  FETCHSTOCKWEEKPORTFOLIO_SUCCESS,
  FETCHSTOCKWEEKPORTFOLIO_ERROR,
  FETCHSTOCKTHREEMONTHPORTFOLIO_START,
  FETCHSTOCKTHREEMONTHPORTFOLIO_SUCCESS,
  FETCHSTOCKTHREEMONTHPORTFOLIO_ERROR,
  FETCHSTOCKYEARPORTFOLIO_START,
  FETCHSTOCKYEARPORTFOLIO_SUCCESS,
  FETCHSTOCKYEARPORTFOLIO_ERROR,
  FETCHSTOCKDAYPORTFOLIO_START,
  FETCHSTOCKDAYPORTFOLIO_SUCCESS,
  FETCHSTOCKDAYPORTFOLIO_ERROR,
  FETCHSTOCKDETAILSPORTFOLIO_START,
  FETCHSTOCKDETAILSPORTFOLIO_SUCCESS,
  FETCHSTOCKDETAILSPORTFOLIO_ERROR,
  STOCKLATESTPORTFOLIO_START,
  STOCKLATESTPORTFOLIO_SUCCESS,
  STOCKLATESTPORTFOLIO_ERROR,
  STOCKRANGEDAYPORTFOLIO,
  STOCKRANGEMONTHPORTFOLIO,
  STOCKRANGETHREEMONTHPORTFOLIO,
  STOCKRANGEWEEKPORTFOLIO,
  STOCKRANGEYEARPORTFOLIO,
  RESET_STOCK_DATA,
} from '../constants';

const defaultState = {
  stockDetails: [],
  stockDay: [],
  stockWeek: [],
  stockMonth: [],
  stockThreeMonth: [],
  stockYear: [],
  stockLoading: false,
  searchStockResults: [],
  searchStockLoading: false,
  stockLatestPortfolioData: [],
  stockRange: [],
  stockGraphData: [],
};

const portfolioReducer = (state = defaultState, action) => {
  switch (action.type) {
    //Ready for hook up

    case STOCKLATESTPORTFOLIO_START:
      return {
        ...state,
        error: '',
      };
    case STOCKLATESTPORTFOLIO_SUCCESS:
      return {
        ...state,
        error: '',
        stockLatestPortfolioData: action.payload,
      };
    case STOCKLATESTPORTFOLIO_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case RESET_STOCK_DATA:
      return {
        ...state,
        loading: false,
        error: '',
        stockGraphData: action.payload,
      };
    case FETCHSTOCKDAYPORTFOLIO_START:
      return {
        ...state,
        stockLoading: true,
        error: '',
      };
    case FETCHSTOCKDAYPORTFOLIO_SUCCESS:
      return {
        ...state,
        stockLoading: false,
        error: '',
        stockGraphData: action.payload,
      };
    case FETCHSTOCKDAYPORTFOLIO_ERROR:
      return {
        ...state,
        stockLoading: false,
        error: action.payload,
      };
    case STOCKRANGEDAYPORTFOLIO:
      return {
        ...state,
        loading: false,
        error: '',
        stockRange: action.payload,
      };
    case FETCHSTOCKWEEKPORTFOLIO_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHSTOCKWEEKPORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stockGraphData: action.payload,
      };
    case FETCHSTOCKWEEKPORTFOLIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STOCKRANGEWEEKPORTFOLIO:
      return {
        ...state,
        loading: false,
        error: '',
        stockRange: action.payload,
      };
    case FETCHSTOCKMONTHPORTFOLIO_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHSTOCKMONTHPORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stockGraphData: action.payload,
      };
    case STOCKRANGEMONTHPORTFOLIO:
      return {
        ...state,
        loading: false,
        error: '',
        stockRange: action.payload,
      };
    case FETCHSTOCKMONTHPORTFOLIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCHSTOCKTHREEMONTHPORTFOLIO_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHSTOCKTHREEMONTHPORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stockGraphData: action.payload,
      };
    case FETCHSTOCKTHREEMONTHPORTFOLIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STOCKRANGETHREEMONTHPORTFOLIO:
      return {
        ...state,
        loading: false,
        error: '',
        stockRange: action.payload,
      };
    case FETCHSTOCKYEARPORTFOLIO_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHSTOCKYEARPORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stockGraphData: action.payload,
      };
    case FETCHSTOCKYEARPORTFOLIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case STOCKRANGEYEARPORTFOLIO:
      return {
        ...state,
        loading: false,
        error: '',
        stockRange: action.payload,
      };
    case FETCHSTOCKDETAILSPORTFOLIO_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCHSTOCKDETAILSPORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        stockDetails: action.payload,
      };
    case FETCHSTOCKDETAILSPORTFOLIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        stockDetails: action.payload,
      };
    default:
      return state;
  }
};

export default portfolioReducer;
