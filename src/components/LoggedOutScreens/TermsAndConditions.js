import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale, verticalScale, scale} from '../../util/responsiveFont'

export default class TermsAndConditions extends Component {
  render() {
    const {handleTerms, handleCheck} = this.props;

    //setTermsVersion to current version, close modal, toggleCheck true
    const handleFormikTermsAgree = () => {
      this.props.props.setFieldValue('termsVersion', 'Version 1');
      handleTerms(false);
      handleCheck(true);
    };

    //setTermsVersion to "", close modal, toggleCheck false
    const handleFormikTermsCancel = () => {
      this.props.props.setFieldValue('termsVersion', '');
      handleTerms(false);
      handleCheck(false);
    };

    return (
      <View style={style.container}>
        <Text style={style.header}> Terms and Conditions </Text>
        <View style={style.buttonContainer}>
          <TouchableOpacity onPress={() => handleFormikTermsCancel()}>
            <Text style={style.agreeButton}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFormikTermsAgree()}>
            <Text style={style.agreeButton}>I agree</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(8),
    backgroundColor: '#323e5b',
    paddingHorizontal: moderateScale(30),
  },
  header: {
    color: 'white',
    fontSize: moderateScale(22),
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: moderateScale(100),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  agreeButton: {
    backgroundColor: '#8B64FF',
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(150),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(17),
    fontWeight: 'bold',
  },
});
