import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import UserCommentList from './UserCommentList';
import LikeInactiveIcon from '../../icons/LikeInactiveIcon'
import CommentIcon from '../../icons/CommentIcon'

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
        <ScrollView style={style.scrollContainer}>
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
              <View style={style.iconContainer}>
                <LikeInactiveIcon/>
              <Text style={style.likes}>{post.likes}</Text>
              </View>
              <View style={style.iconContainer}>
                <CommentIcon/>
              <Text style={style.comments}>{post.comments}</Text>
              </View>
            </View>
          </View>
          <Text style={style.body}>{post.body}</Text>
          <UserCommentList
            filteredComments={filteredComments}
            navigation={this.props.navigation}
            reply={reply}
          />
        </ScrollView>
        <View style={style.searchInputContainer}>
         
            <TextInput
              style={style.searchInput}
              placeholder="Enter your comment"
              placeholderTextColor="lightgrey"
            />
          </View>
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
    // paddingHorizontal: 10,
    backgroundColor: '#2a334a',
  },
  scrollContainer: {   
    paddingHorizontal: 10,
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
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 8,
    fontFamily:'Montserrat-Bold',
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
    fontSize: 12.5,
    color: 'lightgrey',
    fontFamily:'Montserrat-Italic',
  },
  iconContainer:{
    flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
  },
  likes: {
    fontSize: 16,
    color: 'lightgrey',
    fontFamily:'Montserrat-Medium',
    marginLeft:3,
    marginRight:14,
  },
  comments: {
    fontSize: 16,
    color: 'lightgrey',
    fontFamily:'Montserrat-Medium',
    marginRight: 1,
    marginLeft:3,

  },
  body: {
    fontSize: 15,
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 2,
    borderBottomWidth: 0.7,
    borderBottomColor: 'rgba(158, 150, 150, .4)',
    // borderBottomColor:'#CBCDD7',
    paddingBottom: 18,
    fontFamily:'Montserrat-Medium',
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
    backgroundColor: '#2C3957',
    zIndex: 1,
    paddingVertical: 6,
    // paddingHorizontal:10,
  },
  dropDownText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 12,
    fontFamily:'Montserrat-Medium',
  },
  dropDownTextReportContainer: {
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    paddingTop: 4,
    backgroundColor:'#2C3957'

  },
  searchInputContainer: {
    backgroundColor:'#2C3957',
    marginBottom:-10,
    paddingHorizontal:10,

  },
  searchInput: {
    marginTop:10,
    paddingLeft: 20,
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: 15,
    height: 36,
    fontFamily: 'Montserrat-Italic',
    paddingVertical: 10,
    borderRadius:6,
  },
});
