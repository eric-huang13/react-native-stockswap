import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
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
  // stockLatest,
} from '../../actions/marketMovers';

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
      range: [10.0, 15.0],
      timeFilter: 'live',
      xDates: [],
      yPrices: [],
    };
  }

  componentDidMount() {
    this.props.fetchStockDay(this.props.route.params.item.ticker);
    // this.props.stockLatest(this.props.route.params.item.ticker);
    this.props.fetchStockDetails(this.props.route.params.item.ticker);
    // this.props.navigation.setOptions({title: this.props.stockDetails.name});
  }

  render() {
    const getLivedata = () => {
      this.props.fetchStockDay(this.props.route.params.item.ticker);
      this.setState({
        timeFilter: 'live',
      });
    };
    const getDaydata = () => {
      this.props.fetchStockDay(this.props.route.params.item.ticker);
      this.setState({
        timeFilter: 'day',
      });
    };
    const getWeekdata = () => {
      this.props.fetchStockWeek(this.props.route.params.item.ticker);
      this.setState({
        timeFilter: 'week',
      });
    };
    const getMonthdata = () => {
      this.props.fetchStockMonth(this.props.route.params.item.ticker);
      this.setState({
        timeFilter: 'month',
      });
    };
    const getThreeMonthdata = () => {
      this.props.fetchStockThreeMonth(this.props.route.params.item.ticker);
      this.setState({
        timeFilter: '3 months',
      });
    };
    const getYeardata = () => {
      this.props.fetchStockYear(this.props.route.params.item.ticker);
      this.setState({
        timeFilter: 'year',
      });
    };
    const getAlldata = () => {
      this.props.fetchStockYear(this.props.route.params.item.ticker);
      this.setState({
        timeFilter: 'all',
      });
    };

    const currentPrice = this.props.route.params.item.quote
      .volumeWeightedAveragePrice;

    //Numbers to display graph numbers, can also use use built in graph numbers instead
    //Graph high number
    const chartHigh = this.props.stockRange[1];
    //Graph low number
    const chartLow = this.props.stockRange[0];
    //High/Low difference
    const numberDifference = (chartHigh - chartLow) / 3;
    //Graph three quarter numbernumber
    const chartThreeQuarter = (chartHigh - numberDifference).toFixed(2);
    //Graph quarter number
    const chartOneQuarter = (chartLow + numberDifference).toFixed(2);

    const {route} = this.props;
    const {graphData, percent, range} = this.state;

    if (this.props.stockGraphData.length < 2) {
      return (
        <View style={style.mainContainer}>
          <View style={style.loadingView}>
            <Text style={style.loadingText}>Loading...</Text>
            <ActivityIndicator size="large" color="#8b64ff" />
          </View>
        </View>
      );
    }
    return (
      <SafeAreaView style={style.mainContainer}>
        <CompanySymbolList
          navigation={this.props.navigation}
          symbol={route.params.item.ticker}
          itemId={route.params.item.id}
          stockCategory={route.params.stockCategory}
        />
        <ScrollView>
          {this.props.route.params ? (
            <View style={style.aboveGraphContainer}>
              <View style={style.symbolView}>
                <Text style={style.symbol}>{route.params.item.ticker}</Text>
                <Text style={style.price}>
                  ${route.params.item.quote.volumeWeightedAveragePrice}
                </Text>
              </View>
              <View style={style.titleView}>
                <Text style={style.title}>{route.params.item.title}</Text>
                {this.props.route.params.stockCategory == 'losers' ? (
                  <Text style={style.percentageLoss}>
                    ({route.params.item.change}%)
                  </Text>
                ) : (
                  <Text style={style.percentage}>
                    (+{route.params.item.change}%)
                  </Text>
                )}
              </View>
            </View>
          ) : (
            <Text>Company Information</Text>
          )}
          {this.props.stockGraphData.length > 2 &&
          this.props.stockRange.length > 1 ? (
            <View style={style.graphContainer}>
              <CompanyStockGraph
                graphData={this.props.stockGraphData}
                symbol={route.params.item.ticker}
                range={this.props.stockRange}
              />
              <View style={style.graphNumbers}>
                <Text style={style.graphNumberText}>-{chartLow}</Text>
                <Text style={style.graphNumberText}>-{chartOneQuarter}</Text>
                <Text style={style.graphNumberText}>-{chartThreeQuarter}</Text>
                <Text style={style.graphNumberText}>-{chartHigh}</Text>
              </View>
            </View>
          ) : null}
          <View style={style.stockButtonsContainer}>
            <TouchableOpacity onPress={() => getLivedata()}>
              <Text
                style={
                  this.state.timeFilter === 'live'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                Live
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => getDaydata()}>
              <Text
                style={
                  this.state.timeFilter === 'day'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                1D
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => getWeekdata()}>
              <Text
                style={
                  this.state.timeFilter === 'week'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                1W
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => getMonthdata()}>
              <Text
                style={
                  this.state.timeFilter === 'month'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                1M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => getThreeMonthdata()}>
              <Text
                style={
                  this.state.timeFilter === '3 months'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                3M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => getYeardata()}>
              <Text
                style={
                  this.state.timeFilter === 'year'
                    ? {...style.stockButtons, color: '#8b64ff'}
                    : {...style.stockButtons}
                }>
                1Y
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => getAlldata()}>
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
                <Text style={style.vitalDetailsData}>
                  ${currentPrice.toFixed(2)}
                </Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>High:</Text>
                <Text style={style.vitalDetailsData}>
                  ${this.props.route.params.item.quote.high.toFixed(2)}
                </Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Low:</Text>
                <Text style={style.vitalDetailsData}>
                  ${this.props.route.params.item.quote.low.toFixed(2)}
                </Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Volume:</Text>
                <Text style={style.vitalDetailsData}>
                  ${this.props.route.params.item.quote.volume.toFixed(2)}
                </Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Avg Vol:</Text>
                <Text style={style.vitalDetailsData}>
                  $
                  {this.props.route.params.item.quote.volumeWeightedAveragePrice.toFixed(
                    2,
                  )}
                </Text>
              </View>
            </View>

            <View style={style.vitalsRightColumn}>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>P/E:</Text>
                <Text style={style.vitalDetailsData}></Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>MKT Cap:</Text>
                <Text style={style.vitalDetailsData}>$</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>52w High:</Text>
                <Text style={style.vitalDetailsData}>$</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>52w Low:</Text>
                <Text style={style.vitalDetailsData}>$</Text>
              </View>
              <View style={style.vitalsRow}>
                <Text style={style.vitalDetails}>Div/Yield:</Text>
                <Text style={style.vitalDetailsData}>%</Text>
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
    stockGraphData: state.company.stockGraphData,
    stockRange: state.company.stockRange,
    // stockLatestData: state.company.stockLatestData,
    stockDetails: state.company.stockDetails,
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
    // stockLatest: (ticker) => dispatch(stockLatest(ticker)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyInformation);

// export default CompanyInformation;

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#2a334a',
    flex: 1,
  },
  loadingView: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(180),
  },
  loadingText: {
    color: '#B8A0FF',
    fontSize: moderateScale(18),
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: moderateScale(24),
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
