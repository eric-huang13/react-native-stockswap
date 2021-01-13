import React, {Component} from 'react';
import {Text, SafeAreaView, View, Image, StyleSheet} from 'react-native';

export class Article extends Component {
  render() {
    const {item} = this.props;

    return (
      <SafeAreaView style={style.container}>
        <View style={style.imageContainer}>
          <Image style={style.image} source={{uri: item.img}} />
        </View>
        <View style={style.headlineContainer}>
          <Text style={style.headline}>{item.headline}</Text>
          <Text style={style.intro}>{item.intro}</Text>
        </View>
        <View style={style.sourceContainer}>
          <Text style={style.source}>{item.source}</Text>
          <Text style={style.released}>{item.released} ago</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Article;

const style = StyleSheet.create({
  container: {
    marginTop: 4,
    margin: 8,
    paddingBottom: 8,
    backgroundColor: '#324165',
    borderRadius: 4,
  },
  sourceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
  },
  source: {
    color: 'grey',
    marginRight: 4,
    fontSize: 16,
  },
  released: {
    color: 'grey',
    fontSize: 14,
  },
  headlineContainer: {
    flexDirection: 'column',
    paddingHorizontal: 6,
    marginBottom: 6,
  },
  headline: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8.5,
    marginBottom: 10,
  },
  intro: {
    color: 'white',
    fontSize: 16,
  },
  imageContainer: {
    // paddingLeft: 3,
    // paddingRight: 3,
  },
  image: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 140,
    marginLeft: 0.05,
    marginRight: 0.05,
    width: '100%',
  },
});