import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'
import LikeInactiveIcon from '../../icons/LikeInactiveIcon'
import CommentIcon from '../../icons/CommentIcon'

export default class CreatePostPreview extends Component {
    render() {
        return (
            <SafeAreaView style={style.container}>
                <ScrollView style={style.scrollContainer}>
          <View style={style.postNameContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={style.postUserImage}
                source={{uri: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90JTIwc3VpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'}}
              />
              <Text style={style.postUserName}>Test</Text>
            </View>
          </View>
          <Image style={style.image} source={{uri: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90JTIwc3VpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'}} />
          <View style={style.detailsContainer}>
            <Text style={style.timestamp}>just now</Text>

            <View style={style.likesContainer}>
              <View style={style.iconContainer}>
                <LikeInactiveIcon/>
              <Text style={style.likes}>0</Text>
              </View>
              <View style={style.iconContainer}>
                <CommentIcon/>
              <Text style={style.comments}>0</Text>
              </View>
            </View>
          </View>
          <Text style={style.body}>Test body</Text>
        
        </ScrollView>
            </SafeAreaView>
        )
    }
}


const style = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingVertical: 21,
      backgroundColor: '#2a334a',
    },
    scrollContainer: {   
      paddingHorizontal: 10,
    },
    image: {
      height: 182,
      width: '100%',
      borderRadius: 10,
    },
    postNameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 9,
      justifyContent: 'space-between',
    },
    postUserImage: {
      height: 34,
      width: 34,
      borderRadius: 50,
    },
    postUserName: {
      color: '#FFFFFF',
      fontSize: 14,
      marginLeft: 8,
      fontFamily:'Montserrat-Bold',
    },
    detailsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 8,
    },
    likesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    timestamp: {
      fontSize: 12,
      color: 'lightgrey',
      fontFamily:'Montserrat-Italic',
    },
    iconContainer:{
      flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between',
    },
    likes: {
      fontSize: 14,
      color: 'lightgrey',
      fontFamily:'Montserrat-Medium',
      marginLeft:3,
      marginRight:14,
    },
    comments: {
      fontSize: 14,
      color: 'lightgrey',
      fontFamily:'Montserrat-Medium',
      marginRight: 1,
      marginLeft:3,
  
    },
    body: {
      fontSize: 14,
      color: '#FFFFFF',
      marginTop: 10,
      marginBottom: 2,
      paddingBottom: 18,
      fontFamily:'Montserrat-Medium',
    },
    });
  