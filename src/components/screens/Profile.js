import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import StockTicker from './StockTicker';
import LinearGradient from 'react-native-linear-gradient';



export default class Profile extends Component {
  render() {
    console.log(this.props.route, 'props in profile');
    const {item} = this.props.route.params;
    return (
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
        ]}>
      <View style={style.container}>
        <StockTicker />

        <View style={style.aboveGraphView}>
          <View>
            <Text>Portfolio</Text>
            <Text>Number</Text>
          </View>
          <View>
            <Text>{item.percentage}</Text>
            <Text>Number</Text>
          </View>
        </View>
        <View>
          <Text>Graph</Text>
        </View>
        <View>
          <Text>Buttons</Text>
        </View>
        <View  style={style.infoContainer}>
        <View style={style.detailsRow}>
          <Image style={style.image} source={{uri: item.img}} />
          <View style={style.personalDetails}>
          <Text style={style.name}>{item.name}</Text>
          <Text style={style.username}>@{item.username}</Text>
          <Text style={style.website}>{item.website}</Text>
          </View>
          <View style={style.followButtonView}>
          <Text style={style.followButton}>Follow Button</Text>
          </View>
        </View>
        <View style={style.bioContainer}>
          <Text style={style.bio}>{item.bio}</Text>
        </View>
        <View style={style.numberRow}>
          <View style={style.numberColumn}>
          <Text style={style.followers}>{item.followers}</Text><Text style={style.followersText}>Followers</Text>
          </View>
          <View style={style.numberColumn}>
          <Text style={style.posts}>{item.posts}</Text><Text style={style.postsText}>Posts</Text>
          </View>
          <View style={style.numberColumn}>
          <Text style={style.trades}>{item.trades}</Text><Text style={style.tradesText}>Trades </Text>
          </View>
          <View style={style.numberColumn}>
          <Text style={style.following}>{item.following}</Text><Text style={style.followingText}>Following</Text>
          </View>
        </View>
        </View>
        <View>
          <Text>Buttons</Text>
        </View>
      </View>
      </LinearGradient>
    );
  }
}

const style = StyleSheet.create({
  linearContainer:{
    flex:1
  },
  container:{
    // flex:1
  },
  infoContainer:{
    // borderWidth:1,
    borderColor:'red',
    paddingHorizontal:6
  },
  personalDetails:{
    // borderWidth:1,
    borderColor:'yellow',
    marginLeft:-90,
    flexDirection:'column',
    justifyContent:'space-between',

  },
  detailsRow:{
    // borderWidth:1,
    borderColor:'orange',
    flexDirection:'row',
    justifyContent:'space-between',
    // alignItems:'center'

  },
  bioContainer:{
    marginVertical:8,
  },
  bio:{
    color:'white',
    fontSize:16,
  },
  numberRow:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  numberColumn:{
    // borderWidth:1,
    alignItems:'center',
  },
  aboveGraphView: {
    flexDirection: 'row',
    marginTop: 8,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius:50,
  },
  followButtonView:{
    flexDirection:'column',
    justifyContent:'center',
  
  },
  followButton:{
    // alignSelf:'center',
    borderWidth:1,
    borderColor:'#9082cf',
    color:'#9082cf',
  },
  name:{
    color:'white',
    fontWeight:'bold',
    fontSize:22,
  },
  username:{
    color:'white',
    fontSize:14,

  },
  website:{
    color: '#9082cf',
    fontSize:14,
  },
  followers:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,

  },
  posts:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,

  },
  trades:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,

  },
  following:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,

  },
  followersText:{
    color:'lightgrey',
    fontSize:14,

  },
  postsText:{
    color:'lightgrey',
    fontSize:14,

  },
  tradesText:{
    color:'lightgrey',
    fontSize:14,

  },
  followingText:{
    color:'lightgrey',
    fontSize:14,

  },
});
