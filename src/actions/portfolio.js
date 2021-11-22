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
  STOCKRANGEYEARPORTFOLIO,
  STOCKRANGETHREEMONTHPORTFOLIO,
  STOCKRANGEMONTHPORTFOLIO,
  STOCKRANGEWEEKPORTFOLIO,
  STOCKRANGEDAYPORTFOLIO,
  RESET_STOCK_DATA,
} from 'constants';
import axios from 'axios';
import {STOCKRANGEWEEK} from '../constants';

export const stockLatestPortfolio = (ticker) => {
  return (dispatch) => {
    dispatch({type: STOCKLATESTPORTFOLIO_START});
    axios
      .get(
        `http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/stocks/${ticker}/quote/latest`,
      )

      // .then(response => console.log (response.data.result.quote, "SEARCH STOCK DATA"))
      .then((response) => {
        dispatch({
          type: STOCKLATESTPORTFOLIO_SUCCESS,
          payload: response.data.result.quote,
        });
      })

      .catch((error) =>
        dispatch({type: STOCKLATESTPORTFOLIO_ERROR, payload: []}),
      );
  };
};

export const fetchStockDetailsPortfolio = (ticker) => {
  return (dispatch) => {
    dispatch({type: FETCHSTOCKDETAILSPORTFOLIO_START});
    axios
      .get(
        `http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/tickers/${ticker}`,
      )

      // .then(response => console.log (response.data.result, "Month Stock DATA"))
      .then((response) => {
        dispatch({
          type: FETCHSTOCKDETAILSPORTFOLIO_SUCCESS,
          payload: response.data.result.details,
        });
      })
      .catch((error) => {
        // console.log(error.response.data.message, 'ERROR in LOGIN');
        let emptyData = {
          description: 'Information for this company is unavailable.',
          sector: 'Unavailable',
        };
        dispatch({type: FETCHSTOCKDETAILSPORTFOLIO_ERROR, payload: emptyData});
      });
  };
};

export const resetStockData = () => {
  return (dispatch) => {
    let emptyData = {};
    dispatch({type: RESET_STOCK_DATA, payload: emptyData});
  };
};

export const fetchStockDayPortfolio = (ticker) => {
  return (dispatch) => {
    dispatch({type: FETCHSTOCKDAYPORTFOLIO_START});
    axios
      .get(
        `http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/stocks/${ticker}/quote/historic?interval=day`,
      )

      // .then(response => console.log (response.data.result, "Month Stock DATA"))
      .then((response) => {
        //DAY DATA

        let dayPrices = response.data.result.quotes.map((a) => a.close);
        const dayPriceRange = [Math.min(...dayPrices), Math.max(...dayPrices)];
        const stockDayDataOriginal = response.data.result.quotes.map((i) => {
          return {x: Date.parse(i.window.startTime), y: i.close};
        });
        const stockDayData = stockDayDataOriginal.reverse();
        dispatch({
          type: FETCHSTOCKDAYPORTFOLIO_SUCCESS,
          payload: stockDayData,
        });
        {
          response.data.result.quotes.length < 2
            ? dispatch({
                type: STOCKRANGEDAYPORTFOLIO,
                payload: [],
              })
            : dispatch({
                type: STOCKRANGEDAYPORTFOLIO,
                payload: dayPriceRange,
              });
        }
      })

      .catch((error) =>
        dispatch({type: FETCHSTOCKDAYPORTFOLIO_ERROR, payload: error.response}),
      );
  };
};

export const fetchStockWeekPortfolio = (ticker) => {
  return (dispatch) => {
    dispatch({type: FETCHSTOCKWEEKPORTFOLIO_START});
    axios
      .get(
        `http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/stocks/${ticker}/quote/historic?interval=week`,
      )

      // .then(response => console.log (response.data.result, "Month Stock DATA"))
      .then((response) => {
        // //WEEK DATA
        let weekPrices = response.data.result.quotes.map((a) => a.close);
        const weekPriceRange = [
          Math.min(...weekPrices),
          Math.max(...weekPrices),
        ];
        // console.log(weekPriceRange, 'weekPRICERANGE');
        const stockWeekDataOriginal = response.data.result.quotes.map((i) => {
          return {x: Date.parse(i.window.startTime), y: i.close};
        });
        const stockWeekData = stockWeekDataOriginal.reverse();
        dispatch({
          type: FETCHSTOCKWEEKPORTFOLIO_SUCCESS,
          payload: stockWeekData,
        });
        {
          response.data.result.quotes.length < 2
            ? dispatch({
                type: STOCKRANGEWEEKPORTFOLIO,
                payload: [],
              })
            : dispatch({
                type: STOCKRANGEWEEKPORTFOLIO,
                payload: weekPriceRange,
              });
        }
      })

      .catch((error) =>
        dispatch({
          type: FETCHSTOCKWEEKPORTFOLIO_ERROR,
          payload: error.response,
        }),
      );
  };
};

