import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export default class CreatePost extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          image:'',
          body:'',
        };
      }
      handleBodyChange = (text) => {
        this.setState({
          body: text,
        });
      };
    render() {
        
        return (
            <View>
                <Text> Post a Publication </Text>
                <View style={style.uploadImageContainer}>
                    <Text>Tap to upload cover image</Text>
                </View>
                <View>
                  <Text style={style.inputHeader}>Post</Text>
                  <TextInput
                    style={style.inputStyleBio}
                    value={this.state.body}
                    onChangeText={(text) => this.handleBodyChange(text)}
                    placeholder="Enter post text"
                    placeholderTextColor="#9ea6b5"
                    multiline={true}
                    numberOfLines={4}
                  />
                </View>
                <View>
                    <Text>Turn off comments button</Text>
                </View>
                <View>
                    <Text>Buttons</Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    mainContainer: {
      
    },
})