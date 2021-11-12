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
        `http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/stocks/${ticker}/quote/historic?interval=year`,
      )
      .then((response) => {
        this.setState({
          graphData: response.data.result.quotes,
          loading: false,
          error: false,
        });
      })
      .catch((error) => {
        console.log(error, 'error'),
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

    return (
      <SafeAreaView style={style.container}>
        {this.state.securityDetails.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              this.props.navigation.navigate({
                name: 'ManagePortfolioCompany',
                params: {item},
              })
            }>
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
              {/* {this.state.stockSymbol !== '' ? ( */}
              <View style={style.graphContainer}>
                <PortfolioGraph
                  ticker={this.state.stockSymbol}
                  stockYearData={stockYearData}
                  yearPriceRange={yearPriceRange}
                  loading={this.state.loading}
                  error={this.state.error}
                  graphData={this.state.graphData}
                  // range={this.state.range}
                  // percent={this.state.percent}
                />
              </View>

              <View style={style.percentContainer}>
                {this.state.percent > 0 ? (
                  <BullIcon style={style.icon} />
                ) : (
                  <BearIcon style={style.icon} />
                )}
                <Text
                  style={
                    this.state.percent > 0
                      ? style.percentGain
                      : style.percentLoss
                  }>
                  {this.state.percent}%
                </Text>
                <Text style={style.price}>Portfolio</Text>
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
