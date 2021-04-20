import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';
import { moderateScale } from '../../util/responsiveFont';

export default class MyFollowersBox extends Component {
  render() {
    const {item, index} = this.props;
    return (
      <SafeAreaView
        style={
          index % 2 !== 0
            ? {...style.container, backgroundColor: '#2a334a'}
            : {...style.container}
        }>
        <View style={style.imageNamerow}>
          <Image style={style.image} source={{uri: item.img}} />
          <View style={style.nameContainer}>
            <Text style={style.name}>{item.name}</Text>
            <Text style={style.username}>{item.username}</Text>
          </View>
        </View>
        <View style={style.removeContainer}>
          <Text style={style.remove}>Remove</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(14),
    paddingHorizontal: moderateScale(10),
    backgroundColor: '#324165',
    alignItems: 'center',
  },
  imageNamerow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: moderateScale(63),
    width: moderateScale(63),
    borderRadius: moderateScale(50),
  },
  imgDetailContainer: {
    flexDirection: 'row',
    marginLeft: moderateScale(-8),
  },
  detailsContainer: {
    flexDirection: 'column',
    marginLeft: moderateScale(-150),
    justifyContent: 'space-between',
  },
  name: {
    fontSize: moderateScale(16),
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
  },
  username: {
    fontSize: moderateScale(14),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Regular',
  },
  nameContainer: {
    marginLeft: moderateScale(6),
  },
  removeContainer: {
    marginRight: moderateScale(4),
    borderWidth: moderateScale(1.5),
    padding: moderateScale(5),
    borderColor: '#FFFFFF',
    borderRadius: moderateScale(2),
  },
  remove: {
    fontSize: moderateScale(14),
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
  },
});
