import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {PortfolioAccounts} from '../../actions/profile';
import {moderateScale} from '../../util/responsiveFont';

class InstitutionCard extends Component {
  render() {
    const {portfolioAccounts, itemId, insId} = this.props;

    const filteredAccounts = portfolioAccounts.accounts.filter(
      (account) => account.itemId == itemId,
    );

    const filteredInstitutions = this.props.institution.filter(
      (institution) => institution.id == insId,
    );
    if (!this.props) {
      return null;
    }
    return (
      <ScrollView>
        <View>
          {filteredInstitutions.map((item) => (
            <View>
              <Text style={style.accountName}>{item.name}</Text>
            </View>
          ))}

          {filteredAccounts.map((item) => (
            <View>
              <Text style={style.accountOfficial}>{item.officialName}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    portfolioAccounts: state.user.portfolioAccounts,
    institution: state.user.institution,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    PortfolioAccounts: () => dispatch(PortfolioAccounts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InstitutionCard);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
  },

  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(22),
  },
  username: {
    color: 'white',
    fontSize: moderateScale(15),
  },
  hashtag: {
    color: '#9082cf',
    fontSize: moderateScale(15),
  },

  accountName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(20),
  },
  accountOfficial: {
    color: 'white',
    fontSize: moderateScale(16),
  },
});
