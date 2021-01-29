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
import {Logout} from 'actions/user';


class MyProfileSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: false,
      currentEmail: '',
      shouldShow:false,
      dropDown:'Visible for all',
    };
  }

  toggleSwitch = (value) => {
    this.setState({enabled: value});
  };
  dropDownSelect(pick) {
    this.setState({dropDown:pick, shouldShow:false});
  }

  componentDidMount() {
    const {users, userAccount} = this.props;
    this.setState({
      currentEmail: userAccount.email,
    })


    // const id = 1;
    // const selectedUser = users.filter((user) => user.id === id);
    // {
    //   selectedUser.map((user) => {
    //     this.setState({
    //       currentEmail: user.email,
    //     });
    //   });
    // }
  }
  render() {
    const {LogoutUser} = this.props;
    const {shouldShow} = this.state; 

    return (
      <SafeAreaView style={style.container}>
        <ScrollView>
          <View style={style.topDetailsContainer}>
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
          </View>

          <View style={style.middleContainer}>
            <View style={style.accountPrivacyContainer}>
              <Text style={style.detailsText}>Account privacy</Text>

              <View style={style.dotsDropdownContainer}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    shouldShow: !shouldShow,
                  })
                }>
                  <View style={style.visibleButtonContainer}>
          <Text style={style.middleDetailsText}>{this.state.dropDown}</Text>
        <TriangleIcon style={style.icon}/>        
          </View>
              </TouchableOpacity>
              {this.state.shouldShow ? (
                <View style={style.dropdown}>
                  { this.state.dropDown == 'Visible for all' ?
                  <TouchableOpacity onPress={() => this.dropDownSelect('Private')}>
                  <Text style={style.dropDownText}>Private</Text>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => this.dropDownSelect('Visible for all')}>
                  <Text style={style.dropDownText}>Visible for all</Text>
              </TouchableOpacity>
              
                  }          
                </View>
              ) : null}
            </View>         


              
            </View>
            <View style={style.notificationsContainer}>
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
    users: state.people.users,
    userAccount: state.user.userFakeData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LogoutUser: (userCredentials) => dispatch(Logout(userCredentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileSettings);

const style = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
    paddingTop: 10,
    paddingBottom: 20,
  },
  topDetailsContainer: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(158, 150, 150, .4)',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  detailsColumn: {},
  detailsText: {
    color: 'lightgrey',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    paddingLeft: 2,
  },
  detailsData: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 1,
  },
  detailsButton: {
    color: '#B8A0FF',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'flex-end',
    marginRight: 6,
  },
  detailsButtonContainer: {
    flexDirection: 'row',
  },
  detailsButtonChange: {
    color: '#B8A0FF',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'flex-end',
    marginLeft: 24,
  },
  middleContainer: {
    paddingHorizontal: 12,
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
    fontSize: 16,
  },
  dropdown: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 44,
    backgroundColor: '#3E4D6C',
    zIndex: 1,
    paddingVertical: 4,
    height:35,
    position:'absolute',
    borderBottomLeftRadius:6,
    borderBottomRightRadius:6,
  },
  dropDownText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 12,
    fontFamily:'Montserrat-Medium',
    marginBottom:6,  
  },
  dropDownTextReportContainer: {
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    paddingTop: 4,
    backgroundColor:'#2C3957',
  },
  icon:{
    marginRight:4,
  },
  notificationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 36,
    marginBottom: 10,
  },
  bottomContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(158, 150, 150, .4)',
  },
  bottomInnerContiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    marginBottom: 8,
  },
  bottomText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    fontSize: 16,
  },

  logoutButtonContainer: {
    marginTop: 34,
    marginHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#8B64FF',
    borderRadius: 6,
  },
  logoutButton: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    color: '#8B64FF',
    fontSize: 14,
  },
});
