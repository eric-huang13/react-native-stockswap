import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import ProfileGraph from './ProfileGraphList';
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
    const {item} = this.props.route.params;
    const {graphData, percent, range} = this.state;
    const {posts, comments, users, reply} = this.props;

    const selectedUser = users.filter((user) => user.id === item.id);

    const filteredPosts = posts.filter((post) => post.userId === item.id);
    return (
      <SafeAreaView style={style.container}>
        <ScrollView>
          {selectedUser.map((user) => {
            return (
              <View>
                <View style={style.aboveGraphContainer}>
                  <View style={style.portfolioHeaderContainer}>
                    <Text style={style.portfolioHeader}>Portfolio</Text>
                    <Text style={style.percentage}>+{user.percentage}%</Text>
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
                    <Image style={style.image} source={{uri: user.img}} />
                    <View style={style.personalDetails}>
                      <Text style={style.name}>{user.name}</Text>
                      <Text style={style.username}>@{user.username}</Text>
                      <Text style={style.website}>{user.website}</Text>
                    </View>
                    <View style={style.followButtonView}>
                      <Text style={style.followButton}>+Follow</Text>
                    </View>
                  </View>
                  <View style={style.bioContainer}>
                    <Text style={style.bio}>{user.bio}</Text>
                  </View>
                  <View style={style.numberRow}>
                    <View style={style.numberColumn}>
                      <Text style={style.numberData}>{user.followers}</Text>
                      <Text style={style.numberText}>Followers</Text>
                    </View>
                    <View style={style.numberColumn}>
                      <Text style={style.numberData}>{user.posts}</Text>
                      <Text style={style.numberText}>Posts</Text>
                    </View>
                    <View style={style.numberColumn}>
                      <Text style={style.numberData}>{user.trades}</Text>
                      <Text style={style.numberText}>Trades </Text>
                    </View>
                    <View style={style.numberColumn}>
                      <Text style={style.numberData}>{user.following}</Text>
                      <Text style={style.numberText}>Following</Text>
                    </View>
                  </View>
                </View>
                <View style={style.portfolioButtonContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate({
                        name: 'UserPortfolioList',
                        // params: {user},
                      })
                    }>
                    <Text style={style.portfolioButton}>Portfolio Button</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}

          {filteredPosts.length > 0 ? (
            <View>
              <Text style={style.postsHeader}>POSTS</Text>

              <View>
                {filteredPosts.map((post) => (
                  <View>
                    <UserPosts
                      post={post}
                      navigation={this.props.navigation}
                      comments={comments}
                      reply={reply}
                    />
                  </View>
                ))}
              </View>
            </View>
          ) : null}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    comments: state.posts.comments,
    users: state.company.users,
    reply: state.posts.reply,
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
    borderColor: 'yellow',
    marginLeft: -90,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  detailsRow: {
    borderColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(158, 150, 150, .4)',
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
