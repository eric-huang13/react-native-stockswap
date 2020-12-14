import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, ScrollView} from 'react-native';
import CompanyBoxList from './CompanyBoxList';
import UserList from './UserList.js'

export class SearchTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleChange = (text) => {
    console.log(text);
  };
  render() {
    return (
      <View>
        <ScrollView>
          <Text style={style.header}>Search</Text>
          <View style={style.searchInputContainer}>
            <TextInput
              style={style.searchInput}
              placeholder="Search"
              onChangeText={(text) => this.handleChange(text)}
            />
          </View>
          {/* <CompanyBoxList navigation={this.props.navigation} /> */}
          <UserList/>
        </ScrollView>
      </View>
    );
  }
}

export default SearchTab;

const style = StyleSheet.create({
  searchInputContainer: {
    alignItems: 'center',
    padding: 4.8,
    marginTop: 0,
  },
  searchInput: {
    borderWidth: 0.5,
    width: '90%',
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'left',
    padding: 2.5,
    opacity: 0.8,
    marginBottom: 20,
    paddingLeft: 5,
  },
  header: {
    fontSize: 19,
    fontWeight: '700',
    marginTop: 8.5,
    textAlign: 'center',
  },
});
