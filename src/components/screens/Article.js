import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export class Article extends Component {
  render() {
    const {item} = this.props;

    return (
      <View style={style.container}>
        <View style={style.sourceContainer}>
          <Text style={style.source}>{item.source}</Text>
          <Text style={style.released}>{item.released}</Text>
        </View>
        <Text style={style.headline}>{item.headline}</Text>
        <View style={style.imageContainer}>
          <Image style={style.image} source={{uri: item.img}} />
        </View>
      </View>
    );
  }
}

export default Article;

const style = StyleSheet.create({
  container: {
    marginTop: 1.2,
    padding: 20,
    paddingTop: 12,
  },
  sourceContainer: {
    flexDirection: 'row',
  },
  source: {
    color: 'grey',
    marginRight: 4,
    fontSize: 17.5,
    fontWeight: 'bold',
  },
  released: {
    color: 'grey',
    fontSize: 17.5,
    fontWeight: 'bold',
  },
  headline: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 8.5,
    marginBottom: 10,
  },
  imageContainer: {
    paddingLeft: 3,
    paddingRight: 3,
  },
  image: {
    height: 300,
    marginLeft: 0.05,
    marginRight: 0.05,
    width: '100%',
  },
});
