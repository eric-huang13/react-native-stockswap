import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import GoogleIcon from '../../icons/GoogleIcon';
import {connect} from 'react-redux';

import {GoogleLogin, GoogleLogout, GoogleIsSignedIn} from 'actions/user';


 function GoogleOauth(props) {

  useEffect(() => {    
    props.GoogleIsSignedIn()
  }, []);

  const signIn = () => {
    props.GoogleLogin()
  }

  const signOut = () => {
    props.GoogleLogout()
  }
    return (
      <View style={styles.main}>
      {
        !props.googleUser.idToken ? (        
          <View style={styles.alternateSignupInner}>
            <View style={styles.signupIcon}>
              <GoogleIcon />
            </View>
            <TouchableOpacity onPress={signIn}>
              <Text style={styles.alternateSignUpButton}>
                SIGN UP WITH GOOGLE
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.alternateSignupInner}>
            <View style={styles.signupIcon}>
              <Image
                style={{width: 23, height: 23}}
                source={{uri: props.googleUser.user.photo}}
              />
            </View>
            <TouchableOpacity onPress={signOut}>
              <Text style={styles.alternateSignUpButton}>LOGOUT OF GOOGLE</Text>
            </TouchableOpacity>
          </View>
        )
  
      }
    </View>           
    )
}
const mapStateToProps = (state) => {
  return {
    googleUser: state.user.googleUser,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GoogleLogin: () => dispatch(GoogleLogin()),
    GoogleLogout: () => dispatch(GoogleLogout()),
    GoogleIsSignedIn: () => dispatch(GoogleIsSignedIn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleOauth);

const styles = StyleSheet.create({
  maidn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alternateSignUpButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  alternateSignupInner: {
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
    backgroundColor: '#2C3957',
    width: 350,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
  },
  signupIcon: {
    padding: 7,
    backgroundColor: '#3A4A6D',
    borderRadius: 7,
    marginVertical: -8,
    marginRight: 63,
    alignSelf: 'center',
  },
});