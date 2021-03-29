import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import GoogleIcon from '../../icons/GoogleIcon';
import GoogleLogin from './GoogleLogin'

export default function GoogleOauth() {
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
  // s
    return (
            <GoogleLogin signIn={signIn} signOut={signOut} user={user}/>
           
    )
}
 