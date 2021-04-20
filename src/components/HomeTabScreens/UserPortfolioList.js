import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import UserPortfolioBox from '../HomeTabComponents/UserPortfolioBox';
import SearchInput from '../../icons/SearchInput';
import TriangleIcon from '../../icons/TriangleIcon';
import {connect} from 'react-redux';
import {moderateScale} from '../../util/responsiveFont'


class UserPortfolioList extends Component {
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
        <View style={style.percentContainer}>
          <Text style={style.portfolio}>Portfolio</Text>
          <Text style={style.percent}>+ 320%</Text>
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
    marginBottom: moderateScale(22),
  },
  searchInput: {
    paddingLeft: moderateScale(40),
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: moderateScale(15),
    height: moderateScale(36),
    fontFamily: 'Montserrat-Italic',
    paddingVertical: moderateScale(0),
  },
  searchInputInnerContainer: {
    position: 'absolute',
    zIndex: 1,
    left: moderateScale(14),
    top: moderateScale(10),
  },
  boxContainer: {
    marginTop: moderateScale(6),
  },
  portfolioBoxContainer: {
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'rgba(158, 150, 150, .6)',
    padding: moderateScale(0.1),
    marginTop: moderateScale(8),
  },
  percentContainer: {
    paddingHorizontal: moderateScale(8),
  },
  portfolio: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Regular',
  },
  percent: {
    color: '#FFFFFF',
    fontSize: moderateScale(24),
    fontFamily: 'Montserrat-ExtraBold',
  },
  percentButtonContainer: {
    marginTop: moderateScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(8),
  },
  stockHeader: {
    color: '#FFFFFF',
    fontSize: moderateScale(22),
    fontFamily: 'Montserrat-Bold',
  },
  percentChangeButton: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    backgroundColor: '#3E4D6C',
    borderRadius: moderateScale(6),
    fontFamily: 'Montserrat-Italic',
    marginLeft: moderateScale(6),
    width: moderateScale(190),
  },
  percentChangeContainer: {
    borderRadius: moderateScale(6),
    backgroundColor: '#3E4D6C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: moderateScale(30),
  },
  dropdown: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: moderateScale(29),
    marginBottom: moderateScale(0),
    backgroundColor: '#3E4D6C',
    zIndex: 1,
    paddingVertical: moderateScale(6),
    height: moderateScale(100),
    position: 'absolute',
  },
  dropDownText: {
    color: 'white',
    fontSize: moderateScale(16),
    marginHorizontal: moderateScale(12),
    fontFamily: 'Montserrat-Medium',
    marginBottom: moderateScale(6),
  },
  dropDownTextReportContainer: {
    borderTopWidth: moderateScale(1),
    borderTopColor: 'lightgrey',
    paddingTop: moderateScale(4),
    backgroundColor: '#2C3957',
  },
  icon: {
    marginRight: moderateScale(4),
  },
});
