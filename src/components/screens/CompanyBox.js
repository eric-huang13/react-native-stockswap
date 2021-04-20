import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export class CompanyBox extends Component {
  render() {
    const {item} = this.props;
    const styledText =
      item.category === 'gainers' ? (
        <LinearGradient
          start={{x: 0.1, y: 0.1}}
          end={{x: 1, y: 1}}
          colors={['#2C3957', '#2C572E']}
          style={style.linearGradient}>
          <SafeAreaView style={style.listContainer}>
            <View style={style.topDetails}>
              <Text style={{...style.symbol, color: '#1AB968'}}>
                {item.symbol}
              </Text>
              <Text style={style.title}>
                {item.title.length < 15
                  ? `${item.title}`
                  : `${item.title.substring(0, 14)}...`}
              </Text>
            </View>
            <View style={style.bottomDetails}>
              <Text style={style.price}>${item.price}</Text>
              <Text style={{...style.percentage, color: '#1AB968'}}>
                {item.percentage}
              </Text>
            </View>
          </SafeAreaView>
        </LinearGradient>
      ) : item.category === 'losers' ? (
        <LinearGradient
          start={{x: 0.1, y: 0.1}}
          end={{x: 1, y: 1}}
          colors={['#2C3957', '#572C3D']}
          style={style.linearGradient}>
          <SafeAreaView style={style.listContainer}>
            <View style={style.topDetails}>
              <Text style={{...style.symbol, color: '#D13C3D'}}>
                {item.symbol}
              </Text>
              <Text style={style.title}>
                {item.title.length < 15
                  ? `${item.title}`
                  : `${item.title.substring(0, 14)}...`}
              </Text>
            </View>
            <View style={style.bottomDetails}>
              <Text style={style.price}>${item.price}</Text>
              <Text style={{...style.percentage, color: '#D13C3D'}}>
                {item.percentage}
              </Text>
            </View>
          </SafeAreaView>
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0.1, y: 0.1}}
          end={{x: 1, y: 1}}
          colors={['#2C3957', '#5B449B']}
          style={style.linearGradient}>
          <SafeAreaView style={style.listContainer}>
            <View style={style.topDetails}>
              <Text style={{...style.symbol, color: '#B8A0FF'}}>
                {item.symbol}
              </Text>
              <Text style={style.title}>
                {item.title.length < 15
                  ? `${item.title}`
                  : `${item.title.substring(0, 14)}...`}
              </Text>
            </View>
            <View style={style.bottomDetails}>
              <Text style={style.price}>${item.price}</Text>
              <Text style={{...style.percentage, color: '#1AB968'}}>
                {item.percentage}
              </Text>
            </View>
          </SafeAreaView>
        </LinearGradient>
      );

    return <SafeAreaView>{styledText}</SafeAreaView>;
  }
}

export default CompanyBox;

const style = StyleSheet.create({
  linearGradient: {
    alignSelf: 'center',
    marginTop: 3,
    borderRadius: 12,
    height: 120,
    width: 127,
    flexDirection: 'column',
    padding: 3,
    paddingTop: 0,
    justifyContent: 'space-around',
    marginLeft: 4,
    marginRight: 4,
  },
  listContainer: {
    borderRadius: 15,
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 4,
    paddingTop: 0,
    justifyContent: 'space-evenly',
  },
  topDetails: {
    marginTop: -4,
  },
  bottomDetails: {},
  title: {
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    color: '#b3b3b3',
  },
  detailsContainer: {
    position: 'absolute',
    marginTop: '60%',
    marginLeft: 2,
  },
  symbol: {
    fontSize: 19,
    color: 'rgb(8, 11, 9)',
    fontFamily: 'Montserrat-Bold',
  },
  percentage: {
    fontSize: 13,
    color: 'grey',
    fontFamily: 'Montserrat-SemiBold',
  },
  price: {
    fontSize: 19,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
  },
});
