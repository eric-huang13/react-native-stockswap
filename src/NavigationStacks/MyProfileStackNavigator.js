//React
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

//Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Components
import CompanyInformation from '../components/SearchTabScreens/CompanyInformation';
import Profile from '../components/HomeTabScreens/Profile';
import UserCommentList from '../components/HomeTabScreens/UserCommentList';
import PostScreen from '../components/HomeTabScreens/PostScreen';
import UserPortfolioList from '../components/HomeTabScreens/UserPortfolioList';
import TermsAndConditions from '../components/LoggedOutScreens/TermsAndConditions';
import MyProfile from '../components/MyProfileTabScreens/MyProfile';
import MyProfileSettings from '../components/MyProfileTabScreens/MyProfileSettings';
import EditProfile from '../components/MyProfileTabScreens/EditProfile';
import ChangeEmail from '../components/MyProfileTabScreens/ChangeEmail';
import ChangePassword from '../components/MyProfileTabScreens/ChangePassword';
import MyProfilePosts from '../components/MyProfileTabScreens/MyProfilePosts';
import PasswordSuccess from '../components/MyProfileTabScreens/PasswordSuccess';
import EmailSuccess from '../components/MyProfileTabScreens/EmailSuccess';
import PrivacyPolicy from '../components/MyProfileTabScreens/PrivacyPolicy';
import ManagePortfolio from '../components/MyProfileTabScreens/ManagePortfolio';
import ManagePortfolioBox from '../components/MyProfileTabComponents/ManagePortfolioBox';
import ManagePortfolioCompany from '../components/MyProfileTabScreens/ManagePortfolioCompany';
import EditPost from '../components/MyProfileTabScreens/EditPost';
import CreatePostPreview from '../components/PostTabScreens/CreatePostPreview';
import MyFollowers from '../components/MyProfileTabScreens/MyFollowers';
import MyFollowing from '../components/MyProfileTabScreens/MyFollowing';
import LikedPosts from '../components/MyProfileTabScreens/LikedPosts';
import LoggingOutScreen from '../components/LoggedOutScreens/LoggingOutScreen';
import PlaidComponent from '../components/MyProfileTabScreens/PlaidComponent';
import PortfolioMangement from '../components/MyProfileTabScreens/PortfolioMangement'




//responsive scale
import {moderateScale} from '../util/responsiveFont';

const MyProfileStack = createStackNavigator();

export default class MyProfileStackNavigator extends Component {
  render() {
    return (
      <MyProfileStack.Navigator>
        <MyProfileStack.Screen
          name="MyProfile"
          component={MyProfile}
          options={({navigation}) => ({
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
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('MyProfileSettings')}>
                <Text style={style.button}>Settings</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <MyProfileStack.Screen
          name="LoggingOut"
          component={LoggingOutScreen}
          options={{headerShown: false}}
        />

        <MyProfileStack.Screen
          name="MyProfileSettings"
          component={MyProfileSettings}
          options={({navigation}) => ({
            title: 'Settings',
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
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('EditProfile')}>
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
        <MyProfileStack.Screen
          name="ChangeEmail"
          component={ChangeEmail}
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
        <MyProfileStack.Screen
          name="ChangePassword"
          component={ChangePassword}
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
        <MyProfileStack.Screen
          name="PasswordSuccess"
          component={PasswordSuccess}
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
        <MyProfileStack.Screen
          name="EmailSuccess"
          component={EmailSuccess}
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
        <MyProfileStack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
          options={{
            title: 'Terms and Conditions',
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
        <MyProfileStack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{
            title: 'Privacy Policy',
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
        <MyProfileStack.Screen
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

        <MyProfileStack.Screen
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

        <MyProfileStack.Screen
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
        <MyProfileStack.Screen
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
        <MyProfileStack.Screen
          name="UserPortfolioList"
          component={UserPortfolioList}
          options={{
            title: 'Manage Portfolio',
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
        <MyProfileStack.Screen
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
        <MyProfileStack.Screen
          name="ManagePortfolio"
          component={ManagePortfolio}
          options={{
            title: 'Manage Portfolio',
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
        <MyProfileStack.Screen
          name="ManagePortfolioBox"
          component={ManagePortfolioBox}
          options={{
            title: 'Manage Portfolio',
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
        <MyProfileStack.Screen
          name="ManagePortfolioCompany"
          component={ManagePortfolioCompany}
          options={{
            title: 'Manage Portfolio',
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
        <MyProfileStack.Screen
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
        <MyProfileStack.Screen
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
        <MyProfileStack.Screen
          name="MyFollowers"
          component={MyFollowers}
          options={{
            title: 'Followers',
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
        <MyProfileStack.Screen
          name="MyFollowing"
          component={MyFollowing}
          options={{
            title: 'Following',
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
        <MyProfileStack.Screen
          name="LikedPosts"
          component={LikedPosts}
          options={{
            title: 'Liked Posts',
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
        <MyProfileStack.Screen
          name="PlaidComponent"
          component={PlaidComponent}
          options={{
            title: 'Plaid',
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
             <MyProfileStack.Screen
          name="PortfolioMangement"
          component={PortfolioMangement}
          options={{
            title: 'Manage Accounts',
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
      </MyProfileStack.Navigator>
    );
  }
}

const style = StyleSheet.create({
  button: {
    fontSize: 14,
    color: '#B8A0FF',
    marginRight: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
});
