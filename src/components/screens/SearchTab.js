import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CompanyBoxList from './CompanyBoxList';
import UserList from './UserList.js';
import ArticleList from './ArticleList';

export class SearchTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: true,
      users: false,
      news: false,
    };
  }

  render() {

    return (
      <View>
        <ScrollView>
          <Text style={style.header}>Search</Text>
          <View style={style.tabSelectorContainer}>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  companies: true,
                  users: false,
                  news: false,
                })
              }>
              <Text>Stocks</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  companies: false,
                  news: true,
                  users: false,
                })
              }>
              <Text>News</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  companies: false,
                  news: false,
                  users: true,
                })
              }>
              <Text>People</Text>
            </TouchableOpacity>
          </View>
          {this.state.companies ? (
            <CompanyBoxList navigation={this.props.navigation} />
          ) : this.state.news ? (
            <ArticleList />
          ) : this.state.users ? (
            <UserList  navigation={this.props.navigation}/>
          ) : (
            <View>
              <Text>Search Screen</Text>
              </View>


          )}
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
  tabSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
});
