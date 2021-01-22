import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, SafeAreaView, Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView} from 'react-native';
import {Login} from 'actions/user';
import axios from 'axios'
import LinearGradient from 'react-native-linear-gradient';
import SmallStockSwap from '../../icons/SmallStockSwap'
import GoogleIcon from '../../icons/GoogleIcon'
import AppleIcon from '../../icons/AppleIcon'
import FacebookIcon from '../../icons/FacebookIcon'



class ChangeEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      
    };
   
  }
  handleEmailChange = (text) => {
    this.setState({
      email: text,
    });
  };

  

   handleSubmit = (input) => {
    LoginUser(input)
  };

  

  render() {

    

    return (
      <LinearGradient
        start={{x: 0.1, y: 1}}
        end={{x: 0.1, y: 0.1}}
        colors={[
          '#1D2842',
          '#3d4b6e',          
        ]}
        style={{flex: 1}}>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >        
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <SafeAreaView style={style.mainContainer}>
          
            <View style={style.container}>
              <Text style={style.welcomeHeader}>Change email address</Text>

              <View style={style.currentEmailContainer}>
                <Text style={style.inputHeader}>Current email</Text>
                <Text>Data</Text>
              </View>

              <View style={style.inputEmailContainer}>
                <Text style={style.inputHeader}>Email</Text>

                <TextInput
                  style={style.inputStyle}
                  value={this.state.email}
                  onChangeText={(text) => this.handleEmailChange(text)}
                  placeholder="Enter new email address"
                  placeholderTextColor="#9ea6b5"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              
            
              
              <View>
                <TouchableOpacity onPress={() => LoginUser(this.state)}>
                  <Text style={style.button}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
   
      </SafeAreaView>
      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>
    </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeEmail);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: "#323e5b",
    paddingHorizontal: 2,
    justifyContent:'center',
borderWidth:1,    
  },
 
  
  container: {  
    borderWidth:1,     
    borderRadius: 16,
    backgroundColor: "#2C3957",
    paddingHorizontal: 40,
    paddingVertical: 40,
    flexDirection: "column",
    shadowColor: "rgba(0,0,0,0.13)",
    alignSelf:'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
    
  },
  welcomeHeader: {
    color: "#FFFFFF",
    fontSize: 22,
    marginBottom:4,
    fontFamily:'Montserrat-Bold',
  },

  inputHeader: {
    fontSize: 14,
    color: "#babec8",
    marginBottom: 1,
    fontFamily:'Montserrat-Regular',
   
  },
  inputStyle: {
    borderRadius: 8,       
    marginBottom: 18,
    padding: 8,
    marginTop: 1,
    fontSize:16,
    fontFamily:'Montserrat-Italic',
    backgroundColor: "#536183",
    opacity:0.7,
    color:'#9ea6b5'
    
  },
 
  button: {
    alignSelf: "center",
    backgroundColor: "#8B64FF",
    color: "#FFFFFF",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 162,
    borderRadius: 6,
    fontSize: 16,
    fontFamily:'Montserrat-SemiBold',
  },
  termsContainer:{
    marginBottom:28,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:2,
  },
  
  
});
