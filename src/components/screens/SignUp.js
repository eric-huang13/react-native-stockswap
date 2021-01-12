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
  Modal,
} from "react-native";
import { connect } from "react-redux";
import { Register } from "../../actions/user";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
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

    const handleConfirmPasswordChange = (confirmPassword) => {
      this.setState({
        confirmPassword: confirmPassword,
      });
    };

    const credentials = {
        email: this.state.email,
        password: this.state.password,
      }; 

    const handleSubmit = () => {
      this.state.password === this.state.confirmPassword
        ? RegisterUser(credentials)
        : alert("Passwords do not match");
    };

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={style.mainContainer}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={style.inner}>
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
                    returnKeyType="next"
                    style={style.inputStyle}
                    ref={(input) => (this.passwordInput = input)}
                    onSubmitEditing={() => this.confirmPasswordInput.focus()}
                  />
                </View>
                <View>
                  <Text style={style.inputHeader}>Repeat password</Text>
                  <TextInput
                    style={style.inputStyle}
                    value={this.state.confirmPassword}
                    onChangeText={(confirmPassword) =>
                      handleConfirmPasswordChange(confirmPassword)
                    }
                    placeholder="Enter you password"
                    placeholderTextColor="#9ea6b5"
                    secureTextEntry
                    ref={(input) => (this.confirmPasswordInput = input)}
                  />
                </View>
                <View style={style.termsContainer}>
                <Text style={style.termsText}>
                  I agree with the Terms and Conditions
                </Text>
                </View>
                <View>
                  <TouchableOpacity onPress={handleSubmit}>
                    <Text style={style.button}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
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
    fontStyle: "italic",
    marginBottom: 12,
    padding: 8,
    marginTop: 1,
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
    backgroundColor: "#646a7e",
    color: "#c1c5cd",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 150,
    borderRadius: 6,
    fontSize: 17,
  },
  termsContainer:{
    marginBottom:28,
  },
  termsText: {
    color: "#b8a0ff",
    fontSize: 12,
  },
});
