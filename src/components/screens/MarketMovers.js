import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CompanyBoxGainers from './CompanyBoxGainers';
export class MarketMovers extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.header}>Market Movers</Text>
        <CompanyBoxGainers />
      </View>
    );
  }
}

export default MarketMovers;

const style = StyleSheet.create({
  container: {
      paddingTop:4,
  },

  header: {
    fontSize: 15,
    marginLeft: 12,
    fontWeight:"700",
    color:"grey",
    marginLeft:26,
  },
});
