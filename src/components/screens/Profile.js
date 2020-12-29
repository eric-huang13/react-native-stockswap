import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import StockTicker from './StockTicker';

export default class Profile extends Component {
  render() {
    console.log(this.props.route, 'props in profile');
    const {item} = this.props.route.params;
    return (
      <View>
        <StockTicker />

        <View style={styles.aboveGraphView}>
          <View>
            <Text>Portfolio</Text>
            <Text>Number</Text>
          </View>
          <View>
            <Text>{item.percentage}</Text>
            <Text>Number</Text>
          </View>
        </View>
        <View>
          <Text>Graph</Text>
        </View>
        <View>
          <Text>Buttons</Text>
        </View>
        <View>
          <Image style={styles.image} source={{uri: item.img}} />
          <Text>{item.name}</Text>
        </View>
        <View>
          <Text>Bio</Text>
        </View>
        <View>
          <Text>Followers: {item.followers}</Text>
          <Text>Posts: {item.posts}</Text>
          <Text>Trades</Text>
          <Text>Following</Text>
        </View>
        <View>
          <Text>Buttons</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  aboveGraphView: {
    flexDirection: 'row',
    marginTop: 8,
  },
  image: {
    height: 100,
    width: 100,
  },
});
