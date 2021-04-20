import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import {EditUser} from '../../actions/user';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as yup from 'yup';
import { moderateScale } from '../../util/responsiveFont';

const reviewSchema = yup.object({
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

    passwordConfirmation: yup
    .string()
    .required('Password confimation is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
class ChangePassword extends Component {
  // componentDidMount() {
  //   const {users} = this.props;
  //   const id = 1;
  //   const selectedUser = users.filter((user) => user.id === id);
  //   {
  //     selectedUser.map((user) => {
  //       this.setState({
  //         currentEmail: user.email,
  //       });
  //     });
  //   }
  // }
  render() {
    const {EditUser} = this.props;

    return (
      <LinearGradient
        start={{x: 0.1, y: 1}}
        end={{x: 0.1, y: 0.1}}
        colors={['#1D2842', '#3d4b6e']}
        style={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={style.mainContainer}>
            <Formik
                  initialValues={{
                    password: '',
                    passwordConfirmation: '',
                  }}
                  validationSchema={reviewSchema}
                  onSubmit={(values, actions) => {
                    console.log(values, 'Values');

                    // EditUser(values);
                    this.props.navigation.navigate('PasswordSuccess')

                  }}>
                  {(props) => (
              <View style={style.container}>
                <Text style={style.changeEmailHeader}>Change password</Text>
                <View style={style.inputEmailContainer}>
                  <Text style={style.inputHeader}>New Password</Text>
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
                <View style={style.inputEmailContainer}>
                  <Text style={style.inputHeader}>Repeat</Text>
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
                <View>
                  <TouchableOpacity onPress={props.handleSubmit}>
                    <Text
                      style={
                        props.errors.passwordConfirmation||
                        props.errors.passwordConfirmation
                          ? {...style.button, backgroundColor: '#9F9CA7'}
                          : {...style.button}
                      }>
                      Apply
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              )}
              </Formik>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.people.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    EditUser: (input) => dispatch(EditUser(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: moderateScale(8),
    backgroundColor: '#323e5b',
    paddingHorizontal: moderateScale(2),
    justifyContent: 'center',
  },

  container: {
    width: '85%',
    borderRadius: moderateScale(8),
    backgroundColor: '#2C3957',
    paddingHorizontal: moderateScale(35),
    paddingVertical: moderateScale(28),
    flexDirection: 'column',
    shadowColor: 'rgba(0,0,0,0.13)',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  changeEmailHeader: {
    color: '#FFFFFF',
    fontSize: moderateScale(20),
    marginBottom: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  currentEmailContainer: {
    marginTop: moderateScale(16),
    marginBottom: moderateScale(16),
  },
  currentEmail: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    fontSize: moderateScale(16),
  },
  inputEmailContainer: {
    marginTop: moderateScale(16),
  },

  inputHeader: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(15),
    color: '#babec8',
    marginBottom: moderateScale(2),
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
    color: '#9ea6b5',
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
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(162),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-SemiBold',
    marginTop: moderateScale(10),
  },
  termsContainer: {
    marginBottom: moderateScale(28),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(2),
  },
  errorText: {
    color: '#F66E6E',
    fontWeight: 'bold',
    marginBottom: moderateScale(1),
    marginTop: moderateScale(1),
    textAlign: 'center',
  },
});
