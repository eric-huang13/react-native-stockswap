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
import TriangleIcon from '../../icons/TriangleIcon'
import {connect} from 'react-redux';

class UserPortfolioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      shouldShow:false,
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

    const {shouldShow} = this.state;   


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
          <View style={style.dotsDropdownConatiner}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    shouldShow: !shouldShow,
                  })
                }>
                  <View style={style.percentChangeContainer}>
          <Text style={style.percentChangeButton}>Total Percent Change</Text>
        <TriangleIcon/>        
          </View>
              </TouchableOpacity>
              {this.state.shouldShow ? (
                <View style={style.dropdown}>
                  <Text style={style.dropDownText}>Percent Change</Text>
                  <Text style={style.dropDownText}>Last price</Text>
                  <Text style={style.dropDownText}>Total percent change</Text>
                  <Text style={style.dropDownText}>Your equity</Text>
                  <Text style={style.dropDownText}>Today's return</Text>
                  <Text style={style.dropDownText}>Total return</Text>
                  
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
    backgroundColor: '#3E4D6C',
    borderRadius: 6,
    fontFamily:'Montserrat-Medium',
    marginRight:6,

  },
  percentChangeContainer:{
    padding:8,
    borderRadius:6,
    backgroundColor:'#3E4D6C',
    marginTop:4,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    
},
dotsDropdownConatiner: {
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignContent: 'center',
},
dotsButton: {
  alignSelf: 'flex-end',
  color: 'white',
  fontWeight: 'bold',
  fontSize: 20,
},
dropdown: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: 1,
  marginBottom: -185,
  backgroundColor: '#3E4D6C',
  zIndex: 1,
  paddingVertical: 6,
  // paddingHorizontal:10,
},
dropDownText: {
  color: 'white',
  fontSize: 16,
  marginHorizontal: 12,
  fontFamily:'Montserrat-Medium',
  marginBottom:6,
},
dropDownTextReportContainer: {
  borderTopWidth: 1,
  borderTopColor: 'lightgrey',
  paddingTop: 4,
  backgroundColor:'#2C3957'

},
});
