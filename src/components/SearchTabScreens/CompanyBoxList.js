import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {moderateScale} from '../../util/responsiveFont';
import SearchInput from '../../icons/SearchInput';
import {connect} from 'react-redux';
import CompanyBox from '../SearchTabComponents/CompanyBox';
import {fetchMarketGainers} from '../../actions/marketMovers';
import {
  fetchMarketLosers,
  searchStock,
  resetStockData,
} from '../../actions/marketMovers';
import {PortfolioAccounts} from '../../actions/profile';
import StockSearchBox from '../SearchTabComponents/StockSearchBox';
import CompanyPortfolioBox from '../SearchTabComponents/CompanyPortfolioBox';
import {debounce} from 'lodash';

export class CompanyBoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      filteredSecurities: [],
    };
  }

  componentDidMount() {
    this.props.fetchGainers();
    this.props.fetchLosers();
    this.props.PortfolioAccounts();

    if (this.props.portfolioAccounts.securities) {
      const filteredSecurities = this.props.portfolioAccounts.securities.filter(
        (security) =>
          security.tickerSymbol !== null &&
          security.type !== 'cash' &&
          security.type !== 'derivative',
      );
      this.setState({
        filteredSecurities: filteredSecurities,
      });
    }

    this.handleChange = debounce(this.handleChange, 1000);
  }

  handleChange = (text) => {
    console.log(text);
    this.setState({
      input: text,
    });
    this.state.input !== '' ? this.props.searchStock(text) : null;
  };

  render() {
    const {
      gainers,
      losers,
      highestByVolume,
      marketGainers,
      marketLosers,
      marketGainersTest,
    } = this.props;

    // const filteredSecurities = this.props.portfolioAccounts.securities.filter(
    //   (security) =>
    //     security.tickerSymbol !== null &&
    //     security.type !== 'cash' &&
    //     security.type !== 'derivative',
    // );

    return (
      <SafeAreaView style={style.mainContainer}>
        <ScrollView contentContainerStyle={{paddingBottom: moderateScale(180)}}>
          <View style={style.searchInputContainer}>
            <View
              style={{
                position: 'absolute',
                zIndex: 1,
                left: 14,
                top: 10,
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
          {this.state.input.length == 0 ? (
            <View>
              <View style={style.container}>
                <View style={style.headerContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('CompanyCategory', {
                        name: 'Gainers',
                        params: {
                          category: marketGainersTest,
                        },
                      })
                    }>
                    <Text style={style.header}>Daily Gainers</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('CompanyCategory', {
                        name: 'Gainers',
                        params: {
                          category: marketGainers,
                        },
                      })
                    }>
                    <Text style={style.seeAllHeader}>See all</Text>
                  </TouchableOpacity>
                </View>
                <View style={style.boxContainer}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    justifyContent="space-between">
                    {marketGainers.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={item.ticker}
                          onPress={() => {
                            this.props.navigation.navigate({
                              name: 'CompanyInformation',
                              params: {item, stockCategory: 'gainers', index},
                            }),
                              this.props.resetStockData();
                          }}>
                          <CompanyBox
                            item={item}
                            symbol={item.ticker}
                            category={'gainers'}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>

              <View style={style.container}>
                <View style={style.headerContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('CompanyCategory', {
                        name: 'Losers',
                        params: {
                          category: losers,
                        },
                      })
                    }>
                    <Text style={style.header}>Daily Losers</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('CompanyCategory', {
                        name: 'Losers',
                        params: {
                          category: marketLosers,
                        },
                      })
                    }>
                    <Text style={style.seeAllHeader}>See all</Text>
                  </TouchableOpacity>
                </View>

                <View style={style.boxContainer}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    justifyContent="space-between">
                    {marketLosers.map((item) => {
                      return (
                        <TouchableOpacity
                          key={item.ticker}
                          onPress={() => {
                            this.props.navigation.navigate({
                              name: 'CompanyInformation',
                              params: {item, stockCategory: 'losers'},
                            }),
                              this.props.resetStockData();
                          }}>
                          <CompanyBox
                            item={item}
                            symbol={item.ticker}
                            category={'losers'}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>

              <View style={style.container}>
                <View style={style.headerContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('CompanyCategory', {
                        name: 'Highest by Volume',
                        params: {
                          category: highestByVolume,
                        },
                      })
                    }>
                    <Text style={style.header}>Your Portfolio</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('CompanyCategory', {
                        name: 'Highest by Volume',
                        params: {
                          category: highestByVolume,
                        },
                      })
                    }>
                    <Text style={style.seeAllHeader}>See all</Text>
                  </TouchableOpacity>
                </View>
                {this.state.filteredSecurities.length > 1 ? (
                  <View style={style.boxContainer}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      justifyContent="space-between">
                      {this.state.filteredSecurities.map((item, index) => {
                        return (
                          <TouchableOpacity
                            key={index}
                            onPress={() => {
                              this.props.navigation.navigate({
                                name: 'CompanyInformation',
                                params: {item, stockCategory: 'hbv'},
                              }),
                                this.props.resetStockData();
                            }}>
                            <CompanyPortfolioBox
                              item={item}
                              symbol={item.tickerSymbol}
                            />
                          </TouchableOpacity>
                        );
                      })}
                    </ScrollView>
                  </View>
                ) : null}
              </View>
            </View>
          ) : (
            <View>
              <View style={style.searchContainer}>
                {this.props.searchStockResults.map((item) => {
                  return (
                    <TouchableOpacity
                      key={item.ticker}
                      onPress={() => {
                        this.props.navigation.navigate({
                          name: 'StockSearchInformation',
                          params: {item, stockCategory: 'gainers'},
                        }),
                          this.props.resetStockData();
                      }}>
                      <StockSearchBox item={item} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gainers: state.company.gainers,
    losers: state.company.losers,
    highestByVolume: state.company.highestByVolume,
    marketGainers: state.company.marketGainers,
    marketLosers: state.company.marketLosers,
    marketGainersTest: state.company.marketGainersTest,
    searchStockResults: state.company.searchStockResults,
    portfolioAccounts: state.user.portfolioAccounts,
  };
};

//Ready for redux hook up. Add mapDipatchToProps in export
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGainers: () => dispatch(fetchMarketGainers()),
    fetchLosers: () => dispatch(fetchMarketLosers()),
    searchStock: (input) => dispatch(searchStock(input)),
    resetStockData: () => dispatch(resetStockData()),
    PortfolioAccounts: () => dispatch(PortfolioAccounts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CompanyBoxList);

const style = StyleSheet.create({
  mainContainer: {
    marginBottom: moderateScale(50),
  },
  container: {
    marginBottom: moderateScale(18),
    paddingHorizontal: moderateScale(2),
  },
  boxContainer: {
    paddingLeft: moderateScale(2),
  },
  searchContainer: {
    padding: moderateScale(2),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: moderateScale(8),
    marginBottom: moderateScale(4),
  },
  header: {
    fontSize: moderateScale(17),
    marginLeft: moderateScale(5.5),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Regular',
  },
  seeAllHeader: {
    paddingTop: moderateScale(3.5),
    paddingRight: moderateScale(2),
    fontSize: moderateScale(15),
    fontSize: moderateScale(15),
    color: '#B8A0FF',
    fontFamily: 'Montserrat-SemiBold',
  },
  searchInputContainer: {
    flexDirection: 'row',
    marginBottom: moderateScale(15),
  },
  searchInput: {
    flex: 1,
    paddingLeft: moderateScale(40),
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: moderateScale(16),
    height: moderateScale(36),
    paddingVertical: moderateScale(0),
    fontFamily: 'Montserrat-Italic',
  },
});
