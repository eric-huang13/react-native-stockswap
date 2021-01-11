import React, { Component } from 'react'
import axios from 'axios';

import { Text, View, TextInput, Button } from 'react-native'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          email: '',
          password: '',
        };
      }
    render() {

        const handleEmailChange = (email) => {
            this.setState({
              email: email,
            });
          };
        const handlePasswordChange = (password) => {
            this.setState({
               password: password,
            });
          };
        // console.log(this.state,'state in login')
        const handleSubmit = () => {
            axios
              .post("https://jiujitsux.herokuapp.com/api/users/register", this.state)
              .then((response) => {
                console.log(response);
              })
              .catch((err) => console.log("register error"));
          };
        return (
            <View>
        <Text>Login</Text>
        <Text>{this.state.email}</Text>
        <Text>{this.state.password}</Text>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => handleEmailChange(email)}
          placeholder='Email'
          style={{borderWidth:1}}
          
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => handlePasswordChange(password)}
          placeholder='Password'
          secureTextEntry
          style={{borderWidth:1}}
      
        />
        <View>
              <Button title="Submit" onPress={handleSubmit}></Button> 

      </View>
            </View>
        )
    }
}
