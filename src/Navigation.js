// React Imports
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

// Components
import LoginScreen from 'components/screens/Login';
import HomeScreen from 'components/screens/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class Navigation extends Component {
  render() {
    const {isLoggedIn} = this.props;

    return (
      <NavigationContainer>
        {isLoggedIn ? (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
