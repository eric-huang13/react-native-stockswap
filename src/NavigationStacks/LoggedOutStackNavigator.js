//React
import React, {Component} from 'react';

//Navigation
import {createStackNavigator} from '@react-navigation/stack';

//Components
import LoginScreen from '../components/screens/Login';
import SignUp from '../components/screens/SignUp';
import ProfileInfoForm from '../components/screens/ProfileInfoForm';
import TermsAndConditions from '../components/screens/TermsAndConditions';
import GoogleLogin from '../components/screens/GoogleLogin';
import SplashScreen from '../components/screens/SplashScreen';

const LoggedOutStack = createStackNavigator();

export default class LoggedOutStackNavigator extends Component {
  render() {
    return (
      <LoggedOutStack.Navigator>
        <LoggedOutStack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
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
          name="GoogleLogin"
          component={GoogleLogin}
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
      </LoggedOutStack.Navigator>
    );
  }
}
