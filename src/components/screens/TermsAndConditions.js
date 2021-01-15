import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class TermsAndConditions extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.header}> Terms and Conditions </Text>

                <View>
                  <TouchableOpacity onPress={() =>
                  this.props.navigation.navigate('SignUp')
                }>
                    <Text style={style.agreeButton}>I agree</Text>
                  </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
      backgroundColor: "#323e5b",
      // paddingVertical:50,
      paddingHorizontal: 30,
    },
    header: {
      color:'white',
      fontSize:22,
      fontWeight:'bold',
    },
    agreeButton:{
        backgroundColor: "#8B64FF",
        color: "white",
        width:160,
        alignSelf: "center",
        textAlign: "center",
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: 150,
        borderRadius: 6,
        fontSize: 17,
        fontWeight:'bold',

    },

  });
  