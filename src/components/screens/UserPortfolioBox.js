import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CompanyStockGraph from './CompanyStockGraph'

export default class UserPortfolioBox extends Component {
    
    render() {
        const {item} = this.props
        return (
            <View>
                <View>
                    <Text>Company Symbol</Text>
                    <Text>{item.title}</Text>
                    <Text>Price</Text>
                </View>
                <View>
                {/* <CompanyStockGraph graphData={graphData} range={range} /> */}

                </View>
                <View>
                <Text>Percentage</Text>
                </View>
            </View>
        )
    }
}
