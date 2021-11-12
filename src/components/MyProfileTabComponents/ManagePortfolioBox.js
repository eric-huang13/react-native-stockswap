import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import PortfolioGraph from '../HomeTabComponents/PortfolioGraph';
import BearIcon from '../../icons/BearIcon';
import BullIcon from '../../icons/BullIcon';
import {moderateScale} from '../../util/responsiveFont';
import {connect} from 'react-redux';

class ManagePortfolioBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [
        {x: 2, y: 10},
        {x: 3, y: 21},
        {x: 4, y: 32},
        {x: 5, y: 14},
        {x: 6, y: 4},
        {x: 7, y: 25},
      ],
      percent: '1.22',
      range: [5, 30],
      start: '',
      end: '',
      securityDetails: [],
      stockSymbol: '',
    };
  }

  componentDidMount() {
    const {item} = this.props;
    //X and Y
    //   //X
    //   const xDates = item.dates.map((item) => new Date(item * 1000));
    //   //Y
    //   const yPrices = item.priceHistory;
    //   //X and Y data
    //   const xyData = xDates.map((stockDate, stockPrice) => {
    //     return {x: stockDate, y: yPrices[stockPrice]};
    //   });
    //   //Data periods
    //   // Data for week
    //   const weekData = xyData.slice(xyData.length - 7);
    //   //Data for month
    //   const monthData = xyData.slice(xyData.length - 31);
    //   //Week range of stock prices
    //   const weekRange = [
    //     Math.min(...yPrices.slice(yPrices.length - 7)),
    //     Math.max(...yPrices.slice(yPrices.length - 7)),
    //   ];

    //   //Week begin and end prices
    //   const weekStart = yPrices[yPrices.length - 7];
    //   const weekEnd = yPrices[yPrices.length - 1];

    //   //Info to display
    //   //Current stock price
    //   const currentPrice = yPrices[yPrices.length - 1];

    //   const seven = yPrices[yPrices.length - 7];

    //   const testing = currentPrice - yPrices[yPrices.length - 7];

    //   // Growth/Loss percentage
    //   const percentChange = (
    //     ((currentPrice - yPrices[yPrices.length - 7]) /
    //       yPrices[yPrices.length - 7]) *
    //     100
    //   ).toFixed(2);

    const filteredSecurities = this.props.portfolioAccounts.securities.filter(
      (security) =>
        security.securityId == this.props.item.securityId &&
        security.itemId == this.props.item.itemId &&
        security.tickerSymbol !== null,
    );

    const tickerSym = filteredSecurities.map((item) =>
      this.setState({stockSymbol: item.tickerSymbol}),
    );
  }

  render() {
    const {item, portfolioAccounts} = this.props;
    const filteredSecurities = portfolioAccounts.securities.filter(
      (security) =>
        security.securityId == this.props.item.securityId &&
        security.itemId == this.props.item.itemId &&
        security.tickerSymbol !== null,
    );
    const stockObject = this.props.tickersAll[this.state.stockSymbol];

    return (
      <SafeAreaView style={style.container}>
        {filteredSecurities.map((item, index) => (
          <View style={style.container} key={index}>
            <View style={style.symbolContainer}>
              <Text
                style={
                  this.state.percent > 0 ? style.symbolGain : style.symbolLoss
                }>
                {item.tickerSymbol}
              </Text>
              {stockObject ? (
                <Text style={style.title}>
                  {stockObject.name.length < 15
                    ? `${stockObject.name}`
                    : `${stockObject.name.substring(0, 14)}...`}
                </Text>
              ) : null}
              <Text style={style.price}>Shares: 22</Text>
              <Text style={style.price}>Price: ${this.props.item.price}</Text>
            </View>
            {this.state.stockSymbol !== '' ? (
              <View style={style.graphContainer}>
                <PortfolioGraph
                  ticker={this.state.stockSymbol}
                  graphData={this.state.graphData}
                  range={this.state.range}
                  // percent={this.state.percent}
                />
              </View>
            ) : (
              <View style={style.unavailableView}>
                <Text style={style.loadingText}>Graph data unavailable</Text>
              </View>
            )}
            <View style={style.percentContainer}>
              {this.state.percent > 0 ? (
                <BullIcon style={style.icon} />
              ) : (
                <BearIcon style={style.icon} />
              )}
              <Text
                style={
                  this.state.percent > 0 ? style.percentGain : style.percentLoss
                }>
                {this.state.percent}%
              </Text>
              <Text style={style.price}>Portfolio</Text>
            </View>
          </View>
        ))}
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    portfolioAccounts: state.user.portfolioAccounts,
    // institution: state.user.institution,
    tickersAll: state.company.tickersAll,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // PortfolioAccounts: () => dispatch(PortfolioAccounts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManagePortfolioBox);
const style = StyleSheet.create({
  container: {
    backgroundColor: '#2a334a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width: moderateScale(84),
  },
  icon: {
    alignSelf: 'flex-end',
  },
  symbolContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingVertical: moderateScale(4),
    paddingLeft: moderateScale(8),
    width: '100%',
    textAlign: 'left',
  },
  symbolGain: {
    color: '#71F59C',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(16),
    textAlign: 'left',
  },
  symbolLoss: {
    color: '#F66E6E',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(16),
    textAlign: 'left',
  },
  title: {
    color: 'lightgrey',
    fontSize: moderateScale(10),
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
  },
  price: {
    color: '#FFFFFF',
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
  },
  percentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingVertical: moderateScale(4),
    paddingRight: moderateScale(30),
    alignItems: 'flex-end',
  },
  percentGain: {
    color: '#71F59C',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(16),
    textAlign: 'left',
  },
  percentLoss: {
    color: '#F66E6E',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(16),
    textAlign: 'left',
  },
  unavailableView: {
    backgroundColor: '#2a334a',
    flexDirection: 'row',

    width: moderateScale(234),
    alignItems: 'center',
  },
  loadingText: {
    color: '#B8A0FF',
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: moderateScale(24),
    alignSelf: 'center',
    marginLeft: 28,
  },
});
