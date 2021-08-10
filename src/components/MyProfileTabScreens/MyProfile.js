import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import ProfileGraph from '../HomeTabComponents/ProfileGraph';
import {connect} from 'react-redux';
import MyProfilePostBox from '../MyProfileTabComponents/MyProfilePostBox';
import {moderateScale} from '../../util/responsiveFont';
import {GetProfile} from '../../actions/profile'
import {GetProfileImage} from '../../actions/profile'


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
      timeFilter: 'day',
      selectedPosts: [],
      user: [],
    };
  }
  timeFilterSelect(time) {
    this.setState({timeFilter: time});
  }
  componentDidMount() {
    //fetch data()
    this.props.GetProfile();
    this.props.GetProfileImage(this.props.userId);

    const {post, user, userProfile} = this.props;
    const id = this.props.user.id;
    const selectedPosts = post.filter((user) => user.userId === id);
    this.setState({
      selectedPosts: selectedPosts,
      user: user,
    });
  }

  componentDidUpdate(prevProps) {
    const {post, user} = this.props;
    const id = this.props.user.id;
    if (
      this.props.post !== prevProps.post ||
      this.props.user !== prevProps.user
    ) {
      const selectedPosts = post.filter((user) => user.userId === id);

      this.setState({
        selectedPosts: selectedPosts,
        user: user,
      });
    }
  }
  render() {
    const {graphData, percent, range, timeFilter} = this.state;
    const {user, post, userProfile, userImage, userData} = this.props;

    console.log(this.props.userProfile,"PROFILE DATA")
    console.log(this.props.userImage,"PROFILE IMAGE")
    console.log(this.props.userId,"USERID")



    return (
      <SafeAreaView style={style.container}>
        <View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={
              <View key={this.state.user.id}>
                <View style={style.aboveGraphContainer}>
                  <View style={style.portfolioHeaderContainer}>
                    <Text style={style.portfolioHeader}>Portfolio</Text>
                    <Text style={style.gain}>${this.state.user.gain}</Text>
                  </View>
                  <View style={style.timeNumberContainer}>
                    <Text style={style.timeNumber}>
                      <Text style={style.percentGain}>$-10.75(-11%)</Text> Past
                      hour
                    </Text>
                  </View>
                </View>
                <View style={style.graphContainer}>
                  <ProfileGraph graphData={ [
        {x: 2, y: 10},
        {x: 3, y: 11},
        {x: 4, y: 12},
        {x: 5, y: 14},
        {x: 6, y: 14},
        {x: 7, y: 15},
      ]} range={[10, 15]} />
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

                      {userImage !== '' ?
                  <Image
                      style={style.image}
                      source={{uri:this.props.userImage, headers:{Authorization: `Bearer ${this.props.userData.accessToken}`}}}
                    />
                    :
                    null}  

                 {/* ///WORKING Add response url */}
                    {/* <Image
                      style={style.image}
                      source={{uri:`https://d13h17hkw4i0vn.cloudfront.net/${this.props.userId}/profile.jpg`, headers:{Authorization: `Bearer ${this.props.userData.accessToken}`}}}
                    /> */}
                    
                    <View style={style.personalDetails}>
                      <Text style={style.name}>{userProfile.name}</Text>
                      <Text style={style.username}>
                        @{userProfile.username}
                      </Text>
                      <Text style={style.hashtag}>
                        {this.state.user.hashtag}
                      </Text>
                    </View>
                  </View>
                  <View style={style.bioContainer}>
                    <Text style={style.bio}>{userProfile.bio}</Text>
                  </View>
                  <View style={style.numberRow}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate({
                          name: 'MyFollowers',
                          params: {user},
                        })
                      }>
                      <View style={style.numberColumn}>
                        <Text style={style.numberData}>
                          {this.state.user.followers}
                        </Text>
                        <Text style={style.numberText}>Followers</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={style.numberColumn}>
                      <Text style={style.numberData}>
                        {this.state.user.posts}
                      </Text>
                      <Text style={style.numberText}>Posts</Text>
                    </View>
                    <View style={style.numberColumn}>
                      <Text style={style.numberData}>
                        {this.state.user.trades}
                      </Text>
                      <Text style={style.numberText}>Trades </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate({
                          name: 'MyFollowing',
                          params: {user},
                        })
                      }>
                      <View style={style.numberColumn}>
                        <Text style={style.numberData}>
                          {this.state.user.following}
                        </Text>
                        <Text style={style.numberText}>Following</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={style.portfolioButtonContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate({
                        name: 'ManagePortfolio',
                      })
                    }>
                    <Text style={style.portfolioButton}>Manage Portfolio</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate({
                        name: 'LikedPosts',
                      })
                    }>
                    <Text style={style.portfolioButton}>Liked Posts</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
            data={this.state.selectedPosts}
            numColumns={3}
            renderItem={({item, index}) => (
              <MyProfilePostBox
                key={item.id}
                item={item}
                navigation={this.props.navigation}
              />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.posts,
    comments: state.posts.comments,
    users: state.people.users,
    reply: state.posts.reply,
    user: state.user.userFakeData,
    userProfile: state.user.userProfile,
    userImage: state.user.userImage,
    userId: state.user.userId,
    userData: state.user.userData,

    

    

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetProfile: () => dispatch(GetProfile()),
    GetProfileImage: (id) => dispatch(GetProfileImage(id)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
  },
  percentGain: {
    fontFamily: 'Montserrat-Medium',
    color: '#F66E6E',
    fontSize: moderateScale(12),
  },
  infoContainer: {
    borderColor: 'red',
    paddingHorizontal: moderateScale(7),
  },
  personalDetails: {
    borderColor: 'yellow',
    marginLeft: moderateScale(8),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  detailsRow: {
    borderColor: 'orange',
    flexDirection: 'row',
  },
  bioContainer: {
    marginVertical: moderateScale(12),
    paddingHorizontal: moderateScale(3),
  },
  bio: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-Medium',
  },
  numberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(12),
    marginTop: 8,
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
    marginTop: 8,
    marginBottom: 10,
  },
  portfolioHeader: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 0,
  },
  gain: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Montserrat-ExtraBold',
  },
  timeNumberContainer: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    marginBottom: 14,
  },
  timeNumber: {
    color: 'lightgrey',
    fontSize: 10,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 80,
  },

  name: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Montserrat-Black',
  },
  username: {
    color: '#FFFFFF',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
  },
  hashtag: {
    color: '#9082cf',
    fontFamily: 'Montserrat-Medium',
    fontSize: moderateScale(12),
  },

  numberData: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  numberText: {
    color: 'lightgrey',
    fontSize: moderateScale(12),
    fontFamily: 'Montserrat-Regular',
  },

  portfolioButtonContainer: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(20),
    justifyContent: 'center',
    marginTop: moderateScale(46),
    marginBottom: moderateScale(30),
  },
  portfolioButton: {
    textAlign: 'center',
    borderWidth: moderateScale(1.4),
    borderColor: '#9082cf',
    color: '#FFFFFF',
    padding: moderateScale(10),
    borderRadius: moderateScale(8),
    fontSize: moderateScale(14),
    marginHorizontal: moderateScale(5),
    width: moderateScale(160),
    height: moderateScale(42),
    backgroundColor: '#8B64FF',
    fontFamily: 'Montserrat-SemiBold',
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
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(14),
  },
});
