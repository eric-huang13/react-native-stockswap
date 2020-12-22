import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CompanyStockGraph from './CompanyStockGraph';

export class CompanyInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [
        {x: 2, y: 10},
        {x: 3, y: 11},
        {x: 4, y: 12},
        {x: 5, y: 14},
        {x: 6, y: 14},
        {x: 7, y: 15},
      ],
      percent: '1.22',
      range: [10, 15],
    };
  }

  render() {
    //X and Y
    //X
    const xDates = this.props.route.params.item.dates.map(
      (item) => new Date(item * 1000),
    );
    //Y
    const yPrices = this.props.route.params.item.priceHistory;
    //X and Y data
    const xyData = xDates.map((stockDate, stockPrice) => {
      return {x: stockDate, y: yPrices[stockPrice]};
    });

    //Data periods
    // Data for week
    const weekData = xyData.slice(xyData.length - 7);
    //Data for month
    const monthData = xyData.slice(xyData.length - 31);

    //Info to display
    //Current stock price
    const currentPrice = yPrices[yPrices.length - 1];
    // Growth/Loss percentage
    const percentChange = (
      ((currentPrice - yPrices.length - 7) / yPrices.length - 7) *
      100
    ).toFixed(2);
    // Growth/Loss percentage
    const percentChangeMonth = (
      ((currentPrice - yPrices.length - 30) / yPrices.length - 30) *
      100
    ).toFixed(2);

    //Range of highest and lowest numbers on graph, passed into graph component
    //Total range of stock prices
    const newrange = [Math.min(...yPrices), Math.max(...yPrices)];
    //Week range of stock prices
    const weekRange = [
      Math.min(...yPrices.slice(yPrices.length - 7)),
      Math.max(...yPrices.slice(yPrices.length - 7)),
    ];

    //Numbers to display graph numbers, can also use use built in graph numbers instead
    //Graph high number
    const chartHigh = this.state.range[1];
    //Graph low number
    const chartLow = this.state.range[0];
    //High/Low difference
    const numberDifference = (chartHigh - chartLow) / 3;
    //Graph three quarter numbernumber
    const chartThreeQuarter = (chartHigh - numberDifference).toFixed(0);
    //Graph quarter number
    const chartOneQuarter = (chartLow + numberDifference).toFixed(0);

    const {route} = this.props;
    const {graphData, percent, range} = this.state;
    console.log(graphData, 'graph Data');
    return (
      <View>
        <ScrollView>
          {this.props.route.params ? (
            <View>
              <View style={styles.symbolView}>
                <Text style={styles.symbol}>{route.params.item.symbol}</Text>
                <Text style={styles.price}>${currentPrice}</Text>
              </View>
              <View style={styles.titleView}>
                <Text style={styles.title}>{route.params.item.title}</Text>
                <Text style={styles.percentage}>({percent}%)</Text>
              </View>
            </View>
          ) : (
            <Text>Company Information</Text>
          )}
          <View style={styles.stockButtonsContainer}>
            <TouchableOpacity>
              <Text style={styles.stockButtons}>1D</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  graphData: weekData,
                  percent: percentChange,
                  range: weekRange,
                })
              }>
              <Text style={styles.stockButtons}>1W</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  graphData: monthData,
                  percent: percentChangeMonth,
                  range: newrange,
                })
              }>
              <Text style={styles.stockButtons}>1M</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.stockButtons}>3M</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.stockButtons}>6M</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.stockButtons}>1Y</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.stockButtons}>5Y</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.graphContainer}>
            <CompanyStockGraph
              route={route}
              graphData={graphData}
              range={range}
            />
            <View style={styles.graphNumbers}>
              <Text style={styles.graphNumberText}>{chartLow}</Text>
              <Text style={styles.graphNumberText}>{chartOneQuarter}</Text>
              <Text style={styles.graphNumberText}>{chartThreeQuarter}</Text>
              <Text style={styles.graphNumberText}>{chartHigh}</Text>
            </View>
          </View>
          <Text style={styles.vitalsHeader}>Vitals</Text>
          <View style={styles.vitalsContainer}>
            <View style={styles.vitalsLeftColumn}>
              <View style={styles.vitalsRow}>
                <Text style={styles.vitalDetails}>Open</Text>
                <Text style={styles.vitalDetails}>{currentPrice}</Text>
              </View>
              <View style={styles.vitalsRow}>
                <Text style={styles.vitalDetails}>High</Text>
                <Text style={styles.vitalDetailsData}>{newrange[1]}</Text>
              </View>
              <View style={styles.vitalsRow}>
                <Text style={styles.vitalDetails}>Low</Text>
                <Text style={styles.vitalDetailsData}>{newrange[0]}</Text>
              </View>
              <View style={styles.vitalsRow}>
                <Text style={styles.vitalDetails}>Volume</Text>
                <Text style={styles.vitalDetailsData}>{currentPrice}</Text>
              </View>
              <View style={styles.vitalsRow}>
                <Text style={styles.vitalDetails}>Avg Vol</Text>
                <Text style={styles.vitalDetailsData}>{currentPrice}</Text>
              </View>
            </View>

            <View style={styles.vitalsRightColumn}>
              <View style={styles.vitalsRow}>
                <Text style={styles.vitalDetails}>P/E</Text>
                <Text style={styles.vitalDetailsData}>{currentPrice}</Text>
              </View>
              <View style={styles.vitalsRow}>
                <Text style={styles.vitalDetails}>MKT Cap</Text>
                <Text style={styles.vitalDetailsData}>{currentPrice}</Text>
              </View>
              <View style={styles.vitalsRow}>
                <Text style={styles.vitalDetails}>52w High</Text>
                <Text style={styles.vitalDetailsData}>{newrange[1]}</Text>
              </View>
              <View style={styles.vitalsRow}>
                <Text style={styles.vitalDetails}>52w Low</Text>
                <Text style={styles.vitalDetailsData}>{newrange[0]}</Text>
              </View>
              <View style={styles.vitalsRow}>
                <Text style={styles.vitalDetails}>Div/Yield</Text>
                <Text style={styles.vitalDetailsData}>{currentPrice}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default CompanyInformation;

