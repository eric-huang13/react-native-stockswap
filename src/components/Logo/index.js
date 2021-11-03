import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {moderateScale} from '../../util/responsiveFont';

const Logo = () => {
  return (
    <View style={style.topView}>
      <Image style={style.logo} source={require('../../icons/Logo.png')} />
      <Text style={style.text}>StockSwap</Text>
    </View>
  );
};

const style = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  logo: {
    height: moderateScale(44),
    width: moderateScale(44),
    marginLeft: moderateScale(2),
    marginBottom: moderateScale(-3),
  },
  text: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: moderateScale(15),
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default Logo;
