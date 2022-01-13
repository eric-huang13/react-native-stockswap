import React, {Component, useState, useEffect, useRef} from 'react';
import UserPosts from '../UserPost/UserPosts';
import StockTicker from '../HomeTabComponents/StockTicker';
import {connect} from 'react-redux';
import {
  Button,
  Modal,
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {fetchTickers} from '../../actions/marketMovers';
import ReportModal from '../HomeTabComponents/ReportModal';
import ShareToModal from '../HomeTabComponents/ShareToModal';
import {Logout} from 'actions/user';
import MoreBox from '../HomeTabComponents/MoreBox';
import {PortfolioAccounts} from '../../actions/profile';
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

const HomeScreen = ({
  navigation,
  fetchTickers,
  isLoggedIn,
  LogoutUser,
  posts,
  comments,
  reply,
  userAccount,
  PortfolioAccounts
}) => {
  const [reportModalState, setReportModalState] = useState(false);
  const [shareModalState, setShareModalState] = useState(false);
  const [optionsModalState, setOptionsModalState] = useState(false);
  const [optionsState, setOptionsState] = useState([]);
  const accountId = userAccount.id;

  useEffect(() => {
    fetchTickers && fetchTickers();
    PortfolioAccounts();
  }, []);

  const reportModal = () => {
    setReportModalState(true);
  };

  const shareModal = () => {
    setShareModalState(true);
  };

  const optionModal = (post) => {
    setOptionsModalState(true);
    if (post?.userId == accountId) {
      setOptionsState(myPostsOptions);
    } else {
      setOptionsState(otherPostsOptions);
    }
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
    <SafeAreaView style={style.mainContainer}>
      <ScrollView>
        <StockTicker />
        {posts.map((post) => (
          <UserPosts
            key={post.id}
            post={post}
            navigation={navigation}
            comments={comments}
            reply={reply}
            userAccount={userAccount}
            reportModal={reportModal}
            shareModal={shareModal}
            optionModal={optionModal}
          />
        ))}
      </ScrollView>
      <Modal
        transparent={true}
        visible={reportModalState}
        animationType="slide">
        <ReportModal
          reportModal={reportModal}
          onClose={() => setReportModalState(false)}
        />
      </Modal>
      <Modal transparent={true} visible={shareModalState} animationType="slide">
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
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    posts: state.posts.posts,
    comments: state.posts.comments,
    reply: state.posts.reply,
    userData: state.user.userData,
    userAccount: state.user.userFakeData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LogoutUser: (userCredentials) => dispatch(Logout(userCredentials)),
    fetchTickers: () => dispatch(fetchTickers()),
    GetProfileImage: (token, id) => dispatch(GetProfileImage(token, id)),
    RefreshToken: (token) => dispatch(RefreshToken(token)),
    PortfolioAccounts: () => dispatch(PortfolioAccounts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2a334a',
  },
});
