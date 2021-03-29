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
import {connect} from 'react-redux';
import MyProfilePostBox from './MyProfilePostBox';

class LikedPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      selectedPosts:[]
    };
  }

  componentDidMount() {
    const {user, post} = this.props;
    const id = this.props.user.id;

    //Will instead get liked posts, current data just placeholder
    const selectedPosts = post.filter((user) => user.userId !== id);
        this.setState({
          selectedPosts: selectedPosts,
        });
    
  }

  componentDidUpdate(prevProps) {
    const {user, post} = this.props;
    const id = this.props.user.id;
    if (this.props.post !== prevProps.post) {
      const selectedPosts = post.filter((user) => user.userId !== id);
        this.setState({
          selectedPosts: selectedPosts,
        });
    }
  }
  render() {
    
    const {user, post} = this.props;
    const id = this.props.user.id;

    //Will instead get liked posts, current data just placeholder
    const selectedPosts = post.filter((user) => user.userId !== id);

    return (
      <SafeAreaView style={style.container}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={selectedPosts}
          numColumns={3}
          renderItem={({item, index}) => (
            <MyProfilePostBox
              key={item.id}
              item={item}
              navigation={this.props.navigation}
            />
          )}
        />
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
  };
};

export default connect(mapStateToProps)(LikedPosts);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
    paddingVertical: 10,
  },
  infoContainer: {
    borderColor: 'red',
    paddingHorizontal: 7,
  },
  personalDetails: {
    borderColor: 'yellow',
    marginLeft: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  detailsRow: {
    borderColor: 'orange',
    flexDirection: 'row',
  },
  bioContainer: {
    marginVertical: 12,
    paddingHorizontal: 3,
  },
  bio: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
  numberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
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
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  hashtag: {
    color: '#9082cf',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },

  numberData: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  numberText: {
    color: 'lightgrey',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },

  portfolioButtonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginTop: 46,
    marginBottom: 30,
  },
  portfolioButton: {
    textAlign: 'center',
    borderWidth: 1.4,
    borderColor: '#9082cf',
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    fontSize: 14,
    width: 210,
    height: 42,
    backgroundColor: '#8B64FF',
    fontFamily: 'Montserrat-SemiBold',
  },
  graphContainer: {
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
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
});
