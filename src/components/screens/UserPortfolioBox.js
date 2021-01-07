import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import PortfolioGraph from './PortfolioGraph';

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
    };
  }

  render() {
    const {item} = this.props;
    const {graphData, percent, range} = this.state;
    console.log(item, 'item in portfolioBOX');

    return (
      <SafeAreaView style={style.container}>
        <View style={style.symbolContainer}>
          <Text style={style.symbol}>{item.symbol}</Text>
          <Text style={style.title}>{item.title}</Text>
          <Text style={style.price}>Price: ${item.price}</Text>
        </View>
        <View style={style.graphContainer}>
          <PortfolioGraph graphData={graphData} range={range} />
          {/* <Text>graph</Text> */}
        </View>
        <View style={style.percentContainer}>
          <Text style={style.percent}>{percent}%</Text>
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
  symbolContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    // borderBottomWidth:.5,
    // borderColor:'lightgrey',
    paddingVertical: 4,
    paddingLeft: 8,

    width: '100%',
    // height:'100%',
    // alignItems:'le',
    // alignContent:'left',
    textAlign: 'left',
  },
  symbol: {
    color: '#91f2b1',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
  },
  title: {
    color: 'lightgrey',
    fontSize: 12,
    textAlign: 'left',
  },
  price: {
    color: 'white',
    textAlign: 'left',
    fontSize: 13,
  },
  graphContainer: {
    // borderWidth:.5,
    // borderColor:'lightgrey',
    // paddingBottom:1
  },
  percentContainer: {
    justifyContent: 'center',
  },
  percent: {
    color: '#91f2b1',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'left',
  },
});
