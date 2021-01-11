import React, {PureComponent} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import {connect} from 'react-redux';

export class StockTicker extends PureComponent {
  render() {
    const {gainers} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <TextTicker
          style={{fontSize: 24}}
          scrollSpeed={5000}
          loop
          bounce
          repeatSpacer={0}
          marqueeDelay={0}
          animationType="scroll">
          {gainers.map((item) => {
            return (
              <>
                <Text
                  style={
                    item.percentage[0] === '-'
                      ? {...styles.marqueeSymbol, color: 'red'}
                      : {...styles.marqueeSymbol}
                  }>
                  {' '}
                  {item.symbol}{' '}
                </Text>
                <Text
                  style={
                    item.percentage[0] === '-'
                      ? {...styles.marqueePercentage, color: 'red'}
                      : {...styles.marqueePercentage}
                  }>
                  {item.percentage}
                  {'  '}
                </Text>
              </>
            );
          })}
        </TextTicker>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gainers: state.company.gainers,
  };
};

export default connect(mapStateToProps)(StockTicker);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#2e3955',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  textstyle: {
    color: 'yellow',
  },
  marqueeSymbol: {
    color: '#91f2b1',
    fontSize: 16.5,
    fontWeight: 'bold',
  },
  marqueePercentage: {
    color: '#91f2b1',
    fontSize: 14,
  },
});
