import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import PortfolioGraph from './PortfolioGraph';
import BearIcon from '../../icons/BearIcon'
import BullIcon from '../../icons/BullIcon'

export default class UserPortfolioBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [
        {x: 2, y: 10},
        {x: 3, y: 21},
        {x: 4, y: 32},
        {x: 5, y: 14},
        {x: 6, y: 4},
        {x: 7, y: 25},
      ],
      percent: '1.22',
      range: [5, 30],
      start:'',
      end:'',
    };
  }

  componentDidMount() {
    const {item} = this.props;
    //X and Y
    //X
    const xDates = item.dates.map(
      (item) => new Date(item * 1000),
    );
    //Y
    const yPrices = item.priceHistory;
    //X and Y data
    const xyData = xDates.map((stockDate, stockPrice) => {
      return {x: stockDate, y: yPrices[stockPrice]};
    });
     //Data periods
    // Data for week
    const weekData = xyData.slice(xyData.length - 7);
    //Data for month
    const monthData = xyData.slice(xyData.length - 31);
    //Week range of stock prices
    const weekRange = [
      Math.min(...yPrices.slice(yPrices.length - 7)),
      Math.max(...yPrices.slice(yPrices.length - 7)),
    ]; 

    //Week begin and end prices
   const weekStart = yPrices[yPrices.length - 7];
   const weekEnd = yPrices[yPrices.length - 1];

      this.setState({
        graphData: weekData,
        range: weekRange,
        start:weekStart,
        end:weekEnd
      })    
  }

  render() {
    const {item} = this.props;
    const {graphData, percent, range, start, end} = this.state;

    
    return (
      <SafeAreaView style={style.container}>
        <View style={style.symbolContainer}>
          <Text style={style.symbol}>{item.symbol}</Text>
          <Text style={style.title}>{item.title}</Text>
          <Text style={style.price}>Price: ${item.price}</Text>
        </View>
        <View style={style.graphContainer}>
          <PortfolioGraph graphData={graphData} range={range} />
        </View>
        <View style={style.percentContainer}>
           { start < end ? <BullIcon style={style.icon}/>
           :
           <BearIcon style={style.icon}/>           
          }
          <Text style={style.percent}>{percent}%</Text>
          <Text style={style.price}>Portfolio:</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#2a334a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width: 99,
  },
  icon:{
    alignSelf:'flex-end',
  },
  symbolContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingVertical: 4,
    paddingLeft: 8,
    width: '100%',
    textAlign: 'left',
  },
  symbol: {
    color: '#71F59C',
    fontFamily:'Montserrat-Bold',
    fontSize: 16,
    textAlign: 'left',
  },
  title: {
    color: 'lightgrey',
    fontSize: 10,
    textAlign: 'left',
    fontFamily:'Montserrat-Regular',

  },
  price: {
    color: '#FFFFFF',
    textAlign: 'left',
    fontFamily:'Montserrat-Regular',
    fontSize: 12,
  },
  percentContainer: {
    justifyContent: 'center',
  },
  percent: {
    color: '#71F59C',
    fontFamily:'Montserrat-Bold',
    fontSize: 16,
    textAlign: 'left',
  },
});
