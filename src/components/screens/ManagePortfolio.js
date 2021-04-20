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
import SearchInput from '../../icons/SearchInput';
import TriangleIcon from '../../icons/TriangleIcon';
import {connect} from 'react-redux';
import ManagePortfolioBox from './ManagePortfolioBox';

class ManagePortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      shouldShow: false,
      dropDown: 'Select sorting',
    };
  }
  handleChange = (text) => {
    this.setState({input: text});
  };

  dropDownSelect(pick) {
    this.setState({dropDown: pick, shouldShow: false});
  }
  render() {
    const {gainers} = this.props;

    const filteredStocks = gainers.filter(
      (item) =>
        item.title.toLowerCase().includes(this.state.input.toLowerCase()) ||
        item.symbol.toLowerCase().includes(this.state.input.toLowerCase()),
    );

    const {shouldShow} = this.state;

    return (
      <SafeAreaView style={style.container}>
        <View style={style.searchInputContainer}>
          <View style={style.searchInputInnerContainer}>
            <SearchInput />
          </View>
          <TextInput
            style={style.searchInput}
            placeholder="Search"
            placeholderTextColor="lightgrey"
            onChangeText={(text) => this.handleChange(text)}
          />
        </View>
        <View style={style.innerContainer}>
          <View style={style.topDetailsRow}>
            <View style={style.percentContainer}>
              <Text style={style.portfolio}>Portfolio</Text>
              <Text style={style.percent}>$3,201</Text>
            </View>
            <View style={style.gainDetailsContainer}>
              <Text style={style.gain}>$-10.75(-11%)</Text>
              <Text style={style.gainTime}>Past hour</Text>
            </View>
          </View>
          <View style={style.percentButtonContainer}>
            <Text style={style.stockHeader}>STOCKS</Text>
            <View style={style.dotsDropdownContainer}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    shouldShow: !shouldShow,
                  })
                }>
                <View style={style.percentChangeContainer}>
                  <Text style={style.percentChangeButton}>
                    {this.state.dropDown}
                  </Text>
                  <TriangleIcon style={style.icon} />
                </View>
              </TouchableOpacity>
              {this.state.shouldShow ? (
                <View style={style.dropdown}>
                  <TouchableOpacity
                    onPress={() => this.dropDownSelect('Percent Change')}>
                    <Text style={style.dropDownText}>Percent Change</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.dropDownSelect('Last price')}>
                    <Text style={style.dropDownText}>Last price</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.dropDownSelect('Total percent change')}>
                    <Text style={style.dropDownText}>Total percent change</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.dropDownSelect('Your equity')}>
                    <Text style={style.dropDownText}>Your equity</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.dropDownSelect("Today's return")}>
                    <Text style={style.dropDownText}>Today's return</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.dropDownSelect('Total return')}>
                    <Text style={style.dropDownText}>Total return</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          </View>
          <FlatList
            style={style.boxContainer}
            data={filteredStocks}
            renderItem={({item}) => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  this.props.navigation.navigate({
                    name: 'ManagePortfolioCompany',
                    params: {item},
                  })
                }>
                <View key={item.id} style={style.portfolioBoxContainer}>
                  <ManagePortfolioBox item={item} />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gainers: state.company.gainers,
  };
};
export default connect(mapStateToProps)(ManagePortfolio);

const style = StyleSheet.create({
  container: {
    backgroundColor: '#2a334a',
    flex: 1,
  },
  searchInputContainer: {
    marginBottom: 22,
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
  searchInputInnerContainer: {
    position: 'absolute',
    zIndex: 1,
    left: 14,
    top: 10,
  },
  innerContainer: {
    paddingHorizontal: 6,
  },
  topDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gainDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  gain: {
    fontFamily: 'Montserrat-Medium',
    color: '#F66E6E',
    fontSize: 12,
  },
  gainTime: {
    fontFamily: 'Montserrat-Medium',
    color: 'lightgrey',
    fontSize: 10,
    marginLeft: 8,
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
    fontFamily: 'Montserrat-Regular',
  },
  percent: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Montserrat-ExtraBold',
  },
  percentButtonContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  stockHeader: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
  },
  percentChangeButton: {
    color: '#FFFFFF',
    fontSize: 14,
    backgroundColor: '#3E4D6C',
    borderRadius: 6,
    fontFamily: 'Montserrat-Italic',
    marginLeft: 6,
    width: 190,
  },
  percentChangeContainer: {
    borderRadius: 6,
    backgroundColor: '#3E4D6C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
  },

  dropdown: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 29,
    backgroundColor: '#3E4D6C',
    zIndex: 1,
    paddingVertical: 6,
    height: 200,
    position: 'absolute',
  },
  dropDownText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 12,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 6,
  },
  dropDownTextReportContainer: {
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    paddingTop: 4,
    backgroundColor: '#2C3957',
  },
  icon: {
    marginRight: 4,
  },
});
