import React, { Component } from 'react'
import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';

export default class MyFollowingBox extends Component {
    render() {
        const {item, index} = this.props;
        return (
            <SafeAreaView
            style={
              index % 2 !== 0
                ? {...style.container, backgroundColor: '#2a334a'}
                : {...style.container}
            }>
                <View style={style.imageNamerow}>
            <Image style={style.image} source={{uri: item.img}} />    
            <View style={style.nameContainer}>
              <Text style={style.name}>{item.name}</Text>
              <Text style={style.username}>{item.username}</Text>
            </View>
            </View>            
          </SafeAreaView>
        );
      }
    }
    
    const style = StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#324165',
        alignItems:'center',

      },
      imageNamerow:{
        flexDirection:'row',
        alignItems:'center',
      },
      image: {
        height: 63,
        width: 63,
        borderRadius: 50,
      },
      imgDetailContainer: {
        flexDirection: 'row',
        marginLeft: -8,
      },
      detailsContainer: {
        flexDirection: 'column',
        marginLeft: -150,
        justifyContent: 'space-between',
      },
      name: {
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily:'Montserrat-Bold',
      },
      username: {
        fontSize: 14,
        color: 'lightgrey',
        fontFamily:'Montserrat-Regular',
      },
      nameContainer:{
        marginLeft:6,
      },
      
    });
    