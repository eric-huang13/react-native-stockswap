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
  ScrollView,
  Image,
} from 'react-native';
import TriangleIcon from '../../icons/TriangleIcon';
import {Formik} from 'formik';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';
import {Register} from '../../actions/user';


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label('Name')
    .required('Name is required')
    .min(2, 'Must have at least 2 characters'),

  username: Yup.string().label('username').required('Username is required'),

  hashtag: Yup.string()
    .label('hashtag')
    .matches(/^#\w+$/, 'Must be a hashtag')
    .min(2, 'Hashtag must have more than 2 characters '),

  bio: Yup.string()
    .label('bio')
    .min(2, 'Bio must have more than 2 characters '),

  image: Yup.string().url('Must be a url'),
});

class ProfileInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPrivate: false,
      shouldShow: false,
    };
  }

  dropDownSelect(setting) {
    this.setState({isPrivate: setting, shouldShow: false});
  }

  render() {
    const {RegisterUser, LoginUser} = this.props;
    const {userInfo} = this.props.route.params;

    const {shouldShow} = this.state;
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
              <Formik
                initialValues={{
                  email:userInfo.email,
                  password:userInfo.password,
                  termsVersion:userInfo.termsVersion,
                  name:'',
                  username:'',
                  image:'',
                  hashtag:'',
                  bio:'',
                  isPrivate:false,
                }}
                onSubmit={(values) => {
                  console.log(values, 'info');
                  // RegisterUser(values);
                  RegisterUser({email:values.email,password:values.password});
                }}
                validationSchema={validationSchema}>
                {({
                  handleChange,
                  values,
                  handleSubmit,
                  errors,
                  isValid,
                  touched,
                  handleBlur,
                  isSubmitting,
                  setFieldValue,
                }) => (
                  <View>
                    <Text style={style.header}>Fill Profile Info</Text>
                    {values.image && !errors.image ?
                      <Image
                        style={style.uploadPhotoContainer}
                        source={{uri: values.image}}
                      />
                     : 
                      <View style={style.uploadPhotoContainer}>
                        <Text style={style.uploadPhotoText}>
                          Tap to upload your photo
                        </Text>
                      </View>
                    }
                    <View style={style.topRow}>
                      <View style={style.rowInputContainer}>
                        <Text style={style.inputHeader}>Name</Text>
                        <TextInput
                          style={style.inputStyle}
                          onBlur={handleBlur('name')}
                          value={values.name}
                          onChangeText={handleChange('name')}
                          placeholder="Enter your name"
                          placeholderTextColor="#9ea6b5"
                          returnKeyType="next"
                          onSubmitEditing={() => this.username.focus()}
                          ref={(input) => (this.name = input)}
                        />
                        <Text style={style.errorText}>
                          {touched.name && errors.name}
                        </Text>
                      </View>

                      <View style={style.rowInputContainer}>
                        <Text style={style.inputHeader}>User name</Text>
                        <TextInput
                          style={style.inputStyle}
                          value={values.username}
                          onBlur={handleBlur('username')}
                          onChangeText={handleChange('username')}
                          placeholder="@example"
                          placeholderTextColor="#9ea6b5"
                          style={style.inputStyle}
                          ref={(input) => (this.username = input)}
                          onSubmitEditing={() => this.image.focus()}
                        />
                        <Text style={style.errorText}>
                          {touched.username && errors.username}
                        </Text>
                      </View>
                    </View>
                    <View style={style.bottomColumn}>
                      <View style={style.imageContainer}>
                        <Text style={style.inputHeader}>Image</Text>
                        <TextInput
                          value={values.image}
                          onBlur={handleBlur('image')}
                          onChangeText={handleChange('image')}
                          placeholder="Image url"
                          placeholderTextColor="#9ea6b5"
                          style={style.inputStyle}
                          ref={(input) => (this.image = input)}
                          onSubmitEditing={() => this.hashtag.focus()}
                        />
                        <Text style={style.errorText}>
                          {touched.image && errors.image}
                        </Text>
                      </View>

                      <View>
                        <Text style={style.inputHeader}>
                          Hashtag (up to 3 tags)
                        </Text>

                        <TextInput
                          style={style.inputStyle}
                          value={values.hashtag}
                          onBlur={handleBlur('hashtag')}
                          onChangeText={handleChange('hashtag')}
                          placeholder="Add hashtags which describe you"
                          placeholderTextColor="#9ea6b5"
                          returnKeyType="next"
                          ref={(input) => (this.hashtag = input)}
                          onSubmitEditing={() => this.bio.focus()}
                        />
                        <Text style={style.errorText}>
                          {touched.hashtag && errors.hashtag}
                        </Text>
                      </View>
                      <View>
                        <Text style={style.inputHeader}>Bio</Text>
                        <TextInput
                          style={style.inputStyleBio}
                          value={values.bio}
                          onBlur={handleBlur('bio')}
                          onChangeText={handleChange('bio')}
                          placeholder="Tell a bit about yourself"
                          placeholderTextColor="#9ea6b5"
                          multiline={true}
                          numberOfLines={4}
                          ref={(input) => (this.bio = input)}
                        />
                        <Text style={style.errorText}>
                          {touched.bio && errors.bio}
                        </Text>
                      </View>

                      <View>
                        <Text style={style.privacyText}>Account privacy</Text>

                        <View style={style.dotsDropdownContainer}>
                          <TouchableOpacity
                            onPress={() =>
                              this.setState({
                                shouldShow: !shouldShow,
                              })
                            }>
                            <View style={style.visibleButtonContainer}>
                              <Text style={style.middleDetailsText}>
                                {this.state.isPrivate == false ? 
                                "Visible for all"
                                :
                                "Private"  
                              }
                              </Text>
                              <TriangleIcon style={style.icon} />
                            </View>
                          </TouchableOpacity>
                          {this.state.shouldShow ? (
                            <View style={style.dropdown}>
                              {this.state.isPrivate == false ? (
                                <TouchableOpacity
                                  onPress={() => {
                                    this.dropDownSelect(true);
                                    setFieldValue('isPrivate', true);
                                  }}>
                                  <Text style={style.dropDownText}>
                                    Private
                                  </Text>
                                </TouchableOpacity>
                              ) : (
                                <TouchableOpacity
                                  onPress={() => {
                                    this.dropDownSelect(false);
                                    setFieldValue('isPrivate', false);
                                  }}>
                                  <Text style={style.dropDownText}>
                                    Visible for all
                                  </Text>
                                </TouchableOpacity>
                              )}
                            </View>
                          ) : null}
                        </View>
                      </View>
                      <View style={style.buttonContainer}>
                        <TouchableOpacity onPress={() => handleSubmit()}>
                          <Text style={style.button}>Next</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              </Formik>
            </ScrollView>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    RegisterUser: (input) => dispatch(Register(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoForm);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    paddingHorizontal: 24,
  },
  uploadPhotoContainer: {
    alignSelf: 'center',
    backgroundColor: '#515581',
    borderRadius: 100,
    width: 135,
    height: 135,
    marginBottom: 25,
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  uploadPhotoText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },

  header: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
    fontFamily: 'Montserrat-Bold',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInputContainer: {
    width: 164,
  },

  inputHeader: {
    fontSize: 12,
    color: '#babec8',
    marginBottom: 1,
    fontFamily: 'Montserrat-Regular',
  },
  inputStyle: {
    borderRadius: 8,
    padding: 8,
    marginTop: 1,
    fontSize: 16,
    backgroundColor: '#536183',
    opacity: 0.7,
    fontFamily: 'Montserrat-Italic',
    color: '#9ea6b5',
  },
  inputStyleBio: {
    borderRadius: 8,
    backgroundColor: '#3e4d6c',
    padding: 8,
    marginTop: 1,
    fontSize: 16,
    textAlignVertical: 'top',
    backgroundColor: '#536183',
    opacity: 0.7,
    fontFamily: 'Montserrat-Italic',
    color: '#9ea6b5',
  },
  visibleButtonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#3E4D6C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleDetailsText: {
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
    fontSize: 16,
  },
  dropdown: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 41,
    backgroundColor: '#3E4D6C',
    zIndex: 1,
    paddingVertical: 4,
    height: 35,
    position: 'absolute',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  dropDownText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 12,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 6,
  },
  dropDownTextReportContainer: {
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    paddingTop: 4,
    backgroundColor: '#2C3957',
  },
  icon: {
    marginRight: 4,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 150,
    borderRadius: 6,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  privacyText: {
    color: '#babec8',
    fontSize: 12,
    marginRight: 3,
    marginBottom: 3,
    fontFamily: 'Montserrat-Regular',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  errorText: {
    color: '#F66E6E',
    fontWeight: 'bold',
    marginBottom: 1,
    marginTop: 1,
    textAlign: 'center',
  },
});