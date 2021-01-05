import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class PostScreen extends Component {
    render() {
        const {post} = this.props.route.params;
                return (
            <View>
                <Text> {post.body} </Text>
            </View>
        )
    }
}
