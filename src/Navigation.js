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
import MarketMovers from './components/screens/MarketMovers';
import CompanyInformation from './components/screens/CompanyInformation';
import CompanyCategory from './components/screens/CompanyCategory'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MarketMoversStack = createStackNavigator();

class Navigation extends Component {
  createMarketMoversStack = () => (
    <MarketMoversStack.Navigator>
      <MarketMoversStack.Screen
        name="MarketMovers"
        component={MarketMovers}
        options={{headerShown: false}}
      />
      <MarketMoversStack.Screen
        name="CompanyInformation"
        component={CompanyInformation}
      />
      <MarketMoversStack.Screen
        name="CompanyCategory"
        component={CompanyCategory}
      />
    </MarketMoversStack.Navigator>
  );

  render() {
    const {isLoggedIn} = this.props;

    return (
      <NavigationContainer>
        {isLoggedIn ? (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen
              name="MarketMovers"
              component={this.createMarketMoversStack}
            />
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
