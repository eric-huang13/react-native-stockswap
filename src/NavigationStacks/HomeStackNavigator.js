//React
import React, {Component} from 'react';

//Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Components
import HomeScreen from '../components/HomeTabScreens/Home';
import CompanyInformation from '../components/SearchTabScreens/CompanyInformation';
import Profile from '../components/HomeTabScreens/Profile';
import UserCommentList from '../components/HomeTabScreens/UserCommentList';
import PostScreen from '../components/HomeTabScreens/PostScreen';
import UserPortfolioList from '../components/HomeTabScreens/UserPortfolioList';
import MyProfile from '../components/MyProfileTabScreens/MyProfile';
import MyProfilePosts from '../components/MyProfileTabScreens/MyProfilePosts';
import Followers from '../components/HomeTabScreens/Followers';
import Following from '../components/HomeTabScreens/Following';
import EditPost from '../components/MyProfileTabScreens/EditPost';
import CreatePostPreview from '../components/PostTabScreens/CreatePostPreview';

//responsive scale
import {moderateScale, verticalScale, scale} from '../util/responsiveFont'

const HomeStack = createStackNavigator();

export default class HomeStackNavigator extends Component {
  render() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{
            title: 'StockSwap',
            headerStyle: {
              backgroundColor: '#313c58',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
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
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          })}
        />

        <HomeStack.Screen
          name="UserCommentList"
          component={UserCommentList}
          options={{
            title: 'Comments',
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
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
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
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
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
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
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
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
            title: 'My Profile',
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          }}
        />
        <HomeStack.Screen
          name="MyProfilePosts"
          component={MyProfilePosts}
          options={{
            title: 'All my posts',
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          }}
        />
        <HomeStack.Screen
          name="Followers"
          component={Followers}
          options={({route}) => ({
            title: route.params.name,
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          })}
        />
        <HomeStack.Screen
          name="Following"
          component={Following}
          options={({route}) => ({
            title: route.params.name,
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          })}
        />
        <HomeStack.Screen
          name="EditPost"
          component={EditPost}
          options={{
            title: 'Edit Post',
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          }}
        />
        <HomeStack.Screen
          name="CreatePostPreview"
          component={CreatePostPreview}
          options={{
            title: 'Post preview',
            headerStyle: {
              backgroundColor: '#394463',
            },
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold',
              fontSize: moderateScale(16),
            },
            headerTintColor: 'white',
            headerTitleAlign: {
              textAlign: 'center',
            },
          }}
        />
      </HomeStack.Navigator>
    );
  }
}
