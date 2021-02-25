import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import LargeStockSwap from '../../icons/LargeStockSwap';
import LinearGradient from 'react-native-linear-gradient';

export default class SplashScreen extends Component {
  render() {
    return (
      <LinearGradient
        start={{x: 0.1, y: 1}}
        end={{x: 0.1, y: 0.1}}
        colors={[
          '#1D2842',
          //   '#485476',
          '#3d4b6e',
        ]}
        style={style.mainContainer}>
        <LargeStockSwap />
      </LinearGradient>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
