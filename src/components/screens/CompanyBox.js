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
          colors={['#4c669f', '#3b5998', '#1cab66']}
          style={style.linearGradient}>
          <SafeAreaView style={style.listContainer}>
            <View style={style.topDetails}>
              <Text style={{...style.symbol, color: '#1cab66'}}>
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
              <Text style={{...style.percentage, color: '#1cab66'}}>
                {item.percentage}
              </Text>
            </View>
          </SafeAreaView>
        </LinearGradient>
      ) : item.category === 'losers' ? (
        <LinearGradient
          start={{x: 0.1, y: 0.1}}
          end={{x: 1, y: 1}}
          colors={['#4c669f', '#3b5998', '#ac3b42']}
          style={style.linearGradient}>
          <SafeAreaView style={style.listContainer}>
            <Text style={{...style.symbol, color: '#ac3b42'}}>
              {item.symbol}
            </Text>
            <Text style={style.title}>
              {item.title.length < 15
                ? `${item.title}`
                : `${item.title.substring(0, 14)}...`}
            </Text>
            <Text style={style.price}>${item.price}</Text>
            <Text style={{...style.percentage, color: '#ac3b42'}}>
              {item.percentage}
            </Text>
          </SafeAreaView>
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0.1, y: 0.1}}
          end={{x: 1, y: 1}}
          colors={['#4c669f', 'purple', 'purple']}
          style={style.linearGradient}>
          <SafeAreaView style={style.listContainer}>
            <Text style={{...style.symbol, color: '#9082cf'}}>
              {item.symbol}
            </Text>
            <Text style={style.title}>
              {item.title.length < 15
                ? `${item.title}`
                : `${item.title.substring(0, 14)}...`}
            </Text>
            <Text style={style.price}>${item.price}</Text>
            <Text style={{...style.percentage, color: '#9082cf'}}>
              {item.percentage}
            </Text>
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
    borderRadius: 15,
    height: 130,
    width: 125,
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
  bottomDetails: {
  },
  title: {
    fontSize: 14,

    color: 'grey',
  },
  detailsContainer: {
    position: 'absolute',
    marginTop: '60%',
    marginLeft: 2,
  },
  symbol: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'rgb(8, 11, 9)',
   
  },
  percentage: {
    fontSize: 14,
    color: 'grey',
  },
  price: {
    fontSize: 20,
    color: 'lightgrey',
  },
});
