import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {PortfolioAccounts} from '../../actions/profile';
import InstitutionCard from './InstitutionCard';
import {moderateScale} from '../../util/responsiveFont';

class PortfolioMangement extends Component {
  componentDidMount() {
    this.props.PortfolioAccounts();
    const insIds = this.props;
  }
  render() {
    if (!this.props.portfolioAccounts.accounts) {
      return null;
    }
    return (
      <SafeAreaView style={style.container}>
              <ScrollView>

        <View>
          <Text style={style.header}> Linked Accounts </Text>
          {this.props.portfolioAccounts.institutions.map((item) => (
            <InstitutionCard key={item.id * Math.Random} itemId={item.itemId} insId={item.institutionId} />
          ))}
        </View>
        </ScrollView>

      </SafeAreaView>
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
export default connect(mapStateToProps, mapDispatchToProps)(PortfolioMangement);

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
