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
import {moderateScale, scale} from '../../util/responsiveFont';
import BullIcon from '../../icons/BullIcon';
import BearIcon from '../../icons/BearIcon';

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
      title: data.title,
      symbol: data.symbol,
      portfolioPercentage: data.portfolioPercentage,
      tradeDate: data.tradeDate,
      gain: data.gain,
      body: data.body,
      action: data.action,
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
                }}
              />
              <Text style={style.postUserName}>{userObject.name}</Text>
            </View>
          </View>
          <View style={style.tradeContainer}>
            <View style={style.tradeDetails}>
              <View>
                {userObject.percentage > 0 ? (
                  <View style={style.actionIconContainer}>
                    <Text style={style.vitalDetails}>{userObject.action}</Text>
                    <BullIcon style={style.icon} />
                  </View>
                ) : (
                  <View style={style.actionIconContainer}>
                    <Text style={style.vitalDetails}>{userObject.action}</Text>
                    <BearIcon style={style.icon} />
                  </View>
                )}
                <Text style={style.symbol}>{userObject.symbol}</Text>
              </View>
              <View style={style.tradeDetailsRight}>
                <View style={style.detailsColumns}>
                  <Text style={style.vitalDetails}>Portfolio</Text>
                  <Text style={style.postUserName}>
                    {userObject.portfolioPercentage}%
                  </Text>
                </View>
                <View style={style.detailsColumns}>
                  <Text style={style.vitalDetails}>Gain</Text>
                  <Text style={style.percentage}>+{userObject.gain}%</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={style.stockName}>
                {userObject.title}{' '}
                <Text style={style.tradeMade}>
                  (Trade made: {userObject.tradeDate})
                </Text>
              </Text>
            </View>

            <View style={style.bodyContainer}>
              <View style={style.bodyContainer}>
                <Text style={style.body}>{userObject.body}</Text>
              </View>
            </View>
          </View>
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
          {/* <Text style={style.body}>{userObject.body}</Text> */}
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
  bodyContainer: {
    // alignSelf: 'center',
    marginTop: moderateScale(4),
  },
  scrollContainer: {
    paddingHorizontal: moderateScale(10),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    fontSize: moderateScale(15),
    color: '#FFFFFF',
    marginTop: moderateScale(10),
    marginBottom: moderateScale(2),
    // borderBottomWidth: moderateScale(0.7),
    // borderBottomColor: 'rgba(158, 150, 150, .4)',
    paddingBottom: moderateScale(18),
    fontFamily: 'Montserrat-Medium',
  },
  tradeContainer: {
    height: scale(166),
    width: '100%',
    borderRadius: moderateScale(10),
    backgroundColor: '#334166',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(14),
    marginTop: moderateScale(26),
  },
  tradeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 4,
  },
  tradeDetailsRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    height: '100%',
  },
  actionIconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: moderateScale(8),
  },
  detailsColumns: {
    justifyContent: 'space-between',
  },
  vitalDetails: {
    color: 'lightgrey',
    fontSize: moderateScale(14.5),
    fontFamily: 'Montserrat-Medium',
  },
  symbol: {
    color: '#FFFFFF',
    fontSize: moderateScale(21),
    fontFamily: 'Montserrat-Bold',
  },
  percentage: {
    fontSize: moderateScale(16.5),
    color: '#81d4b1',
    fontFamily: 'Montserrat-Bold',
  },
  postNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(8.5),
    justifyContent: 'space-between',
  },
  profileImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postUserImage: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(50),
  },
  postUserName: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
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
    fontSize: moderateScale(12.5),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Italic',
  },
  tradeMade: {
    fontSize: moderateScale(12),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Regular',
  },
  stockName: {
    fontSize: moderateScale(14.5),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Regular',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  mainContainer: {
    flex: 1,
    backgroundColor: '#2a334a',
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(26),
  },
  header: {
    marginTop: moderateScale(30),
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  body: {
    fontSize: moderateScale(15),
    color: '#FFFFFF',
    marginTop: moderateScale(10),
    marginBottom: moderateScale(2),
    // borderBottomWidth: moderateScale(0.7),
    // borderBottomColor: 'rgba(158, 150, 150, .4)',
    paddingBottom: moderateScale(18),
    fontFamily: 'Montserrat-Medium',
  },
});
