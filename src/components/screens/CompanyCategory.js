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
        <View style={style.searchInputContainer}>
          <TextInput
            style={{borderWidth: 0.5, marginHorizontal: 1}}
            placeholder="Search by name"
            onChangeText={(text) => this.handleChange(text)}
          />
        </View>
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


});
