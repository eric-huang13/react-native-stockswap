import React, { Component } from 'react'
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
    ScrollView} from 'react-native';

   class ProfileInfoForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: "",
          username: "",
          hashtag:"",
          bio:"",
          image:"",
          
        };

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
          
      }

    render() {
        return (
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
          >
            <SafeAreaView style={style.mainContainer}>
                <ScrollView>
              {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}


                <View style={style.topRow}>
                    
                <View style={style.userNameConainer}>

                <Text style={style.inputHeader}>Name</Text>      
                <TextInput
                    style={style.inputStyle}
                     value={this.state.name}
                    onChangeText={(text) => this.handleNameChange(text)}
                    placeholder="Enter your name"
                    placeholderTextColor="#9ea6b5"
                    returnKeyType="next"
                    onSubmitEditing={() => this.username.focus()}
                />
                            </View>


                  <View style={style.userNameConainer}>

                  <Text style={style.inputHeader}>User name</Text>
                      <TextInput
                        style={style.inputStyle}
                        value={this.state.username}
                        onChangeText={(text) => this.handleUsernameChange(text)}
                        placeholder="Enter your username"
                        placeholderTextColor="#9ea6b5"
                        style={style.inputStyle}
                        ref={(input) => (this.username = input)}
                        onSubmitEditing={() => this.hashtag.focus()}

                      />
                          </View>
                          </View>
                          <View style={style.bottomColumn}>

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
                      onPress={() =>
                        console.log('Account Privacy Button')                      }>
                    <Text style={style.termsText}>Visible for all</Text>              
                    </TouchableOpacity>
                    
                    </View>
                    <View>
                      <TouchableOpacity onPress={() => LoginUser(this.state)}>
                        <Text style={style.button}>Login</Text>
                      </TouchableOpacity>
                  </View>
                  </View>
               
              <View style={style.bottomButtonsContainer}>
              <Text style={style.orText}>--OR--</Text>
              <View style={style.alternateSignUpContainer}>
              <Text style={style.alternateSignUpButton}>LOGIN WITH GOOGLE</Text>
              <Text style={style.alternateSignUpButton}>LOGIN WITH FACEBOOK</Text>
              <Text style={style.alternateSignUpButton}>LOGIN WITH APPLE</Text>
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
          borderWidth: 1,
          padding: 8,
          backgroundColor: "#323e5b",
          // paddingVertical:50,
          paddingHorizontal: 30,
        },
        inner: {
          justifyContent: "flex-end",
        },
        stockHeader: {
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 20,
        },
        stockText: {
          fontSize: 27,
          fontWeight: "bold",
          color: "white",
        },
        swapText: {
          fontSize: 27,
          fontWeight: "bold",
          color: "#b8a0ff",
        },
        container: {
          borderRadius: 8,
          backgroundColor: "#2c3957",
          paddingHorizontal: 20,
          paddingVertical: 20,
          flexDirection: "column",
        },
        welcomeHeader: {
          color: "white",
          fontSize: 24.5,
          fontWeight: "bold",
          marginBottom:3,
        },
        loginHeader:{
          color:'#9299a9',
          marginBottom: 14,
          fontSize:16.5,
      
        },
        inputHeader: {
          fontSize: 14,
          color: "#c1c5cd",
          marginBottom: 1,
        },
        inputStyle: {
          borderRadius: 8,
          backgroundColor: "#3e4d6c",
          marginBottom: 12,
          padding: 8,
          marginTop: 1,
          fontSize:16
        },
        inputStyleConfirm: {
          borderRadius: 8,
          backgroundColor: "#3e4d6c",
          fontStyle: "italic",
          marginBottom: 10,
          padding: 8,
          marginTop: 1,
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
        termsContainer:{
          marginBottom:28,
          flexDirection:'row',
          justifyContent:'space-between',
          paddingHorizontal:2,
        },
        leftTerms:{
          flexDirection:'row',
      
        },
        newText:{
          color: "white",
          fontSize: 12,
          marginRight:3,
        },
        termsText: {
          color: "#b8a0ff",
          fontSize: 12,
        },
        bottomButtonsContainer:{
            alignItems:'center',
        },
        orText:{
          marginVertical:16,
          color:'lightgrey',
          fontSize:16,
        },
        alternateSignUpContainer:{
            flexDirection:'column',
            justifyContent:'space-between',
      
        },
        alternateSignUpButton: {
          alignSelf: "center",
          backgroundColor: "#3e4d6c",
          color: "white",
          textAlign: "center",
          paddingVertical: 12,
          paddingHorizontal: 20,
          width: 330,
          borderRadius: 6,
          fontSize: 14,
          marginBottom:10,
        },
      });
      