import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';

export default class UserBox extends Component {
  render() {
    const {item} = this.props;

    return (
      <SafeAreaView
        style={
          item.id % 2 === 0
            ? {...style.container, backgroundColor: '#2a334a'}
            : {...style.container}
        }>
        <Image style={style.image} source={{uri: item.img}} />

        <View style={style.detailsContainer}>
          <Text style={style.name}>{item.name}</Text>

          <Text style={style.posts}>
            Posts: <Text style={style.detailsBold}>{item.posts}</Text>
          </Text>
          <Text style={style.followers}>
            Followers: <Text style={style.detailsBold}>{item.followers}</Text>
          </Text>
          <Text style={style.followers}>
            Trading since: <Text style={style.detailsBold}>{item.followers}</Text>
          </Text>
        </View>
        <View style={style.percentageView}>
          <Text style={style.percentage}>{item.percentage}%</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#324165',
  },
  image: {
    height: 63,
    width: 63,
    borderRadius: 50,
  },
  imgDetailContainer: {
    flexDirection: 'row',
    marginLeft: -8,
  },
  detailsContainer: {
    flexDirection: 'column',
    marginLeft: -150,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
  },
  posts: {
    color: 'lightgrey',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  followers: {
    color: 'lightgrey',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  percentageView: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  percentage: {
    alignSelf: 'center',
    color: '#1AB968',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  detailsBold: {
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
    fontSize: 12,
  },
});
