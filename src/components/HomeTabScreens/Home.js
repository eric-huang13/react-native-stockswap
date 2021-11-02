import React, {Component} from 'react';
import UserPosts from './UserPosts';
import StockTicker from '../HomeTabComponents/StockTicker';
import {connect} from 'react-redux';
import {Button, SafeAreaView, Text, ScrollView, StyleSheet} from 'react-native';
import {fetchTickers} from '../../actions/marketMovers';
import {GetProfileImage} from '../../actions/profile';
import {RefreshToken} from '../../actions/user';
import {Logout} from 'actions/user';
import AsyncStorage from '@react-native-async-storage/async-storage';


class HomeScreen extends Component {
  componentDidMount() {
    // const {companies, fetchGainers} = this.props;
    this.props.fetchTickers();
    AsyncStorage.getItem('token').then((token) => {
      if (token) {
        this.props.RefreshToken(token);
        this.props.GetProfileImage(token, this.props.userId);
      }
    });
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
    GetProfileImage: (token, id) => dispatch(GetProfileImage(token, id)),
    RefreshToken: (token) => dispatch(RefreshToken(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2a334a',
  },
});
