import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import PostIcon from '../../icons/PostIcon';
import TradeIcon from '../../icons/TradeIcon';
import {moderateScale} from '../../util/responsiveFont';

export default class PostType extends Component {
  render() {
    return (
      <SafeAreaView style={style.mainContainer}>
        <Text style={style.header}> SELECT POST TYPE </Text>
        <View style={style.typeRow}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CreateTrade')}>
            <View style={style.typeColumn}>
              <View>
                <TradeIcon />
              </View>
              <Text style={style.typeText}>Trade</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CreatePost')}>
            <View style={style.typeColumn}>
              <View>
                <PostIcon />
              </View>
              <Text style={style.typeText}>Post</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2a334a',
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(26),
  },
  header: {
    marginTop: moderateScale(167),
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  typeRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: moderateScale(24),
  },
  typeColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2C3957',
    paddingVertical: moderateScale(10),
    width: moderateScale(142),
    height: moderateScale(155),
  },
  typeText: {
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
    marginTop: moderateScale(20),
  },
});
