import React, {Component} from 'react';
import UserPosts from './UserPosts';
import {connect} from 'react-redux';
import {Button, SafeAreaView, Text, View} from 'react-native';

import {Logout} from 'actions/user';

class HomeScreen extends Component {
  render() {
    const {isLoggedIn, LogoutUser, posts, comments} = this.props;

    return (
      <SafeAreaView>
        <Text>Is User Logged in: {'' + isLoggedIn} </Text>
        <Button title="Logout Button" onPress={() => LogoutUser()} />
        <View>
            {posts.map((post) => (
              <View>
                <UserPosts
                key={post.id}
                  post={post}
                  navigation={this.props.navigation}
                  comments={comments}
                />
              </View>
            ))}
          </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    posts: state.posts.posts,
    comments: state.posts.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LogoutUser: (userCredentials) => dispatch(Logout(userCredentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
