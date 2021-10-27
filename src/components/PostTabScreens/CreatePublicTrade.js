import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';
import LikeInactiveIcon from '../../icons/LikeInactiveIcon';
import CommentIcon from '../../icons/CommentIcon';
import {moderateScale, scale} from '../../util/responsiveFont';
import BullIcon from '../../icons/BullIcon';
import BearIcon from '../../icons/BearIcon';

export default class CreatePublicTrade extends Component {
  render() {
    const {post} = this.props.route.params;
    return (
      <SafeAreaView style={style.container}>
        <ScrollView style={style.scrollContainer}>
          <View style={style.postNameContainer}>
            <TouchableOpacity
              key={post.id}
              onPress={() => this.navigationByCondition(post)}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={style.postUserImage}
                  source={{uri: post.profileImg}}
                />
                <Text style={style.postUserName}>{post.name}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={style.tradeContainer}>
            <View style={style.tradeDetails}>
              <View>
                {post.percentage > 0 ? (
                  <View style={style.actionIconContainer}>
                    <Text style={style.vitalDetails}>{post.action}</Text>
                    <BullIcon style={style.icon} />
                  </View>
                ) : (
                  <View style={style.actionIconContainer}>
                    <Text style={style.vitalDetails}>{post.action}</Text>
                    <BearIcon style={style.icon} />
                  </View>
                )}
                <Text style={style.symbol}>{post.symbol}</Text>
              </View>
              <View style={style.tradeDetailsRight}>
                <View style={style.detailsColumns}>
                  <Text style={style.vitalDetails}>Portfolio</Text>
                  <Text style={style.postUserName}>
                    {post.portfolioPercentage}%
                  </Text>
                </View>
                <View style={style.detailsColumns}>
                  <Text style={style.vitalDetails}>Gain</Text>
                  <Text style={style.percentage}>+{post.gain}%</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={style.stockName}>
                {post.title}{' '}
                <Text style={style.tradeMade}>
                  (Trade made: {post.tradeDate})
                </Text>
              </Text>
            </View>
            {/* {post.body.length < 80 ? (
              <View style={style.bodyContainer}>
                <Text style={style.body}>{post.body}</Text>
              </View>
            ) : (
              <View style={style.bodyContainer}>
                <Text style={style.body}>
                  {' '}
                  {post.body.substring(0, 80)}...
                  <Text style={style.more}>{'       '}More</Text>
                </Text>
              </View>
            )} */}
          </View>
          <View style={style.detailsContainer}>
            <Text style={style.timestamp}>{post.timestamp}</Text>

            <View style={style.likesContainer}>
              <View style={style.iconContainer}>
                <LikeInactiveIcon />
                <Text style={style.likes}>{post.likes}</Text>
              </View>
              <View style={style.iconContainer}>
                <CommentIcon />
                <Text style={style.comments}>{post.comments}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={style.searchInputContainer}>
          <TextInput
            style={style.searchInput}
            placeholder="Enter your comment"
            placeholderTextColor="lightgrey"
          />
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: moderateScale(21),
    backgroundColor: '#2a334a',
  },

  reportModalContainer: {
    flex: 1,
    marginTop: moderateScale(310),
    backgroundColor: '#3e4d6c',
    borderRadius: moderateScale(20),
    padding: moderateScale(24),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  innerReportContainer: {
    marginTop: moderateScale(10),
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '50%',
  },
  optionModalText: {
    color: '#B8A0FF',
    marginLeft: moderateScale(16),
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(13),
    marginBottom: moderateScale(10),
  },

  scrollContainer: {
    paddingHorizontal: moderateScale(10),
  },
  image: {
    height: moderateScale(184),
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
    height: moderateScale(38),
    width: moderateScale(38),
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
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likes: {
    fontSize: moderateScale(16),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Medium',
    marginLeft: 3,
    marginRight: 14,
  },
  comments: {
    fontSize: moderateScale(16),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Medium',
    marginRight: moderateScale(1),
    marginLeft: moderateScale(3),
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

  dotsDropdownContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  dotsButton: {
    alignSelf: 'flex-end',
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(20),
    marginBottom: moderateScale(9),
  },
  dropdownEdit: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: moderateScale(1),
    marginBottom: moderateScale(-77),
    backgroundColor: '#2C3957',
    zIndex: 1,
    paddingVertical: moderateScale(6),
  },
  dropdown: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: moderateScale(1),
    marginBottom: moderateScale(-153),
    backgroundColor: '#2C3957',
    zIndex: 1,
    paddingVertical: moderateScale(6),
  },
  dropDownText: {
    color: 'white',
    fontSize: moderateScale(16),
    marginHorizontal: moderateScale(12),
    paddingVertical: moderateScale(2),
    fontFamily: 'Montserrat-Medium',
  },
  dropDownTextReportContainer: {
    borderTopWidth: moderateScale(1),
    borderTopColor: 'lightgrey',
    paddingTop: moderateScale(6),
    backgroundColor: '#2C3957',
  },
  searchInputContainer: {
    backgroundColor: '#2C3957',
    marginBottom: moderateScale(-10),
    paddingHorizontal: moderateScale(10),
  },
  searchInput: {
    marginTop: moderateScale(10),
    paddingLeft: moderateScale(20),
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: moderateScale(15),
    height: moderateScale(36),
    fontFamily: 'Montserrat-Italic',
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(6),
  },
  tradeContainer: {
    height: scale(166),
    width: '100%',
    borderRadius: moderateScale(10),
    backgroundColor: '#334166',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(14),
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
});
