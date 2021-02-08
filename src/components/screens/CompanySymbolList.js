import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  FlatList
} from 'react-native';

import {connect} from 'react-redux';
import CompanyBox from './CompanyBox';

export class CompanySymbolList extends Component {
    constructor(props) {
        super(props);
   
      }
 

  render() {
    const {gainers} = this.props;
    console.log(this.props,'props in symbol list')
    return (
      <SafeAreaView style={style.mainContainer}>        

         
              <FlatList
                keyExtractor = { (item, index) => index.toString() }
                data={gainers}
                style={style.scollContainer}
                horizontal
                alignItems='center'
                renderItem={({item, index}) => (
               
                    <TouchableOpacity
                      key={item.id}
                      onPress={() =>
                        this.props.navigation.navigate({
                          name: 'CompanyInformation',
                          params: {item},
                        })
                      }>
                        <View style={style.symbolBox}>
                      <Text style={
                  this.props.symbol === item.symbol
                    ? {...style.symbol, backgroundColor: '#8B64FF'}
                    : {...style.symbol}
                }>{item.symbol}</Text>
                      </View>
                    </TouchableOpacity>
                  
                )}
              />
    
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
    //   borderWidth:1,
      paddingVertical:10,
      height:60,
    
  },
  scollContainer:{
// borderWidth:1,

  },
  symbolBox:{
    marginHorizontal:12,
    width:63,
    height:23,
    alignContent:'center',
    justifyContent:'center'
  },
  symbol:{   
    textAlign:'center',
    backgroundColor:'#3e475b',
    fontFamily:'Montserrat-Medium',
    color:'#FFFFFF',
    paddingVertical:4,
  

  },

  
});
