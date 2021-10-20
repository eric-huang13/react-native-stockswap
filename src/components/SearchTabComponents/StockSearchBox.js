import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {moderateScale, scale} from '../../util/responsiveFont';

export class StockSearchBox extends Component {
  render() {
    const {item} = this.props;

    return (
      <SafeAreaView>
        <LinearGradient
          start={{x: 0.1, y: 0.1}}
          end={{x: 1, y: 1}}
          colors={['#2C3957', '#2C572E']}
          style={style.linearGradient}>
          <SafeAreaView style={style.listContainer}>
            <View style={style.topDetails}>
              <Text style={{...style.symbol, color: '#1AB968'}}>
                {item.ticker}
              </Text>

              <Text style={style.title}>
                {item.name.length < 15
                  ? `${item.name}`
                  : `${item.name.substring(0, 14)}...`}
              </Text>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(StockSearchBox);

const style = StyleSheet.create({
  linearGradient: {
    alignSelf: 'center',
    marginTop: moderateScale(3),
    borderRadius: moderateScale(12),
    height: Dimensions.get('window').height / 3 - 108,
    width: Dimensions.get('window').width / 3 - 10,
    height: scale(120),
    width: scale(127),

    flexDirection: 'column',
    padding: moderateScale(3),
    paddingTop: 0,
    justifyContent: 'space-around',
    marginLeft: moderateScale(4),
    marginRight: moderateScale(4),
  },
  listContainer: {
    borderRadius: moderateScale(15),
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: moderateScale(4),
    paddingTop: 0,
    justifyContent: 'space-evenly',
  },
  topDetails: {
    marginTop: moderateScale(-4),
  },
  bottomDetails: {},
  title: {
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Regular',
    color: '#b3b3b3',
  },
  detailsContainer: {
    position: 'absolute',
    marginTop: '60%',
    marginLeft: moderateScale(2),
  },
  symbol: {
    fontSize: moderateScale(19),
    color: 'rgb(8, 11, 9)',
    fontFamily: 'Montserrat-Bold',
  },
  percentage: {
    fontSize: moderateScale(13),
    color: 'grey',
    fontFamily: 'Montserrat-SemiBold',
  },
  price: {
    fontSize: moderateScale(19),
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
  },
});
