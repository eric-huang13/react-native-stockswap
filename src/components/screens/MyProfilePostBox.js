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
  constructor(props) {
    super(props);

    this.state = {
      filteredComments:[]
    };
  }
   
  componentDidMount() {
    //fetch data()
    const {comments, item} = this.props;
    const filteredComments = comments.filter(
      (comment) => comment.postId === item.id,
    );
    {
        this.setState({
          filteredComments: filteredComments,
        });
    }
  }

  componentDidUpdate(prevProps) {
    const {comments, item} = this.props;
    if (this.props.comments !== prevProps.comments) {
      const filteredComments = comments.filter(
        (comment) => comment.postId === item.id,
      );
      this.setState({
        filteredComments: filteredComments,
      });
    }
  }
  render() {
    const {reply, userAccount, item} = this.props;

    return (
      <SafeAreaView style={style.container}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate({
              name: 'PostScreen',
              params: {post: item, filteredComments: this.state.filteredComments, reply, userAccount},
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
