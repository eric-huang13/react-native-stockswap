import React, {Component} from 'react';
import {View, SafeAreaView, TextInput, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Article from './Article';

export class ArticleList extends Component {
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
    const {articles} = this.props;
    const filteredArticles = articles.filter((item) =>
      item.headline.toLowerCase().includes(this.state.input.toLowerCase()),
    );
    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={{paddingBottom: 180}}>
          <View style={style.searchInputContainer}>
            <TextInput
              style={style.searchInput}
              placeholder="Search by name"
              placeholderTextColor="lightgrey"
              onChangeText={(text) => this.handleChange(text)}
            />
          </View>
          {filteredArticles.map((item) => {
            return <Article key={item.id} item={item} />;
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.company.articles,
  };
};

export default connect(mapStateToProps)(ArticleList);

const style = StyleSheet.create({
  searchInputContainer: {
    // marginTop: 1,
    marginBottom: 20,
  },
  searchInput: {
    paddingLeft: 40,
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: 16,
    height: 36,
    fontStyle: 'italic',
    paddingVertical: 0,
  },
});
