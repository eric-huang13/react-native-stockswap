import React, {Component} from 'react';
import {Text, View, TouchableOpacity,} from 'react-native';
import {connect} from 'react-redux';
import {companyBoxStyles} from '../../styles/companyBoxStyles';
import CompanyBox from './CompanyBox';

export class CompanyBoxLosers extends Component {
  render() {
    const {companies} = this.props;

    return (
      <View style={companyBoxStyles.container}>
        <Text style={companyBoxStyles.header}>Losers</Text>

        <View style={companyBoxStyles.boxContainer}>
          {companies.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => this.props.navigation.navigate({name:'CompanyInformation', params: {item}})}>
                <CompanyBox item={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companies: state.company.losers,
  };
};

export default connect(mapStateToProps)(CompanyBoxLosers);
