import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class UserPosts extends Component {
    render() {
        const {post} = this.props;

        return (
            <View style={style.container}>
                <View style={style.postNameContainer}>
                <Image style={style.postUserImage} source={{uri: post.profileImg}} />
                <Text style={style.postUserName} >{post.name}</Text>
                </View>
                <Image style={style.image} source={{uri: post.img}} />
                <Text>{post.body}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        // flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginVertical: 4,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#2a334a',
        borderWidth:1,
      },
      image: {
        height: 150,
        width: '100%', 
        borderRadius:10,      
      },
      postNameContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:4,
        },
      postUserImage:{
        height: 43,
        width: 43,
        borderRadius: 50,
      },
      postUserName:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        marginLeft:8,
      },
    
})