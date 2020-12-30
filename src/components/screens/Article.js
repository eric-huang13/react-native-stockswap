import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export class Article extends Component {
  render() {
    const {item} = this.props;

    return (
      <View style={style.container}>
        <View style={style.imageContainer}>
          <Image style={style.image} source={{uri: item.img}} />
        </View> 
        <View style={style.headlineContainer}>      
        <Text style={style.headline}>{item.headline}</Text>
        </View> 
        <View style={style.sourceContainer}>
          <Text style={style.source}>{item.source}</Text>
          <Text style={style.released}>{item.released} ago</Text>
        </View>
      </View>
    );
  }
}

export default Article;

const style = StyleSheet.create({
  container: {
    marginTop: 1.2,
    margin: 15,
    paddingBottom: 6,
    backgroundColor: '#324165',
    },
  sourceContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal:6,
  },
  source: {
    color: 'grey',
    marginRight: 4,
    fontSize: 17.5,
  },
  released: {
    color: 'grey',
    fontSize: 17.5,
  },
  headlineContainer:{
    paddingHorizontal:6,

  },
  headline: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 8.5,
    marginBottom: 10,
  },
  imageContainer: {
    // paddingLeft: 3,
    // paddingRight: 3,

  },
  image: {
    borderTopLeftRadius:6,
    borderTopRightRadius:6,
    height: 200,
    marginLeft: 0.05,
    marginRight: 0.05,
    width: '100%',
  },
});
