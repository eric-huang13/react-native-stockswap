import React, {Component} from 'react';
import {Text, View} from 'react-native';
import CompanyStockGraph from './CompanyStockGraph'

export class CompanyInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [{x: 2, y: 10}, {x: 3, y: 11}, {x: 4, y: 12},{x: 5, y: 14}, {x: 6, y: 14}, {x: 7, y: 15}],
      range: [10, 15],
    };
  }
  render() {
    const {route} = this.props;
    const { graphData, range} = this.state;

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
        <CompanyStockGraph route={route} graphData={graphData} range={range}/>
      </View>
    );
  }
}

export default CompanyInformation;
