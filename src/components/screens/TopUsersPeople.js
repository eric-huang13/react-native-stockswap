 
import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import UserBox from './UserBox';
 
export class TopUsersPeople extends Component {
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
      <SafeAreaView style={style.mainContainer}>
        <ScrollView contentContainerStyle={{paddingBottom: 180, backgroundColor:'#2a334a'}}>
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
            <TouchableOpacity onPress={() => this.timeFilterSelect('day')}>
              <Text
                style={
                  timeFilter === 'day'
                    ? {...style.timeFilterButtons, color: '#8257FF'}
                    : {...style.timeFilterButtons}
                }>
                1D
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.timeFilterSelect('week')}>
              <Text
                style={
                  timeFilter === 'week'
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                1W
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.timeFilterSelect('month')}>
              <Text
                style={
                  timeFilter === 'month'
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                1M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.timeFilterSelect('3M')}>
              <Text
                style={
                  timeFilter === '3M'
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                3M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.timeFilterSelect('6M')}>
              <Text
                style={
                  timeFilter === '6M'
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                6M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.timeFilterSelect('1Y')}>
              <Text
                style={
                  timeFilter === '1Y'
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                1Y
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.timeFilterSelect('ALL')}>
              <Text
                style={
                  timeFilter === 'ALL'
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                All
              </Text>
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
      </SafeAreaView>
    );
  }
}
 
const mapStateToProps = (state) => {
  return {
    users: state.company.users,
  };
};
 
export default connect(mapStateToProps)(TopUsersPeople);
 
const style = StyleSheet.create({
  mainContainer:{
  },
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
  timeFilterHeader: {
    fontSize: 14,
    paddingLeft: 18,
    color: 'lightgrey',
    fontFamily:'Montserrat-Regular',

  },
  timeFilterContainer: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
    paddingBottom: 9,
  },
  timeFilterButtons: {
    color: '#FFFFFF',
    fontFamily:'Montserrat-Bold',
    fontSize: 16,
  },
});

