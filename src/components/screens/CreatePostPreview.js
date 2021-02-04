import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import LikeInactiveIcon from '../../icons/LikeInactiveIcon'
import CommentIcon from '../../icons/CommentIcon'
import {UserPost} from '../../actions/posts'


class CreatePostPreview extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name:'',
          profileImage:' ',
          enabled:'',
          image:'',
          body:'',
        };
      }
      componentDidMount() {
        const {data} = this.props.route.params
        const {userAccount} = this.props;

     
            this.setState({
                id:userAccount.id,
                name: userAccount.name,
                profileImage: userAccount.img,
                enabled:data.enabled,
                image:data.image,
                body:data.body,
            });      
      }

      
    render() {
        //for testing
        // const credentials = {
        //     name: this.state.name,
        //     description:this.state.body,
        //     image_url:this.state.image            
        //   }; 
        const {UserPost} = this.props;
        return (
            <SafeAreaView style={style.container}>
                <ScrollView style={style.scrollContainer}>
          <View style={style.postNameContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={style.postUserImage}
                source={{uri: this.state.profileImage}}
              />
              <Text style={style.postUserName}>{this.state.name}</Text>
            </View>
          </View>
          {this.state.image === '' ? (
                null
              ) : (
                <Image style={style.image} source={{uri:this.state.image}} />
              )}         
               <View style={style.detailsContainer}>
            <Text style={style.timestamp}>just now</Text>

            <View style={style.likesContainer}>
              <View style={style.iconContainer}>
                <LikeInactiveIcon/>
              <Text style={style.likes}>0</Text>
              </View>
              <View style={style.iconContainer}>
                <CommentIcon/>
              <Text style={style.comments}>0</Text>
              </View>
            </View>
          </View>
          <Text style={style.body}>{this.state.body}</Text>
          <View style={style.buttonsContainer}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}>
                    <Text style={style.backButton}>Back</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => console.log(this.state)}>
                    <Text style={style.publishButton}>Publish</Text>
                  </TouchableOpacity>
                </View>
        
        </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      userAccount: state.user.userFakeData
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        UserPost: (input) => dispatch(UserPost(input)),
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreatePostPreview);

const style = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingVertical: 21,
      backgroundColor: '#2a334a',
    },
    scrollContainer: {   
      paddingHorizontal: 10,
    },
    image: {
      height: 182,
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
      height: 34,
      width: 34,
      borderRadius: 50,
    },
    postUserName: {
      color: '#FFFFFF',
      fontSize: 14,
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
      fontSize: 12,
      color: 'lightgrey',
      fontFamily:'Montserrat-Italic',
    },
    iconContainer:{
      flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between',
    },
    likes: {
      fontSize: 14,
      color: 'lightgrey',
      fontFamily:'Montserrat-Medium',
      marginLeft:3,
      marginRight:14,
    },
    comments: {
      fontSize: 14,
      color: 'lightgrey',
      fontFamily:'Montserrat-Medium',
      marginRight: 1,
      marginLeft:3,
  
    },
    body: {
      fontSize: 14,
      color: '#FFFFFF',
      marginTop: 10,
      marginBottom: 2,
      paddingBottom: 18,
      fontFamily:'Montserrat-Medium',
    },
    buttonsContainer: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal:15,
      },
      backButton: {
        alignSelf: 'center',
        color: '#8b64ff',
        textAlign: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: 160,
        borderRadius: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        borderWidth: 1,
        borderColor: '#8b64ff',
      },
      publishButton: {
        alignSelf: 'center',
        backgroundColor: '#8b64ff',
        color: '#FFFFFF',
        textAlign: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: 160,
        borderRadius: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
      },
    });
  