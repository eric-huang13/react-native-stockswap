import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import { moderateScale } from '../../util/responsiveFont';
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

    return (
      <SafeAreaView style={style.container}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
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
    paddingVertical: moderateScale(10),
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
    marginTop: moderateScale(8),
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
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Regular',
    marginBottom: 0,
  },
  gain: {
    color: 'white',
    fontSize: moderateScale(24),
    fontFamily: 'Montserrat-ExtraBold',
  },
  timeNumberContainer: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
  },
  timeNumber: {
    color: 'lightgrey',
    fontSize: moderateScale(10),
  },
  image: {
    height: moderateScale(60),
    width: moderateScale(60),
    borderRadius: moderateScale(80),
  },

  name: {
    color: '#FFFFFF',
    fontSize: moderateScale(18),
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
    fontSize: moderateScale(16),
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
    width: moderateScale(210),
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
