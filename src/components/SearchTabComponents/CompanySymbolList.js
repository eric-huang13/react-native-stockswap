import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';

import {connect} from 'react-redux';
import { moderateScale } from '../../util/responsiveFont';

export class CompanySymbolList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialIndex: 4,
    };
  }

  render() {
    const getItemLayout = (data, index) => ({
      length: moderateScale(89),
      offset: moderateScale(89) * index,
      index,
    });

    const {gainers} = this.props;
    return (
      <SafeAreaView style={style.mainContainer}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={gainers}
          style={style.scollContainer}
          horizontal
          alignItems="center"
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={this.props.itemId - 1}
          getItemLayout={getItemLayout}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                this.props.navigation.navigate({
                  name: 'CompanyInformation',
                  params: {item},
                })
              }>
              <View style={style.symbolBox}>
                <Text
                  style={
                    this.props.symbol === item.symbol
                      ? {...style.symbol, backgroundColor: '#8B64FF'}
                      : {...style.symbol}
                  }>
                  {item.symbol}
                </Text>
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
    losers: state.company.losers,
    highestByVolume: state.company.highestByVolume,
  };
};

export default connect(mapStateToProps)(CompanySymbolList);

const style = StyleSheet.create({
  mainContainer: {
    paddingVertical: moderateScale(10),
    height: moderateScale(60),
  },
  symbolBox: {
    marginHorizontal: moderateScale(12),
    width: moderateScale(63),
    height: moderateScale(23),
    alignContent: 'center',
    justifyContent: 'center',
  },
  symbol: {
    textAlign: 'center',
    backgroundColor: '#3e475b',
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
    paddingVertical: moderateScale(4),
  },
});
