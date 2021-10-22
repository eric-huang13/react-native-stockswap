import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Switch,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image,
} from 'react-native';
import {UserPost} from '../../actions/posts';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';
import ImagePicker from 'react-native-image-crop-picker';

import {moderateScale} from '../../util/responsiveFont';

const validationSchema = Yup.object().shape({
  body: Yup.string()
    .label('body')
    .min(2, 'body must have more than 2 characters '),
});
class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: false,
    };
  }

  toggleSwitch = (value) => {
    this.setState({enabled: value});
  };
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
    ImagePicker.openPicker({
      forceJpg: true,
      mediaType: 'image',
      includeBase64: true,
      cropping: true,
    }).then((image) => {
      // console.log('Image:', image);
      const path = image?.path || image?.sourceURL;
      // console.log('Path:', path);
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
    //for testing
    // const credentials = {
    //       name: this.state.body,
    //       description:this.state.image,
    //       };
    const {UserPost} = this.props;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={style.mainContainer}>
          <ScrollView>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : null}
              style={{flex: 1}}>
              <Formik
                initialValues={{
                  enabled: false,
                  image: {name: '', type: '', uri: ''},
                  body: '',
                }}
                onSubmit={(values) => {
                  console.log(values, 'values');
                  const data = this.createFormData(values);
                  console.log(data, 'form');
                  // UserPost(values)
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
                    <Text style={style.header}> Post a Publication </Text>
                    {values.image.uri && !errors.image ? (
                      <TouchableOpacity
                        onPress={() => this.onImageSelection(setFieldValue)}>
                        <Image
                          style={style.uploadImageContainer}
                          source={{uri: values.image.uri}}
                        />
                      </TouchableOpacity>
                    ) : (
                      <View style={style.uploadImageContainer}>
                        <TouchableOpacity
                          onPress={() => this.onImageSelection(setFieldValue)}>
                          <Text style={style.uploadImageText}>
                            Tap to upload your photo
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    {/* <View style={style.uploadImageContainer}>
              <TextInput
                onBlur={handleBlur('image')}
                value={values.image}
                onChangeText={handleChange('image')}
                placeholder="Upload cover image"
                placeholderTextColor="#FFFFFF"
                style={style.inputStyleImage}
              />
              <Text style={style.errorText}>
                          {touched.image && errors.image}
                        </Text>
            </View> */}
                    <View style={style.postContainer}>
                      <Text style={style.inputHeader}>Post</Text>
                      <TextInput
                        style={style.inputStyleBody}
                        // onBlur={handleBlur('body')}
                        value={values.body}
                        onChangeText={handleChange('body')}
                        placeholder="Enter post text"
                        placeholderTextColor="#9ea6b5"
                        multiline={true}
                        numberOfLines={4}
                      />
                      <Text style={style.errorText}>{errors.body}</Text>
                    </View>

                    <View style={style.notificationsContainer}>
                      <Text style={style.middleDetailsText}>
                        Turn off comments
                      </Text>
                      <Switch
                        trackColor={{false: '#1A2542', true: '#B8A0FF'}}
                        thumbColor={this.state.enabled ? '#f4f3f4' : '#f4f3f4'}
                        ios_backgroundColor="#f4f3f4"
                        onValueChange={(value) =>
                          setFieldValue('enabled', value)
                        }
                        value={values.enabled}
                        style={{
                          transform: [
                            {scaleX: moderateScale(1.5)},
                            {scaleY: moderateScale(1.5)},
                          ],
                        }}
                      />
                    </View>
                    <View style={style.buttonsContainer}>
                      <TouchableOpacity onPress={() => handleSubmit()}>
                        <Text style={style.publishButton}>Publish</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          values.body === '' && values.image === ''
                            ? Toast.show({
                                type: 'error',
                                text2: 'Post must include body or image.',
                              })
                            : errors.body || errors.image
                            ? Toast.show({
                                type: 'error',
                                text2: 'Please fix errors',
                              })
                            : this.props.navigation.navigate({
                                name: 'CreatePostPreview',
                                params: {data: values},
                              })
                        }>
                        <Text style={style.previewButton}>Preview</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </Formik>
            </KeyboardAvoidingView>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userAccount: state.user.userFakeData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UserPost: (input) => dispatch(UserPost(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2a334a',
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(26),
  },
  header: {
    marginTop: moderateScale(20),
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  uploadImageContainer: {
    marginTop: moderateScale(20),
    backgroundColor: '#46486e',
    width: '100%',
    alignSelf: 'center',
    height: moderateScale(130),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(2),
  },
  uploadImageText: {
    fontSize: moderateScale(14),
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
  },
  inputStyleImage: {
    fontFamily: 'Montserrat-Regular',
    color: '#FFFFFF',
    width: moderateScale(200),
    textAlign: 'center',
  },
  postContainer: {
    width: '100%',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  inputHeader: {
    fontSize: moderateScale(12),
    color: '#babec8',
    marginBottom: moderateScale(1),
    fontFamily: 'Montserrat-Regular',
  },
  inputStyleBody: {
    borderRadius: moderateScale(6),
    backgroundColor: '#3e4d6c',
    marginBottom: moderateScale(12),
    padding: moderateScale(8),
    marginTop: moderateScale(1),
    fontSize: moderateScale(14),
    textAlignVertical: 'top',
    fontFamily: 'Montserrat-Italic',
    color: '#FFFFFF',
    height: moderateScale(200),
  },
  notificationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
    paddingRight: moderateScale(16),
  },
  middleDetailsText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    fontSize: moderateScale(16),
  },
  buttonsContainer: {
    marginTop: moderateScale(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal:30,
  },
  publishButton: {
    alignSelf: 'center',
    color: '#8b64ff',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(160),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
    borderWidth: moderateScale(1),
    borderColor: '#8b64ff',
  },
  previewButton: {
    alignSelf: 'center',
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(160),
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
