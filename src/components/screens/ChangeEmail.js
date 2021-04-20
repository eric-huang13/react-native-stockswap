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
import {Login} from 'actions/user';
import LinearGradient from 'react-native-linear-gradient';


class ChangeEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newEmail: '',
      currentEmail: '',
      errorInput: '',
    };
  }
  handleEmailChange = (text) => {
    this.setState({
      newEmail: text,
    });
  };
  errorInput(text) {
    this.setState({
      error: text,
    });
  }

  handleSubmit = () => {
    this.state.newEmail !== ''
      ? this.props.navigation.navigate('EmailSuccess')
      : this.errorInput('email');
  };

  componentDidMount() {
    const {users, userAccount} = this.props;
    this.setState({
      currentEmail: userAccount.email,
    });
  }
  render() {
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
                      this.state.error === 'email'
                        ? {...style.inputStyle, backgroundColor: '#F66E6E'}
                        : {...style.inputStyle}
                    }
                    value={this.state.email}
                    onChangeText={(text) => this.handleEmailChange(text)}
                    placeholder="Enter new email address"
                    placeholderTextColor="#9ea6b5"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
                <View>
                  <TouchableOpacity onPress={this.handleSubmit}>
                    <Text style={style.button}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeEmail);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: '#323e5b',
    paddingHorizontal: 2,
    justifyContent: 'center',
  },

  container: {
    width: '85%',
    borderRadius: 8,
    backgroundColor: '#2C3957',
    paddingHorizontal: 35,
    paddingVertical: 28,
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
    fontSize: 20,
    marginBottom: 16,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  currentEmailContainer: {
    marginTop: 16,
    marginBottom: 16,
  },
  currentEmail: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    fontSize: 16,
  },
  inputEmailContainer: {
    marginTop: 16,
    marginBottom: 16,
  },

  inputHeader: {
    fontSize: 12,
    lineHeight: 15,
    color: '#babec8',
    marginBottom: 2,
    fontFamily: 'Montserrat-Regular',
  },
  inputStyle: {
    borderRadius: 8,
    marginBottom: 18,
    padding: 8,
    marginTop: 1,
    fontSize: 16,
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
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 162,
    borderRadius: 6,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  termsContainer: {
    marginBottom: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
});
