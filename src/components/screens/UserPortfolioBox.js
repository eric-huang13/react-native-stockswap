import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class UserPortfolioBox extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>Company Symbol</Text>
                    <Text>Title</Text>
                    <Text>Price</Text>
                </View>
                <View>
                    <Text>Graph</Text>
                </View>
                <View>
                <Text>Percentage</Text>
                </View>
            </View>
        )
    }
}
