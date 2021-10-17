import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {moderateScale} from '../../util/responsiveFont';
import CompanyStockGraph from '../SearchTabComponents/CompanyStockGraph';
import CompanySymbolList from '../SearchTabComponents/CompanySymbolList';
import {connect} from 'react-redux';
import {
  fetchStockDay,
  fetchStockMonth,
  fetchStockWeek,
  fetchStockThreeMonth,
  fetchStockYear,
  fetchStockDetails,
  stockLatest,
  searchStock,
} from '../../actions/marketMovers';

export class StockSearchInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [
        {x: 2, y: 10},
        {x: 3, y: 11},
        {x: 4, y: 12},
        {x: 5, y: 14},
        {x: 6, y: 14},
        {x: 7, y: 15},
      ],
      percent: '1.22',
      range: [10.00, 15.00],
      timeFilter: 'live',
      xDates: [],
      yPrices: [],
      volumeWeightedAveragePrice: '',
    };
  }

  //All logic needs to be handled before hand, either in backend or in action? Will change this when we actually have data coming in

  componentDidMount() {
    this.props.stockLatest(this.props.route.params.item.ticker);
    // this.props.fetchStockDay(this.props.route.params.item.ticker);
    // this.props.fetchStockWeek(this.props.route.params.item.ticker);
    // this.props.fetchStockMonth(this.props.route.params.item.ticker);
    // this.props.fetchStockThreeMonth(this.props.route.params.item.ticker);
    this.props.fetchStockYear(this.props.route.params.item.ticker);
    this.props.fetchStockDetails(this.props.route.params.item.ticker);

    //DAY DATA
    let dayPrices = this.props.stockDay.map((a) => a.close);
    const dayPriceRange = [
      Math.min(...dayPrices),
      Math.max(...dayPrices),
    ];
    console.log(dayPriceRange, 'dayPRICERANGE');
    const stockDayDataOriginal = this.props.stockDay.map((i) => {
      return {x: Date.parse(i.window.startTime), y: i.close};
    });
    const stockDayData = stockDayDataOriginal.reverse();

    
  }

  render() {
    console.log(this.props.stockLatestData, 'DATAAAAAAAAAA');

    //DAY DATA
    let dayPrices = this.props.stockDay.map((a) => a.close);
    const dayPriceRange = [
      Math.min(...dayPrices),
      Math.max(...dayPrices),
    ];
    console.log(dayPriceRange, 'dayPRICERANGE');
    const stockDayDataOriginal = this.props.stockDay.map((i) => {
      return {x: Date.parse(i.window.startTime), y: i.close};
    });
    const stockDayData = stockDayDataOriginal.reverse();

    //WEEK DATA
    let weekPrices = this.props.stockWeek.map((a) => a.close);
    const weekPriceRange = [
      Math.min(...weekPrices),
      Math.max(...weekPrices),
    ];
    console.log(weekPriceRange, 'weekPRICERANGE');
    const stockWeekDataOriginal = this.props.stockWeek.map((i) => {
      return {x: Date.parse(i.window.startTime), y: i.close};
    });
    const stockWeekData = stockWeekDataOriginal.reverse();

    //MONTH DATA
    let monthPrices = this.props.stockMonth.map((a) => a.close);
    const monthPriceRange = [
      Math.min(...monthPrices),
      Math.max(...monthPrices),
    ];
    const stockMonthDataOriginal = this.props.stockMonth.map((i) => {
      return {x: Date.parse(i.window.startTime), y: i.close};
    });
    const stockMonthData = stockMonthDataOriginal.reverse();

    //THREE MONTH DATA
    let threeMonthPrices = this.props.stockThreeMonth.map((a) => a.close);
    const threeMonthPriceRange = [
      Math.min(...threeMonthPrices),
      Math.max(...threeMonthPrices),
    ];
    const stockThreeMonthDataOriginal = this.props.stockThreeMonth.map((i) => {
      return {x: Date.parse(i.window.startTime), y: i.close};
    });
    const stockThreeMonthData = stockThreeMonthDataOriginal.reverse();

    //YEAR DATA
    let yearPrices = this.props.stockYear.map((a) => a.close);
    const yearPriceRange = [
      Math.min(...yearPrices),
      Math.max(...yearPrices),
    ];
    const stockYearDataOriginal = this.props.stockYear.map((i) => {
      return {x: Date.parse(i.window.startTime), y: i.close};
    });
    const stockYearData = stockYearDataOriginal.reverse();
    // console.log(stockYearData, 'yearDATA');

    //Y
    const yPrices = this.state.yPrices;
    //X and Y data
    const xyData = this.state.xDates.map((stockDate, stockPrice) => {
      return {x: stockDate, y: yPrices[stockPrice]};
    });

    //Data periods
    // Data for week
    const weekData = xyData.slice(xyData.length - 7);
    //Data for month
    const monthData = xyData.slice(xyData.length - 31);
    // console.log(monthData,"MONTHDATA")

    //Info to display
    //Current stock price
    const currentPrice = this.props.stockLatestData.volumeWeightedAveragePrice;

    // Growth/Loss percentage
    const percentChange = (
      ((currentPrice - yPrices[yPrices.length - 7]) /
        yPrices[yPrices.length - 7]) *
      100
    ).toFixed(2);

    // Growth/Loss percentage
    const percentChangeMonth = (
      ((currentPrice - yPrices[yPrices.length - 30]) /
        yPrices[yPrices.length - 30]) *
      100
    ).toFixed(2);

    //Range of highest and lowest numbers on graph, passed into graph component
    //Total range of stock prices
    const newrange = [Math.min(...yPrices), Math.max(...yPrices)];

    const newweek = yPrices.slice(yPrices.length - 7);
    //Week range of stock prices
    const weekRange = [Math.min(...newweek), Math.max(...newweek)];

    //Numbers to display graph numbers, can also use use built in graph numbers instead
    //Graph high number
    const chartHigh = this.state.range[1];
    //Graph low number
    const chartLow = this.state.range[0];
    //High/Low difference
    const numberDifference = (chartHigh - chartLow) / 3;
    //Graph three quarter numbernumber
    const chartThreeQuarter = (chartHigh - numberDifference).toFixed(2);
    //Graph quarter number
    const chartOneQuarter = (chartLow + numberDifference).toFixed(2);
    // console.log(weekData, 'WEEKDATA')
    const {route} = this.props;
    const {graphData, percent, range} = this.state;

    if (!this.props.stockLatestData) {
      return <View></View>;
    }
    return (
      <SafeAreaView style={style.mainContainer}>
        <ScrollView>
          {this.props.route.params ? (
            <View style={style.aboveGraphContainer}>
              <View style={style.symbolView}>
                <Text style={style.symbol}>{route.params.item.ticker}</Text>
                <Text style={style.price}>
                  ${this.props.stockLatestData.volumeWeightedAveragePrice}
                </Text>
              </View>
              <View style={style.titleView}>
                <Text style={style.title}>{route.params.item.title}</Text>

                <Text style={style.percentage}>
                  (+{this.props.stockLatestDatachange}%)
                </Text>
              </View>
            </View>
          ) : (
            <Text>Company Information</Text>
          )}
          <View style={style.graphContainer}>
            <CompanyStockGraph
              graphData={graphData}
              symbol={route.params.item.ticker}
              range={range}
            />
            <View style={style.graphNumbers}>
              <Text style={style.graphNumberText}>-{chartLow}</Text>
              <Text style={style.graphNumberText}>-{chartOneQuarter}</Text>
              <Text style={style.graphNumberText}>-{chartThreeQuarter}</Text>
              <Text style={style.graphNumberText}>-{chartHigh}</Text>
            </View>
          </View>
          <View style={style.stockButtonsContainer}>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  timeFilter: 'live',
                  graphData: stockDayData,
                  range: dayPriceRange,
                })
              }>
              <Text
                style={
                  this.state.timeFilter === 'live'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                Live
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  timeFilter: 'day',
                  graphData: stockDayData,
                  range: dayPriceRange,
                })
              }>
              <Text
                style={
                  this.state.timeFilter === 'day'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                1D
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  graphData: stockWeekData,
                  percent: percentChange,
                  range: weekPriceRange,
                  timeFilter: 'week',
                })
              }>
              <Text
                style={
                  this.state.timeFilter === 'week'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                1W
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  graphData: stockMonthData,
                  percent: percentChangeMonth,
                  // range: [Math.floor(stockMonthData[0].y), Math.ceil(stockMonthData[stockMonthData.length-1].y)+1],
                  range: monthPriceRange,
                  timeFilter: 'month',
                })
              }>
              <Text
                style={
                  this.state.timeFilter === 'month'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                1M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  graphData: stockThreeMonthData,
                  range: threeMonthPriceRange,
                  timeFilter: '3 months',
                })
              }>
              <Text
                style={
                  this.state.timeFilter === '3 months'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                3M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  graphData: stockYearData,
                  range: yearPriceRange,
                  timeFilter: 'year',
                })
              }>
              <Text
                style={
                  this.state.timeFilter === 'year'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                1Y
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  timeFilter: 'all',
                })
              }>
              <Text
                style={
                  this.state.timeFilter === 'all'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                All
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={style.vitalsHeader}>STATS</Text>
          <View style={style.vitalsContainer}>
            <View style={style.vitalsLeftColumn}>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Open:</Text>
                <Text style={style.vitalDetailsData}>${currentPrice}</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>High:</Text>
                <Text style={style.vitalDetailsData}>
                  ${this.props.stockLatestData.high}
                </Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Low:</Text>
                <Text style={style.vitalDetailsData}>
                  ${this.props.stockLatestData.low}
                </Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Volume:</Text>
                <Text style={style.vitalDetailsData}>
                  ${this.props.stockLatestData.volume}
                </Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Avg Vol:</Text>
                <Text style={style.vitalDetailsData}>${currentPrice}</Text>
              </View>
            </View>

            <View style={style.vitalsRightColumn}>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>P/E:</Text>
                <Text style={style.vitalDetailsData}>{currentPrice}</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>MKT Cap:</Text>
                <Text style={style.vitalDetailsData}>${currentPrice}</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>52w High:</Text>
                <Text style={style.vitalDetailsData}>${newrange[1]}</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>52w Low:</Text>
                <Text style={style.vitalDetailsData}>${newrange[0]}</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Div/Yield:</Text>
                <Text style={style.vitalDetailsData}>{currentPrice}%</Text>
              </View>
            </View>
          </View>
          <View style={style.buyButtonContainer}>
            <Text style={style.buyButton}>Buy {route.params.item.title}</Text>
          </View>
          <View style={style.aboutSection}>
            <Text style={style.aboutHeader}>ABOUT</Text>

            <Text style={style.sectorData}>
              <Text style={style.sectorText}>Sector:</Text>{' '}
              {this.props.stockDetails.sector}
            </Text>
            <Text style={style.about}>
              {this.props.stockDetails.description}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    stockDay: state.company.stockDay,
    stockWeek: state.company.stockWeek,
    stockMonth: state.company.stockMonth,
    stockThreeMonth: state.company.stockThreeMonth,
    stockYear: state.company.stockYear,
    stockDetails: state.company.stockDetails,
    stockLatestData: state.company.stockLatestData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStockDay: (ticker) => dispatch(fetchStockDay(ticker)),
    fetchStockWeek: (ticker) => dispatch(fetchStockWeek(ticker)),
    fetchStockMonth: (ticker) => dispatch(fetchStockMonth(ticker)),
    fetchStockThreeMonth: (ticker) => dispatch(fetchStockThreeMonth(ticker)),
    fetchStockYear: (ticker) => dispatch(fetchStockYear(ticker)),
    fetchStockDetails: (ticker) => dispatch(fetchStockDetails(ticker)),
    stockLatest: (ticker) => dispatch(stockLatest(ticker)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockSearchInformation);

// export default StockSearchInformation;

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#2a334a',
    flex: 1,
  },
  aboveGraphContainer: {
    paddingHorizontal: moderateScale(4),
    paddingVertical: moderateScale(14),
    backgroundColor: '#324165',
    marginBottom: moderateScale(20),
  },
  graphContainer: {
    flexDirection: 'row',
  },
  graphNumbers: {
    flexDirection: 'column-reverse',
    justifyContent: 'space-around',
    marginRight: moderateScale(10),
    borderLeftWidth: moderateScale(1),
    borderLeftColor: 'lightgrey',
  },
  graphNumberText: {
    color: 'lightgrey',
    fontSize: moderateScale(14.5),
    fontFamily: 'Montserrat-Medium',
  },
  symbolView: {
    paddingHorizontal: moderateScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'rgb(8, 177, 40)',
    alignItems: 'center',
  },
  titleView: {
    paddingHorizontal: moderateScale(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'rgb(8, 177, 40)',
    alignItems: 'center',
  },
  symbol: {
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
  },
  price: {
    color: '#FFFFFF',
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
  },
  title: {
    color: 'lightgrey',
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
  },
  percentage: {
    color: 'rgb(8, 177, 40)',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Medium',
  },
  percentageLoss: {
    color: '#D13C3D',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Medium',
  },
  vitalsContainer: {
    marginTop: moderateScale(6),
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(4),
  },
  vitalsHeader: {
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
    fontSize: moderateScale(22),
    marginTop: moderateScale(14),
    textAlign: 'left',
    paddingHorizontal: moderateScale(10),
  },
  vitalsLeftColumn: {
    flexDirection: 'column',
  },
  vitalsRightColumn: {
    flexDirection: 'column',
  },
  vitalsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vitalDetails: {
    color: 'lightgrey',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Medium',
    marginBottom: moderateScale(10),
  },
  vitalDetailsData: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Bold',
    marginBottom: moderateScale(10),
    marginLeft: moderateScale(55),
  },
  stockButtonsContainer: {
    marginTop: moderateScale(7),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: moderateScale(10),
    borderBottomWidth: moderateScale(0.5),
    borderBottomColor: 'lightgrey',
    paddingBottom: moderateScale(9),
  },
  stockButtons: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(15),
  },
  buyButtonContainer: {
    marginTop: moderateScale(24),
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    borderRadius: moderateScale(6),
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(14),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(40),
  },
  aboutSection: {
    marginTop: moderateScale(36),
    marginBottom: moderateScale(22),
    paddingLeft: moderateScale(8),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  aboutHeader: {
    color: '#FFFFFF',
    fontSize: moderateScale(22),
    fontFamily: 'Montserrat-Bold',
    marginBottom: moderateScale(4),
  },
  sectorText: {
    color: 'lightgrey',
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(16),
  },
  sectorData: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(16),
  },
  about: {
    marginTop: moderateScale(10),
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Medium',
    fontSize: moderateScale(14),
  },
});
