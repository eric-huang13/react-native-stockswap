import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import TriangleIcon from '../../icons/TriangleIcon';
import {connect} from 'react-redux';
import {Logout} from '../../actions/user';
import { moderateScale } from '../../util/responsiveFont';
import LargeStockSwap from '../../icons/LargeStockSwap';
import LinearGradient from 'react-native-linear-gradient';



class LoggingOut extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // setTimeout(() => { this.props.LogoutUser()}, 1000);
    this.props.LogoutUser()
  }
  render() {
   
    console.log(this.props,'props in loggingout')

    return (
        <LinearGradient
          start={{x: 0.1, y: 1}}
          end={{x: 0.1, y: 0.1}}
          colors={[
            '#1D2842',
            //   '#485476',
            '#3d4b6e',
          ]}
          style={style.mainContainer}>
          <LargeStockSwap />
        </LinearGradient>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    users: state.people.users,
    userAccount: state.user.userFakeData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LogoutUser: (userCredentials) => dispatch(Logout(userCredentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggingOut);

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
