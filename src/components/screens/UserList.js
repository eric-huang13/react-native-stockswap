import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import UserBox from './UserBox';

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
  render() {
    const {users} = this.props;
    const filteredUsers = users.filter((item) =>
      item.name.toLowerCase().includes(this.state.input.toLowerCase()),
    );

    return (
      <View>
        <ScrollView contentContainerStyle={{paddingBottom: 180}}>
          <View style={style.searchInputContainer}>
          <TextInput
              style={style.searchInput}
              placeholder="Search"
              placeholderTextColor="lightgrey"
              onChangeText={(text) => this.handleChange(text)}
            />
          </View>
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
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.company.users,
  };
};

export default connect(mapStateToProps)(UserList);

const style = StyleSheet.create({
  searchInputContainer: {
    // marginTop: 1,
    marginBottom: 15,
  },
  searchInput: {
    paddingLeft: 40,
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: 18,
    height: 36,
    fontStyle: 'italic',
    paddingVertical: 0,
  },
});

