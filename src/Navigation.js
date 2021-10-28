// React Imports
import React, {Component, useEffect} from 'react';

// Redux
import {connect} from 'react-redux';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationRef} from '../RootNavigation';
import {createStackNavigator} from '@react-navigation/stack';
// Components

//icons
import SearchIconInactive from './icons/SearchIconInactive';
import SearchIconActive from './icons/SearchIconActive';
import HomeTabInactive from './icons/HomeTabInactive';
import HomeTabActive from './icons/HomeTabActive';
import LeaderboardInactive from './icons/LeaderboardInactive';
import LeaderboardActive from './icons/LeaderboardActive';
import ProfileInactive from './icons/ProfileInactive';
import ProfileActive from './icons/ProfileActive';
import CreatePostInactive from './icons/CreatePostInactive';
import CreatePostActive from './icons/CreatePostActive';

//Stack Navigators
import LoggedOutStackNavigator from './NavigationStacks/LoggedOutStackNavigator';
import PostStackNavigator from './NavigationStacks/PostStackNavigator';
import TopUsersStackNavigator from './NavigationStacks/TopUsersStackNavigator';
import MyProfileStackNavigator from './NavigationStacks/MyProfileStackNavigator';
import HomeStackNavigator from './NavigationStacks/HomeStackNavigator';
import SearchStackNavigator from './NavigationStacks/SearchStackNavigator';

import ProfileInfoForm from './components/LoggedOutScreens/ProfileInfoForm';
import ConnectAccount from './components/LoggedOutScreens/ConnectAccount';
import PlaidComponent from './components/MyProfileTabScreens/PlaidComponent';
import EnableAccounts from './components/MyProfileTabScreens/EnableAccounts';

//toast
import MyToast from './components/toast';

//splashscreen
import RNBootSplash from 'react-native-bootsplash';

const Tab = createBottomTabNavigator();

const FirstTimeStack = createStackNavigator();

const FirstTimeStackNavigator = () => {
  return (
    <FirstTimeStack.Navigator>
      <FirstTimeStack.Screen
        name="ProfileInfoForm"
        component={ProfileInfoForm}
        options={{headerShown: false}}
      />
      <FirstTimeStack.Screen
        name="ConnectAccount"
        component={ConnectAccount}
        options={{headerShown: false, animationEnabled: false}}
      />
      <FirstTimeStack.Screen
        name="PlaidComponent"
        component={PlaidComponent}
        options={{headerShown: false, animationEnabled: false}}
      />
      <FirstTimeStack.Screen
        name="EnableAccounts"
        component={EnableAccounts}
        options={{
          title: 'Show/Hide Accounts',
          headerStyle: {
            backgroundColor: '#394463',
          },
          headerTintColor: 'white',
          headerTitleAlign: {
            textAlign: 'center',
          },
        }}
      />
    </FirstTimeStack.Navigator>
  );
};
const AuthenticatedStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBarOptions={{
        activeTintColor: '#9082cf',
        inactiveTintColor: 'lightgray',
        showLabel: false,

        style: {
          backgroundColor: '#333e5c',
          paddingBottom: 3,
          borderColor: 'red',
          borderTopColor: 'transparent',
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Search') {
            return focused ? <SearchIconActive /> : <SearchIconInactive />;
          }
          if (route.name === 'Home') {
            return focused ? <HomeTabActive /> : <HomeTabInactive />;
          }
          if (route.name === 'PostScreen') {
            return focused ? <CreatePostActive /> : <CreatePostInactive />;
          }
          if (route.name === 'UserList') {
            return focused ? <LeaderboardActive /> : <LeaderboardInactive />;
          }
          if (route.name === 'MyProfile') {
            return focused ? <ProfileActive /> : <ProfileInactive />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="PostScreen" component={PostStackNavigator} />
      <Tab.Screen name="UserList" component={TopUsersStackNavigator} />
      <Tab.Screen name="MyProfile" component={MyProfileStackNavigator} />
    </Tab.Navigator>
  );
};
const Navigation = ({isLoggedIn, firstTimeFlow}) => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      {isLoggedIn ? (
        firstTimeFlow ? (
          <FirstTimeStackNavigator />
        ) : (
          <AuthenticatedStack />
        )
      ) : (
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            style: {
              backgroundColor: '#333e5c',
              borderTopColor: 'transparent',
              height: 0,
            },
          }}>
          <Tab.Screen name="LoggedOut" component={LoggedOutStackNavigator} />
        </Tab.Navigator>
      )}
      <MyToast />
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    firstTimeFlow: state.user.firstTimeFlow,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
