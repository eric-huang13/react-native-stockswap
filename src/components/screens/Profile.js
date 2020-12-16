import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Profile extends Component {
    render() {
        return (
            <View>
                <View>
                <View>
                <Text>Portfolio</Text>
                <Text>Number</Text>
                </View>
                <View>
                    <Text>Percentage</Text>
                    <Text>Number</Text>
                </View>
                </View>
                <View><Text>Graph</Text></View>
                <View><Text>Buttons</Text></View>
                <View>
                <Text>Image</Text>
                <Text> Name </Text>
                </View>
                <View><Text>Bio</Text></View>
                <View><Text>Followers</Text><Text>Posts</Text><Text>Trades</Text><Text>Following</Text>
                </View>
                <View><Text>Buttons</Text></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    
  });
  