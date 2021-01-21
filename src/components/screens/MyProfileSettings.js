import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class MyProfileSettings extends Component {
    render() {
        return (
            <View style={style.container}>
                <View>
                    <View>
                    <View>
                    <Text>Email</Text>
                    <Text></Text>
                    </View>
                    <Text>Change</Text>
                    </View>

                    <View>
                    <View>
                    <Text>Phone Number</Text>
                    <Text></Text>
                    </View>
                    <Text>Change</Text>
                    </View>

                    <View>
                    <View>
                    <Text>Password</Text>
                    <Text></Text>
                    </View>
                    <Text>Change</Text>
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
      flex:1
    },
})