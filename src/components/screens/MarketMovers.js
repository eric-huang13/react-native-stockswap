import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, ScrollView} from 'react-native';
import CompanyBoxList from './CompanyBoxList';
import ArticleList from './ArticleList.js';

export class MarketMovers extends Component {
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
          <View style={style.searchInputContainer}>
            <TextInput
              style={style.searchInput}
              placeholder="Search Company or Users"
              onChangeText={(text) => this.handleChange(text)}
            />
          </View>

          <Text style={style.header}>Market Movers</Text>
          <CompanyBoxList navigation={this.props.navigation} />
          <ArticleList />
        </ScrollView>
      </View>
    );
  }
}

export default MarketMovers;

const style = StyleSheet.create({
  searchInputContainer: {
    backgroundColor: 'rgb(176, 241, 181)',
    alignItems: 'center',
    padding: 4.8,
    marginTop: 0,
    borderWidth: 1,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'rgb(181, 214, 204)',
    borderRadius: 20,
    width: '90%',
    fontSize: 24,
    textAlign: 'center',
    padding: 2.5,
    backgroundColor: 'rgb(181, 214, 204)',
    color: '	rgb(165, 169, 164)',
    opacity: 0.8,
  },
  header: {
    fontSize: 18.5,
    fontWeight: '700',
    color: 'rgb(123, 123, 124)',
    marginLeft: 23,
    marginTop: 8.5,
  },
});
