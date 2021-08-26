import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PlaidLink, LinkSuccess, LinkExit} from 'react-native-plaid-link-sdk';
import {connect} from 'react-redux';
import { moderateScale } from '../../util/responsiveFont';
import {PlaidToken} from '../../actions/profile';

const PlaidComponent = (props) => {

  useEffect(() => {
    props.PlaidToken();
  }, []);
  console.log(props.linkToken, 'LINKTOKEN');

  return (
    <PlaidLink
      tokenConfig={{
        token: props.linkToken.linkToken,
      }}
      onSuccess={(success: LinkSuccess) => {
        console.log(success, 'HERE');
      }}
      onExit={(exit: LinkExit) => {
        console.log(exit,"Exit");
      }}>
      <Text style={style.detailsButton}>Add Account</Text>
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
    PlaidToken: () => dispatch(PlaidToken()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaidComponent);

const style = StyleSheet.create({
    detailsButton: {
        color: '#B8A0FF',
        fontSize: moderateScale(14),
        fontFamily: 'Montserrat-SemiBold',
        alignSelf: 'flex-end',
        marginRight: 6,
      },
  });
  