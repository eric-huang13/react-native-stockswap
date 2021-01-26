import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import UserPortfolioBox from './UserPortfolioBox';
import SearchInput from '../../icons/SearchInput'
import {connect} from 'react-redux';

class UserPortfolioList extends Component {
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
    const {gainers} = this.props;
    console.log(this.props, 'propslist');
    const filteredStocks = gainers.filter(
      (item) =>
        item.title.toLowerCase().includes(this.state.input.toLowerCase()) ||
        item.symbol.toLowerCase().includes(this.state.input.toLowerCase()),
    );

    


    return (
      <SafeAreaView style={style.container}>
        <View style={style.searchInputContainer}>
          <View
        style={{
          position: "absolute",
          zIndex: 1,
          left: 14,
          top:10
        }}
      >
        <SearchInput/>
      </View>
            <TextInput
              style={style.searchInput}
              placeholder="Search"
              placeholderTextColor="lightgrey"
              onChangeText={(text) => this.handleChange(text)}
            />
          </View>
        <View style={style.percentContainer}>
          <Text style={style.portfolio}>Portfolio</Text>
          <Text style={style.percent}>+ 320%</Text>
        </View>
        <View style={style.percentButtonContainer}>
          <Text style={style.stockHeader}>STOCKS</Text>
          <Text style={style.percentChangeButton}>Percent Change</Text>
        </View>
        <FlatList
          style={style.boxContainer}
          data={filteredStocks}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                this.props.navigation.navigate({
                  name: 'CompanyInformation',
                  params: {item},
                })
              }>
              <View key={item.id} style={style.portfolioBoxContainer}>
                <UserPortfolioBox item={item} />
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gainers: state.company.gainers,
  };
};
export default connect(mapStateToProps)(UserPortfolioList);

const style = StyleSheet.create({
  container: {
    backgroundColor: '#2a334a',
    flex: 1,
  },
  searchInputContainer: {
    marginBottom: 20,
  },
  searchInput: {
    paddingLeft: 40,
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: 15,
    height: 36,
    fontFamily: 'Montserrat-Italic',
    paddingVertical: 0,
  },
  boxContainer: {
    marginTop: 6,
  },
  portfolioBoxContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(158, 150, 150, .6)',
    padding: 0.1,
    marginTop: 8,
  },
  percentContainer: {
    paddingHorizontal: 8,
  },
  portfolio: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily:'Montserrat-Regular',

  },
  percent: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily:'Montserrat-ExtraBold',
  },
  percentButtonContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  stockHeader: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily:'Montserrat-Bold',
  },
  percentChangeButton: {
    color: '#FFFFFF',
    fontSize: 14,
    backgroundColor: '#3e4d6c',
    padding: 6,
    borderRadius: 6,
    fontFamily:'Montserrat-Medium',

  },
});
