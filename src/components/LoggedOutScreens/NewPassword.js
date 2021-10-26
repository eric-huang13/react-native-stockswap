import React, {useEffect} from 'react';
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
  Platform,
  Image
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux';
import {ResetPassword} from '../../actions/user';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from '../../util/responsiveFont';
import Toast from 'react-native-toast-message';

const reviewSchema = yup.object({
  //   email: yup
  //     .string()
  //     .required('Email is required')
  //     .email('A valid email address is required'),

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

  //   termsVersion: yup.string().required('Please agree with Terms and Conditions'),
});

export const NewPassword = ({
  navigation,
  userData,
  loading,
  ResetPassword,
  route,
}) => {
  useEffect(() => {
    loading === true
      ? Toast.show({
          type: 'info',
          text2: 'Sending credentials...',
        })
      : null;
  }, [loading]);
  console.log(route.params.codeInput, 'CODEINUPUT');
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
                  email: route.params.email,
                  password: '',
                  passwordConfirmation: '',
                  code: route.params.codeInput,
                }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                  console.log(values, 'Values');
                  // navigation.navigate({
                  //   name: 'Login',
                  //   params: {userInfo: values},
                  // });
                  ResetPassword({
                    email: values.email,
                    password: values.password,
                    accessCode: values.code,
                  });
                }}>
                {(props) => (
                  <View style={style.inner}>
                    <View style={style.stockHeader}>
                        <Image
                          style={style.logo}
                          source={require('../../icons/Logo.png')}
                        />
                        <Text style={style.headerText}>StockSwap</Text>
                      </View>
                    <View style={style.container}>
                      <Text style={style.signUpHeader}>
                        Reset your password
                      </Text>

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
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Login')}>
                          <Text style={style.termsText}>Login</Text>
                        </TouchableOpacity>
                      </View>

                      <TouchableOpacity onPress={props.handleSubmit}>
                        <Text style={style.button}>Reset Password</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </Formik>
            </TouchableWithoutFeedback>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ResetPassword: (input) => dispatch(ResetPassword(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);

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
    marginTop: moderateScale(32),
    marginBottom: moderateScale(31),
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
    textAlign: 'center',
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
    width: moderateScale(184),
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
   logo: {
    height: moderateScale(44),
    width: moderateScale(44),
    marginLeft: moderateScale(2),
    marginBottom: moderateScale(-3),

  },
  stockHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: moderateScale(15),
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
  },
});
