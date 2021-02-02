// React Imports
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

// Redux
import {connect} from 'react-redux';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from '../RootNavigation'
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
import SignUp from './components/screens/SignUp'
import ProfileInfoForm from './components/screens/ProfileInfoForm'
import TermsAndConditions from './components/screens/TermsAndConditions'
import SplashScreen from './components/screens/SplashScreen'
import MyProfile from './components/screens/MyProfile'
import MyProfileSettings from './components/screens/MyProfileSettings'
import EditProfile from './components/screens/EditProfile'
import ChangeEmail from './components/screens/ChangeEmail'
import ChangePassword from './components/screens/ChangePassword'
import MyProfilePosts from './components/screens/MyProfilePosts'
import TopUsers from './components/screens/TopUsers'
import PasswordSuccess from './components/screens/PasswordSuccess'
import EmailSuccess from './components/screens/EmailSuccess'
import PrivacyPolicy from './components/screens/PrivacyPolicy'
import ManagePortfolio from './components/screens/ManagePortfolio'
import ManagePortfolioBox from './components/screens/ManagePortfolioBox'
import ManagePortfolioCompany from './components/screens/ManagePortfolioCompany'
// import CreatePost from './components/screens/CreatePost'
// import PostType from './components/screens/PostType'




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
import PostStackNavigator from './NavigationStacks/PostStackNavigator'
import TopUsersStackNavigator from './NavigationStacks/TopUsersStackNavigator'
import MyProfileStackNavigator from './NavigationStacks/MyProfileStackNavigator'
import HomeStackNavigator from './NavigationStacks/HomeStackNavigator'
import SearchStackNavigator from './NavigationStacks/SearchStackNavigator'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


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
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}
 />
 <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}
 />
 <Stack.Screen name="ProfileInfoForm" component={ProfileInfoForm} options={{headerShown: false}}
 />
  <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} options={{
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

const style = StyleSheet.create({
  button:{
    fontSize:14,
    color:'#B8A0FF',
    marginRight:12,
    fontFamily:'Montserrat-SemiBold',

  },
})