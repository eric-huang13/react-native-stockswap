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
  Image
} from "react-native";

import LinearGradient from 'react-native-linear-gradient';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      hashtag: "",
      bio: "",
      image: "",
    };    
  }
  handleNameChange = (text) => {
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
  componentDidMount() {
    const {users} = this.props
    const id = 1
    const selectedUser = users.filter((user) => user.id === id);
    {selectedUser.map((user) => {
      this.setState({
        name: user.name,
        username: user.username,
        hashtag: user.hashtag,
        bio: user.bio,
        image: user.img,
      })
    })}
  }
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
            
            {this.state.image === '' ?
            <View style={style.uploadPhotoContainer}>
              </View> 
              : 
            <Image style={style.image} source={{uri: this.state.image}} />
    }

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
                  placeholder="@example"
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
                  value={this.state.image}
                  onChangeText={(text) => this.handleImageChange(text)}
                  placeholder="Image"
                  placeholderTextColor="#9ea6b5"
                  style={style.inputStyle}
                  ref={(input) => (this.image = input)}
                  onSubmitEditing={() => this.hashtag.focus()}                />
            </View>
              <View>
                <Text style={style.inputHeader}>Hashtag (up to 3 tags)</Text>

                <TextInput
                  style={style.inputStyle}
                  value={this.state.hashtag}
                  onChangeText={(text) => this.handleHashtagChange(text)}
                  placeholder="Add hashtags which describe you"
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
                  placeholder="Tell a bit about yourself"
                  placeholderTextColor="#9ea6b5"
                  multiline = {true}
                  numberOfLines = {4}
                  ref={(input) => (this.bio = input)}
                />
              </View>

          
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
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
    users: state.company.users,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LoginUser: (input) => dispatch(Login(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

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
      fontSize:14,
      fontFamily:'Montserrat-Regular',

   },
   image: {
    height: 80,
    width: 80,
    borderRadius: 50,
    alignSelf:'center',
    backgroundColor: "#515581",
    // backgroundColor: "#B8A0FF",    
    borderRadius:100,
    width:135,
    height:135,
    marginBottom:30,
   
  },
  header: {
    textAlign: "center",
    fontSize: 16,
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
    fontSize: 12,
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
    backgroundColor: "#536183",
    opacity:0.7,
    fontFamily:'Montserrat-Italic',
    color:'#9ea6b5'
  },
 
  button: {
    alignSelf: "center",
    backgroundColor: "#8b64ff",
    color: "#FFFFFF",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 150,
    borderRadius: 6,
    fontSize: 14,
    fontFamily:'Montserrat-SemiBold',

  },
  privacyContainer: {
    marginBottom: 28,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 2,
    
  },
 
  privacyText: {
    color: "#babec8",
    fontSize: 12,
    marginRight: 3,
    fontFamily:'Montserrat-Regular',

  },
  buttonText: {
    backgroundColor: "#3E4D6C",
    color: "#FFFFFF",
    fontSize: 16,
    paddingVertical:12,
    paddingHorizontal:10,
    borderRadius:6,
    fontFamily:'Montserrat-Medium',

  },
  
 
  
  });
