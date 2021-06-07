import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from '../../util/responsiveFont';

export default class UserCommentReply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShow: false,
    };
  }
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
    const {reply, id} = this.props;
    const {shouldShow} = this.state;

    const filteredReply = reply.filter((reply) => reply.commentId === id);

    return (
      <SafeAreaView style={style.mainContainer}>
        {this.state.shouldShow && filteredReply.length > 0 ? (
          <View>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  shouldShow: !shouldShow,
                })
              }>
              <Text style={style.replyButton}>Hide replies</Text>
            </TouchableOpacity>
            {filteredReply.map((item) => (
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
              </View>
            ))}
          </View>
        ) : !this.state.shouldShow && filteredReply.length === 1 ? (
          <TouchableOpacity
            onPress={() =>
              this.setState({
                shouldShow: !shouldShow,
              })
            }>
            <Text style={style.replyButton}>
              View {filteredReply.length} reply
            </Text>
          </TouchableOpacity>
        ) : !this.state.shouldShow && filteredReply.length > 0 ? (
          <TouchableOpacity
            onPress={() =>
              this.setState({
                shouldShow: !shouldShow,
              })
            }>
            <Text style={style.replyButton}>
              View {filteredReply.length} replies
            </Text>
          </TouchableOpacity>
        ) : null}
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    backgroundColor: '#2a334a',
    paddingVertical: moderateScale(4),
    paddingLeft: moderateScale(60),
    marginTop: moderateScale(10),
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
    fontSize: 15,
    marginLeft: moderateScale(8),
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    marginBottom: moderateScale(3),
  },
  body: {
    marginLeft: moderateScale(8),
    color: 'lightgrey',
    fontSize: moderateScale(13.5),
    fontFamily: 'Montserrat-Medium',
  },
  postUserImage: {
    height: moderateScale(28),
    width: moderateScale(28),
    borderRadius: moderateScale(50),
  },
  belowCommentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: moderateScale(36.5),
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
  replyButton: {
    color: '#B8A0FF',
    marginLeft: moderateScale(16),
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(13),
    marginBottom: moderateScale(10),
  },
});
