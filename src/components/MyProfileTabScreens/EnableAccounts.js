import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {PortfolioAccounts} from '../../actions/profile';
import EnableAccountsCard from './EnableAccountsCard';
import {moderateScale} from '../../util/responsiveFont';

class EnableAccounts extends Component {
//   componentDidMount() {
//     this.props.PortfolioAccounts();
//     const insIds = this.props;
//   }
  render() {
      console.log(this.props.newPlaidAccount,"PLAIDNEWWW")
    if (!this.props.newPlaidAccount) {
      return null;
    }
    return (
      <SafeAreaView style={style.container}>
              <ScrollView>

        <View>
          <Text style={style.header}> Accounts </Text>
          {this.props.newPlaidAccount.map((item) => (
            <EnableAccountsCard item={item} />
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
    marginTop:moderateScale(2),
    marginBottom:moderateScale(28),
  },
});
