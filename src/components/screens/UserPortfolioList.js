import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux';


export default class UserPortfolioList extends Component {
    render() {
        return (
                <View style={style.container}>           
            <View style={style.boxContainer}>
              <ScrollView>
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
                      {/* <CompanyBox item={item} /> */}
                      <Text>{item.title}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
                
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
