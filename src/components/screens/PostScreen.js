import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';
import UserCommentList from './UserCommentList';
import ReportModal from './ReportModal';
import ShareToModal from './ShareToModal';
import LikeInactiveIcon from '../../icons/LikeInactiveIcon';
import CommentIcon from '../../icons/CommentIcon';
import { moderateScale } from '../../util/responsiveFont';

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShow: false,
      reportModalState: false,
      shareModalState: false,
    };
  }
  accountId = this.props.route.params.userAccount.id;

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

    const {post, userAccount} = this.props.route.params;
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
        <ScrollView style={style.scrollContainer}>
          <View style={style.postNameContainer}>
            <TouchableOpacity
              key={post.id}
              onPress={() => this.navigationByCondition(post)}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={style.postUserImage}
                  source={{uri: post.profileImg}}
                />
                <Text style={style.postUserName}>{post.name}</Text>
              </View>
            </TouchableOpacity>
            {userAccount.id === post.userId ? (
              <View style={style.dotsDropdownContainer}>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        shouldShow: !shouldShow,
                      })
                    }>
                    <Text style={style.dotsButton}>...</Text>
                  </TouchableOpacity>
                </View>
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
                    <Text style={style.dropDownText}>
                      Turn on notifications
                    </Text>
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
          <Image style={style.image} source={{uri: post.img}} />
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
          <Text style={style.body}>{post.body}</Text>
          <UserCommentList
            postId={post.id}
            navigation={this.props.navigation}
            userAccount={userAccount}
          />
        </ScrollView>
        <View style={style.searchInputContainer}>
          <TextInput
            style={style.searchInput}
            placeholder="Enter your comment"
            placeholderTextColor="lightgrey"
          />
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: moderateScale(21),
    backgroundColor: '#2a334a',
  },

  reportModalContainer: {
    flex: 1,
    marginTop: moderateScale(310),
    backgroundColor: '#3e4d6c',
    borderRadius: moderateScale(20),
    padding: moderateScale(24),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  innerReportContainer: {
    marginTop: moderateScale(10),
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '50%',
  },
  optionModalText: {
    color: '#B8A0FF',
    marginLeft: moderateScale(16),
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(13),
    marginBottom: moderateScale(10),
  },

  scrollContainer: {
    paddingHorizontal: moderateScale(10),
  },
  image: {
    height: moderateScale(184),
    width: '100%',
    borderRadius: moderateScale(10),
  },
  postNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(9),
    justifyContent: 'space-between',
  },
  postUserImage: {
    height: moderateScale(38),
    width: moderateScale(38),
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
    marginLeft: 3,
    marginRight: 14,
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
    marginBottom: moderateScale(2),
    borderBottomWidth: moderateScale(0.7),
    borderBottomColor: 'rgba(158, 150, 150, .4)',
    paddingBottom: moderateScale(18),
    fontFamily: 'Montserrat-Medium',
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
    marginBottom: moderateScale(9),
  },
  dropdownEdit: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: moderateScale(1),
    marginBottom: moderateScale(-77),
    backgroundColor: '#2C3957',
    zIndex: 1,
    paddingVertical: moderateScale(6),
  },
  dropdown: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: moderateScale(1),
    marginBottom: moderateScale(-153),
    backgroundColor: '#2C3957',
    zIndex: 1,
    paddingVertical: moderateScale(6),
  },
  dropDownText: {
    color: 'white',
    fontSize: moderateScale(16),
    marginHorizontal: moderateScale(12),
    paddingVertical: moderateScale(2),
    fontFamily: 'Montserrat-Medium',
  },
  dropDownTextReportContainer: {
    borderTopWidth: moderateScale(1),
    borderTopColor: 'lightgrey',
    paddingTop: moderateScale(6),
    backgroundColor: '#2C3957',
  },
  searchInputContainer: {
    backgroundColor: '#2C3957',
    marginBottom: moderateScale(-10),
    paddingHorizontal: moderateScale(10),
  },
  searchInput: {
    marginTop: moderateScale(10),
    paddingLeft: moderateScale(20),
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: moderateScale(15),
    height: moderateScale(36),
    fontFamily: 'Montserrat-Italic',
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(6),
  },
});
