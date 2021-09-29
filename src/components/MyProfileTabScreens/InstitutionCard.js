import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {PortfolioAccounts} from '../../actions/profile';

class InstitutionCard extends Component {
  // componentDidMount() {
  //     // const {companies, fetchGainers} = this.props;
  //     this.props.PortfolioAccounts();
  //     const insIds = this.props
  // }
  render() {
    const {portfolioAccounts, insId} = this.props;
console.log(this.props,"props in ins")
console.log(portfolioAccounts,"accounts")

    const filteredAccounts = portfolioAccounts.accounts.filter(
      (account) => account.itemId == insId,
    );
    //   console.log(this.props.portfolioAccounts.institutions, "Accounts in PortfolioManagment")
    if (!this.props) {
      return null;
    }
    return (
        <ScrollView>
      <View>
          <Text>INSTITUTION NAME</Text>
          <Text>ID: {insId}</Text>
        {filteredAccounts.map((item) => (
          <View key={item.itemId}>
            <Text>{item.officialName}</Text>           

            {/* <Text>{item.name}</Text>
            <Text>{item.maskedAccountNumber}</Text>
            <Text>{item.type}</Text> */}
          </View>
        ))}
      </View>
      </ScrollView>
      // <View>

      //     <Text> Portfolio Managment </Text>

      //     {this.props.portfolioAccounts.accounts.map((item) => (
      //   <View key={item.id}>
      //  <Text>{item.name}</Text>
      //   </View>
      // ))}
      // </View>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(InstitutionCard);
