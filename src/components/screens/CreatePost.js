import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, SafeAreaView, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback,Switch, TouchableOpacity } from 'react-native'


export default class CreatePost extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          enabled: false,
          image:'',
          body:'',
        };
      }
      
      toggleSwitch = (value) => {
        this.setState({enabled: value});
      };
      handleImageChange = (text) => {
        this.setState({
          image: text,
        });
      };
      handleBodyChange = (text) => {
        this.setState({
          body: text,
        });
      };
      
    render() {
        
        return (
        
        
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={style.mainContainer}>
            <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{flex: 1}}>
                <Text style={style.header}> Post a Publication </Text>
                <View style={style.uploadImageContainer}>               
                  <TextInput
                    value={this.state.image}
                    onChangeText={(text) => this.handleImageChange(text)}
                    placeholder="Upload cover image"
                    placeholderTextColor="#FFFFFF"
                    style={style.inputStyleImage}
                    ref={(input) => (this.image = input)}
                    onSubmitEditing={() => this.hashtag.focus()}
                  />
                </View>
                <View style={style.postContainer}>
                  <Text style={style.inputHeader}>Post</Text>
                  <TextInput
                    style={style.inputStyleBody}
                    value={this.state.body}
                    onChangeText={(text) => this.handleBodyChange(text)}
                    placeholder="Enter post text"
                    placeholderTextColor="#9ea6b5"
                    multiline={true}
                    numberOfLines={4}
                    ref={(input) => (this.body = input)}
                  />
                </View>
                
                <View style={style.notificationsContainer}>
              <Text style={style.middleDetailsText}>
                Turn off comments
              </Text>
              <Switch
                trackColor={{false: '#1A2542', true: '#B8A0FF'}}
                thumbColor={this.state.enabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={this.toggleSwitch}
                value={this.state.enabled}
                style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
              />
            </View>
            <View style={style.buttonsContainer}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}>
                    <Text style={style.publishButton}>Publish</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('CreatePostPreview')
                }>
                  <Text style={style.previewButton}>Preview</Text>
                </TouchableOpacity>
                  {/* <TouchableOpacity
                    onPress={() => EditUserAccount(this.state)}>
                    <Text style={style.previewButton}>Preview</Text>
                  </TouchableOpacity> */}
                </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
            </TouchableWithoutFeedback>
       
            
        )
    }
}

const style = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor:'#2a334a',
        paddingVertical:20, 
        paddingHorizontal:26,  
        },
    header:{
        marginTop:20,
        fontSize:20,
        fontFamily: 'Montserrat-Bold',
        color:'#FFFFFF', 
        textAlign:'center',   
    },
    uploadImageContainer:{
        marginTop:20,
        backgroundColor:'#46486e',
        width:'100%',
        alignSelf:'center',
        height:130,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:2,
    },
    uploadImageText:{
        fontSize:14,
        color:'#FFFFFF',
        fontFamily: 'Montserrat-Regular',

    },
    inputStyleImage: {
        fontFamily: 'Montserrat-Regular',
        color: '#FFFFFF',
        width:200,
        textAlign:'center'
                
      },
    postContainer:{
        width:'100%',
        alignSelf:'center',
        marginTop:20,
    },
    inputHeader: {
        fontSize: 12,
        color: '#babec8',
        marginBottom: 1,
        fontFamily: 'Montserrat-Regular',
      },
      inputStyleBody: {
        borderRadius: 6,
        backgroundColor: '#3e4d6c',
        marginBottom: 12,
        padding: 8,
        marginTop: 1,
        fontSize: 14,
        textAlignVertical: 'top',
        fontFamily: 'Montserrat-Italic',
        color: '#FFFFFF',
        height:200,
        
      },
      notificationsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
        // marginHorizontal:30,
      },
      middleDetailsText: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
        fontSize: 16,
      },
      buttonsContainer: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal:30,
      },
      publishButton: {
        alignSelf: 'center',
        color: '#8b64ff',
        textAlign: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: 160,
        borderRadius: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        borderWidth: 1,
        borderColor: '#8b64ff',
      },
      previewButton: {
        alignSelf: 'center',
        backgroundColor: '#8b64ff',
        color: '#FFFFFF',
        textAlign: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: 160,
        borderRadius: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
      },
})