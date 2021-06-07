//React
import React, {Component} from 'react';

//Navigation
import {createStackNavigator} from '@react-navigation/stack';

//Components
import LoginScreen from '../components/LoggedOutScreens/Login';
import SignUp from '../components/LoggedOutScreens/SignUp';
import ProfileInfoForm from '../components/LoggedOutScreens/ProfileInfoForm';
import TermsAndConditions from '../components/LoggedOutScreens/TermsAndConditions';
import SplashScreen from '../components/LoggedOutScreens/SplashScreen';
import ForgotPassword from '../components/LoggedOutScreens/ForgotPassword';
import PrivacyPolicy from '../components/MyProfileTabScreens/PrivacyPolicy';

const LoggedOutStack = createStackNavigator();

export default class LoggedOutStackNavigator extends Component {
  render() {
    return (
      <LoggedOutStack.Navigator>
        <LoggedOutStack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <LoggedOutStack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <LoggedOutStack.Screen
          name="ProfileInfoForm"
          component={ProfileInfoForm}
          options={{headerShown: false}}
        />
        <LoggedOutStack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <LoggedOutStack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
          options={{
            title: 'StockSwap',
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          }}
        />
        <LoggedOutStack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{headerShown: false}}
        />
        <LoggedOutStack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
      </LoggedOutStack.Navigator>
    );
  }
}
