import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {connect} from 'react-redux';
import UserBox from '../SearchTabComponents/UserBox';
import SearchInput from '../../icons/SearchInput';
import UserListImage from '../../icons/UserListImage';
import {moderateScale} from '../../util/responsiveFont';

export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleChange = (text) => {
    this.setState({input: text});
  };

  accountId = this.props.userAccount.id;

  navigationByCondition = (item) => {
    const {navigation} = this.props;
    if (item.id === this.accountId) {
      navigation.navigate({
        name: 'MyProfile',
        params: {id: item.id},
      });
    } else {
      navigation.navigate({
        name: 'Profile',
        params: {id: item.id},
      });
    }
  };
  render() {
    const {input} = this.state;
    const {users, userAccount} = this.props;

    const accountId = userAccount.id;

    const filteredUsers = users.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase()),
    );

    return (
      <SafeAreaView>
        <View style={style.searchInputContainer}>
          <View
            style={{
              position: 'absolute',
              zIndex: 1,
              left: moderateScale(14),
              top: moderateScale(10),
            }}>
            <SearchInput />
          </View>
          <TextInput
            style={style.searchInput}
            placeholder="Search by name"
            placeholderTextColor="lightgrey"
            onChangeText={(text) => this.handleChange(text)}
          />
        </View>
        {this.state.input === '' ? (
          <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={style.backgroundImageContainer}>
                <UserListImage />
                <Text style={style.backgroundImageText}>
                  Find any person on the platform
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        ) : (
          <ScrollView contentContainerStyle={{paddingBottom: 180}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View>
                {filteredUsers.map((item) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => this.navigationByCondition(item)}>
                      <UserBox item={item} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.people.users,
    userAccount: state.user.userFakeData,
  };
};

export default connect(mapStateToProps)(UserList);

const style = StyleSheet.create({
  searchInputContainer: {
    marginBottom: moderateScale(15),
  },
  searchInput: {
    paddingLeft: moderateScale(40),
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: moderateScale(15),
    height: moderateScale(36),
    fontFamily: 'Montserrat-Italic',
    paddingVertical: moderateScale(0),
  },
  timeFilterHeader: {
    fontSize: moderateScale(16),
    paddingLeft: moderateScale(18),
    color: 'lightgrey',
  },
  timeFilterContainer: {
    marginTop: moderateScale(4),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: moderateScale(12),
    paddingBottom: moderateScale(9),
  },
  timeFilterButtons: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(18),
  },
  backgroundImageContainer: {
    flex: 1,
    marginTop: moderateScale(120),
    alignItems: 'center',
  },
  backgroundImageText: {
    marginTop: moderateScale(10),
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(18),
    color: '#9ea6b5',
    width: moderateScale(180),
    textAlign: 'center',
  },
});
