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
import SearchTab from './components/screens/SearchTab';
import CompanyInformation from './components/screens/CompanyInformation';
import CompanyCategory from './components/screens/CompanyCategory';
import Profile from './components/screens/Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const SearchStack = createStackNavigator();

class Navigation extends Component {
  createSearchStack = () => (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchTab"
        component={SearchTab}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="CompanyInformation"
        component={CompanyInformation}
        options={{
          title: 'Stock details',
          headerTitleAlign: {
            textAlign: 'center',
          },
        }}
      />
      <SearchStack.Screen
        name="CompanyCategory"
        component={CompanyCategory}
        options={({route}) => ({
          title: route.params.name,
          //Need to figure out way to make header height shown when transparent or add Linearcolors directly
          // headerTransparent: true,
          headerShown: true,

          headerStyle: {
            backgroundColor: '#394463',
          },
          headerTintColor: 'white',
          headerTitleAlign: {
            textAlign: 'center',
          },
        })}
      />
      <SearchStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerTitleAlign: {
            textAlign: 'center',
          },
        }}
      />
    </SearchStack.Navigator>
  );

  render() {
    const {isLoggedIn} = this.props;

    return (
      <NavigationContainer>
        {isLoggedIn ? (
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: '#9082cf',
              inactiveTintColor: 'lightgray',
              // activeBackgroundColor: '#333e5c',
              // inactiveBackgroundColor: '#333e5c',
              style: {
                backgroundColor: '#333e5c',
                paddingBottom: 3,
                borderColor: 'red',
                borderTopColor: 'transparent',
              },
            }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={this.createSearchStack} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
      // </LinearGradient>
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
