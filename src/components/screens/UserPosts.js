import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LikeInactiveIcon from '../../icons/LikeInactiveIcon'
import CommentIcon from '../../icons/CommentIcon'

export default class UserPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShow: false,
    };
  }
  navigationByCondition = post => {
    const {navigation} = this.props;
    if (post.userId === this.accountId) {
      navigation.navigate({
        name: 'MyProfile',
        params: {id: post.id},
      })
    } else {
      navigation.navigate({
        name: 'Profile',
        params: {id: post.userId}      })
    }
  };

  render() {
    const {shouldShow} = this.state;

    const {post, comments, reply, userAccount} = this.props;
    const filteredComments = comments.filter(
      (comment) => comment.postId === post.id,
    );
    const lastComment = filteredComments[filteredComments.length - 1];
    // console.log(this.props.navigation, 'props in post');
    return (
      <SafeAreaView style={style.container}>
        <View style={style.postNameContainer}>
        <TouchableOpacity
                    key={post.id}
                    onPress={()=>this.navigationByCondition(post)             
                    }>
          <View style={style.profileImageContainer}>
            <Image
              style={style.postUserImage}
              source={{uri: post.profileImg}}
            />
            <Text style={style.postUserName}>{post.name}</Text>
          </View>
          </TouchableOpacity>

          <View style={style.dotsDropdownContainer}>
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
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate({
              name: 'PostScreen',
              params: {post, filteredComments, reply, userAccount},
            })
          }>
          <Image style={style.image} source={{uri: post.img}} />
        </TouchableOpacity>

        <View style={style.detailsContainer}>
          <Text style={style.timestamp}>{post.timestamp}</Text>

          <View style={style.likesContainer}>
              <View style={style.iconContainer}>
                <LikeInactiveIcon/>
              <Text style={style.likes}>{post.likes}</Text>
              </View>
              <View style={style.iconContainer}>
                <CommentIcon/>
              <Text style={style.comments}>{post.comments}</Text>
              </View>
            </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate({
              name: 'PostScreen',
              params: {post, filteredComments, reply, userAccount},
            })
          }>
          <Text style={style.body}>
            {' '}
            {post.body.length < 88
              ? `${post.body}`
              : `${post.body.substring(0, 88)}...`}{' '}
            <Text style={style.more}>{'       '}More</Text>
          </Text>
        </TouchableOpacity>

        <View style={style.commentContainer}>
          <View style={style.commentContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate({
                  name: 'PostScreen',
                  params: {post, filteredComments, reply, userAccount},
                })
              }>
              {/* <View style={style.headerContainer}>
                <Text style={style.allComments}>View all comments</Text>
              </View> */}

              {lastComment ? (
                <View style={style.lastCommentContainer}>
                  <Text style={style.lastCommentName}>{lastComment.name}:</Text>
                  <Text style={style.lastCommentBody}>
                    {lastComment.body.length < 55
                      ? `${lastComment.body}`
                      : `${lastComment.body.substring(0, 55)}...`}
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
    marginTop: 3,
    paddingVertical: 18,
    paddingHorizontal: 10,
    backgroundColor: '#2a334a',
  },
  image: {
    height: 184,
    width: '100%',
    borderRadius: 10,
  },
  postNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8.5,
    justifyContent: 'space-between',
  },
  profileImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postUserImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  postUserName: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 8,
    fontFamily:'Montserrat-Bold',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  timestamp: {
    fontSize: 12.5,
    color: 'lightgrey',
    fontFamily:'Montserrat-Italic',
  },
  iconContainer:{
    flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
  },
  likes: {
    fontSize: 16,
    color: 'lightgrey',
    fontFamily:'Montserrat-Medium',
    marginLeft:3,
    marginRight:14,
    
  },
  comments: {
    fontSize: 16,
    color: 'lightgrey',
    fontFamily:'Montserrat-Medium',
    marginRight: 1,
    marginLeft:3,
  },
  body: {
    fontSize: 15,
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 4,
    fontFamily:'Montserrat-Medium',
  },
  more: {
    fontSize: 13,
    color: '#B8A0FF',
    fontFamily:'Montserrat-SemiBoldItalic',
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
    // marginTop: 1,
  },
  lastCommentName: {
    color: '#999999',
    fontFamily:'Montserrat-Bold',
    marginBottom:1,
  },
  lastCommentBody: {
    color: '#FFFFFF',
    fontSize:13,
    fontFamily:'Montserrat-Regular',
  },
  dotsDropdownContainer: {
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
    width: '100%',
    marginTop: 1,
    marginBottom: -125,
    backgroundColor: '#2C3957',
    zIndex: 1,
    paddingVertical: 6,
    // paddingHorizontal:10,
  },
  dropDownText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 12,
    fontFamily:'Montserrat-Medium',
  },
  dropDownTextReportContainer: {
    borderTopWidth: 1,
    borderTopColor: '#CBCDD7',
    paddingTop: 4,
    backgroundColor:'#2C3957'
  },
});
