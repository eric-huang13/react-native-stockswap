import React, {Component} from 'react';
import {StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {SlideAreaChart} from '@connectedcars/react-native-slide-charts';
import {LinearGradient, Stop} from 'react-native-svg';

export default class PortfolioStockGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graphData: [  {x: 2, y: 10},
        {x: 3, y: 11},
        {x: 4, y: 12},
        {x: 5, y: 14},
        {x: 6, y: 14},
        {x: 7, y: 15},],
    };
  }

  componentDidMount() {
    const {graphData} = this.props;

    this.setState({
      graphData: graphData,
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.graphData !== prevProps.graphData) {
      this.setState({
        graphData: this.props.graphData,
      });
    }
  }

  render() {
    const lineColor = this.props.percent > 0 ? '#91f2b1' : '#F66E6E';

    const fillGradient = (props) => {
      return (
        <LinearGradient x1="40%" y1="0%" x2="40%" y2="100%" {...props}>
          <Stop stopColor={'#91f2b1'} offset="5%" stopOpacity="0.2" />
          <Stop stopColor="#4a334a" offset="100%" stopOpacity="0" />
        </LinearGradient>
      );
    };
    return (
      <SafeAreaView style={styles.container}>
        <SlideAreaChart
          data={this.state.graphData}
          yRange={this.props.range}
          width={Dimensions.get('window').width - 60}
          height={200}
          style={{backgroundColor: '#2a334a'}}
          axisWidth={5}
          axisHeight={5}
          chartLineColor={lineColor}
          // chartLineColor={'lightgrey'}
          // chartPaddingTop={-47}
          throttleAndroid={true}
          // fillColor={'#2a334a'}
          renderFillGradient={fillGradient}
          cursorProps={{
            cursorLine: true,
            cursorColor: 'black',
            cursorMarkerWidth: 11,
            cursorMarkerHeight: 15,
            cursorBorderColor: 'black',
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
            markFirstLine: true,
            hideMarkers: true,
            // interval:12,
          }}
          //TOOLTIP
          toolTipProps={{
            displayTriangle: false,
            height: 50,
            fontSize: 14,
            borderRadius: 18,
            backgroundColor: '#8b64ff',
            // backgroundColor: '#2a334a',

            textStyles: [
              {
                color: 'white',
                // fontWeight:'700',
              },
              {color: 'white', fontSize: 14.1, fontWeight: '700'},
            ],
            toolTipTextRenderers: [
              ({scaleX, x}) => ({
                text: new Date(scaleX.invert(x)).toLocaleDateString('en-US'),
              }),
              ({scaleY, y}) => ({
                text: '$' + scaleY.invert(y).toFixed(2).toString(),
              }),
            ],
          }}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
  },
});
