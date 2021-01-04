import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import UserBox from './UserBox';

export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      day: true,
      week: false,
      month: false,
      threeMonth: false,
      sixMonth:false,
      year: false,
      all: false,
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
          <Text style={style.timeFilterHeader}>Time filter:</Text>
          <View style={style.timeFilterContainer}>
          <TouchableOpacity
              onPress={() =>
                this.setState({
          
                  day: true,
                  week: false,
                  month: false,
                  threeMonth: false,
                  sixMonth:false,
                  year: false,
                  all: false,
                })
              }>
              <Text
                style={
                  this.state.day
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                1D</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
          
                  day: false,
                  week: true,
                  month: false,
                  threeMonth: false,
                  sixMonth:false,
                  year: false,
                  all: false,
                })
              }>
              <Text
                style={
                  this.state.week
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                1W
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
          
                  day: false,
                  week: false,
                  month: true,
                  threeMonth: false,
                  sixMonth:false,
                  year: false,
                  all: false,
                })
              }>
              <Text
                style={
                  this.state.month
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                1M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
           onPress={() =>
            this.setState({
      
              day: false,
              week: false,
              month: false,
              threeMonth: true,
              sixMonth:false,
              year: false,
              all: false,
            })
          }>
              <Text
                style={
                  this.state.threeMonth
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                
                3M</Text>
            </TouchableOpacity>
            <TouchableOpacity
           onPress={() =>
            this.setState({
      
              day: false,
              week: false,
              month: false,
              threeMonth: false,
              sixMonth:true,
              year: false,
              all: false,
            })
          }>
              <Text
                style={
                  this.state.sixMonth
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                6M</Text>
            </TouchableOpacity>
            <TouchableOpacity
           onPress={() =>
            this.setState({
      
              day: false,
              week: false,
              month: false,
              threeMonth: false,
              sixMonth:false,
              year: true,
              all: false,
            })
          }>
              <Text
                style={
                  this.state.year
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                1Y</Text>
            </TouchableOpacity>
            <TouchableOpacity
           onPress={() =>
            this.setState({
      
              day: false,
              week: false,
              month: false,
              threeMonth: false,
              sixMonth:false,
              year: false,
              all: true,
            })
          }>
              <Text
                style={
                  this.state.all
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                All</Text>
            </TouchableOpacity>

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
  timeFilterHeader:{
    fontSize:16,
    paddingLeft:18,
    color:'lightgrey'
  },
  timeFilterContainer: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    paddingBottom: 9,
  },
  timeFilterButtons: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
