import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {moderateScale} from '../../util/responsiveFont';

const Logo = ({compact}) => {
  return (
    <View style={[style.topViewInApp, !compact ? style.topView : null]}>
      <Image
        style={[style.logoInApp, !compact ? style.logo : null]}
        source={require('../../icons/Logo.png')}
      />
      <Text style={style.text}>StockSwap</Text>
    </View>
  );
};

const style = StyleSheet.create({
  topViewInApp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: moderateScale(2),
    marginBottom: moderateScale(6),
  },
  topView: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  logoInApp: {
    height: moderateScale(25),
    width: moderateScale(25),
    // marginLeft: moderateScale(2),
    marginBottom: moderateScale(-3),
  },
  logo: {
    height: moderateScale(44),
    width: moderateScale(44),
  },
  text: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: moderateScale(15),
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    paddingLeft: 5,
  },
});

export default Logo;
