import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

export default class CompanyCategoryBox extends Component {
  render() {
    const {item} = this.props;

    return (
      <SafeAreaView
        style={
          item.id % 2 === 0
            ? {...style.container, backgroundColor: '#2a334a'}
            : {...style.container}
        }>
        <View key={item.id} style={style.companyRow}>
          <View style={style.nameContainer}>
            <Text style={style.symbol}>{item.symbol}</Text>
            <Text style={style.title}>{item.title}</Text>
          </View>
          <View style={style.detailsContainer}>
            <Text style={style.price}>${item.price}</Text>
            <Text style={style.percentage}>{item.percentage}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#324165',
    paddingVertical: 4,
  },
  companyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignContent: 'space-between',
    marginVertical: 6,
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  detailsContainer: {
    marginTop: 5,
  },
  symbol: {
    // color: 'white',
    // fontSize: 22,
    // fontWeight: 'bold',
    fontFamily:'Montserrat-Bold',
    color:'#FFFFFF',
    fontSize:20.5
  
  },
  title: {
    color: '#d0d3dc',
    marginTop: 3,
    fontFamily:'Montserrat-Regular',
    fontSize:14
  },
  price: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily:'Montserrat-Bold',
    color:'#FFFFFF',
    fontSize:20.5
  },
  percentage: {
    color: '#5fc48c',
    alignSelf: 'flex-end',
    marginTop: 3,
    fontFamily:'Montserrat-Medium',
    fontSize:14
    
  },
});
