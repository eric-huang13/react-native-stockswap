import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { moderateScale} from "../../util/responsiveFont";

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <ScrollView style={style.scrollContainer}>
      <View style={style.container}>
        <Text style={style.header}>            
            Mobile Application End User License Agreement
          </Text>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
            Last modified: [DATE] 
            </Text>
          </View>

          <View style={style.paragraph}>
            <Text style={style.boldTextUnderline}>
            Introduction 
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldText}>
            StockSwap LLC (“<Text style={style.boldText}>Company</Text>” or “<Text style={style.boldText}>We</Text>”) respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes:   
            </Text>
          </View>
          <View style={style.indentSection}>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            The types of information we may collect or that you may provide when you download, install, register with, access, or use the StockSwap app (the “<Text style={style.boldText}>App</Text>”). 
            </Text>
          </View>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            Our practices for collecting, using, maintaining, protecting, and disclosing that information.  
            </Text>
          </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
            This policy applies only to information we collect in this App, and in email, text, and other electronic communications sent through this App. 
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
            This policy DOES NOT apply to information that: 
            </Text>
          </View>
          <View style={style.indentSection}>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            We collect offline or on any other Company apps or websites, including websites you may access through this App.   
            </Text>
          </View>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            You provide to or is collected by any third party (see <Text style={style.underline}>Third-Party Information Collection</Text>).   
            </Text>
          </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
            Our websites and apps, and these other third parties may have their own privacy policies, which we encourage you to read before providing information on or through them. 
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
            Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, do not download, register with, or use this App. By downloading, registering with, or using this App, you agree to this privacy policy. This policy may change from time to time (see <Text style={style.underline}>Changes to Our Privacy Policy</Text>). Your continued use of this App after we revise this policy means you accept those changes, so please check the policy periodically for updates.  
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextUnderline}>
            Children Under the Age of 16 
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
            The App is not intended for children under 16 years of age, and we do not knowingly collect personal information from children under 16. If we learn we have collected or received personal information from a child under 16 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 16, please contact us at privacy@stockswap.us. 
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextUnderline}>
            Information We Collect and How We Collect It 
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
            We collect information from and about users of our App: 
            </Text>
          </View>
          <View style={style.indentSection}>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            Directly from you when you provide it to us.   
            </Text>
          </View>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            Automatically when you use the App.  
            </Text>
          </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextUnderline}>
            Information You Provide to Us 
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
            When you download, register with, or use this App, we may ask you provide information: 
            </Text>
          </View>
          <View style={style.indentSection}>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            By which you may be personally identified, such as name, username, financial information that you integrate into the App through Third-Party integrations, biographical information that you provide to the App in your sole discretion, or any other identifier by which you may be contacted online or offline (“<Text style={style.boldText}>personal information</Text>”);   
            </Text>
          </View>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            That is about you but individually may not identify you, such as hashtags that describe you.   
            </Text>
          </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
            This information includes:   
            </Text>
          </View>
          <View style={style.indentSection}>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            Information that you provide by filling in forms in the App. This includes information provided at the time of registering to use the App, posting material, and requesting further services. We may also ask you for information when you report a problem with the App.   
            </Text>
          </View>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            Records and copies of your correspondence (including email addresses and phone numbers), if you contact us.   
            </Text>
          </View>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            Your responses to surveys that we might ask you to complete for research purposes  
            </Text>
          </View>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            Your search queries on the App.    
            </Text>
          </View>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
            You may also provide information for publication or display (“<Text style={style.boldText}>Posted</Text>”) on public areas of the app (collectively, “<Text style={style.boldText}>User Contributions</Text>”). Your User Contributions are Posted and transmitted to others at your own risk. Additionally, we cannot control the actions of third parties with whom you may choose to share your User Contributions. Therefore, we cannot and do not guarantee that your User Contributions will not be viewed by unauthorized persons. 
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.boldTextUnderline}>
            Automatic Information Collection and Tracking  
            </Text>
          </View>
          <View style={style.paragraph}>
            <Text style={style.mainText}>
            When you download, access, and use the App, it may use technology to automatically collect: 
            </Text>
          </View>

          <View style={style.indentSection}>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            <Text style={style.boldText}>Usage Details.</Text> When you access and use the App, we may automatically collect certain details of your access to and use of the App, including traffic data, logs, and other communication data and the resources that you access and use on or through the App.     
            </Text>
          </View>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            <Text style={style.boldText}>Device Information.</Text> We may collect information about your mobile device and internet connection, including the device’s unique device identifier, IP address, operating system, browser type, mobile network information, and the device’s telephone number.    
            </Text>
          </View>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            <Text style={style.boldText}>Stored Information and Files.</Text> The App also may access metadata and other information associated with other files stored on your device. This may include, for example, photographs, audio and video clips, personal contacts, and address book information.     
            </Text>
          </View>
          <View style={style.paragraph}>            
            <Text style={style.mainText}>
            {'\u2B24  '}
            <Text style={style.boldText}>Location Information.</Text> This App does not collect real-time information about the location of your device.    
            </Text>
          </View>
          </View>
          
         
          


      </View>
      </ScrollView>
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
  boldTextUnderline: {
    color: "white",
    fontSize: moderateScale(14),
    fontFamily: "Montserrat-Bold",
    textDecorationLine: "underline",

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
