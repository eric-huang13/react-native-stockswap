import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, SafeAreaView, Text} from 'react-native';
import {Login} from 'actions/user';

class LoginScreen extends Component {
  render() {
    const {isLoggedIn, LoginUser} = this.props;

    return (
      <SafeAreaView>
        <Text>Is User Logged in: {'' + isLoggedIn} </Text>
        <Button title="Login Button" onPress={() => LoginUser()} />
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
    LoginUser: () => dispatch(Login()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
