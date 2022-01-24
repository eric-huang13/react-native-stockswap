//React
import React, {PureComponent} from 'react';

//Navigation
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import LoginScreen from '../screens/login';
import SignUp from '../components/LoggedOutScreens/SignUp';
import TermsAndConditions from '../components/LoggedOutScreens/TermsAndConditions';
import SplashScreen from '../components/LoggedOutScreens/SplashScreen';
import ForgotPassword from '../components/LoggedOutScreens/ForgotPassword';
import PrivacyPolicy from '../components/MyProfileTabScreens/PrivacyPolicy';
import ConfirmCodeScreen from '../components/LoggedOutScreens/ConfirmCodeScreen';
import NewPassword from '../components/LoggedOutScreens/NewPassword';

const LoggedOutStack = createStackNavigator();

const LoggedOutStackNavigator = () => {
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
      <LoggedOutStack.Screen
        name="ConfirmCodeScreen"
        component={ConfirmCodeScreen}
        options={{headerShown: false, animationEnabled: false}}
      />
      <LoggedOutStack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{headerShown: false, animationEnabled: false}}
      />
    </LoggedOutStack.Navigator>
  );
};

export default LoggedOutStackNavigator;
