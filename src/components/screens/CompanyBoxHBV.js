import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {companyBoxStyles} from '../../styles/companyBoxStyles'

export class CompanyBoxHBV extends Component {
  render() {    
    const {companies} = this.props;

    return (
      <View style={companyBoxStyles.container}>
        <Text style={companyBoxStyles.header}>Highest by Volume</Text>

        <View  style={companyBoxStyles.boxContainer}>
          {companies.map((item) => {
            return (
              <View style={style.listContainer} key={item.id}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Home')
                  }>
                  <Text style={companyBoxStyles.title}>{item.title}</Text>
                  <View style={companyBoxStyles.detailsContainer}>
                  <Text style={companyBoxStyles.symbol}>{item.symbol}</Text>
                  <Text style={companyBoxStyles.percentage}>{item.percentage}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companies: state.company.highestByVolume,
  };
};

export default connect(mapStateToProps)(CompanyBoxHBV);

const style = StyleSheet.create({ 
  listContainer: {
    alignSelf: 'center',
    marginTop: 6,
    borderWidth: 1,
    borderColor: 'rgb(58, 117, 167)',
    backgroundColor: 'rgb(58, 117, 167)',
    borderRadius: 15,
    height: 130,
    width: 125,
    flexDirection: 'column',
    padding: 3,    
  },  
});
