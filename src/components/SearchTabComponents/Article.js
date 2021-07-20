import React, {Component} from 'react';
import {Text, SafeAreaView, View, Image, StyleSheet} from 'react-native';
import {moderateScale} from '../../util/responsiveFont';

export class Article extends Component {
  render() {
    const {item} = this.props;
    console.log(this.props, 'props in news')

    return (
      <SafeAreaView style={style.container}>
        <View style={style.imageContainer}>
          <Image style={style.image} source={{uri: item.image_url}} />
        </View>
        <View style={style.headlineContainer}>
          <Text style={style.headline}>{item.title}</Text>
          {/* <Text style={style.headline}>{item.news_url}</Text> */}

          <Text style={style.intro}>{item.text}</Text>
        </View>
        <View style={style.sourceContainer}>
          <Text style={style.source}>{item.source_name}</Text>
          <Text style={style.released}>{item.date}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Article;

const style = StyleSheet.create({
  container: {
    marginTop: moderateScale(4),
    margin: moderateScale(8),
    paddingBottom: moderateScale(8),
    backgroundColor: '#324165',
    borderRadius: moderateScale(4),
  },
  sourceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(6),
  },
  source: {
    color: '#9ea6b5',
    marginRight: moderateScale(4),
    fontSize: moderateScale(15),
    fontFamily: 'Montserrat-Regular',
  },
  released: {
    color: '#9ea6b5',
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Regular',
  },
  headlineContainer: {
    flexDirection: 'column',
    paddingHorizontal: moderateScale(6),
    marginBottom: moderateScale(6),
  },
  headline: {
    color: '#FFFFFF',
    fontSize: moderateScale(15),
    marginTop: moderateScale(8.5),
    marginBottom: moderateScale(10),
    fontFamily: 'Montserrat-Bold',
  },
  intro: {
    color: '#FFFFFF',
    fontSize: moderateScale(15),
    fontFamily: 'Montserrat-Medium',
  },
  imageContainer: {
    // paddingLeft: 3,
    // paddingRight: 3,
  },
  image: {
    borderTopLeftRadius: moderateScale(4),
    borderTopRightRadius: moderateScale(4),
    height: moderateScale(140),
    marginLeft: moderateScale(0.05),
    marginRight: moderateScale(0.05),
    width: '100%',
  },
});
