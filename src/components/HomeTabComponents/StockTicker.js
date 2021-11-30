import React, {PureComponent} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import {connect} from 'react-redux';
import {moderateScale} from '../../util/responsiveFont';
import {
  fetchTickers,
  fetchMarketGainers,
  fetchMarketLosers,
} from '../../actions/marketMovers';

export class StockTicker extends PureComponent {
  componentDidMount() {
    this.props.fetchGainers();
    this.props.fetchLosers();
  }
  render() {
    const {marketGainers, marketLosers} = this.props;

    const shuffledTickers = marketGainers.flatMap((e, idx) => [
      e,
      marketLosers[idx],
    ]);
console.log(shuffledTickers[shuffledTickers.length-1],"TICKERS")
    return (
      <View style={styles.container}>
        {shuffledTickers[shuffledTickers.length-1] ? (
          <TextTicker
            // style={{fontSize: 18}}
            scrollSpeed={5000}
            duration={shuffledTickers.length * 1000}
            loop
            bounce
            repeatSpacer={0}
            marqueeDelay={0}
            animationType="scroll">
            {shuffledTickers.map((item) => (
              item.ticker !== undefined ?
              <React.Fragment key={item.ticker}>
                <Text
                  style={
                    Math.sign(item.change) < 0
                      ? {...styles.marqueeSymbol, color: '#F66E6E'}
                      : {...styles.marqueeSymbol}
                  }>
                  {' '}
                  {item.ticker}{' '}
                </Text>
                <Text
                  style={
                    Math.sign(item.change) < 0
                      ? {...styles.marqueePercentage, color: '#F66E6E'}
                      : {...styles.marqueePercentage}
                  }>
                  {item.change}%{'   '}
                </Text>
              </React.Fragment>
              : null
            ))}
          </TextTicker>
        ) : null}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    marketGainers: state.company.marketGainers,
    marketLosers: state.company.marketLosers,
    // tickers: state.company.tickers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // fetchTickers: () => dispatch(fetchTickers()),
    fetchGainers: () => dispatch(fetchMarketGainers()),
    fetchLosers: () => dispatch(fetchMarketLosers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockTicker);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2e3955',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(6),
  },
  textstyle: {},
  marqueeSymbol: {
    color: '#91f2b1',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Bold',
  },
  marqueePercentage: {
    color: '#91f2b1',
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Medium',
  },
});
