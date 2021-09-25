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
          stockData: this.props.marketGainersTest,
        })
      : this.props.stockCategory == 'losers'
      ? this.setState({
          stockData: this.props.gainers,
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

    const {gainers, stockCategory, marketGainersTest} = this.props;

    return (
      <SafeAreaView style={style.mainContainer}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.state.stockData}
          style={style.scollContainer}
          horizontal
          alignItems="center"
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={this.props.itemId - 1}
          getItemLayout={getItemLayout}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                this.props.navigation.navigate({
                  name: 'CompanyInformation',
                  params: {item},
                })
              }>
              <View style={style.symbolBox}>
                <Text
                  style={
                    this.props.ticker === item.ticker
                      ? {...style.symbol, backgroundColor: '#8B64FF'}
                      : {...style.symbol}
                  }>
                  {item.ticker}
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
    losers: state.company.losers,
    highestByVolume: state.company.highestByVolume,

    marketGainersTest: state.company.marketGainersTest,
  };
};

export default connect(mapStateToProps)(CompanySymbolList);

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
