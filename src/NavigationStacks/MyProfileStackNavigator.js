//React
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native'


//Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Components
import CompanyInformation from '../components/screens/CompanyInformation';
import Profile from '../components/screens/Profile';
import UserCommentList from '../components/screens/UserCommentList';
import PostScreen from '../components/screens/PostScreen';
import UserPortfolioList from '../components/screens/UserPortfolioList';
import TermsAndConditions from '../components/screens/TermsAndConditions'
import MyProfile from '../components/screens/MyProfile'
import MyProfileSettings from '../components/screens/MyProfileSettings'
import EditProfile from '../components/screens/EditProfile'
import ChangeEmail from '../components/screens/ChangeEmail'
import ChangePassword from '../components/screens/ChangePassword'
import MyProfilePosts from '../components/screens/MyProfilePosts'
import PasswordSuccess from '../components/screens/PasswordSuccess'
import EmailSuccess from '../components/screens/EmailSuccess'
import PrivacyPolicy from '../components/screens/PrivacyPolicy'
import ManagePortfolio from '../components/screens/ManagePortfolio'
import ManagePortfolioBox from '../components/screens/ManagePortfolioBox'
import ManagePortfolioCompany from '../components/screens/ManagePortfolioCompany'
import EditPost from '../components/screens/EditPost'
import CreatePostPreview from '../components/screens/CreatePostPreview'
import MyFollowers from '../components/screens/MyFollowers'
import MyFollowing from '../components/screens/MyFollowing'
import LikedPosts from '../components/screens/LikedPosts'

const MyProfileStack = createStackNavigator();

export default class MyProfileStackNavigator extends Component {
  render() {
    return (
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
          name="ChangePassword"
          component={ChangePassword}
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
          name="PasswordSuccess"
          component={PasswordSuccess}
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
          name="EmailSuccess"
          component={EmailSuccess}
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
          name="TermsAndConditions"
          component={TermsAndConditions}
          options={{
            title: 'Terms and Conditions',
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
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{
            title: 'Privacy Policy',
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
  
        <MyProfileStack.Screen
          name="Comments"
          component={UserCommentList}
          options={{
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
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
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
          name="UserPortfolioList"
          component={UserPortfolioList}
          options={{
            title: 'Manage Portfolio',
            headerStyle: {
              backgroundColor: '#313c58',
            },
            headerTitleStyle:{
              fontFamily:'Montserrat-Bold',
              fontSize:16
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
          name="CompanyInformation"
          component={CompanyInformation}
          options={{
            title: 'Stock details',
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
          name="ManagePortfolio"
          component={ManagePortfolio}
          options={{
            title: 'Manage Portfolio',
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
          name="ManagePortfolioBox"
          component={ManagePortfolioBox}
          options={{
            title: 'Manage Portfolio',
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
          name="ManagePortfolioCompany"
          component={ManagePortfolioCompany}
          options={{
            title: 'Manage Portfolio',
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
        <MyProfileStack.Screen
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
        <MyProfileStack.Screen
          name="MyFollowers"
          component={MyFollowers}
          options={{
            title: 'Followers',
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
          name="MyFollowing"
          component={MyFollowing}
          options={{
            title: 'Following',
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
          name="LikedPosts"
          component={LikedPosts}
          options={{
            title: 'Liked Posts',
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
             
        
      </MyProfileStack.Navigator>
    )
  }
}

const style = StyleSheet.create({
    button:{
      fontSize:14,
      color:'#B8A0FF',
      marginRight:12,
      fontFamily:'Montserrat-SemiBold',
  
    },
  })