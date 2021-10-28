//React
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

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
import HeaderStockSwap from '../icons/HeaderStockSwap';
import Logo from '../icons/Logo.png';
import TradePostScreen from '../components/HomeTabScreens/TradePostScreen';

//responsive scale
import {moderateScale} from '../util/responsiveFont';

const HomeStack = createStackNavigator();

export default class HomeStackNavigator extends Component {
  render() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{
            title:  
            <View style={style.stockHeader}>
              <Text style={style.headerText}>StockSwap</Text>
             <Image
          style={style.logo}
          source={require('../icons/Logo.png')}
        /></View>
          ,
            headerStyle: {
              backgroundColor: '#2D384E',
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
            title:  
            <View style={style.stockHeader}>
              <Text style={style.headerText}>StockSwap</Text>
             <Image
          style={style.logo}
          source={require('../icons/Logo.png')}
        /></View>,
            headerShown: true,
            headerBackTitle:'Feed',
            headerStyle: {
              backgroundColor: '#2A334B',
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
          name="TradePostScreen"
          component={TradePostScreen}
          options={({route}) => ({
            title:  
            <View style={style.stockHeader}>
              <Text style={style.headerText}>StockSwap</Text>
             <Image
          style={style.logo}
          source={require('../icons/Logo.png')}
        /></View>,
            headerShown: true,
            headerBackTitle:'Feed',
            headerStyle: {
              backgroundColor: '#2A334B',
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
              backgroundColor: '#2A334B',
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
              backgroundColor: '#2A334B',
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
              backgroundColor: '#2A334B',
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
              backgroundColor: '#2A334B',
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
              backgroundColor: '#2A334B',
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
              backgroundColor: '#2A334B',
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
              backgroundColor: '#2A334B',
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
              backgroundColor: '#2A334B',
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
              backgroundColor: '#2A334B',
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

const style = StyleSheet.create({
  stockHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  logo: {    
    height:moderateScale(26),
    width:moderateScale(26),
    marginTop:moderateScale(3),
    marginLeft:moderateScale(2),
  },
  headerText:{
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(16),
    color:'white',
    textAlign:'center',
    alignSelf:'center'
  },
});
