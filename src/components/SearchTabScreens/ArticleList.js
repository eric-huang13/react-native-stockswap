import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import Article from '../SearchTabComponents/Article';
import SearchInput from '../../icons/SearchInput';
import { moderateScale } from '../../util/responsiveFont';

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
            <View
              style={{
                position: 'absolute',
                zIndex: 1,
                left: moderateScale(14),
                top: moderateScale(10),
              }}>
              <SearchInput />
            </View>
            <TextInput
              style={style.searchInput}
              placeholder="Search"
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
    marginBottom: moderateScale(20),
  },
  searchInput: {
    paddingLeft: moderateScale(40),
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: moderateScale(16),
    height: moderateScale(36),
    paddingVertical: 0,
    fontFamily: 'Montserrat-Italic',
  },
});
