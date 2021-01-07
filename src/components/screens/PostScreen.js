import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';
import UserCommentList from './UserCommentList';
export default class PostScreen extends Component {
  render() {
    const {post, filteredComments} = this.props.route.params;
    return (
      <SafeAreaView style={style.mainContainer}>
        <View style={style.postNameContainer}>
          <Image style={style.postUserImage} source={{uri: post.profileImg}} />
          <Text style={style.postUserName}>{post.name}</Text>
        </View>
        <Image style={style.image} source={{uri: post.img}} />
        <View style={style.detailsContainer}>
          <Text style={style.timestamp}>{post.timestamp}</Text>

          <View style={style.likesContainer}>
            <Text style={style.likes}>{post.likes}</Text>
            <Text style={style.comments}>{post.comments}</Text>
            <Text style={style.comments}>Share</Text>
          </View>
        </View>
        <View style={style.bodyContainer}>
          <Text style={style.body}>{post.body}</Text>
        </View>
        <UserCommentList
          filteredComments={filteredComments}
          navigation={this.props.navigation}
        />
      </SafeAreaView>
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
  container: {
    // flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#2a334a',
  },
  image: {
    height: 150,
    width: '100%',
    borderRadius: 10,
  },
  postNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  postUserImage: {
    height: 43,
    width: 43,
    borderRadius: 50,
  },
  postUserName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  timestamp: {
    fontSize: 14,
    color: 'lightgrey',
  },
  likes: {
    fontSize: 16,
    color: 'white',
  },
  comments: {
    fontSize: 16,
    color: 'white',
    marginHorizontal: 10,
  },
  bodyContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    paddingBottom: 6,
    marginBottom: 6,
  },
  body: {
    marginTop: 8,
    fontSize: 16,
    color: 'white',
    marginBottom: 6,
  },
  commentContainer: {
    marginTop: 4,
  },
});
