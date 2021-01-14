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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={style.mainContainer}>
          <ScrollView>
            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
            
            <Text style={style.header}>Fill Profile Info</Text>
            

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
                  style={style.inputStyle}
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
                  style={style.inputStyle}
                  value={this.state.bio}
                  onChangeText={(text) => this.handleBioChange(text)}
                  placeholder="Enter your bio"
                  placeholderTextColor="#9ea6b5"
                  secureTextEntry
                  style={style.inputStyle}
                  ref={(input) => (this.bio = input)}
                />
              </View>

              <View style={style.termsContainer}>
                <Text style={style.newText}>Account Privacy</Text>
                <TouchableOpacity
                  onPress={() => console.log("Account Privacy Button")}
                >
                  <Text style={style.termsText}>Visible for all</Text>
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
    backgroundColor: "#323e5b",
    paddingHorizontal: 30,
  },
  imageContainer:{
    
  },
  header: {
    textAlign: "center",
    fontSize: 19,
    color: "white",
    fontWeight: "bold",
    marginBottom:20,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInputContainer: {
      width:168,     
  },
 
//   container: {
//     borderRadius: 8,
//     backgroundColor: "#2c3957",
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//     flexDirection: "column",
//   },

 
  inputHeader: {
    fontSize: 14.5,
    color: "#c1c5cd",
    marginBottom: 1,
  },
  inputStyle: {
    borderRadius: 8,
    backgroundColor: "#3e4d6c",
    marginBottom: 12,
    padding: 8,
    marginTop: 1,
    fontSize: 16,
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
  termsContainer: {
    marginBottom: 28,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 2,
  },
 
  newText: {
    color: "white",
    fontSize: 12,
    marginRight: 3,
  },
  termsText: {
    color: "#b8a0ff",
    fontSize: 12,
  },
  
 
  
  });
