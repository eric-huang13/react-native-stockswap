import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import UserCommentList from './UserCommentList';

export default class UserPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShow: false,
    };
  }


  render() {
    const {shouldShow} = this.state;

    const {post, comments} = this.props;
    const filteredComments = comments.filter(
      (comment) => comment.postId === post.id,
    );
    const lastComment = filteredComments[filteredComments.length - 1];
    // console.log(this.props.navigation, 'props in post');
    return (
      <SafeAreaView style={style.container}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate({
              name: 'PostScreen',
              params: {post, filteredComments},
            })
          }>
          <View style={style.postNameContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={style.postUserImage}
                source={{uri: post.profileImg}}
              />
              <Text style={style.postUserName}>{post.name}</Text>
            </View>

            <View style={style.dotsDropdownConatiner}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    shouldShow: !shouldShow,
                  })
                }>
                <Text style={style.dotsButton}>...</Text>
              </TouchableOpacity>
              {this.state.shouldShow ? (
                <View style={style.dropdown}>
                  <Text style={style.dropDownText}>Repost</Text>
                  <Text style={style.dropDownText}>Copy link</Text>
                  <Text style={style.dropDownText}>Turn on notifications</Text>
                  <View style={style.dropDownTextReportContainer}>
                    <Text style={style.dropDownText}>Report</Text>
                  </View>
                </View>
              ) : null}
            </View>
          </View>
          <Image style={style.image} source={{uri: post.img}} />
          <View style={style.detailsContainer}>
            <Text style={style.timestamp}>{post.timestamp}</Text>

            <View style={style.likesContainer}>
              <Text style={style.likes}>{post.likes}</Text>
              <Text style={style.comments}>{post.comments}</Text>
            </View>
          </View>
          <Text style={style.body}>{post.body}</Text>
        </TouchableOpacity>

        <View style={style.commentContainer}>
          <View style={style.commentContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate({
                  name: 'PostScreen',
                  params: {post, filteredComments},
                })
              }>
              <View style={style.headerContainer}>
                <Text style={style.allComments}>View all comments</Text>
              </View>

              {lastComment ? (
                <View style={style.lastCommentContainer}>
                  <Text style={style.lastCommentName}>{lastComment.name}:</Text>
                  <Text style={style.lastCommentBody}>
                    {lastComment.body.length < 45
                      ? `${lastComment.body}`
                      : `${lastComment.body.substring(0, 44)}...`}
                  </Text>
                </View>
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
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
    justifyContent: 'space-between',
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
  body: {
    marginTop: 8,
    fontSize: 16,
    color: 'white',
  },
  commentContainer: {
    marginTop: 4,
  },
  allComments: {
    color: '#8b64ff',
    fontStyle: 'italic',
    fontSize: 14,
  },
  lastCommentContainer: {
    marginTop: 4,
  },
  lastCommentName: {
    color: 'white',
    fontWeight: 'bold',
  },
  lastCommentBody: {
    color: 'white',
  },
  dotsDropdownConatiner: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  dotsButton: {
    alignSelf: 'flex-end',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  dropdown: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '100%',
    marginTop: 1,
    marginBottom: -125,
    backgroundColor: '#36415f',
    zIndex: 1,
    paddingVertical: 6,
    // paddingHorizontal:10,
  },
  dropDownText: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 12,
  },
  dropDownTextReportContainer: {
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    paddingTop: 4,
  },
});
