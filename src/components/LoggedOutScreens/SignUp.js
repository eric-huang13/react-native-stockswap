import React, {useState, useEffect} from 'react';
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
  Modal,
  Platform,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux';
import {Register} from '../../actions/user';
import {RegisterGoogleSignup} from '../../actions/user';

import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import SmallStockSwap from '../../icons/SmallStockSwap';
import AppleIcon from '../../icons/AppleIcon';
import FacebookIcon from '../../icons/FacebookIcon';
import TermsAndConditions from './TermsAndConditions';
import GoogleOauth from '../LoggedOutComponents/GoogleOauth';

import {moderateScale} from '../../util/responsiveFont';

import Toast from 'react-native-toast-message';

const reviewSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('A valid email address is required'),

  password: yup
    .string()
    .required('Password is required')
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .matches(/\d/, 'Password must have a number')
    .matches(/\w*[a-z]\w*/, 'Password must have a lowercase letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    ),

  passwordConfirmation: yup
    .string()
    .required('Password confimation is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),

  termsVersion: yup.string().required('Please agree with Terms and Conditions'),
});

export const SignUp = ({
  RegisterUser,
  navigation,
  userData,
  loading,
  RegisterUserGoogle,
}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [termsModal, setTermsModal] = useState(false);

  //modal
  const handleTerms = (item) => {
    setTermsModal(item);
  };

  //toggle check
  const handleCheck = (item) => {
    setToggleCheckBox(item);
  };
  useEffect(() => {
    loading === true
      ? Toast.show({
          type: 'info',
          text2: 'Sending credentials...',
        })
      : null;
  }, [loading]);

  return (
    <LinearGradient
      start={{x: 0.1, y: 1}}
      end={{x: 0.1, y: 0.1}}
      colors={['#1D2842', '#3d4b6e']}
      style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <SafeAreaView style={style.mainContainer}>
          <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  passwordConfirmation: '',
                  termsVersion: '',
                }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                  console.log(values, 'Values');
                  // navigation.navigate({
                  //   name: 'ProfileInfoForm',
                  //   params: {userInfo: values},
                  // });
                  RegisterUser({
                    email: values.email,
                    password: values.password,
                  });
                }}>
                {(props) => (
                  <View style={style.inner}>
                    <Modal
                      transparent={true}
                      visible={termsModal}
                      animationType="slide">
                      <TermsAndConditions
                        handleTerms={handleTerms}
                        handleCheck={handleCheck}
                        props={props}
                        navigation={navigation}
                      />
                    </Modal>
                    <View style={style.stockHeader}>
                      <SmallStockSwap />
                    </View>
                    <View style={style.container}>
                      <Text style={style.signUpHeader}>Sign Up</Text>
                      <View>
                        <Text style={style.inputHeader}>Email</Text>
                        <TextInput
                          style={
                            props.touched.email && props.errors.email
                              ? {
                                  ...style.inputStyle,
                                  backgroundColor: '#F66E6E',
                                }
                              : {...style.inputStyle}
                          }
                          placeholder="Enter your email"
                          placeholderTextColor="#9ea6b5"
                          onChangeText={props.handleChange('email')}
                          onBlur={props.handleBlur('email')}
                          value={props.values.email}
                          keyboardType="email-address"
                          autoCapitalize="none"
                          returnKeyType="next"
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
                                  backgroundColor: '#F66E6E',
                                }
                              : {...style.inputStyle}
                          }
                          placeholder="Password"
                          onChangeText={props.handleChange('password')}
                          onBlur={props.handleBlur('password')}
                          value={props.values.password}
                          placeholder="Enter your password"
                          placeholderTextColor="#9ea6b5"
                          secureTextEntry
                          returnKeyType="next"
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
                                  backgroundColor: '#F66E6E',
                                }
                              : {...style.inputStyleConfirm}
                          }
                          textContentType="password"
                          placeholder="Confirm password"
                          onChangeText={props.handleChange(
                            'passwordConfirmation',
                          )}
                          onBlur={props.handleBlur('passwordConfirmation')}
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
                            disabled={true}
                            boxType="square"
                            value={toggleCheckBox}
                            onValueChange={(newValue) =>
                              setToggleCheckBox(newValue)
                            }
                            tintColors={{
                              true: '#b8a0ff',
                              false: 'lightgrey',
                            }}
                            onCheckColor="#b8a0ff"
                          />
                          <TouchableOpacity
                            style={style.termsTouchOpacity}
                            onPress={() => handleTerms(true)}>
                            <Text style={style.termsText}>
                              I agree with the Terms and Conditions
                            </Text>
                          </TouchableOpacity>
                          <Text style={style.errorText} />
                        </View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Login')}>
                          <Text style={style.termsText}>Login</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={style.termsError}>
                        <Text style={style.errorText}>
                          {props.touched.termsVersion &&
                            props.errors.termsVersion}
                        </Text>
                      </View>
                      <TouchableOpacity onPress={props.handleSubmit}>
                        <Text style={style.button}>Sign Up</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </Formik>
            </TouchableWithoutFeedback>
            <View style={style.bottomButtonsContainer}>
              <Text style={style.orText}>--OR--</Text>
              <View style={style.alternateSignUpContainer}>
                <GoogleOauth
                  signup={'signup'}
                  RegisterUserGoogle={RegisterUserGoogle}
                />
                {/* <View style={style.alternateSignupInner}>
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
                          </View> */}
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
    RegisterUserGoogle: (input) => dispatch(RegisterGoogleSignup(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: moderateScale(8),
    paddingHorizontal: moderateScale(24),
  },
  inner: {
    justifyContent: 'flex-end',
  },
  stockHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScale(2),
    marginBottom: moderateScale(6),
  },
  stockText: {
    fontSize: moderateScale(27),
    fontWeight: 'bold',
    color: 'white',
  },
  swapText: {
    fontSize: moderateScale(27),
    fontWeight: 'bold',
    color: '#b8a0ff',
  },
  container: {
    borderRadius: moderateScale(8),
    backgroundColor: '#303e5e',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(18),
    flexDirection: 'column',
    shadowColor: 'rgba(0,0,0,0.13)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },
  signUpHeader: {
    color: '#FFFFFF',
    fontSize: moderateScale(22),
    fontFamily: 'Montserrat-Bold',
    marginBottom: moderateScale(18),
  },
  inputHeader: {
    fontSize: moderateScale(14),
    color: '#babec8',
    marginBottom: moderateScale(1),
    fontFamily: 'Montserrat-Regular',
  },
  inputStyle: {
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
    marginTop: moderateScale(1),
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Italic',
    backgroundColor: '#536183',
    opacity: 0.7,
    color: '#FFFFFF',
  },
  inputStyleConfirm: {
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
    marginTop: moderateScale(1),
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Italic',
    backgroundColor: '#536183',
    opacity: 0.7,
    color: '#FFFFFF',
  },

  button: {
    alignSelf: 'center',
    backgroundColor: '#8B64FF',
    color: 'white',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(162),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-SemiBold',
  },
  termsOuterContainer: {
    marginBottom: moderateScale(0),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(2),
    alignItems: 'center',
  },
  termsInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  termsText: {
    color: '#b8a0ff',
    fontSize: moderateScale(11),
    fontFamily: 'Montserrat-Medium',
  },
  termsError: {
    marginBottom: moderateScale(18),
  },
  termsTouchOpacity: {
    paddingLeft: 10,
  },
  checkbox: {},
  bottomButtonsContainer: {
    alignItems: 'center',
  },
  orText: {
    marginVertical: moderateScale(16),
    color: '#CBCDD7',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Regular',
  },
  alternateSignUpContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  alternateSignUpButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  alternateSignupInner: {
    alignSelf: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(4),
    backgroundColor: '#2C3957',
    width: moderateScale(350),
    borderRadius: moderateScale(8),
    marginBottom: moderateScale(10),
    flexDirection: 'row',
  },
  signupIcon: {
    padding: moderateScale(7),
    backgroundColor: '#3A4A6D',
    borderRadius: moderateScale(7),
    marginVertical: moderateScale(-8),
    marginRight: moderateScale(63),
    alignSelf: 'center',
  },
  errorText: {
    color: '#F66E6E',
    fontWeight: 'bold',
    marginBottom: moderateScale(1),
    marginTop: moderateScale(1),
    textAlign: 'center',
  },
});