const styles = StyleSheet.create({
  graphContainer: {
    // borderWidth:1,
    flexDirection: 'row',
  },
  graphNumbers: {
    // marginTop:170,
    flexDirection: 'column-reverse',
    justifyContent: 'space-evenly',
    // alignItems:"flex-end",
    marginRight: 10,
  },
  graphNumberText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14.5,
  },
  symbolView: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'rgb(8, 177, 40)',
    alignItems: 'center',
  },
  titleView: {
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'rgb(8, 177, 40)',
    alignItems: 'center',
  },
  symbol: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(8, 177, 40)',
  },
  price: {
    color: 'rgb(8, 177, 40)',
    fontSize: 34,
    fontWeight: 'bold',
  },
  title: {
    color: 'rgb(8, 177, 40)',
    fontSize: 42,
    fontWeight: 'bold',
  },
  percentage: {
    color: 'rgb(8, 177, 40)',
    fontSize: 18,
    fontWeight: 'bold',
  },
  vitalsContainer: {
    marginTop: 6,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 4,
  },
  vitalsHeader: {
    textAlign: 'center',
    color: 'black',
    fontSize: 31,
    fontWeight: 'bold',
    marginTop: 28,
  },
  vitalsLeftColumn: {
    flexDirection: 'column',
    color: 'black',
    fontSize: 31,
    fontWeight: 'bold',
    // justifyContent:'space-between'
  },
  vitalsRightColumn: {
    flexDirection: 'column',
    color: 'black',
    fontSize: 31,
    fontWeight: 'bold',
  },
  vitalsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vitalDetails: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  vitalDetailsData: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 55,
  },
  stockButtonsContainer: {
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  stockButtons: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
