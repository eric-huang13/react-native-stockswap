import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
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
            renderItem={({item, index}) => (
            //   <TouchableOpacity
            //     key={item.id}
            //     onPress={() =>
            //       this.props.navigation.navigate({
            //         name: 'CompanyInformation',
            //         params: {item},
            //       })
            //     }>
               <MyProfilePostBox
               key={item.id}
               item={item}
               navigation={this.props.navigation}
               />
            //   </TouchableOpacity>
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
