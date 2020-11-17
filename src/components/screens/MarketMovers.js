import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CompanyBoxGainers from './CompanyBoxGainers';
import CompanyBoxLosers from './CompanyBoxLosers'
import CompanyBoxHBV from './CompanyBoxHBV'

export class MarketMovers extends Component {
  
  render() {
    console.log(this.props, 'props in market');

    return (
      <View style={style.container}>
        <Text style={style.header}>Market Movers</Text>
        <CompanyBoxGainers />
        <CompanyBoxLosers />
        <CompanyBoxHBV />
      </View>
    );
  }
}

export default MarketMovers;

const style = StyleSheet.create({
  container: {
    paddingTop: 4,
  },

  header: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgb(123, 123, 124)',
    marginLeft: 23,
    marginTop:2,
  },
});
