//React
import React, {Component} from 'react';

//Navigation
import {createStackNavigator} from '@react-navigation/stack';

//Components
import CreatePost from '../components/screens/CreatePost'
import PostType from '../components/screens/PostType'


const CreatePostStack = createStackNavigator();

export default class CreatePostStackNavigator extends Component {
  render() {
    return (
      <CreatePostStack.Navigator>
       <CreatePostStack.Screen
        name="PostType"
        component={PostType}
        options={{
          title: 'Create Post',
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
      <CreatePostStack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          title: 'Create Post',
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

      
    </CreatePostStack.Navigator>
    )
  }
}
