import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Button,
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Platform
} from 'react-native';
import {Login} from 'actions/user';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import SmallStockSwap from '../../icons/SmallStockSwap';
import GoogleIcon from '../../icons/GoogleIcon';
import AppleIcon from '../../icons/AppleIcon';
import FacebookIcon from '../../icons/FacebookIcon';
import {Formik} from 'formik';
import * as yup from 'yup';
import {moderateScale} from '../../util/responsiveFont'


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
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter'),
    // .matches(
    //   /[!@#$%^&*()\-_"=+{}; :,<.>]/,
    //   'Password must have a special character',
    // ),
});

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  testAPI = () => {
    axios
      .get('/')
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    const {isLoggedIn, LoginUser} = this.props;

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
                  }}
                  validationSchema={reviewSchema}
                  onSubmit={(values, actions) => {
                    console.log(values, 'Values');

                    LoginUser(values);
                  }}>
                  {(props) => (
                    <View style={style.inner}>
                      <View style={style.stockHeader}>
                        <SmallStockSwap />
                      </View>
                      {/* <Text>Is User Logged in: {'' + isLoggedIn} </Text> */}
                      <View style={style.container}>
                        <Text style={style.welcomeHeader}>Welcome</Text>
                        <Text style={style.loginHeader}>Login</Text>
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
                        <View />

                        <View style={style.termsContainer}>
                          <View style={style.leftTerms}>
                            <Text style={style.newText}>New to StockSwap?</Text>
                            <TouchableOpacity
                              onPress={() =>
                                this.props.navigation.navigate('SignUp')
                              }>
                              <Text style={style.termsText}>Sign Up</Text>
                            </TouchableOpacity>
                          </View>
                          <TouchableOpacity
                            onPress={() =>
                              this.props.navigation.navigate('SplashScreen')
                            }>
                            <Text style={style.termsText}>
                              Forgot password?
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View>
                          <TouchableOpacity onPress={props.handleSubmit}>
                            <Text style={style.button}>Login</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
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
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
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
    padding: moderateScale(8),
    paddingHorizontal: moderateScale(24),
  },
  inner: {
    justifyContent: 'flex-end',
  },
  stockHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
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
    borderRadius: moderateScale(16),
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
  welcomeHeader: {
    color: '#FFFFFF',
    fontSize: moderateScale(22),
    marginBottom: moderateScale(4),
    fontFamily: 'Montserrat-Bold',
  },
  loginHeader: {
    color: '#9299a9',
    marginBottom: moderateScale(20),
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Medium',
  },
  inputHeader: {
    fontSize: moderateScale(14),
    color: '#babec8',
    marginBottom: 1,
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
    marginBottom: moderateScale(12),
    padding: moderateScale(8),
    marginTop: moderateScale(1),
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Italic',
    backgroundColor: '#536183',
    opacity: 0.7,
    color: '#9ea6b5',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#8B64FF',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(162),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-SemiBold',
  },
  termsContainer: {
    marginBottom: moderateScale(28),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(2),
  },
  leftTerms: {
    flexDirection: 'row',
  },
  newText: {
    color: '#FFFFFF',
    fontSize: moderateScale(12),
    marginRight: moderateScale(3),
    fontFamily: 'Montserrat-Medium',
  },
  termsText: {
    color: '#B8A0FF',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Medium',
  },
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
