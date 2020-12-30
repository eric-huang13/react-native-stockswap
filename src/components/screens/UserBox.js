import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class UserBox extends Component {
  render() {
    const {item} = this.props;

    return (
      <View style={item.id%2 === 0 ? {...style.container, backgroundColor:'#2a334a'} :{...style.container}
    }>  
    {/* <View style={style.imgDetailContainer}>       */}
          <Image style={style.image} source={{uri: item.img}} />
        
        <View style={style.detailsContainer}>
          <Text style={style.name}>{item.name}</Text>
          
          <Text style={style.posts}>Posts: <Text style={style.detailsBold}>{item.posts}</Text></Text>
          <Text style={style.followers}>Followers: <Text style={style.detailsBold}>{item.followers}</Text></Text></View>
        {/* </View> */}
        <View style={style.percentageView}>
          <Text style={style.percentage}>{item.percentage}%</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: 4,
    paddingVertical:14,
    paddingHorizontal:10,
    // paddingLeft:2,
    backgroundColor:'#324165',
    // borderWidth:1,
    // paddingLeft:20


  },
  image: {
    height:65,
    width:65,
    borderRadius:50,
    // borderWidth:1,

  },
  imgDetailContainer:{
flexDirection:'row',
// borderWidth:1,
marginLeft:-8

  },
  detailsContainer:{
    // borderWidth:1,
    flexDirection:'column',
    marginLeft:-150,
    justifyContent:'space-between'
  },
  name:{
  color:'white',
  fontSize:18,
  fontWeight:'bold',
  },
  posts:{
    color:'white',
    fontSize:14,
  },
  followers:{
    color:'white',
    fontSize:14,
  },
  percentageView:{
  flexDirection:'row',
  alignContent:'center',
// alignItems:'center',
  },
  percentage:{
    alignSelf:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:19
  },
  detailsBold:{
fontWeight:'bold'
  },
});
