import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CompanyStockGraph from './CompanyStockGraph'

export default class UserPortfolioBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          graphData: [
            {x: 2, y: 10},
            {x: 3, y: 11},
            {x: 4, y: 12},
            {x: 5, y: 14},
            {x: 6, y: 14},
            {x: 7, y: 15},
          ],
          percent: '1.22',
          range: [10, 15],
         
        };
      }
    
    render() {

        const {item} = this.props
        const {graphData, percent, range} = this.state;
        console.log(item,'item in portfolioBOX')

        return (
            <View>
                <View>
                    <Text>Company Symbol</Text>
                    <Text>{item.title}</Text>
                    <Text>Price</Text>
                </View>
                <View>
                <CompanyStockGraph graphData={graphData} range={range} />

                </View>
                <View>
                <Text>Percentage</Text>
                </View>
            </View>
        )
    }
}
