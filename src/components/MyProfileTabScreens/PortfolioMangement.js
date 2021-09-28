import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {connect} from 'react-redux';
import {PortfolioAccounts} from '../../actions/profile';



 class PortfolioMangement extends Component {
    componentDidMount() {
        // const {companies, fetchGainers} = this.props;
        this.props.PortfolioAccounts();
    }
    render() {
        console.log(this.props.portfolioAccounts, "Accounts in PortfolioManagment")
        return (
            <View>
                <Text> Portfolio Managment </Text>
            </View>
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
  