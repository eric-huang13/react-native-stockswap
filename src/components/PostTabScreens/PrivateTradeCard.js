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
import {moderateScale} from '../../util/responsiveFont';

class PrivateTradeCard extends Component {
  render() {

    const {item} = this.props;
    if (!this.props) {
      return null;
    }
    return (
      <View style={style.PrivateTradeCard} key={item.id}>
        <View>
        <Text style={style.accountName}>
                {item.title.length < 20
                  ? `${item.title}`
                  : `${item.title.substring(0, 19)}...`}
              </Text>
          {/* <Text style={style.accountName}>{item.title}</Text> */}
          <Text style={style.username}>Price: ${item.price}</Text>
        </View>
        <View style={style.notificationsContainer}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate({
                name: 'CreatePublicTrade',
                params: {post:item},

              })
            }>
            <Text style={style.publishButton}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(PrivateTradeCard);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
  },
  PrivateTradeCard: {
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
  publishButton: {
    alignSelf: 'center',
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    width: moderateScale(100),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 14,
    marginBottom: 10,
  },
});
