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
import {fetchStockMonth} from '../../actions/marketMovers'


export class CompanyInformation extends Component {
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
      range: [10, 15],
      timeFilter: 'live',
      xDates: [],
      yPrices: [],
    };
  }

  //All logic needs to be handled before hand, either in backend or in action? Will change this when we actually have data coming in

  componentDidMount() {
    this.props.fetchStockMonth(this.props.route.params.item.ticker)
    //X
    // const xDates = this.props.route.params.item.dates.map(
    //   (item) => new Date(item * 1000),
    // );
    // //Y
    // const yPrices = this.props.route.params.item.priceHistory;

    // this.setState({
    //   xDates: xDates,
    //   yPrices: yPrices,
    // });
    this.setState({
      xDates: [1604188800,
        1604275200,
        1604361600,
        1604448000,
        1604534400,],
      yPrices: [ 61,
        49,
        19,
        85,
        18,],
    });
  }

  // componentDidUpdate(prevProps) {
  //   if (
  //     this.props.route.params.item.dates !== prevProps.route.params.item.dates
  //   ) {
  //     this.setState({
  //       xDates: this.props.route.params.item.dates,
  //       yPrices: this.props.route.params.item.priceHistory,
  //     });
  //   }
  // }

  render() {
    console.log(this.props.stockMonth, "STOCK MONTH IN COMPANY INFO")
    console.log(this.props.route.params, "PARAMS IN COMPANY INFO")

    //X and Y
    //X
    // const xDates = this.props.route.params.item.dates.map(
    //   (item) => new Date(item * 1000),
    // );
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

    //Info to display
    //Current stock price
    // const currentPrice = this.state.yPrices[yPrices.length - 1];
    const currentPrice = this.props.route.params.item.quote.volumeWeightedAveragePrice

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
    const chartThreeQuarter = (chartHigh - numberDifference).toFixed(0);
    //Graph quarter number
    const chartOneQuarter = (chartLow + numberDifference).toFixed(0);
    // console.log(weekData, 'WEEKDATA')
    const {route} = this.props;
    const {graphData, percent, range} = this.state;
    return (
      <SafeAreaView style={style.mainContainer}>
        <CompanySymbolList
          navigation={this.props.navigation}
          symbol={route.params.item.ticker}
          itemId={route.params.item.id}
        />
        <ScrollView>
          {this.props.route.params ? (
            <View style={style.aboveGraphContainer}>
              <View style={style.symbolView}>
                <Text style={style.symbol}>{route.params.item.ticker}</Text>
                <Text style={style.price}>${route.params.item.quote.volumeWeightedAveragePrice}</Text>
              </View>
              <View style={style.titleView}>
                <Text style={style.title}>{route.params.item.title}</Text>
                <Text style={style.percentage}>
                  ({route.params.item.percentage})
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
                  graphData: weekData,
                  percent: percentChange,
                  range: weekRange,
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
                  graphData: monthData,
                  percent: percentChangeMonth,
                  range: newrange,
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
                <Text style={style.vitalDetailsData}>${this.props.route.params.item.quote.high}</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Low:</Text>
                <Text style={style.vitalDetailsData}>${this.props.route.params.item.quote.low}</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Volume:</Text>
                <Text style={style.vitalDetailsData}>${this.props.route.params.item.quote.volume}</Text>
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
              {route.params.item.sector}
            </Text>
            <Text style={style.about}>{route.params.item.about}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    
    stockMonth: state.company.stockMonth
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStockMonth: (ticker) => dispatch(fetchStockMonth(ticker)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyInformation);

// export default CompanyInformation;

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
