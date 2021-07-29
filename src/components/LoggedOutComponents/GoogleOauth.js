import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import GoogleIcon from '../../icons/GoogleIcon';
import {moderateScale} from '../../util/responsiveFont';
import {GoogleLogin, GoogleLogout, GoogleIsSignedIn, GoogleSignUp} from '../../actions/user';

export function GoogleOauth(props) {
  console.log(props,'props google')
  useEffect(() => {
    props.GoogleIsSignedIn();
  }, []);

  const signIn = () => {
    props.signup ? 
    props.GoogleSignUp() :
    props.GoogleLogin()
   
  };

  const signOut = () => {
    props.GoogleLogout();
  };
  return (
    <View>
      {props.googleUser.idToken && props.userData.accessToken ? (
       <TouchableOpacity onPress={signOut}>
       <View style={styles.alternateSignupInner}>
         <View style={styles.signupIcon}>
           <Image
             style={{width: 23, height: 23}}
             source={{uri: props.googleUser.user.photo}}
           />
         </View>          
           <Text style={styles.alternateSignUpButton}>LOGOUT OF GOOGLE</Text>          
       </View>
       </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={signIn}>
        <View style={styles.alternateSignupInner}>
          <View style={styles.signupIcon}>
            <GoogleIcon />
          </View>
          {props.signup ? 
          <Text style={styles.alternateSignUpButton}>
              SIGN UP WITH GOOGLE
            </Text>  :
            <Text style={styles.alternateSignUpButton}>
              LOGIN WITH GOOGLE
            </Text> 
}          
                     
        </View>
        </TouchableOpacity>
     
      )}
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    googleUser: state.user.googleUser,
    userData: state.user.userData,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GoogleSignUp: () => dispatch(GoogleSignUp()),
    GoogleLogin: () => dispatch(GoogleLogin()),
    GoogleLogout: () => dispatch(GoogleLogout()),
    GoogleIsSignedIn: () => dispatch(GoogleIsSignedIn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleOauth);

const styles = StyleSheet.create({
  alternateSignUpButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: moderateScale(14),
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
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(4),
    backgroundColor: '#2C3957',
    width: moderateScale(350),
    borderRadius: moderateScale(8),
    marginBottom: moderateScale(10),
    flexDirection: 'row',
  },
  signupIcon: {
    padding: moderateScale(7),
    backgroundColor: '#3A4A6D',
    borderRadius: moderateScale(7),
    marginVertical: moderateScale(-8),
    marginRight: moderateScale(63),
    alignSelf: 'center',
  },
});
