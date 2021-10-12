import React, {PureComponent} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import {connect} from 'react-redux';
import {moderateScale} from '../../util/responsiveFont';
import {fetchTickers} from '../../actions/marketMovers'


export class StockTicker extends PureComponent {
//   componentDidMount() {
//     // const {companies, fetchGainers} = this.props;
//     this.props.fetchTickers();
// }
  render() {
    const {gainers, tickers} = this.props;
    console.log(tickers, "tickers in component")
    
    return (
      <SafeAreaView style={styles.container}>
        { tickers.length > 0 ?
        <TextTicker
          style={{fontSize: 24}}
          scrollSpeed={5000}
          loop
          bounce
          repeatSpacer={0}
          marqueeDelay={0}
          animationType="scroll">
          {tickers.map((item) => (
            <React.Fragment key={item}>
              <Text
                style={
                 styles.marqueeSymbol
                }
                >
                {' '}
                {item}{' '}
              </Text>
              {/* <Text
                style={
                  item.percentage[0] === '-'
                    ? {...styles.marqueePercentage, color: '#F66E6E'}
                    : {...styles.marqueePercentage}
                }>
                {item.percentage}
                {'   '}
              </Text> */}
            </React.Fragment>
          ))}
        </TextTicker>
        :
        null}
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gainers: state.company.gainers,
    tickers: state.company.tickers
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTickers: () => dispatch(fetchTickers()),
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
