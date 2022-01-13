import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Switch,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import TriangleIcon from '../../icons/TriangleIcon';
import {connect} from 'react-redux';
import {Logout} from '../../actions/user';
import { GetSettings, PostSettings } from '../../actions/profile';
import {moderateScale} from '../../util/responsiveFont';
import LinearGradient from 'react-native-linear-gradient';
import {CommonActions} from '@react-navigation/native';
import PlaidComponent from './PlaidComponent';
import { Linking } from 'react-native';


class MyProfileSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: false,
      currentEmail: '',
      shouldShow: false,
      dropDown: 'Visible for all',
    };
  }

  toggleSwitch = (value) => {
    this.setState({enabled: value});
  };
  dropDownSelect(pick) {
    this.setState({dropDown: pick, shouldShow: false});
    this.props.PostSettings({visibility: pick})
  }
openSetttings(){
  Linking.openSettings();

}
  componentDidMount() {
    const {users, userAccount, GetSettings, profileSettings} = this.props;
    GetSettings()
    this.setState({
      currentEmail: userAccount.email,
      dropDown: profileSettings.visibility
    });
  }
  render() {
    const {LogoutUser} = this.props;
    const {shouldShow} = this.state;
    if (this.props.plaidLoading) {
      return (
        <LinearGradient
          start={{x: 0.1, y: 1}}
          end={{x: 0.1, y: 0.1}}
          colors={['#1D2842', '#3d4b6e']}
          style={{flex: 1}}>
          <View style={style.loadingView}>
            <Text style={style.loadingText}>Loading...</Text>
            <ActivityIndicator size="large" color="#8b64ff" />
          </View>
        </LinearGradient>
      );
    }

    return (
      <SafeAreaView style={style.container}>
        <ScrollView>
          {/* <View style={style.topDetailsContainer}>
            <View style={style.detailsRow}>
              <View style={style.detailsColumn}>
                <Text style={style.detailsText}>Email</Text>
                <Text style={style.detailsData}>{this.state.currentEmail}</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ChangeEmail')}>
                <Text style={style.detailsButton}>Change</Text>
              </TouchableOpacity>
            </View>

            <View style={style.detailsRow}>
              <View style={style.detailsColumn}>
                <Text style={style.detailsText}>Phone Number</Text>
                <Text style={style.detailsData}>Test</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('ChangePassword')
                }>
                <Text style={style.detailsButton}>Change</Text>
              </TouchableOpacity>
            </View>

            <View style={style.detailsRow}>
              <View style={style.detailsColumn}>
                <Text style={style.detailsText}>Password</Text>
                <Text style={style.detailsData}>Test</Text>
              </View>
              <View style={style.detailsButtonContainer}>
                <Text style={style.detailsButton}>Show</Text>
                <TouchableOpacity
                  style={style.detailsButtonChange}
                  onPress={() =>
                    this.props.navigation.navigate('ChangePassword')
                  }>
                  <Text style={style.detailsButton}>Change</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View> */}

          <View style={style.middleContainer}>
            <View style={style.accountPrivacyContainer}>
              <Text style={style.detailsText}>Account privacy: {this.props.profileSettings.visibility}</Text>

              <View style={style.dotsDropdownContainer}>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      shouldShow: !shouldShow,
                    })
                  }>
                  <View style={style.visibleButtonContainer}>
                    <Text style={style.middleDetailsText}>
                      {this.state.dropDown == 'public'?
                      'Visible to all'
                      :
                      'Private'
                    }
                    </Text>
                    <TriangleIcon style={style.icon} />
                  </View>
                </TouchableOpacity>
                {this.state.shouldShow ? (
                  <View style={style.dropdown}>
                    {this.props.profileSettings.visibility == 'public' ? (
                      <TouchableOpacity
                        onPress={() => this.dropDownSelect('private')}>
                        <Text style={style.dropDownText}>Private</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => this.dropDownSelect('public')}>
                        <Text style={style.dropDownText}>Visible to all</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                ) : null}
              </View>
            </View>
            <View style={style.notificationsContainer}>
            <TouchableOpacity
                        onPress={() => Linking.openSettings()}>
                        <Text style={style.dropDownText}>Open Settings</Text>
                      </TouchableOpacity>
              <Text style={style.middleDetailsText}>
                Turn off notifications
              </Text>
              <Switch
                trackColor={{false: '#767577', true: '#B8A0FF'}}
                thumbColor={this.state.enabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                onValueChange={this.toggleSwitch}
                value={this.state.enabled}
                style={{transform: [{scaleX: 1.5}, {scaleY: 1.5}]}}
              />
            </View>
          </View>

          <View style={style.bottomContainer}>
            <View style={style.bottomInnerContiner}>
              <Text style={style.bottomText}>Privacy policy</Text>
              <TouchableOpacity
                style={style.detailsButtonChange}
                onPress={() => this.props.navigation.navigate('PrivacyPolicy')}>
                <Text style={style.detailsButton}>Show</Text>
              </TouchableOpacity>
            </View>
            <View style={style.bottomInnerContiner}>
              <Text style={style.bottomText}>Terms and conditions</Text>
              <TouchableOpacity
                style={style.detailsButtonChange}
                onPress={() =>
                  this.props.navigation.navigate('TermsAndConditions')
                }>
                <Text style={style.detailsButton}>Show</Text>
              </TouchableOpacity>
            </View>
            <View style={style.bottomInnerContiner}>
              <Text style={style.bottomText}>Accounts</Text>
              <TouchableOpacity
                style={style.detailsButtonChange}
                onPress={() =>
                  this.props.navigation.navigate('PortfolioMangement')
                }>
                <Text style={style.detailsButton}>Manage Accounts</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.detailsButtonChange}
                onPress={() =>
                  this.props.navigation.navigate('EnableAccounts')
                }>
                <Text style={style.detailsButton}>Enable Accounts</Text>
              </TouchableOpacity>
            </View>
            <View style={style.bottomInnerContiner}>
              <Text style={style.bottomText}>Link Bank Account</Text>

              <PlaidComponent screen={'settings'}/>
            </View>
          </View>
          <View style={style.logoutButtonContainer}>
            <Text style={style.logoutButton} onPress={() => LogoutUser()}>
              Log Out
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    plaidLoading: state.user.plaidLoading,
    users: state.people.users,
    userAccount: state.user.userFakeData,
    profileSettings: state.user.settings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LogoutUser: (userCredentials) => dispatch(Logout(userCredentials)),
    GetSettings: () => dispatch(GetSettings()),
    PostSettings: (input) => dispatch(PostSettings(input)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileSettings);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(20),
  },
  topDetailsContainer: {
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(16),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'rgba(158, 150, 150, .4)',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(16),
  },
  detailsColumn: {},
  detailsText: {
    color: 'lightgrey',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
    paddingLeft: moderateScale(2),
  },
  detailsData: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-SemiBold',
    marginTop: moderateScale(1),
  },
  detailsButton: {
    color: '#B8A0FF',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'flex-end',
    marginRight: 6,
  },
  detailsButtonContainer: {
    flexDirection: 'row',
  },
  detailsButtonChange: {
    color: '#B8A0FF',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'flex-end',
    marginLeft: 24,
  },
  middleContainer: {
    paddingHorizontal: moderateScale(12),
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(158, 150, 150, .4)',
  },
  accountPrivacyContainer: {},
  visibleButtonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#3E4D6C',
    marginTop: 4,
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
    marginTop: 44,
    backgroundColor: '#3E4D6C',
    zIndex: 1,
    paddingVertical: 4,
    height: 35,
    position: 'absolute',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
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
  notificationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(36),
    marginBottom: moderateScale(10),
  },
  bottomContainer: {
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'rgba(158, 150, 150, .4)',
  },
  bottomInnerContiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(8),
    marginBottom: moderateScale(8),
  },
  bottomText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    fontSize: moderateScale(16),
  },

  logoutButtonContainer: {
    marginTop: moderateScale(34),
    marginHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: '#8B64FF',
    borderRadius: moderateScale(6),
  },
  logoutButton: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    color: '#8B64FF',
    fontSize: moderateScale(14),
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
});
