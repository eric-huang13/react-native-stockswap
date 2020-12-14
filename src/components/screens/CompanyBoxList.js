import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
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
      companies:true,
      users:false,
      news:false,
    };
  }
  
  handleChange = (text) => {
    console.log(text);
  };

  render() {
    const {gainers, losers, highestByVolume} = this.props;

    return (
      <View style={style.mainContainer}>
         <View style={style.searchInputContainer}>
            <TextInput
              style={style.searchInput}
              placeholder="Search"
              onChangeText={(text) => this.handleChange(text)}
            />
          </View>
        <View style={style.container}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('CompanyCategory', {
                name: 'Gainers',
                params: {gainers, losers, highestByVolume, showGainers: true},
              })
            }>
            <Text style={style.header}>Gainers</Text>
          </TouchableOpacity>
          <View style={style.boxContainer}>
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
          </View>
        </View>
        <View style={style.container}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('CompanyCategory', {
                name: 'Losers',
                params: {gainers, losers, highestByVolume, showLosers: true},
              })
            }>
            <Text style={style.header}>Losers</Text>
          </TouchableOpacity>

          <View style={style.boxContainer}>
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
          </View>
        </View>
        <View style={style.container}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('CompanyCategory', {
                name: 'Highest by Volume',
                params: {
                  gainers,
                  losers,
                  highestByVolume,
                  showHighestByVolume: true,
                },
              })
            }>
            <Text style={style.header}>Highest by Volume</Text>
          </TouchableOpacity>

          <View style={style.boxContainer}>
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
          </View>
        </View>
      </View>
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
  container: {
    marginTop: 10,
    // borderBottomWidth: 0.8,
    borderBottomColor: 'gray',
    paddingBottom: 12.5,
    width: '98%',
    alignSelf: 'center',
    // alignItems:"flex-start"
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 18,
    // marginLeft: 14,
    marginLeft: 1,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
  },

  
})
