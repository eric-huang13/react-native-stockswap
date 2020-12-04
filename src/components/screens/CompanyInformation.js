import React, {Component} from 'react';
import {Text, View} from 'react-native';
import CompanyStockGraph from './CompanyStockGraph'

export class CompanyInformation extends Component {
  render() {
    const {route} = this.props;

    return (
      <View>
        {this.props.route.params ? (
          <View>
            <Text> Company Information </Text>
            <Text>{route.params.item.title}</Text>
            <Text>{route.params.item.symbol}</Text>
            <Text>{route.params.item.percentage}</Text>
          </View>
        ) : (
          <Text>Company Information</Text>
        )}
        <CompanyStockGraph/>
      </View>
    );
  }
}

export default CompanyInformation;
