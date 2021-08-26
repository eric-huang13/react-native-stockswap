import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {PlaidLink, LinkSuccess, LinkExit} from 'react-native-plaid-link-sdk';
import {connect} from 'react-redux';
import {PlaidToken} from '../../actions/profile';

const PlaidComponent = (props) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    //redux get token
    // props.PlaidToken();
    // setToken(linkToken);
  }, []);

  return (
    <PlaidLink
      tokenConfig={{
        token: token,
      }}
      onSuccess={() => {
        console.log(success);
      }}
      onExit={() => {
        console.log(exit);
      }}>
      <Text>Add Account</Text>
    </PlaidLink>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    linkToken: state.user.linkToken,
    loading: state.user.loading,
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    PlaidToken: (input) => dispatch(PlaidToken(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaidComponent);
