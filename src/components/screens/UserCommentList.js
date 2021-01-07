import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity} from 'react-native';

export default class UserCommentList extends Component {
  render() {
    const {filteredComments} = this.props;
    console.log(filteredComments, 'filcom');

    return (
      <SafeAreaView style={style.mainContainer}>
        {filteredComments.map((item) => (
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
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#324165',
    paddingVertical: 4,
    paddingLeft:4,
  },
  itemContainer:{
    marginBottom:14,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: 6,
    
  },
  nameBodyContainer:{
    flex:1,
    flexDirection: 'column', 
    paddingRight:4, 
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
    fontSize: 14,
    marginLeft: 8,
  },
  postUserImage: {
    height: 43,
    width: 43,
    borderRadius: 50,
  },
  belowCommentContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:50,
    paddingRight:4,
  },
  time:{
    color:'lightgrey'
  },
  likesContainer:{
    flexDirection:'row',
  },
  likes:{
    color:'white',
    fontWeight:'bold',

  },
  reply:{
    color: '#9082cf',
    marginLeft:16,
    fontWeight:'bold',



  },

});
