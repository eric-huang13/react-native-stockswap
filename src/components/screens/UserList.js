import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
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
        <View>
          <TextInput
            placeholder="Search by name"
            onChangeText={(text) => this.handleChange(text)}
          />
        </View>
        {filteredUsers.map((item) => {
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
