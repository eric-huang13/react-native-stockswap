import React, {Component} from 'react';
import {Button, SafeAreaView, Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
 } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';




class PasswordSuccess extends Component {
  
  
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
         

      <SafeAreaView style={style.mainContainer}>
          
            <View style={style.container}>
              <Text style={style.header}>Success</Text>
              <Text style={style.belowHeader}>Password sucessfully changed</Text>
            
                          
              <View style={style.buttonContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('MyProfileSettings')}>
                  <Text style={style.button}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
   
      </SafeAreaView>
    
    </LinearGradient>
    );
  }
}



export default PasswordSuccess;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: "#323e5b",
    paddingHorizontal: 2,
    justifyContent:'center',
  }, 
  
  container: {  
    width:'85%',
    height:'55%',
    borderRadius: 8,
    backgroundColor: "#2C3957",
    paddingHorizontal: 35,
    paddingVertical: 28,
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
  header: {
    color: "#FFFFFF",
    fontSize: 20,
    marginBottom:16,
    fontFamily:'Montserrat-Bold',
    textAlign:'center'
  },
  belowHeader: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom:16,
    fontFamily:'Montserrat-Medium',
    textAlign:'center'
  },
buttonContainer:{
borderWidth:1,
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
    marginTop:10,
  },

  
});
