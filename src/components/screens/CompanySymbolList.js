import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text
} from 'react-native';

import {connect} from 'react-redux';
import CompanyBox from './CompanyBox';

export class CompanySymbolList extends Component {
 

  render() {
    const {gainers} = this.props;

    return (
      <SafeAreaView style={style.mainContainer}>        

         
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                justifyContent="space-between">
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
                      <Text>{item.symbol}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
    
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gainers: state.company.gainers,
    losers: state.company.losers,
    highestByVolume: state.company.highestByVolume,
  };
};


export default connect(mapStateToProps)(CompanySymbolList);

const style = StyleSheet.create({
  mainContainer: {
    
  },

  
});
