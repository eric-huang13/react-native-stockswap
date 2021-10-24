import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from 'react-native';
import LikeInactiveIcon from '../../icons/LikeInactiveIcon';
import CommentIcon from '../../icons/CommentIcon';
import ReportModal from '../HomeTabComponents/ReportModal';
import ShareToModal from '../HomeTabComponents/ShareToModal';
import {moderateScale, scale} from '../../util/responsiveFont';

export default class UserPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShow: false,
      reportModalState: false,
      shareModalState: false,
    };
  }
  accountId = this.props.userAccount.id;

  navigationByCondition = (post) => {
    const {navigation} = this.props;
    if (post.userId === this.accountId) {
      navigation.navigate({
        name: 'MyProfile',
        params: {id: post.id},
      });
    } else {
      navigation.navigate({
        name: 'Profile',
        params: {id: post.userId},
      });
    }
  };
  dropDownSelect(post, userAccount) {
    this.setState({shouldShow: false});
    this.props.navigation.navigate({
      name: 'EditPost',
      params: {post, userAccount},
    });
  }
  reportModal(item) {
    this.setState({reportModalState: item, shouldShow: false});
  }
  shareModal(item) {
    this.setState({shareModalState: item, shouldShow: false});
  }
  render() {
    const {shouldShow, reportModalState, shareModalState} = this.state;

    const {post, comments, reply, userAccount} = this.props;

    const filteredComments = comments.filter(
      (comment) => comment.postId === post.id,
    );
    const lastComment = filteredComments[filteredComments.length - 1];
    // console.log(this.props.navigation, 'props in post');
    return (
      <SafeAreaView style={style.container}>
        <Modal
          transparent={true}
          visible={reportModalState}
          animationType="slide">
          <ReportModal reportModal={this.reportModal.bind(this)} />
        </Modal>
        <Modal
          transparent={true}
          visible={shareModalState}
          animationType="slide">
          <ShareToModal shareModal={this.shareModal.bind(this)} />
        </Modal>
        <View style={style.postNameContainer}>
          <TouchableOpacity
            key={post.id}
            onPress={() => this.navigationByCondition(post)}>
            <View style={style.profileImageContainer}>
              <Image
                style={style.postUserImage}
                source={{uri: post.profileImg}}
              />
              <Text style={style.postUserName}>{post.name}</Text>
            </View>
          </TouchableOpacity>
          {userAccount.id === post.userId ? (
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
                <View style={style.dropdownEdit}>
                  <TouchableOpacity
                    onPress={() => this.dropDownSelect(post, userAccount)}>
                    <Text style={style.dropDownText}>Edit post</Text>
                  </TouchableOpacity>
                  <View style={style.dropDownTextReportContainer}>
                    <Text style={style.dropDownText}>Remove post</Text>
                  </View>
                </View>
              ) : null}
            </View>
          ) : (
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
                  <TouchableOpacity onPress={() => this.shareModal(true)}>
                    <Text style={style.dropDownText}>Share to...</Text>
                  </TouchableOpacity>
                  <Text style={style.dropDownText}>Turn on notifications</Text>
                  <TouchableOpacity
                    key={post.id}
                    onPress={() => this.reportModal(true)}>
                    <View style={style.dropDownTextReportContainer}>
                      <Text style={style.dropDownText}>Report</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate({
              name: 'PostScreen',
              params: {post, filteredComments, reply, userAccount},
            })
          }>
          <Image
            style={[style.image, shouldShow ? {opacity: 0.2} : null]}
            source={{uri: post.img}}
          />
        </TouchableOpacity>

        <View style={style.detailsContainer}>
          <Text style={style.timestamp}>{post.timestamp}</Text>

          <View style={style.likesContainer}>
            <View style={style.iconContainer}>
              <LikeInactiveIcon />
              <Text style={style.likes}>{post.likes}</Text>
            </View>
            <View style={style.iconContainer}>
              <CommentIcon />
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
          {post.body.length < 80 ? (
            <Text style={style.body}>{post.body}</Text>
          ) : (
            <Text style={style.body}>
              {' '}
              {post.body.substring(0, 80)}...
              <Text style={style.more}>{'       '}More</Text>
            </Text>
          )}
        </TouchableOpacity>

        <View style={style.commentContainer}>
          <View style={style.commentContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate({
                  name: 'UserCommentList',
                  params: {postId: post.id, userAccount},
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
    marginTop: moderateScale(3),
    paddingVertical: moderateScale(18),
    paddingHorizontal: moderateScale(10),
    backgroundColor: '#2a334a',
  },
  image: {
    height: scale(184),
    width: '100%',
    borderRadius: moderateScale(10),
  },
  postNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(8.5),
    justifyContent: 'space-between',
  },
  profileImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postUserImage: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(50),
  },
  postUserName: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    marginLeft: moderateScale(8),
    fontFamily: 'Montserrat-Bold',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(8),
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  timestamp: {
    fontSize: moderateScale(12.5),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Italic',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likes: {
    fontSize: moderateScale(16),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Medium',
    marginLeft: moderateScale(3),
    marginRight: moderateScale(14),
  },
  comments: {
    fontSize: moderateScale(16),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Medium',
    marginRight: moderateScale(1),
    marginLeft: moderateScale(3),
  },
  body: {
    fontSize: moderateScale(15),
    color: '#FFFFFF',
    marginTop: moderateScale(10),
    marginBottom: moderateScale(4),
    fontFamily: 'Montserrat-Medium',
  },
  more: {
    fontSize: moderateScale(13),
    color: '#B8A0FF',
    fontFamily: 'Montserrat-SemiBoldItalic',
    //   alignSelf:'flex-end',
    //  textAlign:'right'
  },
  commentContainer: {
    marginTop: moderateScale(4),
  },
  allComments: {
    color: '#8b64ff',
    fontStyle: 'italic',
    fontSize: moderateScale(14),
  },
  lastCommentContainer: {
    // marginTop: 1,
  },
  lastCommentName: {
    color: '#999999',
    fontFamily: 'Montserrat-Bold',
    marginBottom: moderateScale(1),
  },
  lastCommentBody: {
    color: '#FFFFFF',
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-Regular',
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
    fontSize: moderateScale(20),
    marginBottom: moderateScale(10),
  },
  dropdownEdit: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: moderateScale(1),
    marginBottom: moderateScale(-60),
    backgroundColor: '#2C3957',
    zIndex: 1,
    paddingVertical: moderateScale(6),
    // paddingHorizontal:10,
  },
  dropdown: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: moderateScale(1),
    marginBottom: moderateScale(-135),
    backgroundColor: '#2C3957',
    zIndex: 1,
    paddingVertical: moderateScale(6),
    // paddingHorizontal:10,
  },
  dropDownText: {
    color: 'white',
    fontSize: moderateScale(16),
    marginHorizontal: moderateScale(12),
    fontFamily: 'Montserrat-Medium',
  },
  dropDownTextReportContainer: {
    borderTopWidth: moderateScale(1),
    borderTopColor: '#CBCDD7',
    paddingTop: moderateScale(4),
    backgroundColor: '#2C3957',
  },
});