export const fetchStockMonthPortfolio = (ticker) => {
  return (dispatch) => {
    dispatch({type: FETCHSTOCKMONTHPORTFOLIO_START});
    axios
      .get(
        `http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/stocks/${ticker}/quote/historic?interval=month`,
      )

      // .then(response => console.log (response.data.result, "Month Stock DATA"))
      .then((response) => {
        // //MONTH DATA
        let monthPrices = response.data.result.quotes.map((a) => a.close);
        const monthPriceRange = [
          Math.min(...monthPrices),
          Math.max(...monthPrices),
        ];
        const stockMonthDataOriginal = response.data.result.quotes.map((i) => {
          return {x: Date.parse(i.window.startTime), y: i.close};
        });
        const stockMonthData = stockMonthDataOriginal.reverse();
        dispatch({
          type: FETCHSTOCKMONTHPORTFOLIO_SUCCESS,
          payload: stockMonthData,
        });
        {
          response.data.result.quotes.length < 2
            ? dispatch({
                type: STOCKRANGEMONTHPORTFOLIO,
                payload: [],
              })
            : dispatch({
                type: STOCKRANGEMONTHPORTFOLIO,
                payload: monthPriceRange,
              });
        }
      })

      .catch((error) =>
        dispatch({
          type: FETCHSTOCKMONTHPORTFOLIO_ERROR,
          payload: error.response,
        }),
      );
  };
};

export const fetchStockThreeMonthPortfolio = (ticker) => {
  return (dispatch) => {
    dispatch({type: FETCHSTOCKTHREEMONTHPORTFOLIO_START});
    axios
      .get(
        `http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/stocks/${ticker}/quote/historic?interval=three_month`,
      )

      // .then(response => console.log (response.data.result, "Month Stock DATA"))
      .then((response) => {
        // //THREE MONTH DATA
        let threeMonthPrices = response.data.result.quotes.map((a) => a.close);
        const threeMonthPriceRange = [
          Math.min(...threeMonthPrices),
          Math.max(...threeMonthPrices),
        ];
        const stockThreeMonthDataOriginal = response.data.result.quotes.map(
          (i) => {
            return {x: Date.parse(i.window.startTime), y: i.close};
          },
        );
        const stockThreeMonthData = stockThreeMonthDataOriginal.reverse();
        dispatch({
          type: FETCHSTOCKTHREEMONTHPORTFOLIO_SUCCESS,
          payload: stockThreeMonthData,
        });
        {
          response.data.result.quotes.length < 2
            ? dispatch({
                type: STOCKRANGETHREEMONTHPORTFOLIO,
                payload: [],
              })
            : dispatch({
                type: STOCKRANGETHREEMONTHPORTFOLIO,
                payload: threeMonthPriceRange,
              });
        }
      })

      .catch((error) =>
        dispatch({
          type: FETCHSTOCKTHREEMONTHPORTFOLIO_ERROR,
          payload: error.response,
        }),
      );
  };
};

export const fetchStockYearPortfolio = (ticker) => {
  return (dispatch) => {
    dispatch({type: FETCHSTOCKYEARPORTFOLIO_START});
    axios
      .get(
        `http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/stocks/${ticker}/quote/historic?interval=year`,
      )

      // .then(response => console.log (response.data.result, "Month Stock DATA"))
      .then((response) => {
        let yearPrices = response.data.result.quotes.map((a) => a.close);
        const yearPriceRange = [
          Math.min(...yearPrices),
          Math.max(...yearPrices),
        ];
        const stockYearDataOriginal = response.data.result.quotes.map((i) => {
          return {x: Date.parse(i.window.startTime), y: i.close};
        });
        const stockYearData = stockYearDataOriginal.reverse();
        dispatch({
          type: FETCHSTOCKYEARPORTFOLIO_SUCCESS,
          payload: stockYearData,
        });
        {
          response.data.result.quotes.length < 2
            ? dispatch({
                type: STOCKRANGEYEARPORTFOLIO,
                payload: [],
              })
            : dispatch({
                type: STOCKRANGEYEARPORTFOLIO,
                payload: yearPriceRange,
              });
        }
      })

      .catch((error) =>
        dispatch({
          type: FETCHSTOCKYEARPORTFOLIO_ERROR,
          payload: error.response,
        }),
      );
  };
};
