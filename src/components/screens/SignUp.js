import React, { Component } from 'react'
import { Text, View, TextInput, } from 'react-native'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
        };
      }
    render() {
        return (
            <View>
        <Text>Login</Text>
        <Text>{this.state.username}</Text>
        <Text>{this.state.password}</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
           placeholder='Email'
           style={{borderWidth:1}}
          
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder='Password'
          style={{borderWidth:1}}
      
        />
        
      
            </View>
        )
    }
}
