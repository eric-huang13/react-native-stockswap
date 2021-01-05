import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class UserPosts extends Component {
    render() {
        const {item} = this.props;

        return (
            <View style={style.container}>
                <Text>{item.name}</Text>
                <Image style={style.image} source={{uri: item.img}} />
                <Text>{item.body}</Text>
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
    
})