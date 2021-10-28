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
import {fetchMarketGainers} from '../../actions/marketMovers';
import PrivateTrades from './PrivateTrades';
import PublicTrades from './PublicTrades';
import {moderateScale} from '../../util/responsiveFont';

class SelectTrades extends Component {
  render() {

    return (
      <SafeAreaView style={style.container}>
        <ScrollView>
          <Text style={style.header}>Private Trades</Text>
          <PrivateTrades navigation={this.props.navigation} />
          <Text style={style.header}>Public Trades</Text>
          <PublicTrades navigation={this.props.navigation} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    marketGainers: state.company.marketGainers,
    gainers: state.company.gainers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGainers: () => dispatch(fetchMarketGainers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectTrades);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
  },
  header: {
    color: 'white',
    fontSize: moderateScale(30),
    textAlign: 'center',
    marginTop: moderateScale(14),
    marginBottom: moderateScale(12),
    fontFamily: 'Montserrat-Bold',
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
});
