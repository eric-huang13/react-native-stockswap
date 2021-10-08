import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {PortfolioAccounts} from '../../actions/profile';
import {moderateScale} from '../../util/responsiveFont';

class EnableAccountsCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: true,
    };
  }
  toggleSwitch = (value) => {
    this.setState({enabled: value});
    this.props.accountFlag(this.props.item.id, value);
  };
  render() {
    const {item} = this.props;
    if (!this.props) {
      return null;
    }
    return (
      <View style={style.EnableAccountsCard} key={item.id}>
        <View>
          <Text
            style={
              this.state.enabled ? style.accountName : style.accountNameHide
            }>
            {item.name}
          </Text>
          <Text
            style={this.state.enabled ? style.username : style.usernameHide}>
            {item.mask}
          </Text>
          {this.state.enabled ? (
            <Text style={style.mask}>Account will be shown</Text>
          ) : (
            <Text style={style.mask}>Account will be hidden</Text>
          )}
        </View>
        <View style={style.notificationsContainer}>
          <Switch
            trackColor={{false: '#767577', true: '#B8A0FF'}}
            thumbColor={this.state.enabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#f4f3f4"
            onValueChange={this.toggleSwitch}
            value={this.state.enabled}
            style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
          />
        </View>
      </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(EnableAccountsCard);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
  },
  EnableAccountsCard: {
    // borderColor:'lightgrey',
    // borderWidth:.5,
    marginVertical: moderateScale(10),
    marginHorizontal: moderateScale(8),
    padding: moderateScale(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationsContainer: {},
  switch: {
    alignContent: 'center',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(22),
  },
  username: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',

    fontSize: moderateScale(14),
  },
  usernameHide: {
    color: 'lightgrey',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(14),
  },
  mask: {
    color: '#9082cf',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(14),
  },

  accountName: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(20),
  },
  accountNameHide: {
    color: 'lightgrey',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(20),
  },
  accountOfficial: {
    color: 'white',
    fontSize: moderateScale(16),
  },
  account: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: moderateScale(16),
    marginBottom: moderateScale(12),
  },
});
