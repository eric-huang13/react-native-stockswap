import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class MyProfileSettings extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.detailsContainer}>
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
                <View>

                </View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#2a334a',
    paddingVertical:10,
    },
    detailsContainer:{
    paddingHorizontal:12,
    paddingVertical:18,
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
})