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

class PrivateTrades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
    };
  }
  componentDidMount() {
    this.setState({
      stocks: this.props.gainers,
    });
  }

  render() {

    if (!this.props.gainers) {
      return null;
    }
    return (
      <SafeAreaView style={style.container}>
        <ScrollView>
          <View>
            {this.state.stocks.map((item) => (
              <PrivateTradeCard key={item.id} item={item} navigation={this.props.navigation} />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
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
});
