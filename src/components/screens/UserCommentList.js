import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

import UserCommentReply from './UserCommentReply';

class UserCommentList extends Component {

  accountId = this.props.userAccount.id 

   navigationByCondition = item => {
    const {navigation} = this.props;
    if (item.userId === this.accountId) {
      navigation.navigate({
        name: 'MyProfile',
        params: {id: item.id},
      })
    } else {
      navigation.navigate({
        name: 'Profile',
        params: {id: item.userId}      })
    }
  };
  render() {
    const {comments, reply, userAccount, postId} = this.props;
    const filteredComments = comments.filter(
      (comment) => comment.postId === postId,
    );
    // console.log(this.props.postId, 'comments')
    return (
      <SafeAreaView style={style.mainContainer}>
        {filteredComments.map((item) => (
          <View key={item.id} style={style.itemContainer}>
            <View style={style.detailsContainer}>
              <Image
                style={style.postUserImage}
                source={{uri: item.profileImg}}
              />
              <View style={style.nameBodyContainer}>
              <TouchableOpacity
                    key={item.id}
                    onPress={()=>this.navigationByCondition(item)             
                    }>
                  <Text style={style.name}>{item.name} </Text>
                </TouchableOpacity>

                <Text style={style.body}>{item.body} </Text>
              </View>
            </View>
            <View style={style.belowCommentContainer}>
              <Text style={style.time}>{item.time}</Text>
              <View style={style.likesContainer}>
                <Text style={style.likes}>{item.likes} likes</Text>
                <Text style={style.reply}>Reply </Text>
              </View>
            </View>
            <UserCommentReply
              navigation={this.props.navigation}
              reply={reply}
              id={item.id}
              userAccount={userAccount}
            />
          </View>
        ))}
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {   
    comments: state.posts.comments,
    reply: state.posts.reply,
   

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCommentList);


const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    backgroundColor: '#2a334a',
    paddingVertical: 4,
    paddingLeft: 4,
    marginTop: 10,
  },
  itemContainer: {
    marginBottom: 16,
  },
  detailsContainer: {
    flexDirection: 'row',
    // marginBottom: 2,
    paddingRight: 4,
  },
  nameBodyContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  commentContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    flexWrap: 'wrap',
    marginHorizontal: 6,
    marginVertical: 8,
  },

  name: {    
    fontSize: 15,
    marginLeft: 8,
    color: '#FFFFFF',
    fontFamily:'Montserrat-Bold',
    marginBottom:3,
  },
  body: {
    color: 'lightgrey',
    fontSize: 13.5,
    marginLeft: 8,
    fontFamily:'Montserrat-Medium',
  },
  postUserImage: {
    height: 53,
    width: 53,
    borderRadius: 50,
  },
  belowCommentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 61.5,
    paddingRight: 6,
    alignItems: 'center',
    marginTop: 4,
  },
  time: {
    fontSize: 12.5,
    color: 'lightgrey',
    fontFamily:'Montserrat-Italic',
  },
  likesContainer: {
    flexDirection: 'row',
  },
  likes: {
    color: '#FFFFFF',
    fontFamily:'Montserrat-SemiBold',
    fontSize:13,
  },
  reply: {
    color: '#B8A0FF',
    marginLeft: 16,
    fontFamily:'Montserrat-SemiBold',
    fontSize:13,
  },
});
