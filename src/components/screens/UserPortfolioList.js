import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import UserPortfolioBox from './UserPortfolioBox'
import {connect} from 'react-redux';


class UserPortfolioList extends Component {
    render() {
      const {gainers} = this.props
      console.log(this.props, 'propslist')

        return (
                <View style={style.container}> 
                <View>
                <Text>Search Input</Text> 
                </View>     
                <ScrollView>
                <View>
                  <Text>Portfolio</Text>
                  <Text>Stocks</Text>
                  </View>      
            <View style={style.boxContainer}>
            
                {gainers.map((item) => {
                  return (
                    // <TouchableOpacity
                    //   key={item.id}
                    //   onPress={() =>
                    //     this.props.navigation.navigate({
                    //       name: 'CompanyInformation',
                    //       params: {item},
                    //     })
                    //   }>
                      // {/* <CompanyBox item={item} /> */}

                      <View>
                        <UserPortfolioBox item={item}/>
                        </View>
                      // <Text>{item.title}</Text>
                    // {/* </TouchableOpacity> */}
                  );
                })}
              
            </View>
               </ScrollView> 
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      gainers: state.company.gainers,
   
    };
  };
  export default connect(mapStateToProps)(UserPortfolioList);

  const style = StyleSheet.create({
      
  })
