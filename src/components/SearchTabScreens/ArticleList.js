import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  RefreshControl,
  TouchableOpacity,
  Linking
} from 'react-native';
import {connect} from 'react-redux';
import Article from '../SearchTabComponents/Article';
import SearchInput from '../../icons/SearchInput';
import {moderateScale} from '../../util/responsiveFont';
import {fetchNews} from '../../actions/news'


export class ArticleList extends Component {

  componentDidMount() {
    this.props.fetchNews();
  }
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }
  handleChange = (text) => {
    this.setState({input: text});
  };

   //fetches more data, increases page number by 1
   fetchMoreData = () => {
    if (!this.props.loading && this.props.loadMore){
    // this.props.fetchNews(this.props.page, this.props.offset);
    this.props.fetchNews();

    console.log(this.props.page,'ran')
    }
  };
  render() {
    const {articles} = this.props;
    // console.log(articles,"NEWS")
    // const filteredArticles = articles.filter((item) =>
    //   item.headline.toLowerCase().includes(this.state.input.toLowerCase()),
    // );
    return (
      <SafeAreaView>
        {/* <ScrollView contentContainerStyle={{paddingBottom: 220}}> */}
        <FlatList
        ListHeaderComponent={
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
          }
          keyExtractor={(item, index) => String(index)}
          contentContainerStyle={{ paddingBottom: 20 }}
          data={this.props.articles}
           renderItem={({item, index}) => ( 
            <TouchableOpacity
                key={item.id}
                onPress={() => {
                  Linking.openURL(item.news_url);
                }}>
            <Article key={item.id} item={item} />
              </TouchableOpacity>
           )}  
           refreshControl={
            <RefreshControl
              //refresh control used for the Pull to Refresh
              refreshing={this.props.loading}
              onRefresh={this.fetchMoreData}
            />
          }
          //Will uncomment if pagination is set up
          //  onEndReachedThreshold={0.1} 
          //  onEndReached={this.fetchMoreData}
        ListFooterComponent={
          <View style={style.footer}>
            {this.props.loading ? <Text style={style.loadingText}>LOADING...</Text> : null}
          </View>
        }                   
          />

          {/* {filteredArticles.map((item) => {
            return <Article key={item.id} item={item} />;
          })} */}
        {/* </ScrollView> */}
      </SafeAreaView>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: (page, offset) => dispatch(fetchNews(page, offset)),
  };
};

const mapStateToProps = (state) => {
  return {
    articles: state.news.articles,
    loading:state.news.loading,
    page:state.news.page,
    loadMore:state.news.loadMore,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);

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
  loadingText:{
    color:'#8B64FF',
    textAlign:"center",
    fontSize:18,
  },
  footer:{
    height: 0, 
    marginBottom: 210,
  }
});
