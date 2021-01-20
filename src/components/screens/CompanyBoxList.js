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

import SearchInput from '../../icons/SearchInput'
import {connect} from 'react-redux';
// import {style} from '../../styles/style';
import CompanyBox from './CompanyBox';
// import {fetchMarketGainers} from '../../actions/marketMovers'

export class CompanyBoxList extends Component {
  //Ready for redux action hookup
  //   componentDidMount() {
  //     const {companies, fetchGainers} = this.props;
  //     fetchGainers(companies);
  // }
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleChange = (text) => {
    console.log(text);
  };

  render() {
    const {gainers, losers, highestByVolume} = this.props;

    return (
      <SafeAreaView style={style.mainContainer}>
        <ScrollView contentContainerStyle={{paddingBottom: 180}}>
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

          <View style={style.container}>
            <View style={style.headerContainer}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('CompanyCategory', {
                    name: 'Gainers',
                    params: {
                      category: gainers,
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
                      category: gainers,
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
                {gainers.map((item) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() =>
                        this.props.navigation.navigate({
                          name: 'CompanyInformation',
                          params: {item},
                        })
                      }>
                      <CompanyBox item={item} />
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
                      category: losers,
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
                {losers.map((item) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() =>
                        this.props.navigation.navigate({
                          name: 'CompanyInformation',
                          params: {item},
                        })
                      }>
                      <CompanyBox item={item} />
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
                <Text style={style.header}>Daily Highest by Volume</Text>
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
            <View style={style.boxContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                justifyContent="space-between">
                {highestByVolume.map((item) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() =>
                        this.props.navigation.navigate({
                          name: 'CompanyInformation',
                          params: {item},
                        })
                      }>
                      <CompanyBox item={item} />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
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
  };
};

//Ready for redux hook up. Add mapDipatchToProps in export
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchGainers: () => dispatch(fetchMarketGainers()),
//   };
// };
export default connect(mapStateToProps)(CompanyBoxList);

const style = StyleSheet.create({
  mainContainer: {
    // width: '100%',

    alignSelf: 'center',
    paddingBottom: 40,
  },
  container: {
    marginBottom: 18,
    borderBottomColor: 'gray',
    paddingHorizontal: 2,

    // paddingBottom: 40,
    // width: '98%',
    // alignSelf: 'center',
    // alignItems:"flex-start"
  },
  boxContainer: {
    paddingLeft: 2,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 8,
    marginBottom: 4,
  },
  header: {
    // fontSize: 16,
    fontSize: 17,
    marginLeft: 5.5,
    color: 'lightgrey',
    fontFamily: 'Montserrat-Regular',
    // marginBottom: 3.5,
  },
  seeAllHeader: {
    paddingTop: 3.5,
    paddingRight: 2,
    // fontSize: 14,
    fontSize: 15,
    color: '#B8A0FF',
    fontFamily: 'Montserrat-SemiBold',
  },
  searchInputContainer: {
    flexDirection:'row',
    // marginTop: 1,
    marginBottom: 15,
  },
  searchInput: {
    flex:1,
    paddingLeft: 40,
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: 16,
    height: 36,
    paddingVertical: 0,
    fontFamily: 'Montserrat-Italic',
    // lineHeight:18,
  },
});
