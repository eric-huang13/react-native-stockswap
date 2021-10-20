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
import ProfileGraph from '../HomeTabComponents/ProfileGraph';
import UserPosts from './UserPosts';
import {connect} from 'react-redux';
import {moderateScale} from '../../util/responsiveFont';

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
      timeFilter: 'day',
    };
  }
  timeFilterSelect(time) {
    this.setState({timeFilter: time});
  }
  render() {
    const {id} = this.props.route.params;
    const {graphData, percent, range, timeFilter} = this.state;
    const {posts, comments, users, reply, userAccount} = this.props;

    const selectedUser = users.filter((user) => user.id === id);

    const filteredPosts = posts.filter((post) => post.userId === id);
    return (
      <SafeAreaView style={style.container}>
        <ScrollView>
          {selectedUser.map((user) => {
            return (
              <View key={user.id}>
                <View style={style.aboveGraphContainer}>
                  <View style={style.portfolioHeaderContainer}>
                    <Text style={style.portfolioHeader}>Portfolio</Text>
                    <Text style={style.percentage}>+{user.percentage}%</Text>
                  </View>
                  <View style={style.timeNumberContainer}>
                    <Text style={style.timeNumber}>Past day</Text>
                  </View>
                </View>
                <View style={style.graphContainer}>
                  <ProfileGraph graphData={graphData} range={range} />
                </View>
                <View style={style.timeFilterButtonsContainer}>
                  <TouchableOpacity
                    onPress={() => this.timeFilterSelect('live')}>
                    <Text
                      style={
                        timeFilter === 'live'
                          ? {...style.timeFilterButtons, color: '#8b64ff'}
                          : {...style.timeFilterButtons}
                      }>
                      Live
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.timeFilterSelect('day')}>
                    <Text
                      style={
                        timeFilter === 'day'
                          ? {...style.timeFilterButtons, color: '#8b64ff'}
                          : {...style.timeFilterButtons}
                      }>
                      1D
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.timeFilterSelect('week')}>
                    <Text
                      style={
                        timeFilter === 'week'
                          ? {...style.timeFilterButtons, color: '#8b64ff'}
                          : {...style.timeFilterButtons}
                      }>
                      1W
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.timeFilterSelect('month')}>
                    <Text
                      style={
                        timeFilter === 'month'
                          ? {...style.timeFilterButtons, color: '#8b64ff'}
                          : {...style.timeFilterButtons}
                      }>
                      1M
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.timeFilterSelect('3M')}>
                    <Text
                      style={
                        timeFilter === '3M'
                          ? {...style.timeFilterButtons, color: '#8b64ff'}
                          : {...style.timeFilterButtons}
                      }>
                      3M
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.timeFilterSelect('year')}>
                    <Text
                      style={
                        timeFilter === 'year'
                          ? {...style.timeFilterButtons, color: '#8b64ff'}
                          : {...style.timeFilterButtons}
                      }>
                      1Y
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.timeFilterSelect('all')}>
                    <Text
                      style={
                        timeFilter === 'all'
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
                      <Text style={style.hashtag}>{user.hashtag}</Text>
                    </View>
                    <View style={style.followButtonView}>
                      <Text style={style.followButton}>+Follow</Text>
                    </View>
                  </View>
                  <View style={style.bioContainer}>
                    <Text style={style.bio}>{user.bio}</Text>
                  </View>
                  <View style={style.numberRow}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Followers', {
                          name: `${user.name}'s followers`,
                          params: {user},
                        })
                      }>
                      <View style={style.numberColumn}>
                        <Text style={style.numberData}>{user.followers}</Text>
                        <Text style={style.numberText}>Followers</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={style.numberColumn}>
                      <Text style={style.numberData}>{user.posts}</Text>
                      <Text style={style.numberText}>Posts</Text>
                    </View>
                    <View style={style.numberColumn}>
                      <Text style={style.numberData}>{user.trades}</Text>
                      <Text style={style.numberText}>Trades </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('Following', {
                          name: `${user.name}'s following`,
                          params: {user},
                        })
                      }>
                      <View style={style.numberColumn}>
                        <Text style={style.numberData}>{user.following}</Text>
                        <Text style={style.numberText}>Following</Text>
                      </View>
                    </TouchableOpacity>
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
                    <Text style={style.portfolioButton}>Portfolio</Text>
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
                  <View key={post.id}>
                    <UserPosts
                      post={post}
                      navigation={this.props.navigation}
                      comments={comments}
                      reply={reply}
                      userAccount={userAccount}
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
    users: state.people.users,
    reply: state.posts.reply,
    userAccount: state.user.userFakeData,
  };
};

export default connect(mapStateToProps)(Profile);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
  },
  infoContainer: {
    borderColor: 'red',
    paddingHorizontal: moderateScale(7),
  },
  personalDetails: {
    borderColor: 'yellow',
    marginLeft: moderateScale(-90),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  detailsRow: {
    borderColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bioContainer: {
    marginVertical: moderateScale(8),
    paddingHorizontal: moderateScale(3),
  },
  bio: {
    color: 'white',
    fontSize: moderateScale(16),
  },
  numberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(12),
    marginVertical: moderateScale(10),
  },
  numberColumn: {
    alignItems: 'center',
  },
  aboveGraphContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(8),
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(8),
  },
  portfolioHeaderContainer: {
    flexDirection: 'column',
  },
  portfolioHeader: {
    color: 'white',
    fontSize: moderateScale(18),
  },
  percentage: {
    color: 'white',
    fontSize: moderateScale(22),
    fontWeight: 'bold',
  },
  timeNumberContainer: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
  },
  timeNumber: {
    color: 'lightgrey',
    fontSize: moderateScale(12),
  },
  image: {
    height: moderateScale(80),
    width: moderateScale(80),
    borderRadius: moderateScale(50),
  },
  followButtonView: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  followButton: {
    borderWidth: moderateScale(1.4),
    borderColor: '#9082cf',
    color: '#9082cf',
    borderRadius: moderateScale(3),
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(12),
    fontSize: moderateScale(16),
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(22),
  },
  username: {
    color: 'white',
    fontSize: moderateScale(15),
  },
  hashtag: {
    color: '#9082cf',
    fontSize: moderateScale(15),
  },

  numberData: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(18),
  },
  numberText: {
    color: 'lightgrey',
    fontSize: moderateScale(14),
  },

  portfolioButtonContainer: {
    marginTop: moderateScale(8),
    // justifyContent:'center',
  },
  portfolioButton: {
    textAlign: 'center',
    borderWidth: moderateScale(1.4),
    borderColor: '#9082cf',
    color: '#9082cf',
    padding: moderateScale(10),
    marginHorizontal: moderateScale(120),
    borderRadius: moderateScale(8),
    fontSize: moderateScale(16),
  },
  graphContainer: {
    flexDirection: 'row',
  },

  timeFilterButtonsContainer: {
    marginTop: moderateScale(7),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: moderateScale(24),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'rgba(158, 150, 150, .4)',
    paddingBottom: moderateScale(9),
  },
  timeFilterButtons: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  postsHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(26),
    marginLeft: moderateScale(6),
    marginTop: moderateScale(30),
  },
});
