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
          <View style={style.infoContainer}>
            <View style={style.detailsRow}>
              <Image style={style.image} source={{uri: item.img}} />
              <View style={style.personalDetails}>
                <Text style={style.name}>{item.name}</Text>
                <Text style={style.username}>@{item.username}</Text>
                <Text style={style.website}>{item.website}</Text>
              </View>
              <View style={style.followButtonView}>
                <Text style={style.followButton}>+Follow</Text>
              </View>
            </View>
            <View style={style.bioContainer}>
              <Text style={style.bio}>{item.bio}</Text>
            </View>
            <View style={style.numberRow}>
              <View style={style.numberColumn}>
                <Text style={style.numberData}>{item.followers}</Text>
                <Text style={style.numberText}>Followers</Text>
              </View>
              <View style={style.numberColumn}>
                <Text style={style.numberData}>{item.posts}</Text>
                <Text style={style.numberText}>Posts</Text>
              </View>
              <View style={style.numberColumn}>
                <Text style={style.numberData}>{item.trades}</Text>
                <Text style={style.numberText}>Trades </Text>
              </View>
              <View style={style.numberColumn}>
                <Text style={style.numberData}>{item.following}</Text>
                <Text style={style.numberText}>Following</Text>
              </View>
            </View>
          </View>
          <View style={style.portfolioButtonContainer}>
            <Text style={style.portfolioButton}>Portfolio Button</Text>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const style = StyleSheet.create({
  linearContainer: {
    flex: 1,
  },
  container: {
    // flex:1
  },
  infoContainer: {
    // borderWidth:1,
    borderColor: 'red',
    paddingHorizontal: 7,
  },
  personalDetails: {
    // borderWidth:1,
    borderColor: 'yellow',
    marginLeft: -90,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  detailsRow: {
    // borderWidth:1,
    borderColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems:'center'
  },
  bioContainer: {
    marginVertical: 8,
    paddingHorizontal: 3,
  },
  bio: {
    color: 'white',
    fontSize: 16,
  },
  numberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  numberColumn: {
    // borderWidth:1,
    alignItems: 'center',
  },
  aboveGraphView: {
    flexDirection: 'row',
    marginTop: 8,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  followButtonView: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  followButton: {
    // alignSelf:'center',
    borderWidth: 1.4,
    borderColor: '#9082cf',
    color: '#9082cf',
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  username: {
    color: 'white',
    fontSize: 15,
  },
  website: {
    color: '#9082cf',
    fontSize: 15,
  },

  numberData: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  numberText: {
    color: 'lightgrey',
    fontSize: 14,
  },

  portfolioButtonContainer: {
    marginTop: 18,
    // justifyContent:'center',
  },
  portfolioButton: {
    textAlign: 'center',
    borderWidth: 1.4,
    borderColor: '#9082cf',
    color: '#9082cf',
    padding: 10,
    marginHorizontal: 120,
    borderRadius: 8,
    fontSize: 16,
    //  width:'20%',
  },
});
