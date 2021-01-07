import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';

export default class UserCommentList extends Component {
  render() {
    console.log(this.props, 'props in commentsssss');
    const {filteredComments} = this.props.route.params;
    console.log(filteredComments, 'filcom');

    return (
      <SafeAreaView style={style.mainContainer}>
        {filteredComments.map((comment) => (
          <View key={comment.id} style={style.commentContainer}>
            <Image
              style={style.postUserImage}
              source={{uri: comment.profileImg}}
            />

            <Text style={style.name}>{comment.name} </Text>
            <Text style={style.body}>{comment.body} </Text>
          </View>
        ))}
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#324165',
    paddingVertical: 4,
  },
  commentContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    flexWrap: 'wrap',
    marginHorizontal: 6,
    marginVertical: 8,
  },

  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    alignSelf: 'center',
  },
  body: {
    color: 'white',
    fontSize: 16,
    marginLeft: 50,
  },
  postUserImage: {
    height: 43,
    width: 43,
    borderRadius: 50,
  },
});
