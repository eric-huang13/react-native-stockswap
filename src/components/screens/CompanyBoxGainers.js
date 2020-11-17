import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {companyBoxStyles} from '../../styles/companyBoxStyles'

export class CompanyBoxGainers extends Component {
  render() {
    const {companies} = this.props;
console.log(this.props,"props in gain")
    return (
      <View style={companyBoxStyles.container}>
        <Text style={companyBoxStyles.header}>Gainers</Text>

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
    companies: state.company.gainers,
  };
};

export default connect(mapStateToProps)(CompanyBoxGainers);

const style = StyleSheet.create({
  listContainer: {
    alignSelf: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: 'limegreen',
    backgroundColor: '	rgb(8, 177, 40)',
    borderRadius: 15,
    height: 130,
    width: 125,
    flexDirection: 'column',
    padding: 3,    
  },
});
