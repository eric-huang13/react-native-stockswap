import React, {Component} from 'react';
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
  Image,
} from 'react-native';
import {EditUser} from '../../actions/user';
import {UserPost} from '../../actions/posts';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';

import {connect} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { moderateScale } from '../../util/responsiveFont';

const validationSchema = Yup.object().shape({
  
  body: Yup.string()
    .label('body')
    .min(2, 'body must have more than 2 characters '),

});
class EditPost extends Component {
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
      Object.keys(values).forEach(fieldName => {
      console.log(fieldName, values[fieldName]);
      formData.append(fieldName, values[fieldName]);
      })
    return formData;
  };

  render() {
    //for testing
    // const credentials = {
    //       name: this.state.body,
    //       description:this.state.image,
    //       };
    const {UserPost} = this.props;
    const {post, userAccount} = this.props.route.params;
    const postId = this.props.route.params.post.id;
    

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
                  image:{name:'', type:'', uri:post.img},
                  body:post.body,                  
                }}
                onSubmit={(values) => {
                  console.log(values, 'values');
                  const data = this.createFormData(values);
                  console.log(data,"form") 
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
                    <TouchableOpacity onPress={() => {
                      const options={
                        mediaType:'photo',
                        // includeBase64:true,                  
                      }
                      launchImageLibrary(options, response=> {
                        console.log(response, "response image")
                        if (response.uri)
                        {
                          setFieldValue('image', {name:response.fileName, type:response.type, uri:
                            Platform.OS === 'android' ? response.uri : response.uri.replace('file://', ''),}) 
                        }
                      });
                  }}>
                                 {values.image.uri && !errors.image ?
                                 <>
                    <Text style={style.uploadImageText}>
                          Tap to upload a new photo
                        </Text>
           
                      <Image
                        style={style.uploadImageContainer}
                        source={{uri: values.image.uri}}
                      />
                      <TouchableOpacity onPress={() => {
                            setFieldValue('image', '');
                          }}>
                <Text style={style.uploadImageText}>Remove Photo</Text>
              </TouchableOpacity>
                      </>
                      :
                     <View style={style.uploadImageContainer}>
                       <Text style={style.uploadImageText}>
                          Tap to upload a new photo
                        </Text>
                     </View>
                        }
                    </TouchableOpacity>               
                
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
              <Text style={style.errorText}>
                          {errors.body}
                        </Text>
            </View>

            <View style={style.notificationsContainer}>
              <Text style={style.middleDetailsText}>Turn off comments</Text>
              <Switch
                trackColor={{false: '#1A2542', true: '#B8A0FF'}}
                thumbColor={this.state.enabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={value =>
                  setFieldValue('enabled', value)
                }
                value={values.enabled}
                style={{transform: [{scaleX: moderateScale(1.5)}, {scaleY: moderateScale(1.5)}]}}
              />
            </View>
            <View style={style.buttonsContainer}>
              <TouchableOpacity onPress={() => handleSubmit(

              )}>
                <Text style={style.publishButton}>Publish</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  values.body === "" && values.image === "" ?
                  Toast.show({
                    type: 'error',
                    text2: 'Post must include body or image.',
                  })
                  :
                  errors.body ||errors.image?
                  Toast.show({
                    type: 'error',
                    text2: 'Please fix errors',
                  })
                  :
                  this.props.navigation.navigate({
                    name: 'CreatePostPreview',
                    params: {data: values, edit: postId},
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    // UserPost: (input) => dispatch(UserPost(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2a334a',
    paddingVertical: moderateScale(12),
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
    marginTop: moderateScale(8),
    backgroundColor: '#46486e',
    width: '100%',
    alignSelf: 'center',
    height: moderateScale(130),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(2),
  },
  uploadImageText: {
    fontSize: moderateScale(12),
    color: '#babec8',
    marginBottom: moderateScale(1),
    fontFamily: 'Montserrat-Regular',
    marginTop:moderateScale(12),
    textAlign:'center',
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
    marginTop: moderateScale(1),
  },
  middleDetailsText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    fontSize: moderateScale(16),
  },
  buttonsContainer: {
    marginTop: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: 160,
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
