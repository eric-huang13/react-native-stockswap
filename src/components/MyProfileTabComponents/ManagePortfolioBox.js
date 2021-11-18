import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import PortfolioGraph from '../HomeTabComponents/PortfolioGraph';
import BearIcon from '../../icons/BearIcon';
import BullIcon from '../../icons/BullIcon';
import {moderateScale} from '../../util/responsiveFont';
import {connect} from 'react-redux';
import axios from 'axios';

class ManagePortfolioBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [],
      percent: '1.22',
      range: [5, 30],
      start: '',
      end: '',
      securityDetails: [],
      stockSymbol: '',
      loading: true,
      error: false,
      lastQuote: '',
      equity: '',
      todaysReturn: '',
      totalPercentChange: '',
      percentChange: '',
      totalReturn: '',
    };
  }

  componentDidMount() {
    const {item} = this.props;

    const filteredSecurities = this.props.portfolioAccounts.securities.filter(
      (security) =>
        security.securityId == this.props.item.securityId &&
        security.itemId == this.props.item.itemId &&
        security.tickerSymbol !== null &&
        security.type !== 'cash' &&
        security.type !== 'derivative',
    );

    const tickerSym = filteredSecurities.map((item) =>
      this.setState({stockSymbol: item.tickerSymbol}),
    );
    this.setState({securityDetails: filteredSecurities});
    const ticker = filteredSecurities.map((item) => item.tickerSymbol);
    axios
      .get(
        `http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/stocks/${ticker}/quote/historic?interval=day`,
      )
      .then((response) => {
        this.setState({
          graphData: response.data.result.quotes,
          loading: false,
          error: false,
          lastQuote: response.data.result.quotes[0].close.toFixed(2),
          equity:
          (response.data.result.quotes[0].close *
            this.props.item.quantity).toFixed(2),
          todaysReturn: (
            response.data.result.quotes[0].close -
            response.data.result.quotes[response.data.result.quotes.length - 1]
              .close
          ).toFixed(2),
          totalPercentChange: (
            ((response.data.result.quotes[0].close.toFixed(2) -
              this.props.item.price) /
              this.props.item.price) *
            100
          ).toFixed(2),
          percentChange: (
            ((response.data.result.quotes[0].close -
              response.data.result.quotes[
                response.data.result.quotes.length - 1
              ].close) /
              response.data.result.quotes[
                response.data.result.quotes.length - 1
              ].close) *
            100
          ).toFixed(2),
          totalReturn: (
            response.data.result.quotes[1].close.toFixed(2) -
            this.props.item.price
          ).toFixed(2),
        });
      })
      .catch((error) => {
        // console.log(error, 'error'),
          this.setState({loading: false, error: true});
      });
  }

  render() {
    const stockObject = this.props.tickersAll[this.state.stockSymbol];
    let yearPrices = this.state.graphData.map((a) => a.close);

    const yearPriceRange = [Math.min(...yearPrices), Math.max(...yearPrices)];
    const stockYearDataOriginal = this.state.graphData.map((i) => {
      return {x: Date.parse(i.window.startTime), y: i.close};
    });
    const stockYearData = stockYearDataOriginal.reverse();

    if (this.state.securityDetails.length < 1) {
      return null;
    }
    return (
      <SafeAreaView style={style.container}>
        {this.state.securityDetails.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              this.props.navigation.navigate({
                name: 'ManagePortfolioCompany',
                params: {item, percentChange: this.state.percentChange},
              })
            }>
            <View style={style.mainContainer} key={index}>
              <View style={style.symbolContainer}>
                <Text
                  style={
                    this.state.percentChange < 0 &&
                    this.state.percentChange !== ''
                      ? style.symbolLoss
                      : style.symbolGain
                  }>
                  {item.tickerSymbol}
                </Text>
                {stockObject ? (
                  <Text style={style.title}>
                    {stockObject.name.length < 19
                      ? `${stockObject.name}`
                      : `${stockObject.name.substring(0, 18)}...`}
                  </Text>
                ) : null}
                <Text style={style.price}>
                  Shares: {this.props.item.quantity}
                </Text>
                <Text style={style.price}>Price: ${this.props.item.price}</Text>
              </View>
              {/* {this.state.stockSymbol !== '' ? ( */}
              <View style={style.graphContainer}>
                <PortfolioGraph
                  ticker={this.state.stockSymbol}
                  stockYearData={stockYearData}
                  yearPriceRange={yearPriceRange}
                  loading={this.state.loading}
                  error={this.state.error}
                  graphData={this.state.graphData}
                  percent={this.state.percentChange}
                  // range={this.state.range}
                  // percent={this.state.percent}
                />
              </View>

              <View style={style.percentContainer}>
                {this.state.percentChange < 0 &&
                this.state.percentChange !== '' ? (
                  <BearIcon style={style.icon} />
                ) : (
                  <BullIcon style={style.icon} />
                )}
                {/* {this.props.dropDown == 'Select sorting' || */}
                {(this.props.dropDown == 'Percent Change' &&
                  this.state.percentChange !== '') ||
                (this.props.dropDown == 'Select sorting' &&
                  this.state.percentChange !== '') ? (
                  <Text
                    style={
                      this.state.percentChange < 0 &&
                      this.state.percentChange !== ''
                        ? style.percentLoss
                        : style.percentGain
                    }>
                    {this.state.percentChange}%
                  </Text>
                ) : this.props.dropDown == 'Last price' &&
                  this.state.lastQuote.length > 1 ? (
                  <Text
                    style={
                      this.state.percentChange < 0 &&
                      this.state.percentChange !== ''
                        ? style.percentLoss
                        : style.percentGain
                    }>
                    ${this.state.lastQuote}
                  </Text>
                ) : this.props.dropDown == 'Your equity' &&
                  this.state.equity !== '' ? (
                  <Text
                    style={
                      this.state.percentChange < 0 &&
                      this.state.percentChange !== ''
                        ? style.percentLoss
                        : style.percentGain
                    }>
                    ${this.state.equity}
                  </Text>
                ) : this.props.dropDown == 'Total percent change' &&
                  this.state.totalPercentChange !== '' ? (
                  <Text
                    style={
                      this.state.percentChange < 0 &&
                      this.state.percentChange !== ''
                        ? style.percentLoss
                        : style.percentGain
                    }>
                    {this.state.totalPercentChange}%
                  </Text>
                ) : (this.props.dropDown == "Today's return") &
                  (this.state.todaysReturn !== '') ? (
                  <Text
                    style={
                      this.state.percentChange < 0 &&
                      this.state.percentChange !== ''
                        ? style.percentLoss
                        : style.percentGain
                    }>
                    ${this.state.todaysReturn}
                  </Text>
                ) : (this.props.dropDown == 'Total return') &
                  (this.state.todaysReturn !== '') ? (
                  <Text
                    style={
                      this.state.percentChange < 0 &&
                      this.state.percentChange !== ''
                        ? style.percentLoss
                        : style.percentGain
                    }>
                    ${this.state.totalReturn}
                  </Text>
                ) : (
                  <Text style={style.unavailableText}>Unavailable</Text>
                )}
                {this.props.dropDown == 'Select sorting' ||
                this.props.dropDown == 'Percent Change' ? (
                  <Text style={style.price}>Portfolio</Text>
                ) : (
                  <Text style={style.price}>{this.props.dropDown}</Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    portfolioAccounts: state.user.portfolioAccounts,
    tickersAll: state.company.tickersAll,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ManagePortfolioBox);
const style = StyleSheet.create({
  container: {
    backgroundColor: '#2a334a',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(158, 150, 150, .6)',
    padding: moderateScale(0.1),
    marginTop: moderateScale(8),
    paddingBottom: moderateScale(6),
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: moderateScale(180),
  },
  portfolioBoxContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(158, 150, 150, .6)',
    padding: moderateScale(0.1),
    marginTop: moderateScale(8),
  },
  icon: {
    alignSelf: 'flex-end',
  },
  symbolContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingVertical: moderateScale(4),
    paddingLeft: moderateScale(4),
    width: '45%',
    textAlign: 'left',
    alignItems: 'flex-start',
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
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
  },
  percentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingVertical: moderateScale(4),
    marginRight: moderateScale(6),
    alignItems: 'flex-end',
    width: '42%',
    // borderWidth: 1,
    // borderColor: 'red',
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
  unavailableText: {
    color: '#B8A0FF',
    textAlign: 'left',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(11),
  },
});
