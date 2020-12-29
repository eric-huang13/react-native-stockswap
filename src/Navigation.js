// React Imports
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

// Redux
import {connect} from 'react-redux';

// Navigation
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
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
    <SearchStack.Navigator
   >
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
    // const mainTheme = {
    //   ...DefaultTheme,
    //   colors: {
    //     ...DefaultTheme,
    //     background: 'transparent',
    //   },
    // };
    return (
//       <LinearGradient
//       start={{ x:.1, y: .1 }}
//        end={{x: 1, y: 1}}
//       colors={['#1d2842', '#1f2a45', '#222d47', '#242f4a', '#27324d', '#293450', '#2c3752', '#2e3955', '#313c58', '#333e5c', '#36415f', '#394463']}	style={{ flex: 1 }}
// >
      <NavigationContainer>
        {isLoggedIn ? (
          <Tab.Navigator
          
          >
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
