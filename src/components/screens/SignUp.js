import React, { Component } from "react";
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Register } from "../../actions/user";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    const { RegisterUser } = this.props;

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
    };
    return (
        <View style={style.mainContainer}>
      <View style={style.container}>
        <Text style={style.mainHeader}>Sign Up</Text>
       
        <View>
        <Text style={style.inputHeader}>Email</Text>

        <TextInput
          value={this.state.email}
          onChangeText={(email) => handleEmailChange(email)}
          placeholder="Enter your email"
          placeholderTextColor="#9ea6b5"
          style={style.inputStyle}
        /></View>
        <View>
            <Text style={style.inputHeader}>Password</Text>
        <TextInput
          value={this.state.password}
          onChangeText={(password) => handlePasswordChange(password)}
          placeholder="Enter your password"
          placeholderTextColor="#9ea6b5"
          secureTextEntry
          style={style.inputStyle}
        />
        </View>
        <View>
            <Text style={style.inputHeader}>Repeat password</Text>
        <TextInput
          value={this.state.password}
          onChangeText={(password) => handlePasswordChange(password)}
          placeholder="Enter your password"
          placeholderTextColor="#9ea6b5"
          secureTextEntry
          style={style.inputStyle}
        />
        </View>
        <View>
        <TouchableOpacity onPress={handleSubmit}>
                    <Text style={style.button}>Sign Up</Text>
                  </TouchableOpacity>
        </View>
      </View>
      </View>
    );
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

const style = StyleSheet.create({
    mainContainer: {
        borderWidth:1,
        padding:8,
        margin:8,
        backgroundColor:'#323e5b',
        
      },
    container: {
      borderRadius:8,
      borderWidth:1,
      backgroundColor:'#2c3957',
      marginHorizontal:20,
      marginVertical:10,
      paddingHorizontal:20,
      paddingVertical:20,
      flexDirection:'column',
    },
    mainHeader:{
        color:'white',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:14,
    },
    inputHeader:{
        color:'#c1c5cd'
    },
    inputStyle: {
      borderRadius:8,
      backgroundColor:'#3e4d6c',
      fontStyle:'italic',
      marginBottom:12,
      padding:8,
      marginTop:1,

    },
    button:{
        alignSelf:'center',
        backgroundColor:'#646a7e',
        color:'#c1c5cd',
        textAlign:'center',
        paddingVertical:12,
        paddingHorizontal:20,
        width:150,
        borderRadius:6,
        fontSize:17,
    },
 
  });
  