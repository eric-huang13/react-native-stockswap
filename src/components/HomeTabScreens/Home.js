import React, {Component} from 'react';
import UserPosts from './UserPosts';
import StockTicker from '../HomeTabComponents/StockTicker';
import {connect} from 'react-redux';
import {Button, SafeAreaView, Text, ScrollView, StyleSheet} from 'react-native';
import {fetchTickers} from '../../actions/marketMovers';

import {Logout} from 'actions/user';

class HomeScreen extends Component {
  componentDidMount() {
    // const {companies, fetchGainers} = this.props;
    this.props.fetchTickers();
  }
  render() {
    const {isLoggedIn, LogoutUser, posts, comments, reply, userAccount} =
      this.props;

    return (
      <SafeAreaView style={style.mainContainer}>
        <ScrollView>
          <StockTicker />

          {posts.map((post) => (
            <UserPosts
              key={post.id}
              post={post}
              navigation={this.props.navigation}
              comments={comments}
              reply={reply}
              userAccount={userAccount}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

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
