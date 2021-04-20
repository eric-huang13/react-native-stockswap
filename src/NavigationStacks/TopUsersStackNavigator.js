//React
import React, {Component} from 'react';

//Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Components
import CompanyInformation from '../components/SearchTabScreens/CompanyInformation';
import Profile from '../components/HomeTabScreens/Profile';
import UserCommentList from '../components/HomeTabScreens/UserCommentList';
import PostScreen from '../components/HomeTabScreens/PostScreen';
import UserPortfolioList from '../components/HomeTabScreens/UserPortfolioList';
import MyProfile from '../components/MyProfileTabScreens/MyProfile';
import TopUsers from '../components/TopUsersTabScreens/TopUsers';

//responsive scale
import { moderateScale } from '../util/responsiveFont';

const TopUsersStack = createStackNavigator();

export default class TopUsersStackNavigator extends Component {
  render() {
    return (
      <TopUsersStack.Navigator>
        <TopUsersStack.Screen
          name="TopUsers"
          component={TopUsers}
          options={{
            headerShown: false,
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

        <TopUsersStack.Screen
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

        <TopUsersStack.Screen
          name="Comments"
          component={UserCommentList}
          options={{
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
        <TopUsersStack.Screen
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
        <TopUsersStack.Screen
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
        <TopUsersStack.Screen
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
        <TopUsersStack.Screen
          name="MyProfile"
          component={MyProfile}
          options={({}) => ({
            title: 'My Profile',
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
      </TopUsersStack.Navigator>
    );
  }
}
