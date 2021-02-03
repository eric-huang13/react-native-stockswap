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
  ScrollView,
} from "react-native";
import { ProfilePost } from "../../actions/user";
import TriangleIcon from '../../icons/TriangleIcon';


import LinearGradient from 'react-native-linear-gradient';

class ProfileInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      image: "",
      hashtag: "",     
      bio: "",
      privacy:'Visible for all', 
      shouldShow:false,      
    };    
  }

  dropDownSelect(setting) {
    this.setState({privacy:setting, shouldShow:false});
  }
  
  handleInputChange = (inputName, inputValue) => {
    this.setState(state => ({ 
      ...state,
      [inputName]: inputValue 
    }))
  }

  
  render() {
    const { AddProfile, userData } = this.props;
    const {shouldShow} = this.state; 


    const handleSubmit = (input) => {
      AddProfile(input)
    };

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
                  onChangeText={value => this.handleInputChange('name', value)}
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
                  onChangeText={value => this.handleInputChange('username', value)}
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
                  onChangeText={value => this.handleInputChange('image', value)}
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
                  onChangeText={value => this.handleInputChange('hashtag', value)}
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
                  onChangeText={value => this.handleInputChange('bio', value)}
                  placeholder="Tell a bit about yourself"
                  placeholderTextColor="#9ea6b5"
                  multiline = {true}
                  numberOfLines = {4}
                  ref={(input) => (this.bio = input)}
                />
              </View>

              <View>
                    <Text style={style.privacyText}>
                        Account privacy
                    </Text>

               
                <View style={style.dotsDropdownContainer}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    shouldShow: !shouldShow,
                  })
                }>
                  <View style={style.visibleButtonContainer}>
          <Text style={style.middleDetailsText}>{this.state.privacy}</Text>
        <TriangleIcon style={style.icon}/>        
          </View>
              </TouchableOpacity>
              {this.state.shouldShow ? (
                <View style={style.dropdown}>
                  { this.state.privacy == 'Visible for all' ?
                  <TouchableOpacity onPress={() => this.dropDownSelect('Private')}>
                  <Text style={style.dropDownText}>Private</Text>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => this.dropDownSelect('Visible for all')}>
                  <Text style={style.dropDownText}>Visible for all</Text>
              </TouchableOpacity>
              
                  }          
                </View>
              ) : null}
            </View> 
            </View>
              <View style={style.buttonContainer}>
                <TouchableOpacity onPress={() => console.log(this.state)}>
                  <Text style={style.button}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>

          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

//Redux for easy hookup later
const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddProfile: (input) => dispatch(ProfilePost(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoForm);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    // backgroundColor: "#323e5b",
    paddingHorizontal: 24,
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
      width:164,     
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
  visibleButtonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#3E4D6C',
    // marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleDetailsText: {
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
    fontSize: 16,
  },
  dropdown: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 41,
    backgroundColor: '#3E4D6C',
    zIndex: 1,
    paddingVertical: 4,
    height:35,
    position:'absolute',
    borderBottomLeftRadius:6,
    borderBottomRightRadius:6,
  },
  dropDownText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 12,
    fontFamily:'Montserrat-Medium',
    marginBottom:6,  
  },
  dropDownTextReportContainer: {
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    paddingTop: 4,
    backgroundColor:'#2C3957',
  },
  icon:{
    marginRight:4,
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
  privacyText: {
    color: "#babec8",
    fontSize: 12,
    marginRight: 3,
    marginBottom:3,
    fontFamily:'Montserrat-Regular',

  },
  buttonContainer: {
  marginTop:42,

  }, 
 
  
  });
