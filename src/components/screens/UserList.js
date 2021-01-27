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
import UserBox from './UserBox';
import SearchInput from '../../icons/SearchInput';
import UserListImage from '../../icons/UserListImage';

export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      timeFilter: 'day',
    };
  }

  timeFilterSelect(time) {
    this.setState({timeFilter: time});
  }
  handleChange = (text) => {
    this.setState({input: text});
  };
  render() {
    const {timeFilter, input} = this.state;
    const {users} = this.props;

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
              left: 14,
              top: 10,
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
                      onPress={() =>
                        this.props.navigation.navigate({
                          name: 'Profile',
                          params: {item},
                        })
                      }>
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
  };
};

export default connect(mapStateToProps)(UserList);

const style = StyleSheet.create({
  searchInputContainer: {
    marginBottom: 15,
  },
  searchInput: {
    paddingLeft: 40,
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: 15,
    height: 36,
    fontFamily: 'Montserrat-Italic',
    paddingVertical: 0,
  },
  timeFilterHeader: {
    fontSize: 16,
    paddingLeft: 18,
    color: 'lightgrey',
  },
  timeFilterContainer: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
    paddingBottom: 9,
  },
  timeFilterButtons: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  backgroundImageContainer: {
    flex: 1,
    marginTop: 120,
    alignItems: 'center',
  },
  backgroundImageText: {
    marginTop: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: '#9ea6b5',
    width: 180,
    textAlign: 'center',
  },
});
