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
import PublicTradeCard from './PublicTradeCard';
import {moderateScale} from '../../util/responsiveFont';

class PublicTrades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
    };
  }
  componentDidMount() {
    this.setState({
      stocks: this.props.losers,
    });
  }

  render() {
    if (!this.props.losers) {
      return null;
    }
    return (
      <SafeAreaView style={style.container}>
        <ScrollView>
          <View>
            {this.state.stocks.map((item) => (
              <PublicTradeCard key={item.id} item={item} />
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
    losers: state.company.losers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGainers: () => dispatch(fetchMarketGainers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PublicTrades);

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
});
