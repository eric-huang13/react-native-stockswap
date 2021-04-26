import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { moderateScale} from "../../util/responsiveFont";
import UserAgreement from './UserAgreement'
import PrivacyPolicy from '../MyProfileTabScreens/PrivacyPolicy'



export default class TermsAndConditions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen:'agreement'     
    };
  }
  screenSelect = (name) =>{
    this.setState({screen: name});
  }
  render() {
    const { handleTerms, handleCheck } = this.props;

    //setTermsVersion to current version, close modal, toggleCheck true
    const handleFormikTermsAgree = () => {
      this.props.props.setFieldValue("termsVersion", "Version 1");
      handleTerms(false);
      handleCheck(true);
    };

    //setTermsVersion to "", close modal, toggleCheck false
    const handleFormikTermsCancel = () => {
      this.props.props.setFieldValue("termsVersion", "");
      handleTerms(false);
      handleCheck(false);
    };

    return (
      <View style={style.scrollContainer}>
      
          {this.state.screen=== 'agreement' ?  
          <ScrollView>
          <UserAgreement screenSelect={this.screenSelect}/>
          <View style={style.buttonContainer}>
            <TouchableOpacity onPress={() => handleFormikTermsCancel()}>
              <Text style={style.agreeButton}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleFormikTermsAgree()}>
              <Text style={style.agreeButton}>I agree</Text>
            </TouchableOpacity>
          </View>          
          </ScrollView> 
          :
           <PrivacyPolicy screenSelect={this.screenSelect}/>
           }
         
        
        

          
      </View>
    );
  }
}

const style = StyleSheet.create({
  scrollContainer:{
    backgroundColor: "#323e5b",
  },
  container: {
    flex: 1,
    padding: moderateScale(8),
    backgroundColor: "#323e5b",
    paddingHorizontal: moderateScale(30),
    marginVertical: moderateScale(8),
  },
  header: {
    color: "white",
    fontSize: moderateScale(20),
    fontFamily: "Montserrat-Bold",
  },
  mainText: {
    color: "white",
    fontSize: moderateScale(14),
    fontFamily: "Montserrat-Medium",
  },
  paragraph: {
    marginVertical: moderateScale(6),
  },
  indentSection: {
    marginLeft: moderateScale(18),
  },
  indentTwice:{
    marginLeft: moderateScale(28),
  },
  boldText: {
    color: "white",
    fontSize: moderateScale(14),
    fontFamily: "Montserrat-Bold",
  },
  underline: {
    textDecorationLine: "underline",
  },
  highlight:{
    backgroundColor:'lightgrey'
  },
  link:{
    backgroundColor:'yellow'
  },
  buttonContainer: {
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  agreeButton: {
    backgroundColor: "#8B64FF",
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(150),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(17),
    fontWeight: "bold",
  },
});
