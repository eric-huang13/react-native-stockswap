import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import CompanyCategoryBox from './CompanyCategoryBox';

export class CompanyCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          input: "",
        };
      }
      handleChange = (text) => {
        this.setState({ input: text });
      };
    
  


  render() {
    console.log(this.props.route.params.params.showGainers, "PROPS")

    const {gainers} = this.props;
    const {losers} = this.props;
    const {highestByVolume} = this.props;
    const {
        showGainers,
        showLosers,
        showHighestByVolume,
   
      } = this.props.route.params.params;

      const filteredGainers = gainers.filter((item) =>
      item.title.toLowerCase().includes(this.state.input.toLowerCase())
    );
    const filteredLosers = losers.filter((item) =>
      item.title.toLowerCase().includes(this.state.input.toLowerCase())
    );
    const filteredhighestByVolume = highestByVolume.filter((item) =>
      item.title.toLowerCase().includes(this.state.input.toLowerCase())
    );


    return showGainers ? (
          <View style={style.boxContainer}>
              <View style={style.searchInputContainer}>
          <TextInput
            style={style.searchInput}
            placeholder="Search by name"
            onChangeText={(text) => this.handleChange(text)}
          />
        </View>

            {filteredGainers.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    this.props.navigation.navigate({
                      name: 'CompanyInformation',
                      params: {item},
                    })
                  }>
                  <CompanyCategoryBox item={item} />
                </TouchableOpacity>
              );
            })}
          </View>
    ) : showLosers ? (
          <View style={style.boxContainer}>
              <View style={style.searchInputContainer}>
          <TextInput
            style={style.searchInput}
            placeholder="Search by name"
            onChangeText={(text) => this.handleChange(text)}
          />
        </View>

            {filteredLosers.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    this.props.navigation.navigate({
                      name: 'CompanyInformation',
                      params: {item},
                    })
                  }>
                  <CompanyCategoryBox item={item} />
                </TouchableOpacity>
              );
            })}
          </View>
          ) : showHighestByVolume ? (
          <View style={style.boxContainer}>
              <View style={style.searchInputContainer}>
          <TextInput
            style={style.searchInput}
            placeholder="Search by name"
            onChangeText={(text) => this.handleChange(text)}
          />
        </View>

            {filteredhighestByVolume.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    this.props.navigation.navigate({
                      name: 'CompanyInformation',
                      params: {item},
                    })
                  }>
                  <CompanyCategoryBox item={item} />
                </TouchableOpacity>
              );
            })}
          </View>
          ) :
          <View><Text>Companies</Text></View>
   
  }
}

const mapStateToProps = (state) => {
  return {
    gainers: state.company.gainers,
    losers: state.company.losers,
    highestByVolume: state.company.highestByVolume,
  };
};


export default connect(mapStateToProps)(CompanyCategory);


const style = StyleSheet.create({
    // container: {
    //     marginTop: 10,
    //     // borderBottomWidth: 0.8,
    //     borderBottomColor: 'gray',
    //     paddingBottom: 12.5,
    //     width: '98%',
    //     alignSelf: 'center',
    //     // alignItems:"flex-start"
    //   },
    

  });
  

  