import React, {Component} from 'react';
import {StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {SlideAreaChart} from 'react-native-slide-charts';
import {LinearGradient, Stop} from 'react-native-svg';

export default class PortfolioGraph extends Component {
  render() {
    const fillGradient = (props) => {
      return (
        <LinearGradient x1="40%" y1="0%" x2="40%" y2="100%" {...props}>
          <Stop stopColor={'#91f2b1'} offset="5%" stopOpacity="0.1" />
          <Stop stopColor="#4a334a" offset="100%" stopOpacity="0" />
        </LinearGradient>
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        <SlideAreaChart
          data={this.props.graphData}
          yRange={this.props.range}
          width={Dimensions.get('window').width - 162}
          height={100}
          style={{backgroundColor: '#2a334a'}}
          axisWidth={5}
          axisHeight={5}
          chartLineColor={'#91f2b1'}
     
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
});
