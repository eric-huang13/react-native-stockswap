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
import {EditUser} from '../../actions/user'
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label("Name")
    .required("Name is required")
    .min(2, "Must have at least 2 characters"),

  username: Yup.string()
    .label("username")
    .required("Username is required"),

  hashtag: Yup.string()
    .label("hashtag")
    .matches(/^#\w+$/, "Must be a hashtag")    
    .min(2, "Hashtag must have more than 2 characters "),

  bio: Yup.string()
    .label("bio")
    .min(2, "bio must have more than 2 characters "),
    
  image: Yup.string()
 .url("Must be a url"),
});

class EditProfile extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   id:'',
    //   name: '',
    //   username: '',
    //   hashtag: '',
    //   bio: '',
    //   image: '',
    // };
  }
 
  // handleInputChange = (inputName, inputValue) => {
  //   this.setState(state => ({ 
  //     ...state,
  //     [inputName]: inputValue 
  //   }))
  // }
  // componentDidMount() {
  //   const {user, userAccount} = this.props;
  //   const userid = 15;
  //   // const selectedUser = users.filter((user) => user.id === userid);
    
  //     // selectedUser.map((user) => {
  //       this.setState({
  //         id:userAccount.id,
  //         name: userAccount.name,
  //         username: userAccount.username,
  //         hashtag: userAccount.hashtag,
  //         bio: userAccount.bio,
  //         image: userAccount.img,
  //       });
  //     // });
    
  
  // }
  // handleSubmit = (input) => {
  //   44(input)
  // };
  render() {
    const {EditUserAccount, userAccount} = this.props;
    return (
      <LinearGradient
        start={{x: 0.1, y: 1}}
        end={{x: 0.1, y: 0.1}}
        colors={[
          '#1D2842',
          // '#485476',
          '#3d4b6e',
        ]}
        style={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{flex: 1}}>
          <SafeAreaView style={style.mainContainer}>
            <ScrollView>
            <Formik
                initialValues={{
                  id:userAccount.id,
                  name: userAccount.name,
                  username: userAccount.username,
                  image: userAccount.img,
                  hashtag: userAccount.hashtag,
                  bio: userAccount.bio,
                }}
                onSubmit={(values) => {
                  console.log(values, "infooooo");
                }}
                validationSchema={validationSchema}
              >
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

              {values.image === '' ? (
                <View style={style.uploadPhotoContainer}></View>
              ) : (
                <Image style={style.image} source={{uri: values.image}} />
              )}

                <View style={style.topRow}>
                      <View style={style.rowInputContainer}>
                        <Text style={style.inputHeader}>Name</Text>
                        <TextInput
                          style={style.inputStyle}
                          onBlur={handleBlur("name")}
                          value={values.name}
                          onChangeText={handleChange("name")}
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
                          onBlur={handleBlur("username")}
                          onChangeText={handleChange("username")}
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
                          onBlur={handleBlur("image")}
                          onChangeText={handleChange("image")}
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
                          onBlur={handleBlur("hashtag")}
                          onChangeText={handleChange("hashtag")}
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
                          onBlur={handleBlur("bio")}
                          onChangeText={handleChange("bio")}
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
                  <TouchableOpacity
                    onPress={() => handleSubmit
                    ()}>
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
    userAccount: state.user.userFakeData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    EditUserAccount: (input) => dispatch(EditUser(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    paddingHorizontal: 20,
  },
  uploadPhotoContainer: {
    alignSelf: 'center',
    backgroundColor: '#515581',
    // backgroundColor: "#B8A0FF",
    borderRadius: 100,
    width: 135,
    height: 135,
    marginBottom: 30,
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  uploadPhotoText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#515581',
    // backgroundColor: "#B8A0FF",
    borderRadius: 100,
    width: 135,
    height: 135,
    marginBottom: 30,
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
    width: 168,
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
    fontSize: 14,
    backgroundColor: '#3e4d6c',
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
  },
  inputStyleBio: {
    borderRadius: 8,
    backgroundColor: '#3e4d6c',
    padding: 8,
    marginTop: 1,
    fontSize: 14,
    textAlignVertical: 'top',
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
  },

  buttonsContainer: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    alignSelf: 'center',
    color: '#8b64ff',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 168,
    borderRadius: 6,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    borderWidth: 1,
    borderColor: '#8b64ff',
  },
  saveButton: {
    alignSelf: 'center',
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 168,
    borderRadius: 6,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  errorText: {
    color: "#F66E6E",
    fontWeight: "bold",
    marginBottom: 1,
    marginTop: 1,
    textAlign: "center",
  },
});
