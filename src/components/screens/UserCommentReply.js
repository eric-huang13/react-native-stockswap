import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default class UserCommentReply extends Component {
  render() {
    const {reply, id} = this.props;
    console.log(filteredReply, 'filcom');
    const filteredReply = reply.filter((reply) => reply.commentId === id);

    return (
      <SafeAreaView style={style.mainContainer}>
        {filteredReply.map((item) => (
          <View key={item.id} style={style.itemContainer}>
            <View style={style.detailsContainer}>
              <Image
                style={style.postUserImage}
                source={{uri: item.profileImg}}
              />
              <View style={style.nameBodyContainer}>
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    this.props.navigation.navigate({
                      name: 'Profile',
                      params: {item},
                    })
                  }>
                  <Text style={style.name}>{item.name} </Text>
                </TouchableOpacity>

                <Text style={style.body}>{item.body} </Text>
              </View>
            </View>
            <View style={style.belowCommentContainer}>
              <Text style={style.time}>{item.time}</Text>
              <View style={style.likesContainer}>
                <Text style={style.likes}>{item.likes} likes</Text>
                <Text style={style.reply}>Reply </Text>
              </View>
            </View>
          </View>
        ))}
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column-reverse',
    backgroundColor: '#2a334a',
    paddingVertical: 4,
    paddingLeft: 60,
    marginTop: 10,
  },
  itemContainer: {
    marginBottom: 16,
  },
  detailsContainer: {
    flexDirection: 'row',
    // marginBottom: 2,
    paddingRight: 4,
  },
  nameBodyContainer: {
    flex: 1,
    flexDirection: 'column',
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
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  body: {
    color: 'white',
    fontSize: 13.8,
    marginLeft: 8,
  },
  postUserImage: {
    height: 28,
    width: 28,
    borderRadius: 50,
  },
  belowCommentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 36.5,
    paddingRight: 6,
    alignItems: 'center',
    marginTop: 4,
  },
  time: {
    color: 'lightgrey',
    fontStyle: 'italic',
  },
  likesContainer: {
    flexDirection: 'row',
  },
  likes: {
    color: 'white',
    fontWeight: 'bold',
  },
  reply: {
    color: '#9082cf',
    marginLeft: 16,
    fontWeight: 'bold',
  },
});
