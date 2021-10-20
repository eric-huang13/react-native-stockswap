import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import LikeInactiveIcon from '../../icons/LikeInactiveIcon';
import CommentIcon from '../../icons/CommentIcon';
import {UserPost, EditPost} from '../../actions/posts';
import {moderateScale} from '../../util/responsiveFont';

class CreatePostPreview extends Component {
  //Creating FormData for sending image to backend
  createFormData = (values) => {
    let formData = new FormData();
    Object.keys(values).forEach((fieldName) => {
      console.log(fieldName, values[fieldName]);
      formData.append(fieldName, values[fieldName]);
    });
    return formData;
  };

  render() {
    const {UserPost, EditPost, userAccount, userProfile} = this.props;
    const {data} = this.props.route.params;
    const id = this.props.route.params.edit;

    //for testing
    const credentials = {
      description: userAccount.name,
      name: data.body,
      image_url: userAccount.img,
    };

    const userObject = {
      id: userAccount.id,
      name: userProfile.name,
      profileImage: this.props.userImage,
      enabled: data.enabled,
      image: data.image.uri,
      body: data.body,
    };
    const theData = this.createFormData(userObject);

    return (
      <SafeAreaView style={style.container}>
        <ScrollView style={style.scrollContainer}>
          <View style={style.postNameContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={style.postUserImage}
                source={{
                  uri: this.props.userImage,
                  headers: {
                    Authorization: `Bearer ${this.props.reduxToken}`,
                  },
                }}              />
              <Text style={style.postUserName}>{userObject.name}</Text>
            </View>
          </View>
          {userObject.image === '' ? null : (
            <Image style={style.image} source={{uri: userObject.image}} />
          )}
          <View style={style.detailsContainer}>
            <Text style={style.timestamp}>just now</Text>

            <View style={style.likesContainer}>
              <View style={style.iconContainer}>
                <LikeInactiveIcon />
                <Text style={style.likes}>0</Text>
              </View>
              <View style={style.iconContainer}>
                <CommentIcon />
                <Text style={style.comments}>0</Text>
              </View>
            </View>
          </View>
          <Text style={style.body}>{userObject.body}</Text>
          <View style={style.buttonsContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={style.backButton}>Back</Text>
            </TouchableOpacity>

            {this.props.route.params.edit ? (
              <TouchableOpacity onPress={() => EditPost(credentials, id)}>
                <Text style={style.publishButton}>Confirm Edit</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => console.log(theData)}>
                <Text style={style.publishButton}>Publish</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userAccount: state.user.userFakeData,
    userProfile: state.user.userProfile,
    userData: state.user.userData,
    userImage: state.user.userImage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UserPost: (input) => dispatch(UserPost(input)),
    EditPost: (input, id) => dispatch(EditPost(input, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostPreview);

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: moderateScale(21),
    backgroundColor: '#2a334a',
  },
  scrollContainer: {
    paddingHorizontal: moderateScale(10),
  },
  image: {
    height: moderateScale(182),
    width: '100%',
    borderRadius: moderateScale(10),
  },
  postNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(9),
    justifyContent: 'space-between',
  },
  postUserImage: {
    height: moderateScale(34),
    width: moderateScale(34),
    borderRadius: moderateScale(50),
  },
  postUserName: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    marginLeft: moderateScale(8),
    fontFamily: 'Montserrat-Bold',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(8),
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  timestamp: {
    fontSize: moderateScale(12),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Italic',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likes: {
    fontSize: moderateScale(14),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Medium',
    marginLeft: moderateScale(3),
    marginRight: moderateScale(14),
  },
  comments: {
    fontSize: moderateScale(14),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Medium',
    marginRight: moderateScale(1),
    marginLeft: moderateScale(3),
  },
  body: {
    fontSize: moderateScale(14),
    color: '#FFFFFF',
    marginTop: moderateScale(10),
    marginBottom: moderateScale(2),
    paddingBottom: moderateScale(18),
    fontFamily: 'Montserrat-Medium',
  },
  buttonsContainer: {
    marginTop: moderateScale(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(15),
  },
  backButton: {
    alignSelf: 'center',
    color: '#8b64ff',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(160),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
    borderWidth: moderateScale(1),
    borderColor: '#8b64ff',
  },
  publishButton: {
    alignSelf: 'center',
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(160),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
  },
});
