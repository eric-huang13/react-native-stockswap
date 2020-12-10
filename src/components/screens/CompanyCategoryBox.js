import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'


export default class CompanyCategoryBox extends Component {
    render() {
        const {item} = this.props;
    
        return (
            <View style={style.container}>
            <View key={item.id} style={style.companyRow}>
                <View style={style.nameContainer}>
              <Text style={style.symbol}>{item.symbol}</Text>
              <Text style={style.title}>{item.title}</Text>
              </View>
              <View style={style.detailsContainer}>
              <Text style={style.price}>${item.price}</Text>
              <Text style={style.percentage}>{item.percentage}</Text>
              </View>
            </View>
            </View>
        );
      }
    }

    const style = StyleSheet.create({
        container:{
       
        },
        searchInputContainer: {
          alignItems: "center",
          padding: 4.8,
          marginTop: 0,
        },
        searchInput: {
          borderWidth: 1,
          width: "90%",
          fontSize: 15,
          fontStyle:"italic",
          textAlign: "center",
          padding: 2.5,
          opacity: 0.8,
          marginBottom:20
        },
        header: {
          fontSize: 18.5,
          fontWeight: "700",
          color: "rgb(123, 123, 124)",
          marginLeft: 23,
          marginTop: 8.5,
        },
        companyRow:{
           
          flexDirection:"row",
          justifyContent:"space-between",
          paddingHorizontal:12,
          alignContent:"space-between",
          marginVertical:8
         
        },
        nameContainer:{
          flexDirection:"column",
        },
        detailsContainer:{
       
        },
        symbol:{
            fontSize:20,
      fontWeight:"bold",
       
      },
        title:{
          color:"grey"
        },
          price:{
              fontSize:20,
       
        },
        percentage:{
          color:"grey"
       
        },
      });
      