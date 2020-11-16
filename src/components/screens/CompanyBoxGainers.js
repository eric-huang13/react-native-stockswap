import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

export class CompanyBoxGainers extends Component {
  render() {
    console.log(this.props.navigation, 'props in company');
    const {companies} = this.props;

    return (
      <View style={style.container}>
        <Text style={style.header}>Gainers</Text>

        <View style={style.boxContainer}>
          {companies.map((item) => {
            return (
              <View style={style.listContainer}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('CompanyInformation')
                  }>
                  <Text style={style.title}>{item.title}</Text>
                  <Text style={style.details}>{item.symbol}</Text>
                  <Text style={style.details}>{item.percentage}</Text>
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
    companies: state.company.companies,
  };
};

export default connect(mapStateToProps)(CompanyBoxGainers);

const style = StyleSheet.create({
    container: {
        marginTop:8,
        borderBottomWidth:1,
        borderBottomColor:"lightgrey",
        paddingBottom:12,
        width: "95%",
        alignSelf:"center"

      },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  header: {
    fontSize: 15,
    marginLeft: 12,
    fontStyle: 'italic',
    
  },
  listContainer: {
    alignSelf: 'center',
    marginTop: 6,
    borderWidth: 1,
    borderColor: 'limegreen',
    backgroundColor: 'limegreen',
    borderRadius: 15,
    height: 120,
    width: 120,
    flexDirection: 'column',
    padding:1,

  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 3,
    color: 'ivory',
    marginBottom: 20,
  },
  details: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
});
