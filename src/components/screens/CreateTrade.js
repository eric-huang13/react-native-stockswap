import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, SafeAreaView } from 'react-native'

export default class CreateTrade extends Component {
    
    render() {
        return (
            <SafeAreaView>
                <Text> Post a Trade </Text>
                <View>
                    <Text>Upload trade screenshot for autofill</Text>
                </View>
                <View style={style.postContainer}>
                  <Text style={style.inputHeader}>Post</Text>
                  <TextInput
                    style={style.inputStyleBody}
                    // value={this.state.body}
                    // onChangeText={(text) => this.handleBodyChange(text)}
                    placeholder="Start typing stock name"
                    placeholderTextColor="#9ea6b5"
                    multiline={true}
                    numberOfLines={4}
                    ref={(input) => (this.body = input)}
                  />
                </View>
                <View style={style.buttonContainer}>
                    <Text>Buy</Text>
                    <Text>Sell</Text>
                </View>
                <View style={style.TimeContainer}>
                  <Text style={style.inputHeader}>Time</Text>
                  <TextInput
                    style={style.inputStyleBody}
                    // value={this.state.body}
                    // onChangeText={(text) => this.handleBodyChange(text)}
                    placeholder="Time when you sell it"
                    placeholderTextColor="#9ea6b5"
                    multiline={true}
                    numberOfLines={4}
                    ref={(input) => (this.body = input)}
                  />
                </View>
                <View style={style.quantityConatiner}>
                  <Text style={style.inputHeader}>Quantity</Text>
                  <TextInput
                    style={style.inputStyleBody}
                    // value={this.state.body}
                    // onChangeText={(text) => this.handleBodyChange(text)}
                    placeholder="Number of shares"
                    placeholderTextColor="#9ea6b5"
                    multiline={true}
                    numberOfLines={4}
                    ref={(input) => (this.body = input)}
                  />
                </View>
                <View>
                    <Text>
                        Stock privacy
                    </Text>
                </View>
                <Text>Publish</Text>


            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({

})
