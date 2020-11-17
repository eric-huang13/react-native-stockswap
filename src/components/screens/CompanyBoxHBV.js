import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

export class ComapnyBoxHBV extends Component {
  render() {
        console.log(this.props, 'props in comp');

    const {companies} = this.props;

    return (
      <View style={style.container}>
        <Text style={style.header}>Highest by Volume</Text>

        <View  style={style.boxContainer}>
          {companies.map((item) => {
            return (
              <View style={style.listContainer} key={item.id}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('CompanyInformation')
                    // console.log(item.id)
                  }>
                  <Text style={style.title}>{item.title}</Text>
                  <View style={style.detailsContainer}>
                  <Text style={style.symbol}>{item.symbol}</Text>
                  <Text style={style.percentage}>{item.percentage}</Text>
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

export default connect(mapStateToProps)(ComapnyBoxHBV);

const style = StyleSheet.create({
  container: {
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: 12,
    width: '98%',
    alignSelf: 'center',
   
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
   
  },
  header: {
    fontSize: 17.5,
    marginLeft: 14,
    fontStyle: 'italic',
    color:'black'
  },
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
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18.5,
    marginTop: 3,
    color: 'rgb(246, 252, 247)',
    marginBottom: 20,
    textAlign:"center",

  },
  detailsContainer:{
    position:"absolute",
    marginTop:"60%",
    // borderWidth: 1,
    // borderColor: 'white',
 
  },
  symbol: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'rgb(8, 11, 9)',
    marginLeft:8,
    marginBottom:-7
    
  },
  percentage: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'rgb(8, 11, 9)',
  },
});
