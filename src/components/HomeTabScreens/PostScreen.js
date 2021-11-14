import React, {useState} from 'react';
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
  KeyboardAvoidingView,
} from 'react-native';
import UserCommentList from './UserCommentList';
import ReportModal from '../HomeTabComponents/ReportModal';
import ShareToModal from '../HomeTabComponents/ShareToModal';
import LikeInactiveIcon from '../../icons/LikeInactiveIcon';
import CommentIcon from '../../icons/CommentIcon';
import {moderateScale} from '../../util/responsiveFont';
import MoreBox from '../HomeTabComponents/MoreBox';
import {
  EDIT_POST,
  REMOVE_POST,
  REPOST,
  COPY_LINK,
  SHARE_POST,
  TURN_ON_NOTIFICATIONS,
  REPORT,
  myPostsOptions,
  otherPostsOptions,
} from './constants';

const PostScreen = ({navigation, route}) => {
  const {post, userAccount} = route.params;
  const accountId = userAccount?.id;
  const [reportModalState, setReportModalState] = useState(false);
  const [shareModalState, setShareModalState] = useState(false);
  const [optionsModalState, setOptionsModalState] = useState(false);
  const optionsState =
    userAccount.id === post.userId ? myPostsOptions : otherPostsOptions;

  const reportModal = () => {
    setReportModalState(true);
  };

  const shareModal = () => {
    setShareModalState(true);
  };

  const navigationByCondition = () => {
    if (post.userId === accountId) {
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
  const dropDownSelect = (post, userAccount) => {
    // this.setState({shouldShow: false});
    navigation.navigate({
      name: 'EditPost',
      params: {post, userAccount},
    });
  };
  const onSelectOption = (action) => {
    switch (action) {
      case EDIT_POST:
        break;
      case REMOVE_POST:
        break;
      case REPOST:
        break;
      case COPY_LINK:
        break;
      case SHARE_POST:
        shareModal();
        break;
      case TURN_ON_NOTIFICATIONS:
        break;
      case REPORT:
        reportModal();
        break;
      default:
        console.log('Not a valid action');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
        style={{flex: 1}}>
        <Modal
          transparent={true}
          visible={reportModalState}
          animationType="slide">
          <ReportModal
            reportModal={reportModal}
            onClose={() => setReportModalState(false)}
          />
        </Modal>
        <Modal
          transparent={true}
          visible={shareModalState}
          animationType="slide">
          <ShareToModal
            shareModal={setShareModalState}
            onClose={() => setShareModalState(false)}
          />
        </Modal>
        <Modal
          transparent={true}
          visible={optionsModalState}
          animationType="slide">
          <MoreBox
            options={optionsState}
            onClose={() => setOptionsModalState(false)}
            onSelect={onSelectOption}
          />
        </Modal>
        <ScrollView style={style.scrollContainer}>
          <View style={style.postNameContainer}>
            <TouchableOpacity key={post.id} onPress={navigationByCondition}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={style.postUserImage}
                  source={{uri: post.profileImg}}
                />
                <Text style={style.postUserName}>{post.name}</Text>
              </View>
            </TouchableOpacity>
            <View style={style.dotsDropdownContainer}>
              <View>
                <TouchableOpacity onPress={() => setOptionsModalState(true)}>
                  <Text style={style.dotsButton}>...</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Image style={[style.image]} source={{uri: post.img}} />
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
            navigation={navigation}
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PostScreen;

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
    paddingBottom: 5,
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
