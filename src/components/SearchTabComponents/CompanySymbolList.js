import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';

import {connect} from 'react-redux';
import {moderateScale} from '../../util/responsiveFont';
import {fetchStockDay, fetchStockDetails} from '../../actions/marketMovers';

export class CompanySymbolList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialIndex: 4,
      stockData: [],
    };
  }
  componentDidMount() {
    this.props.stockCategory == 'gainers'
      ? this.setState({
          stockData: this.props.marketGainers,
        })
      : this.props.stockCategory == 'losers'
      ? this.setState({
          stockData: this.props.marketLosers,
        })
      : this.props.stockCategory == 'hbv'
      ? this.setState({
          stockData: this.props.hbv,
        })
      : null;
  }

  render() {
    const getItemLayout = (data, index) => ({
      length: moderateScale(89),
      offset: moderateScale(89) * index,
      index,
    });

    return (
      <SafeAreaView style={style.mainContainer}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.state.stockData}
          style={style.scollContainer}
          horizontal
          alignItems="center"
          showsHorizontalScrollIndicator={false}
          // initialScrollIndex={this.props.indexNumber - 1}
          getItemLayout={getItemLayout}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                this.props.navigation.navigate({
                  name: 'CompanyInformation',
                  params: {item},
                }),
                  this.props.fetchStockDay(item.ticker);
                this.props.fetchStockDetails(item.ticker);
              }}>
              <View style={style.symbolBox}>
                <Text
                  style={
                    this.props.ticker === item.ticker
                      ? {...style.symbol, backgroundColor: '#8B64FF'}
                      : {...style.symbol}
                  }>
                    {item.ticker.length < 5
                  ? `${item.ticker}`
                  : `${item.ticker.substring(0, 5)}`}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gainers: state.company.gainers,
    marketGainers: state.company.marketGainers,

    marketLosers: state.company.marketLosers,
    highestByVolume: state.company.highestByVolume,

    marketGainersTest: state.company.marketGainersTest,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStockDay: (ticker) => dispatch(fetchStockDay(ticker)),
    fetchStockDetails: (ticker) => dispatch(fetchStockDetails(ticker)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanySymbolList);

const style = StyleSheet.create({
  mainContainer: {
    paddingVertical: moderateScale(10),
    height: moderateScale(60),
  },
  symbolBox: {
    marginHorizontal: moderateScale(12),
    width: moderateScale(63),
    height: moderateScale(23),
    alignContent: 'center',
    justifyContent: 'center',
  },
  symbol: {
    textAlign: 'center',
    backgroundColor: '#3e475b',
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
    paddingVertical: moderateScale(4),
  },
});
