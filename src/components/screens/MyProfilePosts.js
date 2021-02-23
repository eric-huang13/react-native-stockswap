
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput, 
  ScrollView
} from 'react-native';
import LikeInactiveIcon from '../../icons/LikeInactiveIcon'
import CommentIcon from '../../icons/CommentIcon'
import SearchInput from '../../icons/SearchInput'
import {connect} from 'react-redux';
 
 
class MyProfilePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShow: false,
      input: '',

    };
  } 
  handleChange = (text) => {
    this.setState({input: text});
  };

  accountId = this.props.userAccount.id
  

  navigationByCondition = lastComment => {
   const {navigation} = this.props;
   if (lastComment.userId === this.accountId) {
     navigation.navigate({
       name: 'MyProfile',
       params: {id: lastComment.id},
     })
   } else {
     navigation.navigate({
       name: 'Profile',
       params: {id: lastComment.userId},
     })
   }
 };
  render() {
    const {shouldShow} = this.state;
    const {isLoggedIn, LogoutUser, post, comments, reply, userAccount} = this.props;
    const id = this.props.userAccount.id
    const selectedPosts = post.filter((user) => user.userId === id); 
 
    const filteredComments = comments.filter(
      (comment) => comment.postId === post.id,
    );
    const lastComment = filteredComments[filteredComments.length - 1];
    // console.log(post, 'props in post');
    return (
      <SafeAreaView style={style.container}>
        <ScrollView>
        <View style={style.searchInputContainer}>
          <View
        style={{
          position: "absolute",
          zIndex: 1,
          left: 14,
          top:10
        }}
      >
        <SearchInput/>
      </View>
            <TextInput
              style={style.searchInput}
              placeholder="Search by name"
              placeholderTextColor="lightgrey"
              onChangeText={(text) => this.handleChange(text)}
            />
          </View>
           {selectedPosts.map((post) => {
            return (
                <View style={style.postContainer} key={post.id}>
        <View style={style.postNameContainer}>
          <View style={style.profileImageContainer}>
            <Image
              style={style.postUserImage}
              source={{uri: post.profileImg}}
            />
            <Text style={style.postUserName}>{post.name}</Text>
          </View>
 
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
                <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate({
              name: 'EditPost',
              params: {post, userAccount},
            })
          }>
            <Text style={style.dropDownText}>Edit post</Text>
                </TouchableOpacity>                
                <View style={style.dropDownTextReportContainer}>
                  <Text style={style.dropDownText}>Remove post</Text>
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

        </View>
            );
          })}

        <View style={style.commentContainer}>         
             
 
              {lastComment ? (
                  <TouchableOpacity
                  onPress={()=>this.navigationByCondition(lastComment)             
                  }>
                <View style={style.lastCommentContainer}>
                  <Text style={style.lastCommentName}>{lastComment.name}:</Text>
                  <Text style={style.lastCommentBody}>
                    {lastComment.body.length < 55
                      ? `${lastComment.body}`
                      : `${lastComment.body.substring(0, 55)}...`}
                  </Text>
                </View>            
                </TouchableOpacity>

              ) : null}
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    post: state.posts.posts,
    comments: state.posts.comments,
    reply: state.posts.reply,
    userData: state.user.userData,
    userAccount: state.user.userFakeData
 
  };
};
 
const mapDispatchToProps = (dispatch) => {
  return {
    LogoutUser: (userCredentials) => dispatch(Logout(userCredentials)),
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(MyProfilePosts);
 
 
const style = StyleSheet.create({
  container: {    
    flexDirection: 'column',  
    backgroundColor: '#2a334a',
    flex:1,
  },
  searchInputContainer: {
    marginBottom: 15,
  },
  searchInput: {
    paddingLeft: 40,
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: 15,
    height: 36,
    fontFamily: 'Montserrat-Italic',
    paddingVertical: 0,
    marginBottom:10,
  },
  postContainer:{
    paddingHorizontal: 10,
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
    paddingHorizontal:10,
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
    marginBottom: -55,
    backgroundColor: '#2C3957',
    zIndex: 1,
    paddingVertical: 8,
    // paddingHorizontal:10,
  },
  dropDownText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 12,
    fontFamily:'Montserrat-Medium',
    paddingBottom:6,
    paddingTop:6,
  },
  dropDownTextReportContainer: {
    borderTopWidth: 1,
    borderTopColor: '#CBCDD7',
    paddingTop: 6,
    paddingBottom:6,
    backgroundColor:'#2C3957'
  },
});
 

