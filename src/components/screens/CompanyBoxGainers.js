import React, {Component} from 'react';
import {Text, View, TouchableOpacity,} from 'react-native';
import {connect} from 'react-redux';
import {companyBoxStyles} from '../../styles/companyBoxStyles';
import CompanyBox from './CompanyBox';

export class CompanyBoxGainers extends Component {
  render() {
    const {companies} = this.props;
    return (
      <View style={companyBoxStyles.container}>
        <Text style={companyBoxStyles.header}>Gainers</Text>
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
    companies: state.company.gainers,
  };
};

export default connect(mapStateToProps)(CompanyBoxGainers);
