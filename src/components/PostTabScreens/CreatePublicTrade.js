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
  KeyboardAvoidingView,
  Switch,
} from 'react-native';
import LikeInactiveIcon from '../../icons/LikeInactiveIcon';
import CommentIcon from '../../icons/CommentIcon';
import {moderateScale, scale} from '../../util/responsiveFont';
import BullIcon from '../../icons/BullIcon';
import BearIcon from '../../icons/BearIcon';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  body: Yup.string()
    .label('body')
    .min(2, 'body must have more than 2 characters '),
});

export default class CreatePublicTrade extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: false,
    };
  }

  toggleSwitch = (value) => {
    this.setState({enabled: value});
  };
  render() {
    const {post} = this.props.route.params;
    return (
      <SafeAreaView style={style.container}>
        <ScrollView style={style.scrollContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{flex: 1}}>
            <Formik
              initialValues={{
                enabled: false,
                title: this.props.route.params.post.title,
                tradeDate: this.props.route.params.post.tradeDate,
                portfolioPercentage: this.props.route.params.post
                  .portfolioPercentage,
                gain: this.props.route.params.post.gain,
                body: '',
                action: this.props.route.params.post.action,
              }}
              onSubmit={(values) => {
                console.log(values, 'values');
                const data = this.createFormData(values);
                console.log(data, 'form');
                // UserPost(values)
              }}
              validationSchema={validationSchema}>
              {({
                handleChange,
                values,
                handleSubmit,
                errors,
                isValid,
                touched,
                handleBlur,
                isSubmitting,
                setFieldValue,
              }) => (
                <View style={style.mainPostContainer}>
                  <Text style={style.header}> Post Trade </Text>

                  <View style={style.tradeContainer}>
                    <View style={style.tradeDetails}>
                      <View>
                        {post.percentage > 0 ? (
                          <View style={style.actionIconContainer}>
                            <Text style={style.vitalDetails}>
                              {post.action}
                            </Text>
                            <BullIcon style={style.icon} />
                          </View>
                        ) : (
                          <View style={style.actionIconContainer}>
                            <Text style={style.vitalDetails}>
                              {post.action}
                            </Text>
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

                    <View style={style.bodyContainer}>
                      <Text style={style.inputHeader}>
                        Post caption will show here...
                      </Text>
                    </View>
                  </View>

                  <View style={style.postContainer}>
                    <Text style={style.inputHeader}>Caption</Text>
                    <TextInput
                      style={style.inputStyleBody}
                      // onBlur={handleBlur('body')}
                      value={values.body}
                      onChangeText={handleChange('body')}
                      placeholder="Enter post text"
                      placeholderTextColor="#9ea6b5"
                      multiline={true}
                      numberOfLines={4}
                    />
                    <Text style={style.errorText}>{errors.body}</Text>
                  </View>

                  <View style={style.notificationsContainer}>
                    <Text style={style.middleDetailsText}>
                      Turn off comments
                    </Text>
                    <Switch
                      trackColor={{false: '#1A2542', true: '#B8A0FF'}}
                      thumbColor={this.state.enabled ? '#f4f3f4' : '#f4f3f4'}
                      ios_backgroundColor="#f4f3f4"
                      onValueChange={(value) => setFieldValue('enabled', value)}
                      value={values.enabled}
                      style={{
                        transform: [
                          {scaleX: moderateScale(1.5)},
                          {scaleY: moderateScale(1.5)},
                        ],
                      }}
                    />
                  </View>
                  <View style={style.buttonsContainer}>
                    <TouchableOpacity onPress={() => handleSubmit()}>
                      <Text style={style.publishButton}>Publish</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        // console.log(values, 'values')
                        values.body === '' && values.errors
                          ? Toast.show({
                              type: 'error',
                              text2: 'Please fix errors',
                            })
                          : this.props.navigation.navigate({
                              name: 'CreatePublicTradePreview',
                              params: {data: values},
                            })
                      }>
                      <Text style={style.previewButton}>Preview</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: moderateScale(14),
    backgroundColor: '#2a334a',
  },
  mainPostContainer: {},
  bodyContainer: {
    alignSelf: 'center',
    marginTop: moderateScale(28),
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
  uploadImageContainer: {
    marginTop: moderateScale(20),
    backgroundColor: '#46486e',
    width: '100%',
    alignSelf: 'center',
    height: moderateScale(130),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(2),
  },
  uploadImageText: {
    fontSize: moderateScale(14),
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
  },
  inputStyleImage: {
    fontFamily: 'Montserrat-Regular',
    color: '#FFFFFF',
    width: moderateScale(200),
    textAlign: 'center',
  },
  postContainer: {
    width: '100%',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  inputHeader: {
    fontSize: moderateScale(12),
    color: '#babec8',
    marginBottom: moderateScale(1),
    fontFamily: 'Montserrat-Regular',
  },
  inputStyleBody: {
    borderRadius: moderateScale(6),
    backgroundColor: '#3e4d6c',
    marginBottom: moderateScale(12),
    padding: moderateScale(8),
    marginTop: moderateScale(1),
    fontSize: moderateScale(14),
    textAlignVertical: 'top',
    fontFamily: 'Montserrat-Italic',
    color: '#FFFFFF',
    height: moderateScale(200),
  },
  notificationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
    paddingRight: moderateScale(16),
  },
  middleDetailsText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    fontSize: moderateScale(16),
  },
  buttonsContainer: {
    marginTop: moderateScale(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal:30,
  },
  publishButton: {
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
  previewButton: {
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
  errorText: {
    color: '#F66E6E',
    fontWeight: 'bold',
    marginBottom: moderateScale(1),
    marginTop: moderateScale(1),
    textAlign: 'center',
  },
});
