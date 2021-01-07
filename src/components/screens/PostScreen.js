import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class PostScreen extends Component {
  render() {
    const {post} = this.props.route.params;
    return (
      <View style={style.mainContainer}>
        <View style={style.commentContainer}>
          <Image style={style.postUserImage} source={{uri: post.profileImg}} />
          <Text style={style.name}> {post.name} </Text>
        </View>
        <Image style={style.postImage} source={{uri: post.img}} />        
        <Text style={style.body}> {post.body} </Text>

      </View>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#324165',
    paddingVertical: 4,
  },
  commentContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    flexWrap: 'wrap',
    marginHorizontal: 6,
    marginVertical: 8,
  },

  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    alignSelf: 'center',
  },
  body: {
    color: 'white',
    fontSize: 16,
    marginLeft: 50,
  },
  postUserImage: {
    height: 43,
    width: 43,
    borderRadius: 50,
  },
  postImage: {
    height: 200,
    width: '100%',
    borderRadius: 8,
  },
});
