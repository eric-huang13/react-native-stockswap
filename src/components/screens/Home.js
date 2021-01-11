import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, SafeAreaView, Text} from 'react-native';

import {Logout} from 'actions/user';
import SignUp from './SignUp'

class HomeScreen extends Component {
  render() {
    const {isLoggedIn, LogoutUser} = this.props;

    return (
      <SafeAreaView>
        <Text>Is User Logged in: {'' + isLoggedIn} </Text>
        <Button title="Logout Button" onPress={() => LogoutUser()} />

        <SignUp/>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LogoutUser: (userCredentials) => dispatch(Logout(userCredentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
