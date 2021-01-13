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
    color: 'white',
    fontSize: 19,
  },
  percent: {
    color: 'white',
    fontSize: 26.5,
    fontWeight: 'bold',
  },
  percentButtonContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  stockHeader: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  percentChangeButton: {
    color: 'white',
    fontSize: 16.5,
    backgroundColor: '#3e4d6c',
    padding: 6,
    borderRadius: 6,
  },
});