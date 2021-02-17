import React, { useState, useEffect } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Modal
} from "react-native";
import { Field, Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { Register } from "../../actions/user";
import CheckBox from "@react-native-community/checkbox";
import LinearGradient from "react-native-linear-gradient";
import SmallStockSwap from "../../icons/SmallStockSwap";
import GoogleIcon from "../../icons/GoogleIcon";
import AppleIcon from "../../icons/AppleIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import TermsAndConditions from './TermsAndConditions'

const reviewSchema = yup.object({
  email: yup
    .string()
    .required("Email required")
    .email("A valid email address is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .matches(/\d/, "Password must have a number")
    .matches(/\w*[a-z]\w*/, "Password must have a lowercase letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    ),

  passwordConfirmation: yup
    .string()
    .required("Password confimation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),

  // toggleCheckBox: yup.boolean().oneOf([true], 'Please check the agreement')
});

const SignUp = ({ RegisterUser, navigation, userData }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    checkVersion:"",
    
  });
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [checkError, setCheckError] = useState(false);
  const [termsModal, setTermsModal] = useState(false);

  //Workng on getting toggleCheckBox value to be handled by Formik so we can use it in Yup reviewSchema errors, for now using what is below for checking that terms and conditions is checked
  const handleSubmit = (values) => {
    if (toggleCheckBox !== true) {
      setCheckError(true);
      alert("Please check Terms and Conditions");
  }
  else{
    setCheckError(false);
    // console.log(form,"form")
    RegisterUser(form)
    // navigation.navigate({
    //   name: "ProfileInfoForm",
    //   params: { form },
    // });
}
  };
  const handleTerms = (item) => {
    setTermsModal(item);
    handleCheck()
  }
  //will put the Terms and Conditions version in from backend?
  const handleCheck = () => {
    setToggleCheckBox(true)
    setForm({
      ...form,
      checkVersion:'Version 1'
    })
  }
 


//   useEffect(() => {
// if (toggleCheckBox === true){
//   props.setFieldValue('checkMark', true)
// }else{
//   props.setFieldValue('checkMark', false)

// }

    

// }, [toggleCheckBox]);

console.log(userData,"USERDATA IN SIGNUP")
  return (
    <LinearGradient
      start={{ x: 0.1, y: 1 }}
      end={{ x: 0.1, y: 0.1 }}
      colors={["#1D2842", "#3d4b6e"]}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={style.mainContainer}>
     
          <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  passwordConfirmation: "",
                  version:"",
                  checkMark:toggleCheckBox
                }}
                
                
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                  // handleSubmit(values);
                  // setForm({
                  //   ...form,
                  //   email:values.email,
                  //   password:values.password,
                  //   passwordConfirmation:values.passwordConfirmation                    
                  //   });
                  // handleSubmit();
                  
                  console.log(values, "VALUESSSSSSS")

                  // actions.resetForm()
                  // RegisterUser(values);
                }}
              >
                {(props) => (
                  // console.log(props.values, "formik"),
                  (
                    <View style={style.inner}>
                         <Modal transparent={true} visible={termsModal} animationType="slide">
          <TermsAndConditions handleTerms={handleTerms} props={props}handleCheck={handleCheck} />
        </Modal>
                      <View style={style.stockHeader}>
                        <SmallStockSwap />
                      </View>
                      <View style={style.container}>
                        <Text>h{'' + toggleCheckBox}</Text>
                        <Text style={style.signUpHeader}>Sign Up</Text>
                        <View>
                          <Text style={style.inputHeader}>Email</Text>
                          <TextInput
                            style={
                              props.touched.email && props.errors.email
                                ? {
                                    ...style.inputStyle,
                                    backgroundColor: "#F66E6E",
                                  }
                                : { ...style.inputStyle }
                            }
                            placeholder="Enter your email"
                            placeholderTextColor="#9ea6b5"
                            onChangeText={props.handleChange("email")}
                            onBlur={props.handleBlur("email")}
                            value={props.values.email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            returnKeyType="next"
                            // onSubmitEditing={() => passwordInput.focus()}
                          />
                          <Text style={style.errorText}>
                            {props.touched.email && props.errors.email}
                          </Text>
                        </View>
                        <View>
                          <Text style={style.inputHeader}>Password</Text>
                      
                          <TextInput
                            style={
                              props.touched.password && props.errors.password
                                ? {
                                    ...style.inputStyle,
                                    backgroundColor: "#F66E6E",
                                  }
                                : { ...style.inputStyle }
                            }
                            placeholder="Password"
                            onChangeText={props.handleChange("password")}
                            onBlur={props.handleBlur("password")}
                            value={props.values.password}
                            placeholder="Enter your password"
                            placeholderTextColor="#9ea6b5"
                            secureTextEntry
                            returnKeyType="next"
                            // ref={(input) => (passwordInput = input)}
                            // onSubmitEditing={() => this.confirmPasswordInput.focus()}
                          />
                        </View>
                        <Text style={style.errorText}>
                          {props.touched.password && props.errors.password}
                        </Text>
                        <View>
                          <Text style={style.inputHeader}>Repeat password</Text>
                          
                          <TextInput
                            style={
                              props.touched.passwordConfirmation &&
                              props.errors.passwordConfirmation
                                ? {
                                    ...style.inputStyleConfirm,
                                    backgroundColor: "#F66E6E",
                                  }
                                : { ...style.inputStyleConfirm }
                            }
                            textContentType="password"
                            placeholder="Confirm password"
                            onChangeText={props.handleChange(
                              "passwordConfirmation"
                            )}
                            onBlur={props.handleBlur("passwordConfirmation")}
                            value={props.values.passwordConfirmation}
                            placeholder="Enter your password"
                            placeholderTextColor="#9ea6b5"
                            secureTextEntry
                          />
                          <Text style={style.errorText}>
                            {props.touched.passwordConfirmation &&
                              props.errors.passwordConfirmation}
                          </Text>
                        </View>
                        <View style={style.termsOuterContainer}>
                          <View style={style.termsInnerContainer}>
                            <CheckBox
                              style={style.checkbox}
                              value={toggleCheckBox}
                              onValueChange={(newValue) => setToggleCheckBox(newValue)
                              }
                              on
                              onChange={() => console.log(toggleCheckBox)}
                              // onChange={() => props.setFieldValue('checkMark', toggleCheckBox)}
                              tintColors={{
                                true: "#b8a0ff",
                                false: "lightgrey",
                              }}
                            />
                            <TouchableOpacity
                              onPress={() => handleTerms(true)}
                              >
                            
                              <Text
                                style={
                                  checkError
                                    ? { ...style.termsText, color: "#F66E6E" }
                                    : { ...style.termsText }
                                }
                              >
                                I agree with the Terms and Conditions
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}
                          >
                            <Text style={style.termsText}>Login</Text>
                          </TouchableOpacity>
                        </View>
                        <View>
                          <Text style={style.errorText}>
                            {props.touched.toggleCheckBox &&
                              props.errors.toggleCheckBox}
                          </Text>
                        </View>
                        <TouchableOpacity onPress={props.handleSubmit}>
                          <Text style={style.button}>Sign Up</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                )}
              </Formik>
            </TouchableWithoutFeedback>
            <View style={style.bottomButtonsContainer}>
              <Text style={style.orText}>--OR--</Text>
              <View style={style.alternateSignUpContainer}>
                <View style={style.alternateSignupInner}>
                  <View style={style.signupIcon}>
                    <GoogleIcon />
                  </View>
                  <Text style={style.alternateSignUpButton}>
                    LOGIN WITH GOOGLE
                  </Text>
                </View>
                <View style={style.alternateSignupInner}>
                  <View style={style.signupIcon}>
                    <FacebookIcon />
                  </View>
                  <Text style={style.alternateSignUpButton}>
                    LOGIN WITH FACEBOOK
                  </Text>
                </View>
                <View style={style.alternateSignupInner}>
                  <View style={style.signupIcon}>
                    <AppleIcon />
                  </View>
                  <Text style={style.alternateSignUpButton}>
                    LOGIN WITH APPLE
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
    userData: state.user.userData, 
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
    marginTop: 2,
    marginBottom: 6,
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
    fontFamily: "Montserrat-Bold",
    marginBottom: 18,
  },
  inputHeader: {
    fontSize: 14,
    color: "#babec8",
    marginBottom: 1,
    fontFamily: "Montserrat-Regular",
  },
  inputStyle: {
    borderRadius: 8,
    // marginBottom: 14,
    padding: 8,
    marginTop: 1,
    fontSize: 16.5,
    fontFamily: "Montserrat-Italic",
    backgroundColor: "#536183",
    opacity: 0.7,
    // color: "#9ea6b5",
    color: "#FFFFFF",
  },
  inputStyleConfirm: {
    borderRadius: 8,
    // marginBottom: 4,
    padding: 8,
    marginTop: 1,
    fontSize: 16.5,
    fontFamily: "Montserrat-Italic",
    backgroundColor: "#536183",
    opacity: 0.7,
    // color: "#9ea6b5",
    color: "#FFFFFF",
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
    fontFamily: "Montserrat-SemiBold",
  },
  termsOuterContainer: {
    marginBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 2,
    alignItems: "center",
  },
  termsInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  termsText: {
    color: "#b8a0ff",
    fontSize: 11,
    fontFamily: "Montserrat-Medium",
  },
  checkbox: {},
  bottomButtonsContainer: {
    alignItems: "center",
  },
  orText: {
    marginVertical: 16,
    color: "#CBCDD7",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
  },
  alternateSignUpContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  alternateSignUpButton: {
    alignSelf: "center",
    justifyContent: "center",
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  alternateSignupInner: {
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 4,
    backgroundColor: "#2C3957",
    width: 350,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    // justifyContent:'flex-start'
  },
  signupIcon: {
    padding: 7,
    backgroundColor: "#3A4A6D",
    borderRadius: 7,
    marginVertical: -8,
    marginRight: 63,
    alignSelf: "center",
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    // marginBottom: 10,
    // marginTop: 6,
    textAlign: "center",
  },
});
