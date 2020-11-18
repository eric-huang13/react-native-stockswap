import React, { Component } from 'react'
import {Text, View,} from 'react-native';
import {companyBoxStyles} from '../../styles/companyBoxStyles';



export class CompanyBox extends Component {
    render() {
        const {item} = this.props;

        return (
            <View>
                <View  style={ item.category === "gainers" ? {...companyBoxStyles.listContainer, backgroundColor:'rgb(8, 177, 40)'} : item.category === "losers" ? {...companyBoxStyles.listContainer, backgroundColor:'rgb(196, 38, 0)'} : {...companyBoxStyles.listContainer, backgroundColor:'rgb(58, 117, 167)'} } key={item.id}>
               <Text style={companyBoxStyles.title}>{item.title}</Text>
                  <View style={companyBoxStyles.detailsContainer}>
                    <Text style={companyBoxStyles.symbol}>{item.symbol}</Text>
                    <Text style={companyBoxStyles.percentage}>
                      {item.percentage}
                    </Text>
                  </View>
              </View>
            </View>
        )
    }
}

export default CompanyBox

