import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import axios from 'axios';
import {connect} from 'react-redux';
import {Register} from '../../actions/user'



class SignUp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          email: '',
          password: '',
        };
      }
    render() {
        const {RegisterUser} = this.props;

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
   
          const handleSubmit = () => {        
            RegisterUser(this.state);        
      }
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


const mapStateToProps = (state) => {
    return {
        user: state.user,
        loading: state.user.loading,
        error: state.user.error,
    };
  };

  
const mapDispatchToProps = (dispatch) => {
    return {
      RegisterUser: (input) => dispatch(Register(input)),
    };
  };
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp);