import React, {Component} from 'react';
import {View, TextInput, ScrollView} from 'react-native';
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
      <View>
        <ScrollView contentContainerStyle={{paddingBottom:180}}>
        <View>
          <TextInput
            style={{borderWidth: 0.5, marginHorizontal: 1}}
            placeholder="Search by name"
            onChangeText={(text) => this.handleChange(text)}
          />
        </View>
        {filteredArticles.map((item) => {
          return <Article key={item.id} item={item} />;
        })}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.company.articles,
  };
};

export default connect(mapStateToProps)(ArticleList);
