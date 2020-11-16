import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {connect} from 'react-redux';


export class CompanyBoxGainers extends Component {

    render() {
        console.log(this.props)
        const {companies} = this.props
        return (
            <View>
                <Text>Gainers</Text>

                {companies.map((item) =>{
                    return(
                    <View><Text>{item.title}</Text></View>
                    )
                })}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      companies: state.company.companies,
    };
  };
  

export default connect(mapStateToProps)(CompanyBoxGainers);

