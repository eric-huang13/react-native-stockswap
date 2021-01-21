import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,Switch } from 'react-native'
import TriangleIcon from '../../icons/TriangleIcon'
export default class MyProfileSettings extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          enabled: false,          
        };
      }
   
    toggleSwitch = value =>{ this.setState({ enabled: value});
};    render() {
        return (
            <SafeAreaView style={style.container}>
                <ScrollView>
                <View style={style.topDetailsContainer}>
                    <View style={style.detailsRow}>
                    <View style={style.detailsColumn}>
                    <Text style={style.detailsText}>Email</Text>
                    <Text style={style.detailsData}>Test</Text>
                    </View >
                    <Text style={style.detailsButton}>Change</Text>
                    </View>

                    <View style={style.detailsRow}>
                    <View style={style.detailsColumn}>
                    <Text style={style.detailsText}>Phone Number</Text>
                    <Text style={style.detailsData}>Test</Text>
                    </View>
                    <Text style={style.detailsButton}>Change</Text>
                    </View>

                    <View style={style.detailsRow}>
                    <View style={style.detailsColumn}>
                    <Text style={style.detailsText}>Password</Text>
                    <Text style={style.detailsData}>Test</Text>
                    </View>
                    <View style={style.detailsButtonContainer}>
                    <Text style={style.detailsButton}>Show</Text>
                    <Text style={style.detailsButtonChange}>Change</Text>
                    </View>
                    </View>

                </View>

                <View style={style.middleContainer}>
                <View style={style.accountPrivacyContainer}>
                    <Text style={style.detailsText}>Account privacy</Text>
                    <View style={style.visibleButtonContainer}>
                        <Text style={style.middleDetailsText}>Visible for all</Text>
                        <TriangleIcon/>
                    </View>
                </View>
                <View style={style.notificationsContainer}>
                    <Text style={style.middleDetailsText}>Turn off notifications</Text>
                    <Switch
        trackColor={{ false: "#767577", true: "#B8A0FF" }}
        thumbColor={this.state.enabled ? "#f4f3f4" : "#f4f3f4"}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={this.toggleSwitch}
        value={this.state.enabled}
       
      />
                </View>

                </View>
                
                <View style={style.bottomContainer}>
                <View style={style.bottomInnerContiner}>
                    <Text style={style.bottomText}>Privacy policy</Text>
                    <Text style={style.detailsButtonChangeBottom}>Show</Text>
                </View>
                <View style={style.bottomInnerContiner}>
                    <Text style={style.bottomText}>Terms and conditions</Text>
                    <Text style={style.detailsButtonChangeBottom}>Show</Text>
                </View>

                </View>
                <View style={style.logoutButtonContainer}>
                <Text style={style.logoutButton}>Log Out</Text>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#2a334a',
    paddingVertical:10,
    },
    topDetailsContainer:{
    paddingHorizontal:12,
    paddingVertical:16,
    borderBottomWidth:1,
    borderBottomColor: 'rgba(158, 150, 150, .4)',

    },
    detailsRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:16,
    },
    detailsColumn:{

    },
    detailsText:{
    color: 'lightgrey',
    fontSize: 12,
    fontFamily:'Montserrat-Regular', 
    paddingLeft:2,
          
    },
    detailsData:{
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily:'Montserrat-SemiBold',
    marginTop:1,

    },
    detailsButton:{
    color: '#B8A0FF',
    fontSize: 14,
    fontFamily:'Montserrat-SemiBold',
    alignSelf:'flex-end'

    },
    detailsButtonContainer:{
    flexDirection:'row',

    },
    detailsButtonChange:{
    color: '#B8A0FF',
    fontSize: 14,
    fontFamily:'Montserrat-SemiBold',
    alignSelf:'flex-end',
    marginLeft:24,  
    },
    middleContainer:{
    paddingHorizontal:12,
    paddingVertical:30,
    borderBottomWidth:1,
    borderBottomColor: 'rgba(158, 150, 150, .4)',

    },
    accountPrivacyContainer:{
    },
    visibleButtonContainer:{
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:6,
        backgroundColor:'#3E4D6C',
        marginTop:4,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    middleDetailsText:{
    fontFamily:'Montserrat-Medium',
    color:'#FFFFFF',
    fontSize:16,
    
        
    },
    notificationsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
        marginBottom:10,

    },
    bottomContainer:{
        paddingVertical:20,
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderBottomColor: 'rgba(158, 150, 150, .4)',
  
    },
    bottomInnerContiner:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:8,
        marginBottom:8,
    },
    bottomText:{
    fontFamily:'Montserrat-SemiBold',
    color:'#FFFFFF',
    fontSize:16,

    },
    detailsButtonChangeBottom:{
        color: '#B8A0FF',
        fontSize: 14,
        fontFamily:'Montserrat-SemiBold',
        marginLeft:24,  

        },
    logoutButtonContainer:{
    marginTop:34,
    marginHorizontal:20,
    paddingVertical:10,
    borderWidth:1,
    borderColor:'#8B64FF',
    borderRadius:6,    
   },
    logoutButton:{
    textAlign:'center',
    fontFamily:'Montserrat-SemiBold',
    color:'#8B64FF',
    fontSize:14,


    },
})      