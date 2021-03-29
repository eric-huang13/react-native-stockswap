import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import GoogleIcon from '../../icons/GoogleIcon';

const GoogleLogin = (props) => {

  return (
    <View style={styles.main}>
      {
        !props.user.idToken ? (        
          <View style={styles.alternateSignupInner}>
            <View style={styles.signupIcon}>
              <GoogleIcon />
            </View>
            <TouchableOpacity onPress={props.signIn}>
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
                source={{uri: props.user.user.photo}}
              />
            </View>
            <TouchableOpacity onPress={props.signOut}>
              <Text style={styles.alternateSignUpButton}>LOGOUT OF GOOGLE</Text>
            </TouchableOpacity>
          </View>
        )
  
      }
    </View>
  );
};
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
export default GoogleLogin;
