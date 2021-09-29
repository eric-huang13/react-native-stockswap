import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {connect} from 'react-redux';
import {PortfolioAccounts} from '../../actions/profile';
import InstitutionCard from './InstitutionCard';



 class PortfolioMangement extends Component {
    componentDidMount() {
        // const {companies, fetchGainers} = this.props;
        this.props.PortfolioAccounts();
        const insIds = this.props
    }
    render() {
      console.log(this.props.portfolioAccounts.institutions, "Accounts in PortfolioManagment")
    if (!this.props.portfolioAccounts.accounts){
      return null
    }
      return (
        <View>
                <Text> Portfolio Managment </Text>
        {/* //filter instead for itemID */}
                {this.props.portfolioAccounts.institutions.map((item) => (
              // <View key={item.itemId}>
            //  <Text>{item.itemId}</Text>
            //  <Text>Nameeeeeeeeeeeeeee:{item.institutionId}</Text>
             <InstitutionCard insId={item.itemId}/>
              // </View>
            ))}
            </View>
        
            // <View>
            //     <Text> Portfolio Managment </Text>
        
            //     {this.props.portfolioAccounts.accounts.map((item) => (
            //   <View key={item.id}>
            //  <Text>{item.name}</Text>
            //   </View>
            // ))}
            // </View>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {  
    portfolioAccounts: state.user.portfolioAccounts,    
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      PortfolioAccounts: () => dispatch(PortfolioAccounts()),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(PortfolioMangement);
  