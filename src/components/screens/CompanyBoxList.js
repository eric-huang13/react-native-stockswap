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
                <Text style={style.header}>Gainers</Text>
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
                <Text style={style.header}>Losers</Text>
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
                <Text style={style.header}>Highest by Volume</Text>
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
    width: '98%',
    alignSelf: 'center',
    paddingBottom: 40,
  },
  container: {
    marginBottom: 18,
    borderBottomColor: 'gray',
    // paddingBottom: 40,
    // width: '98%',
    // alignSelf: 'center',
    // alignItems:"flex-start"
  },
  boxContainer: {
    // paddingLeft:1,
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
    fontSize: 20,
    marginLeft: 5.5,
    color: 'lightgrey',
    // marginBottom: 3.5,
  },
  seeAllHeader: {
    paddingTop: 3.5,
    paddingRight: 2,
    fontSize: 16.5,
    color: '#9082cf',
    fontWeight: 'bold',
  },
  searchInputContainer: {
    // marginTop: 1,
    marginBottom: 15,
  },
  searchInput: {
    paddingLeft: 40,
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: 18,
    height: 36,
    fontStyle: 'italic',
    paddingVertical: 0,
  },
});