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
  Platform,
} from 'react-native';
import TriangleIcon from '../../icons/TriangleIcon';
import {Formik} from 'formik';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';
import {Register} from '../../actions/user';
import { CreateProfile } from '../../actions/profile';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {moderateScale} from '../../util/responsiveFont';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label('Name')
    // .required('Name is required')
    .min(2, 'Must have at least 2 characters'),

  username: Yup.string().label('username'),
  // .required('username is required'),

  tags: Yup.string()
    .label('tags')
    .matches(/^#\w+$/, 'Must be a tags')
    .min(2, 'tags must have more than 2 characters '),

  bio: Yup.string()
    .label('bio')
    .min(2, 'Bio must have more than 2 characters '),

  // image: Yup.string().url('Must be a url'),
});

export class ProfileInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPrivate: false,
      shouldShow: false,
      imageData: null,
    };
  }

  dropDownSelect(setting) {
    this.setState({isPrivate: setting, shouldShow: false});
  }


  render() {
    const {RegisterUser, CreateProfile} = this.props;
    // const {userInfo} = this.props.route.params;

    const {shouldShow} = this.state;

    //Creating FormData for sending image to backend
    const createFormData = (values) => {
      let formData = new FormData();
      Object.keys(values).forEach((fieldName) => {
        console.log(fieldName, values[fieldName]);
        formData.append(fieldName, values[fieldName]);
      });
      return formData;
    };

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
                  // email: userInfo.email,
                  // password: userInfo.password,
                  // termsVersion: userInfo.termsVersion,
                  name: '',
                  username: '',
                  image: {name: '', type: '', uri: ''},
                  tags: '',
                  bio: '',
                  isPrivate: false,
                }}
                onSubmit={(values) => {
                //Adding to FormData for image
                  const data = createFormData(values);
                  console.log(data, 'form');

                  // RegisterUser(data);


                  CreateProfile ({name: values.name,
                    username: values.username,
                    bio: values.bio,
                    tags: values.tags,
                  })

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
                    {values.image.uri && !errors.image ? (
                      <TouchableOpacity
                        onPress={() => {
                          const options = {
                            mediaType: 'photo',
                            // includeBase64:true,
                          };
                          launchImageLibrary(options, (response) => {
                            console.log(response, 'response image');
                            if (response.uri) {
                              setFieldValue('image', {
                                name: response.fileName,
                                type: response.type,
                                uri:
                                  Platform.OS === 'android'
                                    ? response.uri
                                    : response.uri.replace('file://', ''),
                              });
                              // this.setState({ imageData: response.uri });

                        }
                          });
                        }}>
                        <Image
                          style={style.uploadPhotoContainer}
                          source={{uri: values.image.uri}}
                        />
                      </TouchableOpacity>
                    ) : (
                      <View style={style.uploadPhotoContainer}>
                        <TouchableOpacity
                          onPress={() => {
                            const options = {
                              mediaType: 'photo',
                              // includeBase64:true,

                            };
                            launchImageLibrary(options, (response) => {
                              console.log(response, 'response image');
                              if (response.uri) {
                                setFieldValue('image', {
                                  name: response.fileName,
                                  type: response.type,
                                  uri:
                                    Platform.OS === 'android'
                                      ? response.uri
                                      : response.uri.replace('file://', ''),
                                });
                                // this.setState({ imageData: response.uri });

                              }
                            });
                          }}>
                          <Text style={style.uploadPhotoText}>
                            Tap to upload your photo
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
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
                      {/* <View style={style.imageContainer}>
                        <Text style={style.inputHeader}>Image</Text>
                        <TextInput
                          value={values.image}
                          onBlur={handleBlur('image')}
                          onChangeText={handleChange('image')}
                          placeholder="Image url"
                          placeholderTextColor="#9ea6b5"
                          style={style.inputStyle}
                          ref={(input) => (this.image = input)}
                          onSubmitEditing={() => this.tags.focus()}
                        />
                        <Text style={style.errorText}>
                          {touched.image && errors.image}
                        </Text>
                      </View> */}

                      <View>
                        <Text style={style.inputHeader}>
                          Hashtag (up to 3 tags)
                        </Text>

                        <TextInput
                          style={style.inputStyle}
                          value={values.tags}
                          onBlur={handleBlur('tags')}
                          onChangeText={handleChange('tags')}
                          placeholder="Add tagss which describe you"
                          placeholderTextColor="#9ea6b5"
                          returnKeyType="next"
                          ref={(input) => (this.tags = input)}
                          onSubmitEditing={() => this.bio.focus()}
                        />
                        <Text style={style.errorText}>
                          {touched.tags && errors.tags}
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
                                {this.state.isPrivate == false
                                  ? 'Visible for all'
                                  : 'Private'}
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
    CreateProfile: (input) => dispatch(CreateProfile(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoForm);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: moderateScale(8),
    paddingHorizontal: moderateScale(24),
  },
  uploadPhotoContainer: {
    alignSelf: 'center',
    backgroundColor: '#515581',
    borderRadius: moderateScale(100),
    width: moderateScale(135),
    height: moderateScale(135),
    marginBottom: moderateScale(25),
    paddingVertical: moderateScale(40),
    paddingHorizontal: moderateScale(10),
  },
  uploadPhotoText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Regular',
  },

  header: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    color: '#FFFFFF',
    marginBottom: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInputContainer: {
    width: moderateScale(164),
  },

  inputHeader: {
    fontSize: moderateScale(12),
    color: '#babec8',
    marginBottom: moderateScale(1),
    fontFamily: 'Montserrat-Regular',
  },
  inputStyle: {
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
    marginTop: moderateScale(1),
    fontSize: moderateScale(16),
    backgroundColor: '#536183',
    opacity: 0.7,
    fontFamily: 'Montserrat-Italic',
    color: '#9ea6b5',
  },
  inputStyleBio: {
    borderRadius: moderateScale(8),
    backgroundColor: '#3e4d6c',
    padding: moderateScale(8),
    marginTop: moderateScale(1),
    fontSize: moderateScale(16),
    textAlignVertical: 'top',
    backgroundColor: '#536183',
    opacity: 0.7,
    fontFamily: 'Montserrat-Italic',
    color: '#9ea6b5',
  },
  visibleButtonContainer: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(6),
    backgroundColor: '#3E4D6C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleDetailsText: {
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
    fontSize: moderateScale(16),
  },
  dropdown: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: moderateScale(41),
    backgroundColor: '#3E4D6C',
    zIndex: 1,
    paddingVertical: moderateScale(4),
    height: moderateScale(35),
    position: 'absolute',
    borderBottomLeftRadius: moderateScale(6),
    borderBottomRightRadius: moderateScale(6),
  },
  dropDownText: {
    color: 'white',
    fontSize: moderateScale(16),
    marginHorizontal: moderateScale(12),
    fontFamily: 'Montserrat-Medium',
    marginBottom: moderateScale(6),
  },
  dropDownTextReportContainer: {
    borderTopWidth: moderateScale(1),
    borderTopColor: 'lightgrey',
    paddingTop: moderateScale(4),
    backgroundColor: '#2C3957',
  },
  icon: {
    marginRight: moderateScale(4),
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(150),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
  },
  privacyText: {
    color: '#babec8',
    fontSize: moderateScale(12),
    marginRight: moderateScale(3),
    marginBottom: moderateScale(3),
    fontFamily: 'Montserrat-Regular',
  },
  buttonContainer: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(10),
  },
  errorText: {
    color: '#F66E6E',
    fontWeight: 'bold',
    marginBottom: moderateScale(1),
    marginTop: moderateScale(1),
    textAlign: 'center',
  },
});
