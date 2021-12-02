import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {moderateScale} from '../../util/responsiveFont';
import LinearGradient from 'react-native-linear-gradient';
import PlaidComponent from '../MyProfileTabScreens/PlaidComponent';
import {AddLater} from '../../actions/user';
import BulbIcon from '../../icons/BulbIcon';
import LockIcon from '../../icons/LockIcon';
import HouseIcon from '../../icons/HouseIcon';
import Logo from '../../components/Logo';

const ConnectAccount = (props) => {
  const handleAddLater = () => {
    props.user.token !== '' ? props.AddLater() : null;
  };
  // console.log(props.user)
  if (props.plaidLoading) {
    return (
      <LinearGradient
        start={{x: 0.1, y: 1}}
        end={{x: 0.1, y: 0.1}}
        colors={['#1D2842', '#3d4b6e']}
        style={{flex: 1}}>
        <View style={style.loadingView}>
          <Text style={style.loadingText}>Loading Accounts...</Text>
          <ActivityIndicator size="large" color="#8b64ff" />
        </View>
      </LinearGradient>
    );
  }
  return (
    <LinearGradient
      start={{x: 0.1, y: 1}}
      end={{x: 0.1, y: 0.1}}
      colors={['#1D2842', '#3d4b6e']}
      style={{flex: 1}}>
      <SafeAreaView style={style.mainContainer}>
        <ScrollView>
          <Logo />
          <View
            style={{padding: moderateScale(16), paddingTop: moderateScale(40)}}>
            <View>
              <View style={style.headerIcon}>
                <View style={style.bulb}>
                  <HouseIcon />
                </View>
                <Text style={style.header}>Connect effortlessly</Text>
              </View>
              <Text style={style.detailsText}>
                Plaid lets you securely connect your financial data to StockSwap in seconds
              </Text>
            </View>
            <View>
              <View style={style.headerIcon}>
                <View style={style.bulb}>
                  <LockIcon />
                </View>
                <Text style={style.header}>Share your data securely</Text>
              </View>
              <Text style={style.detailsText}>
                Plaid works to transfer your data with bank level security and full encryption to ensure your financial data is secure
              </Text>
            </View>

            <View>
              <View style={style.headerIcon}>
                <View style={style.bulb}>
                  <BulbIcon />
                </View>

                <Text style={style.header}>You're in control</Text>
              </View>
              <Text style={style.detailsText}>
                Choose between making your trades private or public, but either way, no dollar amounts are ever seen. Success is measured by percent change in StockSwap
              </Text>
            </View>
            <View style={style.buttonContainer}>
              <PlaidComponent />

              <View style={style.buttonContainer}>
                <TouchableOpacity onPress={() => handleAddLater()}>
                  <Text style={style.button}>Add later</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    plaidLoading: state.user.plaidLoading,
    loading: state.user.loading,
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddLater: () => dispatch(AddLater()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectAccount);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: moderateScale(8),
    paddingHorizontal: moderateScale(24),
  },
  headerIcon: {
    flexDirection: 'row',
  },

  bulb: {
    marginVertical: moderateScale(0),
    height: moderateScale(28),
    width: moderateScale(24),
    marginRight: moderateScale(0),
    flexWrap: 'nowrap',
  },
  stockHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScale(22),
    marginBottom: moderateScale(56),
  },
  uploadPhotoContainer: {
    alignSelf: 'center',
    backgroundColor: '#515581',
    borderRadius: moderateScale(100),
    width: moderateScale(135),
    height: moderateScale(135),
    marginBottom: moderateScale(25),
    paddingVertical: moderateScale(40),
    paddingHorizontal: moderateScale(10),
  },
  uploadPhotoText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Regular',
  },

  header: {
    // textAlign: 'center',
    fontSize: moderateScale(16),
    color: '#FFFFFF',
    // marginBottom: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
  },
  detailsText: {
    // textAlign: 'center',
    fontSize: moderateScale(14),
    color: '#FFFFFF',
    marginBottom: moderateScale(34),
    fontFamily: 'Montserrat-Regular',
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInputContainer: {
    width: moderateScale(164),
  },

  inputHeader: {
    fontSize: moderateScale(12),
    color: '#babec8',
    marginBottom: moderateScale(1),
    fontFamily: 'Montserrat-Regular',
  },
  inputStyle: {
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
    marginTop: moderateScale(1),
    fontSize: moderateScale(16),
    backgroundColor: '#536183',
    opacity: 0.7,
    fontFamily: 'Montserrat-Italic',
    color: '#9ea6b5',
  },
  inputStyleBio: {
    borderRadius: moderateScale(8),
    backgroundColor: '#3e4d6c',
    padding: moderateScale(8),
    marginTop: moderateScale(1),
    fontSize: moderateScale(16),
    textAlignVertical: 'top',
    backgroundColor: '#536183',
    opacity: 0.7,
    fontFamily: 'Montserrat-Italic',
    color: '#9ea6b5',
  },
  visibleButtonContainer: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(6),
    backgroundColor: '#3E4D6C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleDetailsText: {
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
    fontSize: moderateScale(16),
  },
  dropdown: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: moderateScale(41),
    backgroundColor: '#3E4D6C',
    zIndex: 1,
    paddingVertical: moderateScale(4),
    height: moderateScale(35),
    position: 'absolute',
    borderBottomLeftRadius: moderateScale(6),
    borderBottomRightRadius: moderateScale(6),
  },
  dropDownText: {
    color: 'white',
    fontSize: moderateScale(16),
    marginHorizontal: moderateScale(12),
    fontFamily: 'Montserrat-Medium',
    marginBottom: moderateScale(6),
  },
  dropDownTextReportContainer: {
    borderTopWidth: moderateScale(1),
    borderTopColor: 'lightgrey',
    paddingTop: moderateScale(4),
    backgroundColor: '#2C3957',
  },
  icon: {
    marginRight: moderateScale(4),
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(150),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
  },
  privacyText: {
    color: '#babec8',
    fontSize: moderateScale(12),
    marginRight: moderateScale(3),
    marginBottom: moderateScale(3),
    fontFamily: 'Montserrat-Regular',
  },
  buttonContainer: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  errorText: {
    color: '#F66E6E',
    fontWeight: 'bold',
    marginBottom: moderateScale(1),
    marginTop: moderateScale(1),
    textAlign: 'center',
  },
  loadingView: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(180),
  },
  loadingText: {
    color: '#B8A0FF',
    fontSize: moderateScale(18),
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: moderateScale(24),
  },
  logo: {
    height: moderateScale(44),
    width: moderateScale(44),
    marginLeft: moderateScale(2),
    marginBottom: moderateScale(-3),
  },
  stockHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: moderateScale(10),
    marginBottom: moderateScale(20),
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: moderateScale(15),
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
  },
});
