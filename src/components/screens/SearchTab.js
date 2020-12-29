import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CompanyBoxList from './CompanyBoxList';
import UserList from './UserList.js';
import ArticleList from './ArticleList';
import LinearGradient from 'react-native-linear-gradient';


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
            <LinearGradient
      start={{ x:.1, y: .1 }}
       end={{x: 1, y: 1}}
      colors={['#1d2842', '#1f2a45', '#222d47', '#242f4a', '#27324d', '#293450', '#2c3752', '#2e3955', '#313c58', '#333e5c', '#36415f', '#394463']}	style={{ flex: 1 }}
>
      <View>
        {/* <ScrollView> */}
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
              <Text
                style={
                  this.state.companies
                    ? {backgroundColor: 'white', borderBottomWidth: 1.5}
                    : {}
                }>
                Stocks
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  companies: false,
                  news: true,
                  users: false,
                })
              }>
              <Text
                style={
                  this.state.news
                    ? {backgroundColor: 'white', borderBottomWidth: 1.5}
                    : {}
                }>
                News
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  companies: false,
                  news: false,
                  users: true,
                })
              }>
              <Text
                style={
                  this.state.users
                    ? {backgroundColor: 'white', borderBottomWidth: 1.5}
                    : {}
                }>
                People
              </Text>
            </TouchableOpacity>
          </View>
          {this.state.companies ? (
            <CompanyBoxList navigation={this.props.navigation} />
          ) : this.state.news ? (
            <ArticleList />
          ) : this.state.users ? (
            <UserList navigation={this.props.navigation} />
          ) : (
            <View>
              <Text>Search Screen</Text>
            </View>
          )}
        {/* </ScrollView> */}
      </View>
            </LinearGradient>

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
