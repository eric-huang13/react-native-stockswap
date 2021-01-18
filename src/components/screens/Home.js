import React, {Component} from 'react';
import UserPosts from './UserPosts';
import StockTicker from './StockTicker';
import {connect} from 'react-redux';
import {Button, SafeAreaView, Text, ScrollView, StyleSheet} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";


import {Logout} from 'actions/user';

class HomeScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      token: "",
   
      
    };
  }
  render() {
    const {isLoggedIn, LogoutUser, posts, comments, reply, userData} = this.props;
    console.log(userData,"USERDATA IN HOME")
    
     const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        this.setState({
          token: value,
        });
      }
    } catch (error) {
      console.log('error')
      // error reading value
    }
  };
    // const token = AsyncStorage.getItem("userToken")
    // console.log(token, "TOKEN")
    return (
      <SafeAreaView style={style.mainContainer}>
        <ScrollView>
          <StockTicker />
          <Text>{userData.message}</Text>

          {posts.map((post) => (
            <UserPosts
              key={post.id}
              post={post}
              navigation={this.props.navigation}
              comments={comments}
              reply={reply}
            />
          ))}
          <Text>Is User Logged in: {'' + isLoggedIn} </Text>
          <Button title="Logout Button" onPress={() => LogoutUser()} />
          <Text>{this.state.token}</Text>
          <Button title="Get Token" onPress={() => getData()} />

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    posts: state.posts.posts,
    comments: state.posts.comments,
    reply: state.posts.reply,
    userData: state.user.userData,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LogoutUser: (userCredentials) => dispatch(Logout(userCredentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2a334a',
  },
});
