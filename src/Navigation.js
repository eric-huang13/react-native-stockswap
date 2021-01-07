// React Imports
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';

// Navigation
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

// Components
import LoginScreen from 'components/screens/Login';
import HomeScreen from 'components/screens/Home';
import SearchTab from './components/screens/SearchTab';
import CompanyInformation from './components/screens/CompanyInformation';
import CompanyCategory from './components/screens/CompanyCategory';
import Profile from './components/screens/Profile';
import UserCommentList from './components/screens/UserCommentList';
import PostScreen from './components/screens/PostScreen';
import UserPortfolioList from './components/screens/UserPortfolioList';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const SearchStack = createStackNavigator();
const HomeStack = createStackNavigator();


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
          headerStyle: {
            backgroundColor: '#394463',
          },
          headerTintColor: 'white',
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
          headerStyle: {
            backgroundColor: '#394463',
          },
          headerTintColor: 'white',
          headerTitleAlign: {
            textAlign: 'center',
          },
        }}
      />
      <SearchStack.Screen
        name="PostScreen"
        component={PostScreen}
        options={({route}) => ({
          title: route.params.name,

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
        name="Comments"
        component={UserCommentList}
        options={{
          headerStyle: {
            backgroundColor: '#394463',
          },
          headerTintColor: 'white',
          headerTitleAlign: {
            textAlign: 'center',
          },
        }}
      />
      <SearchStack.Screen
        name="UserPortfolioList"
        component={UserPortfolioList}
        options={{
          title: 'Portfolio',
          headerStyle: {
            backgroundColor: '#313c58',
          },
          headerTintColor: 'white',
          headerTitleAlign: {
            textAlign: 'center',
          },
        }}
      />
    </SearchStack.Navigator>
  );


  createHomeStack = () => (
    <HomeStack.Navigator>
      {/* <HomeStack.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{headerShown: false}}
      /> */}
      <HomeStack.Screen
        name="HomeTab"
        component={HomeScreen}
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
     <SearchStack.Screen
        name="PostScreen"
        component={PostScreen}
        options={({route}) => ({
          title: route.params.name,

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
        name="Comments"
        component={UserCommentList}
        options={{
          headerStyle: {
            backgroundColor: '#394463',
          },
          headerTintColor: 'white',
          headerTitleAlign: {
            textAlign: 'center',
          },
        }}
      />
    </HomeStack.Navigator>
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
            <Tab.Screen name="Home" component={this.createHomeStack} />
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
