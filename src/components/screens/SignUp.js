import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { Register } from "../../actions/user";
import CheckBox from '@react-native-community/checkbox';


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
      check: false,
    };
  }

   handleEmailChange = (text) => {
    this.setState({
      email: text,
    });
  };

   handlePasswordChange = (text) => {
    this.setState({
      password: text,
    });
  };

   handleConfirmPasswordChange = (text) => {
    this.setState({
      confirmPassword: text,
    });
  };

  checkBoxText() {
    this.setState({
        check:!this.state.check
    });
  ;} 

  render() {      
    const { RegisterUser } = this.props;  

    const credentials = {
        email: this.state.email,
        password: this.state.password,
      }; 
  
    const handleSubmit = () => {
      this.state.password !== this.state.confirmPassword 
        ? alert("Passwords do not match")
        : this.state.check === false 
        ? alert("Please check Terms and Conditions")
        : RegisterUser(credentials)
    };

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={style.mainContainer}>
            <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={style.inner}>
            <Text>Checkbox: {'' + this.state.check} </Text>
              <View style={style.stockHeader}>
                <Text style={style.stockText}>Stock</Text>
                <Text style={style.swapText}>Swap</Text>
              </View>
              <View style={style.container}>
                <Text style={style.signUpHeader}>Sign Up</Text>

                <View>
                  <Text style={style.inputHeader}>Email</Text>

                  <TextInput
                    style={style.inputStyle}
                    value={this.state.email}
                    onChangeText={(text) => this.handleEmailChange(text)}
                    placeholder="Enter your email"
                    placeholderTextColor="#9ea6b5"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                  />
                </View>
                <View>
                  <Text style={style.inputHeader}>Password</Text>
                  <TextInput
                    style={style.inputStyle}
                    value={this.state.password}
                    onChangeText={(text) => this.handlePasswordChange(text)}
                    placeholder="Enter your password"
                    placeholderTextColor="#9ea6b5"
                    secureTextEntry
                    returnKeyType="next"
                    style={style.inputStyle}
                    ref={(input) => (this.passwordInput = input)}
                    onSubmitEditing={() => this.confirmPasswordInput.focus()}
                  />
                </View>
                <View>
                  <Text style={style.inputHeader}>Repeat password</Text>
                  <TextInput
                    style={style.inputStyleConfirm}
                    value={this.state.confirmPassword}
                    onChangeText={(text) =>
                      this.handleConfirmPasswordChange(text)
                    }
                    placeholder="Enter your password"
                    placeholderTextColor="#9ea6b5"
                    secureTextEntry
                    ref={(input) => (this.confirmPasswordInput = input)}
                  />
                </View>
                <View style={style.termsOuterContainer}>
                  <View style={style.termsInnerContainer}> 
                <CheckBox style={style.checkbox}  value={this.state.check}
                            onChange={()=>this.checkBoxText()}       tintColors={{ true: "#b8a0ff", false: 'lightgrey' }}
                            
                            />
                            <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('TermsAndConditions')
                }>
              <Text style={style.termsText}>
                  I agree with the Terms and Conditions
                </Text>              
              </TouchableOpacity>            
                </View>
                <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Login')
                }>
              <Text style={style.termsText}>Login</Text>              
              </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity onPress={handleSubmit}>
                    <Text style={style.button}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <View style={style.bottomButtonsContainer}>
          <Text style={style.orText}>--OR--</Text>
          <View style={style.alternateSignUpContainer}>
          <Text style={style.alternateSignUpButton}>SIGN UP WITH GOOGLE</Text>
          <Text style={style.alternateSignUpButton}>SIGN UP WITH FACEBOOK</Text>
          <Text style={style.alternateSignUpButton}>SIGN UP WITH APPLE</Text>
          </View>
          </View>


          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
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
    flex: 1,
    borderWidth: 1,
    padding: 8,
    backgroundColor: "#323e5b",
    // paddingVertical:50,
    paddingHorizontal: 30,
  },
  inner: {
    justifyContent: "flex-end",
  },
  stockHeader: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  stockText: {
    fontSize: 27,
    fontWeight: "bold",
    color: "white",
  },
  swapText: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#b8a0ff",
  },
  container: {
    borderRadius: 8,
    backgroundColor: "#2c3957",
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "column",
  },
  signUpHeader: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 14,
  },
  inputHeader: {
    fontSize: 14,
    color: "#c1c5cd",
    marginBottom: 1,
  },
  inputStyle: {
    borderRadius: 8,
    backgroundColor: "#3e4d6c",
    marginBottom: 12,
    padding: 8,
    marginTop: 1,
    fontSize:16
  },
  inputStyleConfirm: {
    borderRadius: 8,
    backgroundColor: "#3e4d6c",
    marginBottom: 4,
    padding: 8,
    marginTop: 1,
    fontSize:16
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#646a7e",
    color: "#c1c5cd",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 150,
    borderRadius: 6,
    fontSize: 17,
  },
  termsOuterContainer:{
    marginBottom:28,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:2,
    alignItems:'center',
  },
  termsInnerContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  termsText: {
    color: "#b8a0ff",
    fontSize: 12,
    
  },
  checkbox:{
  },
  bottomButtonsContainer:{
      alignItems:'center',
  },
  orText:{
    marginVertical:16,
    color:'lightgrey',
    fontSize:16,
  },
  alternateSignUpContainer:{
      flexDirection:'column',
      justifyContent:'space-between',

  },
  alternateSignUpButton: {
    alignSelf: "center",
    backgroundColor: "#3e4d6c",
    color: "white",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 330,
    borderRadius: 6,
    fontSize: 14,
    marginBottom:10,
  },
});
