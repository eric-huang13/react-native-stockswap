import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
// import {style} from '../../styles/style';
import LinearGradient from "react-native-linear-gradient";

export class CompanyBox extends Component {
  render() {
    const { item } = this.props;
    const styledText =
      item.category === "gainers" ? (
        <LinearGradient
        start={{ x:.1, y: .1 }}
       end={{x: 1, y: 1}}
          colors={["#4c669f", "#3b5998", "#1cab66"]}
          style={style.linearGradient}
        >
          <View style={style.listContainer}>
            <View style={style.topDetails}>
            <Text style={{...style.symbol, color:'#1cab66' }}>{item.symbol}</Text>
            <Text style={style.title}>{item.title}</Text>
            </View>
            <View style={style.bottomDetails}>
            <Text style={style.price}>${item.price}</Text>
            <Text style={{...style.percentage, color:'#1cab66'}}>{item.percentage}</Text>
            </View>
          </View>
        </LinearGradient>
      ) : item.category === "losers" ? (
        <LinearGradient
        start={{ x:.1, y: .1 }}
       end={{x: 1, y: 1}}
          colors={["#4c669f", "#3b5998", "#ac3b42"]}
          style={style.linearGradient}
        >
          <View style={style.listContainer}>
            <Text style={{...style.symbol, color:'#ac3b42',}}>{item.symbol}</Text>
            <Text  style={style.title}>{item.title}</Text>
            <Text style={style.price}>${item.price}</Text>
            <Text style={{...style.percentage, color:'#ac3b42'}}>{item.percentage}</Text>
          </View>
        </LinearGradient>
      ) : (
        <LinearGradient
        start={{ x:.1, y: .1 }}
       end={{x: 1, y: 1}}
          colors={["#4c669f", "purple", "purple"]}
          style={style.linearGradient}
        >
          <View style={style.listContainer}>
            <Text style={{...style.symbol, color:'#9082cf' }}>{item.symbol}</Text>
            <Text style={style.title}>{item.title}</Text>
            <Text style={style.price}>${item.price}</Text>
            <Text style={{...style.percentage, color:'#9082cf'}}>{item.percentage}</Text>
          </View>
        </LinearGradient>
      );

    return <View>{styledText}</View>;
  }
}

export default CompanyBox;

const style = StyleSheet.create({
  linearGradient: {
    alignSelf: "center",
    marginTop: 3,
    // borderWidth: 1,
    // borderColor: 'rgb(58, 117, 167)',
    // backgroundColor: 'rgb(58, 117, 167)',
    borderRadius: 15,
    height: 130,
    width: 125,
    flexDirection: "column",
    padding: 3,
    paddingTop:0,
    justifyContent: "space-around",
    marginLeft: 4,
    marginRight: 4,
  },
  listContainer: {
    // alignSelf: "center",
    // marginTop: 3,
    // borderWidth: 1,
    // borderColor: 'rgb(58, 117, 167)',
    // backgroundColor: 'rgb(58, 117, 167)',
    borderRadius: 15,
    flex:1,
    // height: 130,
    // width: 125,
    flexDirection: "column",
    paddingHorizontal: 4,
    paddingTop:0,
    justifyContent: "space-evenly",
    // marginLeft: 4,
    // marginRight: 4,
  },
  topDetails:{
    // borderWidth:1,
    marginTop:-4,
  },
  bottomDetails:{
  
// borderWidth:1,
  },
  title: {
  
    fontSize: 14,
    
    color: "grey",
  },
  detailsContainer: {
    position: "absolute",
    marginTop: "60%",
    marginLeft: 2,
  },
  symbol: {

    fontWeight: "bold",
    fontSize: 22,
    color: "rgb(8, 11, 9)",
    // marginTop:-3,
    // marginBottom:-8,
    // marginLeft: 8,
    // marginBottom: -7,
  },
  percentage: {
    fontSize: 14,
    color: "grey",
  },
  price: {
    fontSize: 20,
    color: "lightgrey",
  },
});
