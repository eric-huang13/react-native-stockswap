//React
import React, {Component} from 'react';

//Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Components
import CompanyInformation from '../components/screens/CompanyInformation';
import Profile from '../components/screens/Profile';
import UserCommentList from '../components/screens/UserCommentList';
import PostScreen from '../components/screens/PostScreen';
import UserPortfolioList from '../components/screens/UserPortfolioList';
import MyProfile from '../components/screens/MyProfile'
import TopUsers from '../components/screens/TopUsers'


const TopUsersStack = createStackNavigator();

export default class TopUsersStackNavigator extends Component {
  render() {
    return (
        <TopUsersStack.Navigator>
        <TopUsersStack.Screen
          name="TopUsers"
          component={TopUsers}
          options={{  
            headerShown:false, 
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
  
        <TopUsersStack.Screen
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
  
        <TopUsersStack.Screen
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
        <TopUsersStack.Screen
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
        <TopUsersStack.Screen
          name="UserPortfolioList"
          component={UserPortfolioList}
          options={{
            title: 'Portfolio',
            headerStyle: {
              backgroundColor: '#313c58',
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
        <TopUsersStack.Screen
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
        <TopUsersStack.Screen
          name="MyProfile"
          component={MyProfile}
          options={({}) => ({
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
                     
          })}
        />
        
        
      </TopUsersStack.Navigator>
    )
  }
}
