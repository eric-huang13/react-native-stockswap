import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';

import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import CompanyCategoryBox from './CompanyCategoryBox';

export class CompanyCategory extends Component {
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
    const {gainers, losers, highestByVolume} = this.props;

    //boolean for conditional render coming from CompanyBoxList
    const {
      showGainers,
      showLosers,
      showHighestByVolume,
    } = this.props.route.params.params;

    const filteredGainers = gainers.filter((item) =>
      item.title.toLowerCase().includes(this.state.input.toLowerCase()),
    );
    const filteredLosers = losers.filter((item) =>
      item.title.toLowerCase().includes(this.state.input.toLowerCase()),
    );
    const filteredhighestByVolume = highestByVolume.filter((item) =>
      item.title.toLowerCase().includes(this.state.input.toLowerCase()),
    );

    return (
  
      <View style={style.boxContainer}>
         <LinearGradient
         style={style.linearContainer}
        start={{x: 0.1, y: 0.1}}
        end={{x: 1, y: 1}}
        colors={[
       
        
         
          '#2c3752',
          '#2e3955',
          '#313c58',
          '#333e5c',
          '#36415f',
          '#394463',
        ]}
        >
        <View style={style.searchInputContainer}>
          <TextInput
              style={style.searchInput}
              placeholder="Search by name"
              placeholderTextColor="lightgrey"

            onChangeText={(text) => this.handleChange(text)}
          />
        </View>
      </LinearGradient>
<FlatList
        style={style.listContainer}
        data={showGainers ? filteredGainers : showLosers ? filteredLosers : showHighestByVolume ? filteredhighestByVolume : null}
        renderItem={({ item }) => (
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
        )}
      />
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

export default connect(mapStateToProps)(CompanyCategory);

const style = StyleSheet.create({

  boxContainer:{
    flex:1,
  },
  linearContainer:{
paddingBottom:5,
  },
  searchInputContainer: {
    marginBottom: 26,
  },
  searchInput: {
    paddingLeft: 40,
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: 17,
    height: 40,
    fontStyle: 'italic',
    paddingVertical:0,
  },

});
