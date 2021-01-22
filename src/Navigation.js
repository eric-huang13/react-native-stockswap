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


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const SearchStack = createStackNavigator();
const HomeStack = createStackNavigator();
const MyProfileStack = createStackNavigator();


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
      <HomeStack.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: 'StockSwap',
          headerStyle: {
            backgroundColor: '#313c58',
          },
          headerTintColor: 'white',
          headerTitleAlign: {
            textAlign: 'center',
          },
        }}
      />
      <HomeStack.Screen
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

      <HomeStack.Screen
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
      <HomeStack.Screen
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
      <HomeStack.Screen
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
      <HomeStack.Screen
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
      <HomeStack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          title:'My Profile',
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

  createMyProfileStack = () => (
    <MyProfileStack.Navigator>
      <MyProfileStack.Screen
        name="MyProfile"
        component={MyProfile}
        options={({ navigation}) => ({
          title:'My Profile',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#394463',
          },
          headerTitleStyle:{
            fontFamily:'Montserrat-Bold',
            fontSize:16

          },
          headerTintColor: 'white',
          headerTitleAlign: {
            textAlign: 'center',
          },
          headerRight: () => (
            <TouchableOpacity onPress={() =>navigation.navigate('MyProfileSettings')}>
                  <Text style={style.button}>Settings</Text>
                </TouchableOpacity>
          ),          
        })}
      />

       <MyProfileStack.Screen
        name="MyProfileSettings"
        component={MyProfileSettings}
        options={({ navigation}) => ({
          title: 'Settings',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#394463',
          },
          headerTitleStyle:{
            fontFamily:'Montserrat-Bold',
            fontSize:16
          },
          headerTintColor: 'white',
          headerTitleAlign: {
            textAlign: 'center',
          },
          headerRight: () => (
            <TouchableOpacity onPress={() =>navigation.navigate('EditProfile')}>
                  <Text style={style.button}>Edit Profile</Text>
                </TouchableOpacity>
          ),          
        })}
      />
      <MyProfileStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{   
          title: 'Settings',       
          headerStyle: {
            backgroundColor: '#394463',
          },
          headerTitleStyle:{
            fontFamily:'Montserrat-Bold',
            fontSize:16
          },
          headerTintColor: 'white',
          headerTitleAlign: {
            textAlign: 'center',
          },
        }}
      />
      <MyProfileStack.Screen
        name="ChangeEmail"
        component={ChangeEmail}
        options={{
          headerShown: false,
              headerStyle: {
            backgroundColor: '#394463',
          },
          headerTitleStyle:{
            fontFamily:'Montserrat-Bold',
            fontSize:16
          },
          headerTintColor: 'white',
          headerTitleAlign: {
            textAlign: 'center',
          },
        }}
      />
      
      <MyProfileStack.Screen
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

      <MyProfileStack.Screen
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
      <MyProfileStack.Screen
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
      <MyProfileStack.Screen
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
      <MyProfileStack.Screen
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
      
      
    </MyProfileStack.Navigator>
  );

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
            <Tab.Screen name="Home" component={this.createHomeStack} />
            <Tab.Screen name="Search" component={this.createSearchStack}/>
            <Tab.Screen name="PostScreen" component={ProfileInfoForm}  />
            <Tab.Screen name="UserList" component={LoginScreen}  />
            <Tab.Screen name="MyProfile" component={this.createMyProfileStack}  />

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