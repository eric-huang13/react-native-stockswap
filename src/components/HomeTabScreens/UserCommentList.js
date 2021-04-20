import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {connect} from 'react-redux';
import UserCommentReply from '../HomeTabComponents/UserCommentReply';
// import {  Swipeable } from 'react-native-gesture-handler';
import {moderateScale} from '../../util/responsiveFont'


class UserCommentList extends Component {
  accountId = this.props.userAccount.id;

  navigationByCondition = (item) => {
    const {navigation} = this.props;
    if (item.userId === this.accountId) {
      navigation.navigate({
        name: 'MyProfile',
        params: {id: item.id},
      });
    } else {
      navigation.navigate({
        name: 'Profile',
        params: {id: item.userId},
      });
    }
  };
  render() {
    const {comments, reply, userAccount} = this.props;
    const postId = this.props.postId
      ? this.props.postId
      : this.props.route.params.postId;
    const filteredComments = comments.filter(
      (comment) => comment.postId === postId,
    );
    // const rightAction = () => {
    //   <View>
    //     <Text>Delete</Text>
    //   </View>
    // }
    return (
      <SafeAreaView style={style.mainContainer}>
        <ScrollView>
        {filteredComments.map((item) => (
          // <Swipeable
          // renderLeftActions={rightAction}

          // >
          <View key={item.id} style={style.itemContainer}>
            <View style={style.detailsContainer}>
              <Image
                style={style.postUserImage}
                source={{uri: item.profileImg}}
              />
              <View style={style.nameBodyContainer}>
                <TouchableOpacity
                  key={item.id}
                  onPress={() => this.navigationByCondition(item)}>
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
            <View>
              <UserCommentReply
                navigation={this.props.navigation}
                reply={reply}
                id={item.id}
                userAccount={userAccount}
              />
            </View>
          </View>
          // </Swipeable>
        ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    comments: state.posts.comments,
    reply: state.posts.reply,
    userAccount: state.user.userFakeData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCommentList);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2a334a',
    paddingVertical: moderateScale(10),
    paddingLeft: moderateScale(4),
  },
  itemContainer: {
    marginBottom: moderateScale(16),
  },
  detailsContainer: {
    flexDirection: 'row',
    paddingRight: moderateScale(4),
  },
  nameBodyContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  commentContainer: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(8),
    flexWrap: 'wrap',
    marginHorizontal: moderateScale(6),
    marginVertical: moderateScale(8),
  },

  name: {
    fontSize: moderateScale(15),
    marginLeft: moderateScale(8),
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    marginBottom: moderateScale(3),
  },
  body: {
    color: 'lightgrey',
    fontSize: moderateScale(13.5),
    marginLeft: moderateScale(8),
    fontFamily: 'Montserrat-Medium',
  },
  postUserImage: {
    height: moderateScale(53),
    width: moderateScale(53),
    borderRadius: moderateScale(50),
  },
  belowCommentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: moderateScale(61.5),
    paddingRight: moderateScale(6),
    alignItems: 'center',
    marginTop: moderateScale(4),
  },
  time: {
    fontSize: moderateScale(12.5),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Italic',
  },
  likesContainer: {
    flexDirection: 'row',
  },
  likes: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(13),
  },
  reply: {
    color: '#B8A0FF',
    marginLeft: moderateScale(16),
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(13),
  },
});
