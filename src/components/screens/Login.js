import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, SafeAreaView, Text} from 'react-native';
import {Login} from 'actions/user';
import axios from 'axios'

class LoginScreen extends Component {
  testAPI = () => {
    fetch('http://10.0.2.2:9000')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err))
  }

  render() {
    const {isLoggedIn, LoginUser} = this.props;

    return (
      <SafeAreaView>
        <Text>Is User Logged in: {'' + isLoggedIn} </Text>
        <Button title="Login Button" onPress={() => LoginUser()} />
        <Button title="Test API" onPress={this.testAPI} />
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
