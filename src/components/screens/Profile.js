import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ProfileGraph from './ProfileGraph';
import StockTicker from './StockTicker';
import UserPosts from './UserPosts';
import {connect} from 'react-redux';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [
        {x: 2, y: 10},
        {x: 3, y: 11},
        {x: 4, y: 12},
        {x: 5, y: 14},
        {x: 6, y: 14},
        {x: 7, y: 15},
      ],
      percent: '1.22',
      range: [10, 15],
      live: true,
      day: false,
      week: false,
      month: false,
      threeMonth: false,
      year: false,
      all: false,
    };
  }
  render() {
    console.log(this.props.route, 'props in profile');
    console.log(this.props.posts, 'props posts');
    const {item} = this.props.route.params;
    const {graphData, percent, range} = this.state;
    const {posts, comments} = this.props;

    const filteredPosts = posts.filter((post) => post.userId === item.id);
const theId = item.id
    return (
      <View style={style.container}>
        <ScrollView>
          <StockTicker />

          <View style={style.aboveGraphContainer}>
            <View style={style.portfolioHeaderContainer}>
              <Text style={style.portfolioHeader}>Portfolio</Text>
              <Text style={style.percentage}>+{item.percentage}%</Text>
            </View>
            <View style={style.timeNumberContainer}>
              <Text style={style.timeNumber}>Past hour</Text>
            </View>
          </View>
          <View style={style.graphContainer}>
            <ProfileGraph graphData={graphData} range={range} />
          </View>
          <View style={style.timeFilterButtonsContainer}>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  live: true,
                  day: false,
                  week: false,
                  month: false,
                  threeMonth: false,
                  year: false,
                  all: false,
                })
              }>
              <Text
                style={
                  this.state.live
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                Live
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  live: false,
                  day: true,
                  week: false,
                  month: false,
                  threeMonth: false,
                  year: false,
                  all: false,
                })
              }>
              <Text
                style={
                  this.state.day
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                1D
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  live: false,
                  day: false,
                  week: true,
                  month: false,
                  threeMonth: false,
                  year: false,
                  all: false,
                })
              }>
              <Text
                style={
                  this.state.week
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                1W
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  live: false,
                  day: false,
                  week: false,
                  month: true,
                  threeMonth: false,
                  year: false,
                  all: false,
                })
              }>
              <Text
                style={
                  this.state.month
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                1M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  live: false,
                  day: false,
                  week: false,
                  month: false,
                  threeMonth: true,
                  year: false,
                  all: false,
                })
              }>
              <Text
                style={
                  this.state.threeMonth
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                3M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  live: false,
                  day: false,
                  week: false,
                  month: false,
                  threeMonth: false,
                  year: true,
                  all: false,
                })
              }>
              <Text
                style={
                  this.state.year
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                1Y
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  live: false,
                  day: false,
                  week: false,
                  month: false,
                  threeMonth: false,
                  year: false,
                  all: true,
                })
              }>
              <Text
                style={
                  this.state.all
                    ? {...style.timeFilterButtons, color: '#8b64ff'}
                    : {...style.timeFilterButtons}
                }>
                All
              </Text>
            </TouchableOpacity>
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
          <TouchableOpacity
                
                onPress={() =>
                  this.props.navigation.navigate({
                    name: 'UserPortfolioList',
                    params: {item},
                  })
                }>
                <Text style={style.portfolioButton}>Portfolio Button</Text>
              </TouchableOpacity>
            
          </View>
          <Text style={style.postsHeader}>POSTS</Text>
          <View>
            {filteredPosts.map((post) =>

              <View>
                <UserPosts
                  post={post}
                  navigation={this.props.navigation}
                  comments={comments}
                />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    comments: state.posts.comments,
  };
};

export default connect(mapStateToProps)(Profile);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
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
  aboveGraphContainer: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  portfolioHeaderContainer: {
    flexDirection: 'column',
  },
  portfolioHeader: {
    color: 'white',
    fontSize: 18,
  },
  percentage: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  timeNumberContainer: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
  },
  timeNumber: {
    color: 'lightgrey',
    fontSize: 12,
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
  graphContainer: {
    // borderWidth:1,
    flexDirection: 'row',
  },

  timeFilterButtonsContainer: {
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    paddingBottom: 9,
  },
  timeFilterButtons: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  postsHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
    marginLeft: 6,
  },
  // postNameContainer:{
  // flexDirection:'row',
  // alignItems:'center',
  // },
  // postUserImage:{
  //   height: 50,
  //   width: 50,
  //   borderRadius: 50,
  // },
  // postUserName:{
  //   color:'white',
  //   fontSize:14,
  //   fontWeight:'bold',
  // },
});
