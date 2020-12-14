import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import UserBox from './UserBox'

export class UserList extends Component {
  render() {
    const {users} = this.props;
    console.log(users,'users')
    return (
        <View>
          {users.map((item) => {
            return <UserBox key={item.id} item={item} />;
          })}
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
