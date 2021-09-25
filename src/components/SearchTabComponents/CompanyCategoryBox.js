import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {moderateScale} from '../../util/responsiveFont';

export default class CompanyCategoryBox extends Component {
  render() {
    const {item, index} = this.props;

    return (
      <SafeAreaView
        style={
          index % 2 !== 0
            ? {...style.container, backgroundColor: '#2a334a'}
            : {...style.container}
        }>
        <View key={item.id} style={style.companyRow}>
          <View style={style.nameContainer}>
            <Text style={style.symbol}>{item.ticker}</Text>
            <Text style={style.title}>{item.title}</Text>
          </View>
          <View style={style.detailsContainer}>
            <Text style={style.price}>${item.quote.volumeWeightedAveragePrice}</Text>
            <Text style={style.percentage}>{item.change}%</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#324165',
    paddingVertical: moderateScale(4),
  },
  companyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(12),
    alignContent: 'space-between',
    marginVertical: moderateScale(6),
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  detailsContainer: {
    marginTop: moderateScale(5),
  },
  symbol: {
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
    fontSize: moderateScale(20.5),
  },
  title: {
    color: '#d0d3dc',
    marginTop: moderateScale(3),
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(14),
  },
  price: {
    color: 'white',
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
    fontSize: moderateScale(20.5),
  },
  percentage: {
    color: '#5fc48c',
    alignSelf: 'flex-end',
    marginTop: moderateScale(3),
    fontFamily: 'Montserrat-Medium',
    fontSize: moderateScale(14),
  },
});
