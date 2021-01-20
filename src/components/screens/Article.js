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
    color:'#9ea6b5',
    marginRight: 4,
    fontSize: 15,
    fontFamily:'Montserrat-Regular',
  },
  released: {
    color: '#9ea6b5',
    fontSize: 13,
    fontFamily:'Montserrat-Regular',
  },
  headlineContainer: {
    flexDirection: 'column',
    paddingHorizontal: 6,
    marginBottom: 6,
  },
  headline: {
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: 8.5,
    marginBottom: 10,
    fontFamily:'Montserrat-Bold',
  },
  intro: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily:'Montserrat-Medium',
    
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
