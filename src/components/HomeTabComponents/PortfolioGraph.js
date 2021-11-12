import React, {Component} from 'react';
import {StyleSheet, Dimensions, SafeAreaView, View, Text} from 'react-native';
import {SlideAreaChart} from '@connectedcars/react-native-slide-charts';
import {LinearGradient, Stop} from 'react-native-svg';
import axios from 'axios';
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

  componentDidMount() {
    axios
      .get(
        `http://ec2-3-14-152-2.us-east-2.compute.amazonaws.com/stocks/${this.props.ticker}/quote/historic?interval=year`,
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
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      );
    }
    if (this.state.error || this.state.graphData < 2) {
      return (
        <View style={styles.unavailableView}>
          <Text style={styles.loadingText}>Graph data unavailable</Text>
        </View>
      );
    }
    let yearPrices = this.state.graphData.map((a) => a.close);

    const yearPriceRange = [Math.min(...yearPrices), Math.max(...yearPrices)];
    const stockYearDataOriginal = this.state.graphData.map((i) => {
      return {x: Date.parse(i.window.startTime), y: i.close};
    });
    const stockYearData = stockYearDataOriginal.reverse();
    const lineColor = this.state.percent > 0 ? '#91f2b1' : '#F66E6E';

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
          data={stockYearData}
          yRange={yearPriceRange}
          width={Dimensions.get('window').width - 180}
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
