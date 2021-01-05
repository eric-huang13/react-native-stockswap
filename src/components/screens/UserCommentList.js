import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class UserCommentList extends Component {
    render() {
        console.log(this.props, "props in commentsssss")
        const {filteredComments} = this.props.route.params;
        console.log(filteredComments,"filcom")

        return (
            <View>
                {filteredComments.map((comment) =>
                <View key={comment.id}>
            <Text> {comment.name} </Text>
                <Text> {comment.body} </Text>
</View>
                )}
            </View>
        )
    }
}
