import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

export class UserList extends Component {
  render() {
    const {users} = this.props;
    console.log(users,'users')
    return (
      <View>
        <Text>List of users</Text>
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
