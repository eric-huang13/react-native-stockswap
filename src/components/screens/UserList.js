import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
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
          <View>
            <TextInput
              style={{borderWidth: 0.5, marginHorizontal: 1}}
              placeholder="Search by name"
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
