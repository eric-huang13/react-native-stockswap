import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import CompanyCategoryBox from './CompanyCategoryBox';

export class CompanyCategory extends Component {
  


  render() {
   
    const {gainers} = this.props;
    const {losers} = this.props;
    const {highestByVolume} = this.props;
    const {
        showGainers,
        showLosers,
        showHighestByVolume,
   
      } = this.props.route.params;

 

    return showGainers ? (
          <View style={style.boxContainer}>
            {gainers.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    this.props.navigation.navigate({
                      name: 'CompanyInformation',
                      params: {item},
                    })
                  }>
                  <CompanyCategoryBox item={item} />
                </TouchableOpacity>
              );
            })}
          </View>
    ) : showLosers ? (
          <View style={style.boxContainer}>
            {losers.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    this.props.navigation.navigate({
                      name: 'CompanyInformation',
                      params: {item},
                    })
                  }>
                  <CompanyCategoryBox item={item} />
                </TouchableOpacity>
              );
            })}
          </View>
          ) : showHighestByVolume ? (
          <View style={style.boxContainer}>
            {highestByVolume.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    this.props.navigation.navigate({
                      name: 'CompanyInformation',
                      params: {item},
                    })
                  }>
                  <CompanyCategoryBox item={item} />
                </TouchableOpacity>
              );
            })}
          </View>
          ) :
          <View><Text>Companies</Text></View>
   
  }
}

const mapStateToProps = (state) => {
  return {
    gainers: state.company.gainers,
    losers: state.company.losers,
    highestByVolume: state.company.highestByVolume,
  };
};


export default connect(mapStateToProps)(CompanyCategory);


const style = StyleSheet.create({
    // container: {
    //     marginTop: 10,
    //     // borderBottomWidth: 0.8,
    //     borderBottomColor: 'gray',
    //     paddingBottom: 12.5,
    //     width: '98%',
    //     alignSelf: 'center',
    //     // alignItems:"flex-start"
    //   },
    

  });
  

  