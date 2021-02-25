import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';

class MyProfilePosts extends Component {
  render() {
    const {comments, reply, userAccount, item} = this.props;

    const filteredComments = comments.filter(
      (comment) => comment.postId === item.id,
    );

    return (
      <SafeAreaView style={style.container}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate({
              name: 'PostScreen',
              params: {post: item, filteredComments, reply, userAccount},
            })
          }>
          <Image style={style.image} source={{uri: item.img}} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    post: state.posts.posts,
    comments: state.posts.comments,
    reply: state.posts.reply,
    userAccount: state.user.userFakeData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfilePosts);

const style = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 3 - 2,
    margin: 1,
  },
  image: {
    height: Dimensions.get('window').width / 3 - 2,
    width: '100%',
  },
});
