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

const myPostsOptions = [
  {
    label: 'Edit Post',
    value: 'EDIT_POST',
  },
  {label: 'Remove Post', value: 'REMOVE_POST'},
];

const otherPostsOptions = [
  {
    label: 'Repost',
    value: 'REPOST',
  },
  {label: 'Copy link', value: 'COPY_LINK'},
  {label: 'Share to...', value: 'SHARE_POST'},
  {label: 'Turn on notifications', value: 'TURN_ON_NOTIFICATIONS'},
  {label: 'Report', value: 'REPORT'},
];

const HomeScreen = ({
  navigation,
  fetchTickers,
  isLoggedIn,
  LogoutUser,
  posts,
  comments,
  reply,
  userAccount,
}) => {
  const [reportModalState, setReportModalState] = useState(false);
  const [shareModalState, setShareModalState] = useState(false);
  const [optionsModalState, setOptionsModalState] = useState(false);
  const [optionsState, setOptionsState] = useState([]);
  const accountId = userAccount.id;

  useEffect(() => {
    fetchTickers && fetchTickers();
  }, []);

  const reportModal = () => {
    setReportModalState(show);
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

  return (
    <SafeAreaView style={style.mainContainer}>
      <ScrollView>
        <StockTicker />
        <Modal
          transparent={true}
          visible={reportModalState}
          animationType="slide">
          <ReportModal
            reportModal={setReportModalState}
            onClose={() => setOptionsModalState(false)}
          />
        </Modal>
        <Modal
          transparent={true}
          visible={shareModalState}
          animationType="slide">
          <ShareToModal shareModal={setShareModalState} />
        </Modal>
        <Modal
          transparent={true}
          visible={optionsModalState}
          animationType="slide">
          <MoreBox
            options={optionsState}
            onClose={() => setOptionsModalState(false)}
          />
        </Modal>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2a334a',
  },
});
