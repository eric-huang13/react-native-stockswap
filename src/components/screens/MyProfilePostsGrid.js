import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Dimensions } from 'react-native'
import {connect} from 'react-redux';
import MyProfilePostBox from './MyProfilePostBox'

class MyProfilePostsGrid extends Component {
    render() {
        const {user, post, } = this.props;
        const id = this.props.user.id
        const selectedPosts = post.filter((user) => user.userId === id);
        return (
            <View>
              <FlatList
          keyExtractor = { (item, index) => index.toString() }
            // style={style.listContainer}
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
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      post: state.posts.posts,
      comments: state.posts.comments,
      users: state.people.users,
      reply: state.posts.reply,
      user: state.user.userFakeData
    };
  };
  
  export default connect(mapStateToProps)(MyProfilePostsGrid);
const styles = StyleSheet.create({})
