// React Imports
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationRef} from '../RootNavigation'

// Components


//icons
import SearchIconInactive from './icons/SearchIconInactive'
import SearchIconActive from './icons/SearchIconActive'
import HomeTabInactive from './icons/HomeTabInactive'
import HomeTabActive from './icons/HomeTabActive'
import LeaderboardInactive from './icons/LeaderboardInactive'
import LeaderboardActive from './icons/LeaderboardActive'
import ProfileInactive from './icons/ProfileInactive'
import ProfileActive from './icons/ProfileActive'
import CreatePostInactive from './icons/CreatePostInactive'
import CreatePostActive from './icons/CreatePostActive'

//Stack Navigators
import LoggedOutStackNavigator from './NavigationStacks/LoggedOutStackNavigator'
import PostStackNavigator from './NavigationStacks/PostStackNavigator'
import TopUsersStackNavigator from './NavigationStacks/TopUsersStackNavigator'
import MyProfileStackNavigator from './NavigationStacks/MyProfileStackNavigator'
import HomeStackNavigator from './NavigationStacks/HomeStackNavigator'
import SearchStackNavigator from './NavigationStacks/SearchStackNavigator'

//toast
import Toast from 'react-native-toast-message';


const Tab = createBottomTabNavigator();

class Navigation extends Component {

  render() {
    const {isLoggedIn} = this.props;

    return (
      <NavigationContainer ref={navigationRef}>

        {isLoggedIn ? (
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: '#9082cf',
              inactiveTintColor: 'lightgray',
              showLabel:false,
              style: {
                backgroundColor: '#333e5c',
                paddingBottom: 3,
                borderColor: 'red',
                borderTopColor: 'transparent',
              },
            }}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => {
                
    
                if (route.name === 'Search') {
                  return focused ? <SearchIconActive/> : <SearchIconInactive/>
                } 
                if (route.name === 'Home') {
                  return focused ? <HomeTabActive/> : <HomeTabInactive/>
                }  
                if (route.name === 'PostScreen') {
                  return focused ? <CreatePostActive/> : <CreatePostInactive/>
                }
                if (route.name === 'UserList') {
                  return focused ? <LeaderboardActive/> : <LeaderboardInactive/>
                }
                if (route.name === 'MyProfile') {
                  return focused ? <ProfileActive/> : <ProfileInactive/>
                }     
               
              },
            })}
            >
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Search" component={SearchStackNavigator}/>
            <Tab.Screen name="PostScreen" component={PostStackNavigator}  />
            <Tab.Screen name="UserList" component={TopUsersStackNavigator}  />
            <Tab.Screen name="MyProfile" component={MyProfileStackNavigator}  />

          </Tab.Navigator>
        ) : (
          <LoggedOutStackNavigator/>
        )}
          <Toast ref={(ref) => Toast.setRef(ref)} />

      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

