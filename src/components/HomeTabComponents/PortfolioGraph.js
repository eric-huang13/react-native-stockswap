import React, {Component} from 'react';
import {StyleSheet, Dimensions, SafeAreaView, View, Text} from 'react-native';
import {SlideAreaChart} from '@connectedcars/react-native-slide-charts';
import {LinearGradient, Stop} from 'react-native-svg';
import {moderateScale} from '../../util/responsiveFont';

export default class PortfolioGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [{x: 2, y: 10}],
      range: [5, 30],
      percent: '1.22',
      graphDataaa: [],
      loading: true,
      error: false,
    };
  }

  componentDidMount() {}
  render() {
    if (this.props.loading) {
      return (
        <View style={styles.container}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      );
    }
    if (this.props.error || this.props.graphData < 2) {
      return (
        <View style={styles.unavailableView}>
          <Text style={styles.loadingText}>Graph data unavailable</Text>
        </View>
      );
    }

    const lineColor = this.props.percent > 0 ? '#91f2b1' : '#F66E6E';

    const fillGradient = (props) => {
      return (
        <LinearGradient x1="40%" y1="0%" x2="40%" y2="100%" {...props}>
          <Stop stopColor={lineColor} offset="5%" stopOpacity="0.1" />
          <Stop stopColor="#4a334a" offset="100%" stopOpacity="0" />
        </LinearGradient>
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        <SlideAreaChart
          data={this.props.stockYearData}
          yRange={this.props.yearPriceRange}
          width={Dimensions.get('window').width - 190}
          height={70}
          style={{backgroundColor: '#2a334a'}}
          axisWidth={5}
          axisHeight={5}
          chartLineColor={lineColor}
          throttleAndroid={true}
          renderFillGradient={fillGradient}
          alwaysShowIndicator={false}
          cursorProps={{
            displayCursor: false,
          }}
          paddingBottom={10}
          paddingLeft={3}
          //Y AXIS
          yAxisProps={{
            showBaseLine: false,
            verticalLineWidth: 0,
            horizontalLineWidth: 0,
            axisLabelAlignment: 'top',
            rotateAxisLabel: true,
            labelTopPadding: 0,

            //Set graph Y numbers
            numberOfTicks: 0,
          }}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  unavailableView: {
    backgroundColor: '#2a334a',
    flexDirection: 'row',
    flex: 1,
    width: moderateScale(222),
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
