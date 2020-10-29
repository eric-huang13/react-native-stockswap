import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, SafeAreaView, Text } from 'react-native';
import { Login } from '../../actions/user';

class LoginScreen extends Component {

  render() {
    const {isLoggedIn, Login } = this.props;
    
    return (
      <SafeAreaView>
        <Text>Is User Logged in: {"" + isLoggedIn} </Text>
        <Button
          title="Login Button"
          onPress={() => Login()}
        />
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
    Login: () => dispatch(Login()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
