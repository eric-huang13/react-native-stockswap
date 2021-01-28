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
import LinearGradient from 'react-native-linear-gradient';
import SmallStockSwap from '../../icons/SmallStockSwap'
import GoogleIcon from '../../icons/GoogleIcon'
import AppleIcon from '../../icons/AppleIcon'
import FacebookIcon from '../../icons/FacebookIcon'



class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
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
      <LinearGradient
        start={{x: 0.1, y: 1}}
        end={{x: 0.1, y: 0.1}}
        colors={[
          '#1D2842',
          '#3d4b6e',          
        ]}
        style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={style.mainContainer}>
            <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={style.inner}>
              <View style={style.stockHeader}>
                <SmallStockSwap/>
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
          <View style={style.alternateSignupInner}>
            <View style={style.signupIcon}><GoogleIcon/></View>
        <Text style={style.alternateSignUpButton}>LOGIN WITH GOOGLE</Text></View>
        <View style={style.alternateSignupInner}>
        <View style={style.signupIcon}><FacebookIcon/></View>
        <Text style={style.alternateSignUpButton}>LOGIN WITH FACEBOOK</Text>
        </View>
        <View style={style.alternateSignupInner}>
        <View style={style.signupIcon}><AppleIcon/></View>
        <Text style={style.alternateSignUpButton}>LOGIN WITH APPLE</Text>
        </View>
        </View>
        </View>


          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
      </LinearGradient>
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
    padding: 8,
    paddingHorizontal: 24,
  },
  inner: {
    justifyContent: "flex-end",
  },
  stockHeader: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop:2,
    marginBottom:6,
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
    backgroundColor: "#303e5e",
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: "column",
    shadowColor: "rgba(0,0,0,0.13)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },
  signUpHeader: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily:'Montserrat-Bold',
    marginBottom: 18,
  },
  inputHeader: {
    fontSize: 14,
    color: "#babec8",
    marginBottom: 1,
    fontFamily:'Montserrat-Regular',
  },
  inputStyle: {
    borderRadius: 8,
    marginBottom: 14,
    padding: 8,
    marginTop: 1,
    fontSize:16,
    fontFamily:'Montserrat-Italic',
    backgroundColor: "#536183",
    opacity:0.7,
    color:'#9ea6b5'
  },
  inputStyleConfirm: {
    borderRadius: 8,
    marginBottom: 4,
    padding: 8,
    marginTop: 1,
    fontSize:16,
    fontFamily:'Montserrat-Italic',
    backgroundColor: "#536183",
    opacity:0.7,
    color:'#9ea6b5'
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#8B64FF",
    color: "white",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 162,
    borderRadius: 6,
    fontSize: 16,
    fontFamily:'Montserrat-SemiBold',
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
    fontSize: 11,
    fontFamily:'Montserrat-Medium',
    
  },
  checkbox:{
  },
  bottomButtonsContainer:{
      alignItems:'center',
  },
  orText:{
    marginVertical:16,
    color:'#CBCDD7',
    fontSize:14,
    fontFamily:'Montserrat-Regular',
  },
  alternateSignUpContainer:{
      flexDirection:'column',
      justifyContent:'space-between',

  },
  alternateSignUpButton: {
    alignSelf: "center",
    justifyContent:'center',
    color: "#FFFFFF",
    textAlign: "center",    
    fontSize: 14,
    fontFamily:'Montserrat-SemiBold',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,    
    elevation: 1,
  },
  alternateSignupInner:{
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 4,
    backgroundColor: "#2C3957",
    width: 350,
    borderRadius: 8,
    marginBottom:10,
    flexDirection:'row',
    // justifyContent:'flex-start'
  },
  signupIcon:{ 
    padding:7,
    backgroundColor: "#3A4A6D",
    borderRadius:7,
    marginVertical:-8,
    marginRight:63,
    alignSelf: "center",
    
  },
});
