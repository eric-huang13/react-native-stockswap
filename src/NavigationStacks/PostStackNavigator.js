//React
import React, {Component} from 'react';

//Navigation
import {createStackNavigator} from '@react-navigation/stack';

//Components
import CreatePost from '../components/PostTabScreens/CreatePost';
import PostType from '../components/PostTabScreens/PostType';
import CreatePostPreview from '../components/PostTabScreens/CreatePostPreview';
import CreateTrade from '../components/PostTabScreens/CreateTrade';
import SelectTrades from '../components/PostTabScreens/SelectTrades';
import CreatePublicTrade from '../components/PostTabScreens/CreatePublicTrade';
import CreatePublicTradePreview from '../components/PostTabScreens/CreatePublicTradePreview';
//responsive scale
import {moderateScale} from '../util/responsiveFont';

const PostStack = createStackNavigator();

export default class PostStackNavigator extends Component {
  render() {
    return (
      <PostStack.Navigator>
        <PostStack.Screen
          name="PostType"
          component={PostType}
          options={{
            title: 'Create Post',
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
        <PostStack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{
            title: 'Create Post',
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
        <PostStack.Screen
          name="CreatePostPreview"
          component={CreatePostPreview}
          options={{
            title: 'Post Preview',
            headerShown: false,
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
        <PostStack.Screen
          name="CreatePublicTradePreview"
          component={CreatePublicTradePreview}
          options={{
            title: 'Post Preview',
            headerShown: false,
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
        <PostStack.Screen
          name="CreateTrade"
          component={CreateTrade}
          options={{
            title: 'Create Post',
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
         <PostStack.Screen
          name="SelectTrades"
          component={SelectTrades}
          options={{
            title: 'Trades',
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
         <PostStack.Screen
          name="CreatePublicTrade"
          component={CreatePublicTrade}
          options={{
            title: 'Create Post',
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
      </PostStack.Navigator>
    );
  }
}
