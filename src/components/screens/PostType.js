import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'

export default class PostType extends Component {
    render() {
        return (
            <SafeAreaView style={style.mainContainer}>
                <Text style={style.header}> SELECT POST TYPE </Text>
            </SafeAreaView>
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
    })