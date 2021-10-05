import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {PortfolioAccounts} from '../../actions/profile';
import EnableAccountsCard from './EnableAccountsCard';
import {moderateScale} from '../../util/responsiveFont';

class EnableAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAccounts: [],
      accountStatus: [],
    };
  }
  componentDidMount() {
    this.setState({
      newAccounts: this.props.newPlaidAccount,
    });
    this.setState({
      accountStatus: this.props.newPlaidAccount.map((account) => {
        return {accountId: account.id, status: 'enabled'};
      }),
    });
  }
  accountFlag = (id, enabled) => {
    this.setState({
      accountStatus: this.state.accountStatus.map((account) => {
        if (account.accountId === id) {
          enabled
            ? (account.status = 'enabled')
            : (account.status = 'disabled');
        }
        return account;
      }),
    });
  };

 
  render() {
  
    console.log(this.state.accountStatus, 'Account Status');

    if (!this.props.newPlaidAccount) {
      return null;
    }
    return (
      <SafeAreaView style={style.container}>
        <ScrollView>
          <View>
            <Text style={style.header}> Accounts </Text>
            {/* {this.props.newPlaidAccount.map((item) => (
            <EnableAccountsCard item={item} />
          ))} */}
            {this.state.newAccounts.map((item) => (
              <EnableAccountsCard
                item={item}
                accountFlag={this.accountFlag.bind(this)}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newPlaidAccount: state.user.newPlaidAccount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    PortfolioAccounts: () => dispatch(PortfolioAccounts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EnableAccounts);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(22),
    textAlign: 'center',
    marginTop: moderateScale(2),
    marginBottom: moderateScale(28),
  },
});
