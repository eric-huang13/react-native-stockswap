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
import {CreateProfileImage, EditUserProfile} from '../../actions/profile';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ImagePicker from 'react-native-image-crop-picker';
import {moderateScale} from '../../util/responsiveFont';
import {Buffer} from 'buffer';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label('Name')
    .required('Name is required')
    .min(2, 'Must have at least 2 characters'),

  username: Yup.string().label('username').required('username is required'),

  tags: Yup.string()
    .label('tags')
    .matches(/^#\w+$/, 'Must be a tags')
    .min(2, 'tags must have more than 2 characters '),

  bio: Yup.string()
    .label('bio')
    .min(2, 'bio must have more than 2 characters '),

  // image: Yup.string().url('Must be a url'),
});

class EditProfile extends Component {
  constructor(props) {
    super(props);
  }
  //Creating FormData for sending image to backend
  createFormData = (values) => {
    let formData = new FormData();
    Object.keys(values).forEach((fieldName) => {
      console.log(fieldName, values[fieldName]);
      formData.append(fieldName, values[fieldName]);
    });
    return formData;
  };

  onImageSelection = (setFieldValue) => {
    const options = {
      mediaType: 'photo',
      // includeBase64:true,
    };
    ImagePicker.openPicker({
      forceJpg: true,
      mediaType: 'image',
      includeBase64: true,
    }).then((image) => {
      console.log('Image:', image);
      const path = image?.path || image?.sourceURL;
      console.log('Path:', path);
      if (path && setFieldValue) {
        setFieldValue('image', {
          name: image.filename,
          type: image.mime,
          data: image.data,
          uri: Platform.OS === 'android' ? path : path.replace('file://', ''),
        });
      }
    });
  };

  render() {
    const {
      userAccount,
      userProfile,
      CreateProfileImage,
      EditUserProfile,
      userImage,
      userData,
    } = this.props;
    // console.log('USER PROFILE:', JSON.stringify(userProfile));

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
                  // id: userAccount.id,
                  name: userProfile.name,
                  username: userProfile.username,
                  image: {name: '', type: '', uri: userImage},
                  tags: userAccount.hashtag,
                  bio: userProfile.bio,
                }}
                onSubmit={(values) => {
                  console.log(values, 'infooooo');
                  // const data = this.createFormData(values);
                  // console.log(data, 'form');
                  const id = userProfile?._id;
                  const token = userData.accessToken;
                  const buffer = Buffer.from(values.image.data, 'base64');
                  CreateProfileImage(id, token, buffer);

                  EditUserProfile({
                    name: values.name,
                    username: values.username,
                    bio: values.bio,
                    tags: values.tags,
                  });
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
                        onPress={() => this.onImageSelection(setFieldValue)}>
                        <Image
                          style={style.uploadPhotoContainer}
                          source={{
                            uri: values.image.uri,
                            headers: {
                              Authorization: `Bearer ${this.props.userData.accessToken}`,
                            },
                          }}
                        />
                      </TouchableOpacity>
                    ) : (
                      <View style={style.uploadPhotoContainer}>
                        <TouchableOpacity
                          onPress={() => this.onImageSelection(setFieldValue)}>
                          <Text style={style.uploadPhotoText}>
                            Tap to upload your photo
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}

                    {/* {values.image === '' ? (
                      <View style={style.uploadPhotoContainer} />
                    ) : (
                      <Image style={style.image} source={{uri: values.image}} />
                    )} */}

                    <View style={style.topRow}>
                      <View style={style.rowInputContainer}>
                        <Text style={style.inputHeader}>Name</Text>
                        <TextInput
                          style={style.inputStyle}
                          onBlur={handleBlur('name')}
                          value={values.name}
                          onChangeText={handleChange('name')}
                          placeholder="Enter your name"
                          placeholderTextColor="#FFFFFF"
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
                          tags (up to 3 tags)
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

                      <View style={style.buttonsContainer}>
                        <TouchableOpacity
                          onPress={() => this.props.navigation.goBack()}>
                          <Text style={style.cancelButton}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleSubmit()}>
                          <Text style={style.saveButton}>Save</Text>
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
    users: state.people.users,
    userAccount: state.user.userFakeData,
    userProfile: state.user.userProfile,
    userImage: state.user.userImage,
    userData: state.user.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    EditUserProfile: (input) => dispatch(EditUserProfile(input)),
    CreateProfileImage: (id, token, input) =>
      dispatch(CreateProfileImage(id, token, input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: moderateScale(8),
    paddingHorizontal: moderateScale(20),
  },
  uploadPhotoContainer: {
    alignSelf: 'center',
    backgroundColor: '#515581',
    borderRadius: moderateScale(100),
    width: moderateScale(135),
    height: moderateScale(135),
    marginBottom: moderateScale(20),
    paddingVertical: moderateScale(40),
    paddingHorizontal: moderateScale(10),
  },
  uploadPhotoText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Regular',
  },
  image: {
    alignSelf: 'center',
    backgroundColor: '#515581',
    borderRadius: moderateScale(100),
    width: moderateScale(135),
    height: moderateScale(135),
    marginBottom: moderateScale(30),
  },
  header: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    color: '#FFFFFF',
    marginBottom: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInputContainer: {
    width: moderateScale(168),
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
    fontSize: moderateScale(14),
    backgroundColor: '#3e4d6c',
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
  },
  inputStyleBio: {
    borderRadius: moderateScale(8),
    backgroundColor: '#3e4d6c',
    padding: moderateScale(8),
    marginTop: moderateScale(1),
    fontSize: moderateScale(14),
    textAlignVertical: 'top',
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
  },

  buttonsContainer: {
    marginTop: moderateScale(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    alignSelf: 'center',
    color: '#8b64ff',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(168),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
    borderWidth: moderateScale(1),
    borderColor: '#8b64ff',
  },
  saveButton: {
    alignSelf: 'center',
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(168),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
  },
  errorText: {
    color: '#F66E6E',
    fontWeight: 'bold',
    marginBottom: moderateScale(1),
    marginTop: moderateScale(1),
    textAlign: 'center',
  },
});
