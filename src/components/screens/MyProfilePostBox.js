
import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions
  
} from 'react-native';
import {connect} from 'react-redux';
 
 
class MyProfilePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShow: false,
      input: '',

    };
  } 

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
    const {comments, reply, userAccount, item} = this.props;

    const filteredComments = comments.filter(
      (comment) => comment.postId === item.id,
    );
    
    return (
      <SafeAreaView style={style.container}>   
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate({
              name: 'PostScreen',
              params: {post:item, filteredComments, reply, userAccount},
            })
          }>
          <Image style={style.image} source={{uri: item.img}} />
        </TouchableOpacity>
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
    width: Dimensions.get('window').width / 3 - 2,
    margin: 1,    
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
    height: Dimensions.get('window').width / 3 - 2,
    width: '100%',
    // borderRadius: 10,
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
 

