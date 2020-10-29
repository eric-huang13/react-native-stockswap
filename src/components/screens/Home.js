import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, SafeAreaView, Text} from 'react-native';

import {Logout} from '../../actions/user';

class HomeScreen extends Component {
  render() {
    const {isLoggedIn, Logout} = this.props;

    return (
      <SafeAreaView>
        <Text>Is User Logged in: {""+isLoggedIn} </Text>
        <Button title="Logout Button" onPress={() => Logout()} />
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
    Logout: (userCredentials) => dispatch(Logout(userCredentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
