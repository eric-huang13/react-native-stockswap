import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, SafeAreaView } from 'react-native'

export default class CreateTrade extends Component {
    
    render() {
        return (
            <SafeAreaView style={style.mainContainer}>
                <Text style={style.header}>Post a Trade</Text>
                <View style={style.uploadContainer}>
                    <Text style={style.uploadText}>Upload trade screenshot for autofill</Text>
                </View>
                <View style={style.postContainer}>
                  <Text style={style.inputHeader}>Stock name</Text>
                  <TextInput
                    style={style.inputStyleBody}
                    // value={this.state.body}
                    // onChangeText={(text) => this.handleBodyChange(text)}
                    placeholder="Start typing stock name"
                    placeholderTextColor="#9ea6b5"
                    multiline={true}
                    numberOfLines={4}
                    ref={(input) => (this.body = input)}
                  />
                </View>
                <View>
                    <Text style={style.inputHeader}>Order Type</Text>
                <View style={style.buttonsContainer}>
                    <Text style={style.buyButton}>Buy</Text>
                    <Text style={style.sellButton}>Sell</Text>
                </View></View>
                <View style={style.TimeContainer}>
                  <Text style={style.inputHeader}>Time</Text>
                  <TextInput
                    style={style.inputStyleBody}
                    // value={this.state.body}
                    // onChangeText={(text) => this.handleBodyChange(text)}
                    placeholder="Time when you sell it"
                    placeholderTextColor="#9ea6b5"
                    multiline={true}
                    numberOfLines={4}
                    ref={(input) => (this.body = input)}
                  />
                </View>
                <View style={style.quantityConatiner}>
                  <Text style={style.inputHeader}>Quantity</Text>
                  <TextInput
                    style={style.inputStyleBody}
                    // value={this.state.body}
                    // onChangeText={(text) => this.handleBodyChange(text)}
                    placeholder="Number of shares"
                    placeholderTextColor="#9ea6b5"
                    multiline={true}
                    numberOfLines={4}
                    ref={(input) => (this.body = input)}
                  />
                </View>
                <View>
                    <Text style={style.inputHeader}>
                        Stock privacy
                    </Text>
                </View>
                <Text style={style.publishButton}>Publish</Text>


            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor:'#2a334a',
        paddingVertical:8, 
        paddingHorizontal:36,  
        flexDirection:'column',
        borderWidth:1,
        justifyContent:'space-evenly'
        },
    header:{
        fontSize:20,
        fontFamily: 'Montserrat-Bold',
        color:'#FFFFFF', 
        textAlign:'center',   
    },
    uploadContainer:{
        backgroundColor:'#46486e',
        height:48,
        borderRadius:2,
        alignItems:'center',
        justifyContent:'center',
    },

    uploadText:{
        color:'#FFFFFF',
        fontFamily: 'Montserrat-Regular',
        fontSize:14,
    },
    inputHeader:{
        fontSize: 12,
        color: '#babec8',
        marginBottom: 1,
        fontFamily: 'Montserrat-Regular',
        marginBottom:2,
    },
    inputStyleBody: {
        borderRadius: 6,
        backgroundColor: '#3e4d6c',
        marginBottom: 12,
        padding: 8,
        marginTop: 1,
        fontSize: 14,
        textAlignVertical: 'center',
        fontFamily: 'Montserrat-Italic',
        color: '#FFFFFF',
        height:42,
        
      },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal:30,
      },
      buyButton: {
        alignSelf: 'center',
        color: '#FFFFFF',
        textAlign: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: 141,
        borderRadius: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        backgroundColor:'#536183',
      },
      sellButton: {
        alignSelf: 'center',
        backgroundColor: '#8b64ff',
        color: '#FFFFFF',
        textAlign: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: 141,
        borderRadius: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
      },
      publishButton: {
        alignSelf: 'center',
        backgroundColor: '#8b64ff',
        color: '#FFFFFF',
        textAlign: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: 303,
        borderRadius: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
      },
})
