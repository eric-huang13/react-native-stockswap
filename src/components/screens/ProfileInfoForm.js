import React, { Component } from "react";
import { connect } from "react-redux";
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
  ScrollView,
} from "react-native";

import LinearGradient from 'react-native-linear-gradient';

class ProfileInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      hashtag: "",
      bio: "",
      image: "",
    };    
  }handleNameChange = (text) => {
    this.setState({
      name: text,
    });
  };

  handleUsernameChange = (text) => {
    this.setState({
      username: text,
    });
  };

  handleHashtagChange = (text) => {
    this.setState({
      hashtag: text,
    });
  };
  handleBioChange = (text) => {
    this.setState({
      bio: text,
    });
  };
  handleImageChange = (text) => {
    this.setState({
      image: text,
    });
  };

  render() {
    return (
      <LinearGradient
        start={{x: 0.1, y: 1}}
        end={{x: 0.1, y: 0.1}}
        colors={[
          '#1D2842',       
          // '#485476',  
           '#3d4b6e',           
        ]}
        style={{flex:1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={style.mainContainer}>
          <ScrollView>
            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
            
            <Text style={style.header}>Fill Profile Info</Text>
            <View style={style.uploadPhotoContainer}>
                <Text style={style.uploadPhotoText}>Tap to upload your photo</Text>
            </View>

            <View style={style.topRow}>
              <View style={style.rowInputContainer}>
                <Text style={style.inputHeader}>Name</Text>
                <TextInput
                  style={style.inputStyle}
                  value={this.state.name}
                  onChangeText={(text) => this.handleNameChange(text)}
                  placeholder="Enter your name"
                  placeholderTextColor="#9ea6b5"
                  returnKeyType="next"
                  onSubmitEditing={() => this.username.focus()}
                  ref={(input) => (this.name = input)}
                />
              </View>

              <View style={style.rowInputContainer}>
                <Text style={style.inputHeader}>User name</Text>
                <TextInput
                  style={style.inputStyle}
                  value={this.state.username}
                  onChangeText={(text) => this.handleUsernameChange(text)}
                  placeholder="Enter your username"
                  placeholderTextColor="#9ea6b5"
                  style={style.inputStyle}
                  ref={(input) => (this.username = input)}
                  onSubmitEditing={() => this.image.focus()}
                />
              </View>
            </View>
            <View style={style.bottomColumn}>
            <View style={style.imageContainer}>
            <Text style={style.inputHeader}>Image</Text>
                <TextInput
                  value={this.state.bio}
                  onChangeText={(text) => this.handleImageChange(text)}
                  placeholder="Image"
                  placeholderTextColor="#9ea6b5"
                  secureTextEntry
                  style={style.inputStyle}
                  ref={(input) => (this.image = input)}
                  onSubmitEditing={() => this.hashtag.focus()}                />
            </View>
              <View>
                <Text style={style.inputHeader}>Hashtag</Text>

                <TextInput
                  style={style.inputStyle}
                  value={this.state.hashtag}
                  onChangeText={(text) => this.handleHashtagChange(text)}
                  placeholder="Enter your hashtag"
                  placeholderTextColor="#9ea6b5"
                  returnKeyType="next"
                  ref={(input) => (this.hashtag = input)}
                  onSubmitEditing={() => this.bio.focus()}
                />
              </View>
              <View>
                <Text style={style.inputHeader}>Bio</Text>
                <TextInput
                  style={style.inputStyleBio}
                  value={this.state.bio}
                  onChangeText={(text) => this.handleBioChange(text)}
                  placeholder="Enter your bio"
                  placeholderTextColor="#9ea6b5"
                  secureTextEntry
                  multiline = {true}
                  numberOfLines = {4}
                  ref={(input) => (this.bio = input)}
                />
              </View>

              <View style={style.privacyContainer}>
                <Text style={style.privacyText}>Account Privacy</Text>
                <TouchableOpacity
                  onPress={() => console.log("Account Privacy Button")}
                >
                  <Text style={style.buttonText}>Visible for all</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => LoginUser(this.state)}>
                  <Text style={style.button}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* </TouchableWithoutFeedback> */}
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user.user,
    loading: state.user.loading,
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LoginUser: (input) => dispatch(Login(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoForm);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    // backgroundColor: "#323e5b",
    paddingHorizontal: 30,
  },
  uploadPhotoContainer:{
    alignSelf:'center',
    backgroundColor: "#515581",
    // backgroundColor: "#B8A0FF",    
    borderRadius:100,
    width:135,
    height:135,
    marginBottom:30,
    paddingVertical:40,
    paddingHorizontal:10
  },
  uploadPhotoText:{
      color:'#FFFFFF',
      textAlign:'center',
      fontSize:16,
      fontFamily:'Montserrat-Regular',

   },
  header: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom:20,
    fontFamily:'Montserrat-Bold',

  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInputContainer: {
      width:168,     
  },
  
  inputHeader: {
    fontSize: 14,
    color: "#babec8",
    marginBottom: 1,
    fontFamily:'Montserrat-Regular',
    

  },
  inputStyle: {
    borderRadius: 8,
    marginBottom: 12,
    padding: 8,
    marginTop: 1,
    fontSize: 16,
    backgroundColor: "#536183",
    opacity:0.7,
    fontFamily:'Montserrat-Italic',
    color:'#9ea6b5'
    
    

  },
  inputStyleBio: {
    borderRadius: 8,
    backgroundColor: "#3e4d6c",
    marginBottom: 12,
    padding: 8,
    marginTop: 1,
    fontSize: 16,
    textAlignVertical:'top',
    color:'#9ea6b5'
  },
 
  button: {
    alignSelf: "center",
    backgroundColor: "#8b64ff",
    color: "white",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 150,
    borderRadius: 6,
    fontSize: 17,
  },
  privacyContainer: {
    marginBottom: 28,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 2,
  },
 
  privacyText: {
    color: "#c1c5cd",
    fontSize: 14,
    marginRight: 3,
  },
  buttonText: {
    backgroundColor: "#3e4d6c",
    color: "white",
    fontSize: 18,
    paddingVertical:5,
    paddingHorizontal:8,
    borderRadius:4,
  },
  
 
  
  });
