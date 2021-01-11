import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import UserCommentList from './UserCommentList';

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShow: false,
    };
  }

  render() {
    const {shouldShow} = this.state;

    const {post, filteredComments, reply} = this.props.route.params;
    return (
      <SafeAreaView style={style.container}>
        <ScrollView>
          <View style={style.postNameContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={style.postUserImage}
                source={{uri: post.profileImg}}
              />
              <Text style={style.postUserName}>{post.name}</Text>
            </View>

            <View style={style.dotsDropdownConatiner}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    shouldShow: !shouldShow,
                  })
                }>
                <Text style={style.dotsButton}>...</Text>
              </TouchableOpacity>
              {this.state.shouldShow ? (
                <View style={style.dropdown}>
                  <Text style={style.dropDownText}>Repost</Text>
                  <Text style={style.dropDownText}>Copy link</Text>
                  <Text style={style.dropDownText}>Turn on notifications</Text>
                  <View style={style.dropDownTextReportContainer}>
                    <Text style={style.dropDownText}>Report</Text>
                  </View>
                </View>
              ) : null}
            </View>
          </View>
          <Image style={style.image} source={{uri: post.img}} />
          <View style={style.detailsContainer}>
            <Text style={style.timestamp}>{post.timestamp}</Text>

            <View style={style.likesContainer}>
              <Text style={style.likes}>{post.likes}</Text>
              <Text style={style.comments}>{post.comments}</Text>
            </View>
          </View>
          <Text style={style.body}>{post.body}</Text>
          <UserCommentList
            filteredComments={filteredComments}
            navigation={this.props.navigation}
            reply={reply}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    paddingVertical: 21,
    paddingHorizontal: 10,
    backgroundColor: '#2a334a',
  },
  image: {
    height: 184,
    width: '100%',
    borderRadius: 10,
  },
  postNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9,
    justifyContent: 'space-between',
  },
  postUserImage: {
    height: 38,
    width: 38,
    borderRadius: 50,
  },
  postUserName: {
    color: 'white',
    fontSize: 16.5,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  timestamp: {
    fontSize: 14,
    color: 'lightgrey',
    fontStyle: 'italic',
  },
  likes: {
    fontSize: 16,
    color: 'white',
  },
  comments: {
    fontSize: 16,
    color: 'white',
    marginHorizontal: 10,
  },
  body: {
    fontSize: 16.5,
    color: 'white',
    marginTop: 10,
    marginBottom: 2,
    borderBottomWidth: 0.7,
    borderBottomColor: 'rgba(158, 150, 150, .4)',
    paddingBottom: 18,
  },

  dotsDropdownConatiner: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  dotsButton: {
    alignSelf: 'flex-end',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  dropdown: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 1,
    marginBottom: -125,
    backgroundColor: '#36415f',
    zIndex: 1,
    paddingVertical: 6,
    // paddingHorizontal:10,
  },
  dropDownText: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 12,
  },
  dropDownTextReportContainer: {
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    paddingTop: 4,
  },
});
