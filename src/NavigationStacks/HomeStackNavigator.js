//React
import React, {Component} from 'react';

//Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Components
import HomeScreen from '../components/screens/Home';
import CompanyInformation from '../components/screens/CompanyInformation';
import Profile from '../components/screens/Profile';
import UserCommentList from '../components/screens/UserCommentList';
import PostScreen from '../components/screens/PostScreen';
import UserPortfolioList from '../components/screens/UserPortfolioList';
import MyProfile from '../components/screens/MyProfile'
import MyProfilePosts from '../components/screens/MyProfilePosts'
import Followers from '../components/screens/Followers'
import Following from '../components/screens/Following'
import EditPost from'../components/screens/EditPost'
import CreatePostPreview from'../components/screens/CreatePostPreview'






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
          name="UserCommentList"
          component={UserCommentList}
          options={{
            title:'Comments',
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
        <HomeStack.Screen
          name="MyProfilePosts"
          component={MyProfilePosts}
          options={{
            title: 'All my posts',
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
        <HomeStack.Screen
          name="Followers"
          component={Followers}
          options={({route}) => ({
            title: route.params.name,
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
            headerTitleStyle:{
              fontFamily:'Montserrat-Bold',
              fontSize:16
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
        <HomeStack.Screen
          name="CreatePostPreview"
          component={CreatePostPreview}
          options={{
            title: 'Post preview',
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
      
      </HomeStack.Navigator>
    )
  }
}
