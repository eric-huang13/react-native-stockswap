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
  Platform,
} from 'react-native';
import {EditUser} from '../../actions/user';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as yup from 'yup';
import {moderateScale} from '../../util/responsiveFont';

const reviewSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('A valid email address is required'),
});
class ChangeEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentEmail: '',
    };
  }
  componentDidMount() {
    const {users, userAccount} = this.props;
    this.setState({
      currentEmail: userAccount.email,
    });
  }
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
                  email: '',
                }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                  console.log(values, 'Values');
                  EditUser(values);
                  this.props.navigation.navigate('EmailSuccess');
                }}>
                {(props) => (
                  <View style={style.container}>
                    <Text style={style.changeEmailHeader}>
                      Change email address
                    </Text>
                    <View style={style.currentEmailContainer}>
                      <Text style={style.inputHeader}>Current email</Text>
                      <Text style={style.currentEmail}>
                        {this.state.currentEmail}
                      </Text>
                    </View>
                    <View style={style.inputEmailContainer}>
                      <Text style={style.inputHeader}>New Email</Text>
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
                      <TouchableOpacity onPress={props.handleSubmit}>
                        <Text style={style.button}>Apply</Text>
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
    userAccount: state.user.userFakeData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    EditUser: (input) => dispatch(EditUser(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeEmail);

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
    marginBottom: moderateScale(16),
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
    // marginBottom: moderateScale(18),
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
  errorText: {
    color: '#F66E6E',
    fontWeight: 'bold',
    marginBottom: moderateScale(1),
    marginTop: moderateScale(1),
    textAlign: 'center',
  },
});
