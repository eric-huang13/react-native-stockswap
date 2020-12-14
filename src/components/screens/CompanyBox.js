import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
// import {style} from '../../styles/style';

export class CompanyBox extends Component {
  render() {
    const {item} = this.props;

    return (
      <View>
        <View
          style={style.listContainer}

          //Commented out code styling from original mock design in case new design is similar

          // style={
          //   item.category === 'gainers'
          //     ? {
          //         ...style.listContainer,
          //         backgroundColor: 'rgb(8, 177, 40)',
          //       }
          //     : item.category === 'losers'
          //     ? {
          //         ...style.listContainer,
          //         backgroundColor: 'rgb(196, 38, 0)',
          //       }
          //     : {
          //         ...style.listContainer,
          //         backgroundColor: 'rgb(58, 117, 167)',
          //       }
          // }
        >
          <Text style={style.symbol}>{item.symbol}</Text>
          <Text style={style.title}>{item.title}</Text>
          {/* <View style={style.detailsContainer}> */}
          <Text style={style.price}>{item.price}</Text>

          <Text style={style.percentage}>{item.percentage}</Text>
          {/* </View> */}
        </View>
      </View>
    );
  }
}

export default CompanyBox;

const style = StyleSheet.create({
  listContainer: {
    alignSelf: 'center',
    marginTop: 3,
    // borderWidth: 1,
    borderColor: 'rgb(58, 117, 167)',
    // backgroundColor: 'rgb(58, 117, 167)',
    borderRadius: 15,
    height: 130,
    width: 125,
    flexDirection: 'column',
    padding: 3,
    justifyContent: 'space-evenly',
  },
  title: {
    // alignSelf: 'center',
    // fontWeight: 'bold',
    fontSize: 14,
    // marginTop: 3,
    // color: 'rgb(246, 252, 247)',
    // marginBottom: 20,
    // textAlign: 'center',
    color: 'grey',
  },
  detailsContainer: {
    position: 'absolute',
    marginTop: '60%',
    marginLeft: 2,
  },
  symbol: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'rgb(8, 11, 9)',
    // marginLeft: 8,
    // marginBottom: -7,
  },
  percentage: {
    // fontWeight: 'bold',
    fontSize: 14,
    // color: 'rgb(8, 11, 9)',
    color: 'grey',
  },
  price: {
    // fontWeight: 'bold',
    fontSize: 20,
    color: 'rgb(8, 11, 9)',
  },
});
