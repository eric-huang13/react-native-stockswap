import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import Toast from 'react-native-toast-message';
import GoogleIcon from '../../icons/GoogleIcon';

const GoogleLogin = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '534509051413-6a8ceait2pji394mgui3svtrnp7bl4hp.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER

      //need to figure out way for this screen to show
      // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`.

      iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
    isSignedIn();
  }, []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, 'info signin');
      setUser(userInfo);
      //send to backend
      // RegisterUser({token:userInfo.idToken, email:userInfo.user.email});
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
      }
    }
  };
  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
  };

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log('User has not signed in yet');
      } else {
        console.log("Something went wrong. Unable to get user's info");
      }
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser({}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  // signOut()

  const toastConfig = {
    success: ({text1, ...rest}) => (
      <BaseToast
        {...rest}
        style={{borderLeftColor: 'pink'}}
        contentContainerStyle={{paddingHorizontal: 15}}
        text1Style={{
          fontSize: 15,
          fontWeight: 'semibold',
        }}
        text1={text1}
        text2={null}
      />
    ),
  };
  return (
    <View style={styles.main}>
      {
        !user.idToken ? (
          // <GoogleSigninButton
          //   style={{ width: 192, height: 48 }}
          //   size={GoogleSigninButton.Size.Wide}
          //   color={GoogleSigninButton.Color.Dark}
          //   onPress={signIn}
          // />
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
                source={{uri: user.user.photo}}
              />
            </View>
            <TouchableOpacity onPress={signOut}>
              <Text style={styles.alternateSignUpButton}>LOGOUT OF GOOGLE</Text>
            </TouchableOpacity>
          </View>
        )
        // <View>
        //   <View>
        //     <Text>{user.user.name}</Text>
        //     <Text>{user.user.email}</Text>
        //     <Image
        //   style={{ width: 100, height: 100 }}
        //   source={{uri: user.user.photo}}
        // />

        //   </View>
        // <TouchableOpacity onPress={signOut}>
        //   <Text>Logout</Text>
        // </TouchableOpacity>
        // </View>
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
