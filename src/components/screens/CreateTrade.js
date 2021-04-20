import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import TriangleIcon from '../../icons/TriangleIcon';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { moderateScale } from '../../util/responsiveFont';

const validationSchema = Yup.object().shape({
  // Validation will change when we have a better idea what data needs to be sent
  name: Yup.string()
    .label('name')
    .required('Name is required')
    .min(2, 'Name must have more than 2 characters '),

  time: Yup.number()
    .label('time')
    .typeError('Please enter a number')
    .required('Time is required')
    .min(2, 'Time must have more than 2 characters '),

  quantity: Yup.number()
    .typeError('Please enter a number')
    .label('quantity')
    .required('Quantity is required')
});

export default class CreateTrade extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPrivate:false,
      shouldShow: false,
    };
  }

  dropDownSelect(setting) {
    this.setState({isPrivate: setting, shouldShow: false});
  }

  render() {
    const {shouldShow} = this.state;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={style.mainContainer}>
          <ScrollView>
          <KeyboardAvoidingView>
          <Formik
                initialValues={{
                name: '',
                orderType: 'buy',
                time: '',
                quantity: '',
                isPrivate:false,                                 
                }}
                onSubmit={(values) => {
                  console.log(values, 'values');
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
                  <View>
            <Text style={style.header}>Post a Trade</Text>
            <View style={style.uploadContainer}>
              <Text style={style.uploadText}>
                Upload trade screenshot for autofill
              </Text>
            </View>
            <View style={style.nameInputContainer}>
              <Text style={style.inputHeader}>Stock name</Text>
              <TextInput
                onBlur={handleBlur('name')}
                value={values.name}
                onChangeText={handleChange('name')}              
                style={style.inputStyleBody}                
                placeholder="Start typing stock name"
                placeholderTextColor="#9ea6b5"                               
              />            
              <Text style={style.errorText}>
                          {touched.name && errors.name}
                        </Text>
            </View>
            <View>
              <Text style={style.inputHeader}>Order Type</Text>
              <View style={style.buttonsContainer}>
                <TouchableOpacity onPress={() => {
                                    setFieldValue('orderType', 'buy');
                                  }}>
                  <Text style={
                  values.orderType === 'buy'
                    ? {...style.buyButton, backgroundColor: '#8b64ff'}
                    : {...style.buyButton}
                }>Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFieldValue('orderType', 'sell')}>
                  <Text style={values.orderType === 'sell'
                    ? {...style.buyButton, backgroundColor: '#8b64ff'}
                    : {...style.buyButton}}>Sell</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.TimeContainer}>
              <Text style={style.inputHeader}>Time</Text>
              <TextInput
                onBlur={handleBlur('time')}
                value={values.time}
                onChangeText={handleChange('time')} 
                style={style.inputStyleBody}                
                placeholder="Time when you sell it"
                placeholderTextColor="#9ea6b5"
              />
              <Text style={style.errorText}>
                          {touched.time && errors.time}
                        </Text>
            </View>
            <View style={style.quantityConatiner}>
              <Text style={style.inputHeader}>Quantity</Text>
              <TextInput
                onBlur={handleBlur('quantity')}
                value={values.quantity}
                onChangeText={handleChange('quantity')} 
                style={style.inputStyleBody}               
                placeholder="Number of shares"
                placeholderTextColor="#9ea6b5"                
              />
              <Text style={style.errorText}>
                          {touched.quantity && errors.quantity}
                        </Text>
            </View>
            <View>
              <Text style={style.inputHeader}>Stock privacy</Text>


              <View style={style.dotsDropdownContainer}>
                          <TouchableOpacity
                            onPress={() =>
                              this.setState({
                                shouldShow: !shouldShow,
                              })
                            }>
                            <View style={style.visibleButtonContainer}>
                              <Text style={style.middleDetailsText}>
                                {this.state.isPrivate == false ? 
                                "Visible for all"
                                :
                                "Private"  
                              }
                              </Text>
                              <TriangleIcon style={style.icon} />
                            </View>
                          </TouchableOpacity>
                          {this.state.shouldShow ? (
                            <View style={style.dropdown}>
                              {this.state.isPrivate == false ? (
                                <TouchableOpacity
                                  onPress={() => {
                                    this.dropDownSelect(true);
                                    setFieldValue('isPrivate', true);
                                  }}>
                                  <Text style={style.dropDownText}>
                                    Private
                                  </Text>
                                </TouchableOpacity>
                              ) : (
                                <TouchableOpacity
                                  onPress={() => {
                                    this.dropDownSelect(false);
                                    setFieldValue('isPrivate', false);
                                  }}>
                                  <Text style={style.dropDownText}>
                                    Visible for all
                                  </Text>
                                </TouchableOpacity>
                              )}
                            </View>
                          ) : null}
                        </View>
            </View>
            <TouchableOpacity onPress={handleSubmit}>
            <Text style={style.publishButton}>Publish</Text>
            </TouchableOpacity>
            </View>

            )}
            </Formik>
          </KeyboardAvoidingView>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2a334a',
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(36),
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  header: {
    fontSize: moderateScale(20),
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: moderateScale(12),
  },
  uploadContainer: {
    backgroundColor: '#46486e',
    height: moderateScale(48),
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  uploadText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(14),
  },
  nameInputContainer: {
    marginTop: moderateScale(20),
  },
  inputHeader: {
    fontSize: moderateScale(12),
    color: '#babec8',
    fontFamily: 'Montserrat-Regular',
    marginBottom: moderateScale(3),
  },
  inputStyleBody: {
    borderRadius: 6,
    backgroundColor: '#3e4d6c',
    padding: moderateScale(8),
    marginTop: moderateScale(1),
    fontSize: moderateScale(14),
    textAlignVertical: 'center',
    fontFamily: 'Montserrat-Italic',
    color: '#FFFFFF',
    height: moderateScale(42),

      },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:moderateScale(18),
    marginTop:moderateScale(2)

      },
  buyButton: {
    alignSelf: 'center',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(141),
    borderRadius: 6,
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
    backgroundColor: '#536183',
  },
  sellButton: {
    alignSelf: 'center',
    backgroundColor: '#536183',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(141),
    borderRadius: 6,
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
  },
  visibleButtonContainer: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    borderRadius: 6,
    backgroundColor: '#3E4D6C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleDetailsText: {
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
    fontSize: moderateScale(16),
  },
  dropdown: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: moderateScale(41),
    backgroundColor: '#3E4D6C',
    zIndex: 1,
    paddingVertical: moderateScale(4),
    height: moderateScale(35),
    position: 'absolute',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  dropDownText: {
    color: 'white',
    fontSize: moderateScale(16),
    marginHorizontal: moderateScale(12),
    fontFamily: 'Montserrat-Medium',
    marginBottom: moderateScale(6),
  },
  dropDownTextReportContainer: {
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    paddingTop: moderateScale(4),
    backgroundColor: '#2C3957',
  },
  icon: {
    marginRight: moderateScale(4),
  },
  publishButton: {
    alignSelf: 'center',
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(303),
    borderRadius: 6,
    fontSize: moderateScale(14),
    marginTop: moderateScale(36),
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: moderateScale(8),

  },
  errorText: {
    color: '#F66E6E',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
