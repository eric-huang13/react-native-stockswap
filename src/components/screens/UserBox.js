import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class UserBox extends Component {
  render() {
    const {item} = this.props;

    return (
      <View style={style.container}>
        <View>
          <Image style={style.image} source={{uri: item.img}} />
        </View>
        <View>
          <Text>{item.name}</Text>
          <Text>Posts: {item.posts}</Text>
          <Text>Followers: {item.followers}</Text>
        </View>
        <View style={style.percentage}>
          <Text>{item.percentage}</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 4,
  },
  image: {
    height: 100,
    width: 100,
  },
});
