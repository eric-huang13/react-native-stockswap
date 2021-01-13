import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, SafeAreaView, Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView} from 'react-native';
import {Login} from 'actions/user';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      
    };
  }
    render() {
    const {isLoggedIn, LoginUser} = this.props;

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

    const handleSubmit = (input) => {
      LoginUser(input)
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
            <View style={style.stockHeader}>
              <Text style={style.stockText}>Stock</Text>
              <Text style={style.swapText}>Swap</Text>
            </View>
            <Text>Is User Logged in: {'' + isLoggedIn} </Text>
            <View style={style.container}>
              <Text style={style.welcomeHeader}>Welcome</Text>
              <Text style={style.loginHeader}>Login</Text>

              <View>
                <Text style={style.inputHeader}>Email</Text>

                <TextInput
                  style={style.inputStyle}
                  value={this.state.email}
                  onChangeText={(email) => handleEmailChange(email)}
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
                  onChangeText={(password) => handlePasswordChange(password)}
                  placeholder="Enter your password"
                  placeholderTextColor="#9ea6b5"
                  secureTextEntry
                  style={style.inputStyle}
                  ref={(input) => (this.passwordInput = input)}
                />
              </View>
            
              <View style={style.termsContainer}>
                <View style={style.leftTerms}>
              <Text style={style.newText}>
                New to StockSwap?
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('SignUp')
                }>
              <Text style={style.termsText}>Sign Up</Text>              
              </TouchableOpacity>
              
              </View>
              <Text style={style.termsText}>Forgot password?</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => LoginUser(this.state)}>
                  <Text style={style.button}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={style.bottomButtonsContainer}>
        <Text style={style.orText}>--OR--</Text>
        <View style={style.alternateSignUpContainer}>
        <Text style={style.alternateSignUpButton}>LOGIN WITH GOOGLE</Text>
        <Text style={style.alternateSignUpButton}>LOGIN WITH FACEBOOK</Text>
        <Text style={style.alternateSignUpButton}>LOGIN WITH APPLE</Text>
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
    isLoggedIn: state.user.isLoggedIn,
    user: state.user.user,
    loading: state.user.loading,
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LoginUser: (input) => dispatch(Login(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

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
  welcomeHeader: {
    color: "white",
    fontSize: 24.5,
    fontWeight: "bold",
    marginBottom:3,
  },
  loginHeader:{
    color:'#9299a9',
    marginBottom: 14,
    fontSize:16.5,

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
    fontStyle: "italic",
    marginBottom: 10,
    padding: 8,
    marginTop: 1,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#8b64ff",
    color: "white",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 150,
    borderRadius: 6,
    fontSize: 17,
  },
  termsContainer:{
    marginBottom:28,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:2,
  },
  leftTerms:{
    flexDirection:'row',

  },
  newText:{
    color: "white",
    fontSize: 12,
    marginRight:3,
  },
  termsText: {
    color: "#b8a0ff",
    fontSize: 12,
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
