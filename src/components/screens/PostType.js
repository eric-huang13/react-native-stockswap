import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import PostIcon from '../../icons/PostIcon'
import TradeIcon from '../../icons/TradeIcon'

export default class PostType extends Component {
    render() {
        return (
            <SafeAreaView style={style.mainContainer}>
                <Text style={style.header}> SELECT POST TYPE </Text>
                <View style={style.typeRow}>
                    <View style={style.typeColumn}><View><TradeIcon/></View><Text style={style.typeText}>Trade</Text></View>
                    
                    <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CreatePost')}>
                    <View style={style.typeColumn}><View><PostIcon/></View><Text style={style.typeText}>Post</Text></View>
              </TouchableOpacity>
                    
                    

                </View>
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
            marginTop:167,
            fontSize:20,
            fontFamily: 'Montserrat-Bold',
            color:'#FFFFFF', 
            textAlign:'center',   
        },
        typeRow:{
            flexDirection:'row',
            justifyContent:'space-evenly',
            marginTop:24,
        },
        typeColumn:{
            flexDirection:'column',
            alignItems:'center',
            backgroundColor:'#2C3957',
            paddingVertical:10,
            width:142,
            height:155
        },
        typeText:{
        fontSize:16,
        fontFamily: 'Montserrat-Bold',
        color:'#FFFFFF',
        marginTop:20,
        }
    })