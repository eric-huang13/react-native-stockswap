import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import PrivateTradeCard from './PrivateTradeCard';
import {moderateScale} from '../../util/responsiveFont';
import { getTransactions } from '../../actions/portfolio';

class PrivateTrades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tradeTransactions: [],
    };
  }
  componentDidMount() {
    this.props.getTransactions();
  }


  render() {
console.log(this.props.transactions, 'TRANSACTIONS')
console.log(this.state.tradeTransactions, 'TRADE')
    if (!this.props.transactions.transactions) {
      return <View style={style.container}></View>
    }
    return (
      <SafeAreaView style={style.container}>
        <ScrollView>
          <View>
            {this.props.transactions.transactions.map((item, index) => (
              <PrivateTradeCard key={index} item={item} navigation={this.props.navigation} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    marketGainers: state.company.marketGainers,
    gainers: state.company.gainers,
    transactions: state.portfolio.transactions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTransactions: () => dispatch(getTransactions()),

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PrivateTrades);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(30),
    textAlign: 'center',
    marginTop: moderateScale(14),
    marginBottom: moderateScale(12),
  },
  publishButton: {
    alignSelf: 'center',
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(160),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 14,
    marginBottom: 10,
  },
  loadingText: {
    color: '#B8A0FF',
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'center',
    marginTop: moderateScale(10),
  },
});
