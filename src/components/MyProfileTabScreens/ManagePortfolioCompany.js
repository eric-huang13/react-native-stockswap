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
import PortfolioStockGraph from '../MyProfileTabComponents/PortfolioStockGraph';
import {connect} from 'react-redux';
import {
  fetchStockDayPortfolio,
  fetchStockMonthPotfolio,
  fetchStockWeekPortfolio,
  fetchStockThreeMonthPortfolio,
  fetchStockYearPortfolio,
  fetchStockDetailsPortfolio,
  stockLatestPortfolio,
} from '../../actions/portfolio';
import TriangleIcon from '../../icons/TriangleIcon';

export class ManagePortfolioCompany extends Component {
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
      shouldShow: false,
      dropDown: 'Visible for all',
    };
  }
  dropDownSelect(pick) {
    this.setState({dropDown: pick, shouldShow: false});
  }
  componentDidMount() {
    this.props.fetchStockDayPortfolio(
      this.props.route.params.item.tickerSymbol,
    );
    // this.props.stockLatestPortfolio(this.props.route.params.item.tickerSymbol);
    this.props.fetchStockDetailsPortfolio(
      this.props.route.params.item.tickerSymbol,
    );
    this.props.stockLatestPortfolio(this.props.route.params.item.tickerSymbol);

    // this.props.navigation.setOptions({title: this.props.stockDetails.name});
  }

  render() {
    const getLivedata = () => {
      this.props.fetchStockDayPortfolio(
        this.props.route.params.item.tickerSymbol,
      );
      this.setState({
        timeFilter: 'live',
      });
    };
    const getDaydata = () => {
      this.props.fetchStockDayPortfolio(
        this.props.route.params.item.tickerSymbol,
      );
      this.setState({
        timeFilter: 'day',
      });
    };
    const getWeekdata = () => {
      this.props.fetchStockWeekPortfolio(
        this.props.route.params.item.tickerSymbol,
      );
      this.setState({
        timeFilter: 'week',
      });
    };
    const getMonthdata = () => {
      this.props.fetchStockMonthPotfolio(
        this.props.route.params.item.tickerSymbol,
      );
      this.setState({
        timeFilter: 'month',
      });
    };
    const getThreeMonthdata = () => {
      this.props.fetchStockThreeMonthPortfolio(
        this.props.route.params.item.tickerSymbol,
      );
      this.setState({
        timeFilter: '3 months',
      });
    };
    const getYeardata = () => {
      this.props.fetchStockYearPortfolio(
        this.props.route.params.item.tickerSymbol,
      );
      this.setState({
        timeFilter: 'year',
      });
    };
    const getAlldata = () => {
      this.props.fetchStockYearPortfolio(
        this.props.route.params.item.tickerSymbol,
      );
      this.setState({
        timeFilter: 'all',
      });
    };

    const currentPrice = this.props.stockLatestData.volumeWeightedAveragePrice;

    //Numbers to display graph numbers, can also use use built in graph numbers instead
    //Graph high number
    const chartHigh = this.props.stockRangePortfolio[1];
    //Graph low number
    const chartLow = this.props.stockRangePortfolio[0];
    //High/Low difference
    const numberDifference = (chartHigh - chartLow) / 3;
    //Graph three quarter numbernumber
    const chartThreeQuarter = (chartHigh - numberDifference).toFixed(2);
    //Graph quarter number
    const chartOneQuarter = (chartLow + numberDifference).toFixed(2);
    const {route} = this.props;
    const {graphData, percent, range, shouldShow} = this.state;
    if (this.props.stockDetails.length < 1) {
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
        <ScrollView>
          {this.props.route.params ? (
            <View style={style.aboveGraphContainer}>
              <View style={style.symbolView}>
                <Text style={style.symbol}>
                  {this.props.route.params.item.tickerSymbol}
                </Text>
                <Text style={style.price}>
                  ${this.props.stockLatestData.volumeWeightedAveragePrice}
                </Text>
              </View>
              <View style={style.titleView}>
                {/* <Text style={style.title}>{route.params.item.title}</Text> */}

                <Text style={style.percentage}>
                  ({this.props.route.params.percentChange}%)
                </Text>
              </View>
            </View>
          ) : (
            <Text>Company Information</Text>
          )}
          {/* {this.props.stockGraphDataPortfolio.length > 2 &&
          this.props.stockRangePortfolio.length > 1 && */}
          {this.props.stockPortfolioLoading ? (
            <View style={style.mainContainer}>
              <View style={style.loadingViewGraph}>
                <Text style={style.loadingText}>Loading...</Text>
                <ActivityIndicator size="large" color="#8b64ff" />
              </View>
            </View>
          ) : this.props.stockGraphDataPortfolio.length < 2 ||
            this.props.stockRangePortfolio.length < 1 ? (
            <View style={style.mainContainer}>
              <View style={style.loadingViewGraph}>
                <Text style={style.loadingText}>Graph data unavailable</Text>
              </View>
            </View>
          ) : (
            <View style={style.graphContainer}>
              <PortfolioStockGraph
                graphData={this.props.stockGraphDataPortfolio}
                symbol={route.params.item.tickerSymbol}
                range={this.props.stockRangePortfolio}
              />
              <View style={style.graphNumbers}>
                <Text style={style.graphNumberText}>
                  -{chartLow.toFixed(2)}
                </Text>
                <Text style={style.graphNumberText}>-{chartOneQuarter}</Text>
                <Text style={style.graphNumberText}>-{chartThreeQuarter}</Text>
                <Text style={style.graphNumberText}>
                  -{chartHigh.toFixed(2)}
                </Text>
              </View>
            </View>
          )}
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
          <View style={style.accountPrivacyContainer}>
            <Text style={style.detailsText}>Account privacy</Text>

            <View style={style.dotsDropdownContainer}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    shouldShow: !shouldShow,
                  })
                }>
                <View style={style.visibleButtonContainer}>
                  <Text style={style.middleDetailsText}>
                    {this.state.dropDown}
                  </Text>
                  <TriangleIcon style={style.icon} />
                </View>
              </TouchableOpacity>
              {this.state.shouldShow ? (
                <View style={style.dropdown}>
                  {this.state.dropDown == 'Visible for all' ? (
                    <TouchableOpacity
                      onPress={() => this.dropDownSelect('Private')}>
                      <Text style={style.dropDownText}>Private</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => this.dropDownSelect('Visible for all')}>
                      <Text style={style.dropDownText}>Visible for all</Text>
                    </TouchableOpacity>
                  )}
                </View>
              ) : null}
            </View>
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
                <Text style={style.vitalDetailsData}>
                  ${this.props.stockLatestData.volumeWeightedAveragePrice}
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

          {this.props.stockDetails.sector !== 'Unavailable' ? (
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
          ) : null}
          <View style={style.buyButtonContainer}>
            <Text style={style.buyButton}>Publish a trade</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    stockGraphDataPortfolio: state.portfolio.stockGraphDataPortfolio,
    stockRangePortfolio: state.portfolio.stockRangePortfolio,
    stockDetails: state.portfolio.stockDetails,
    stockPortfolioLoading: state.portfolio.stockPortfolioLoading,
    stockLatestData: state.portfolio.stockLatestPortfolioData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStockDayPortfolio: (ticker) =>
      dispatch(fetchStockDayPortfolio(ticker)),
    fetchStockWeekPortfolio: (ticker) =>
      dispatch(fetchStockWeekPortfolio(ticker)),
    fetchStockMonthPotfolio: (ticker) =>
      dispatch(fetchStockMonthPotfolio(ticker)),
    fetchStockThreeMonthPortfolio: (ticker) =>
      dispatch(fetchStockThreeMonthPortfolio(ticker)),
    fetchStockYearPortfolio: (ticker) =>
      dispatch(fetchStockYearPortfolio(ticker)),
    fetchStockDetailsPortfolio: (ticker) =>
      dispatch(fetchStockDetailsPortfolio(ticker)),
    stockLatestPortfolio: (ticker) => dispatch(stockLatestPortfolio(ticker)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManagePortfolioCompany);

// export default ManagePortfolioCompany;

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
  loadingViewGraph: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(65),
    marginBottom: moderateScale(50),
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
    marginBottom: moderateScale(8),
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
  accountPrivacyContainer: {
    paddingHorizontal: 6,
  },
  visibleButtonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#3E4D6C',
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleDetailsText: {
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
    fontSize: 16,
  },
  detailsText: {
    color: 'lightgrey',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    paddingLeft: 2,
    marginTop: 6,
  },
  dropdown: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 44,
    backgroundColor: '#3E4D6C',
    zIndex: 1,
    paddingVertical: 4,
    height: 35,
    position: 'absolute',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  dropDownText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 12,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 6,
  },
  dropDownTextReportContainer: {
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    paddingTop: 4,
    backgroundColor: '#2C3957',
  },
  icon: {
    marginRight: 4,
  },
});
