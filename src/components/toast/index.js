import Toast, {BaseToast} from 'react-native-toast-message';
import successToast from '../../icons/successToast.png';
import errorToast from '../../icons/errorToast.png';
import infoToast from '../../icons/infoToast.png';
import React from 'react';

const toastConfig = {
  success: ({text1, text2, props, ...rest}) => (
    <BaseToast
      {...rest}
      style={{borderLeftColor: '#8B64FF', backgroundColor: '#8B64FF'}}
      onTrailingIconPress={() => {
        Toast.hide();
      }}
      leadingIcon={successToast}
      contentContainerStyle={{paddingHorizontal: 15, alignItems: 'center'}}
      text1Style={{
        fontSize: 18,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold',
      }}
      text2Style={{
        fontSize: 15,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Medium',
      }}
      text1={text1}
      text2={text2}
    />
  ),
  error: ({text1, text2, ...rest}) => (
    <BaseToast
      {...rest}
      style={{borderLeftColor: '#8B64FF', backgroundColor: '#8B64FF'}}
      onTrailingIconPress={() => {
        Toast.hide();
      }}
      leadingIcon={errorToast}
      contentContainerStyle={{paddingHorizontal: 15, alignItems: 'center'}}
      text1Style={{
        fontSize: 18,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold',
      }}
      text2Style={{
        fontSize: 15,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Medium',
      }}
      text1={text1}
      text2={text2}
    />
  ),
  errorSignUp: ({text1, text2, props, ...rest}) => (
    <BaseToast
      {...rest}
      style={{
        borderLeftColor: '#8B64FF',
        backgroundColor: '#8B64FF',
        height: 130,
        alignItems: 'center',
      }}
      onTrailingIconPress={() => {
        Toast.hide();
      }}
      leadingIcon={errorToast}
      contentContainerStyle={{
        paddingHorizontal: 10,
        alignItems: 'center',
        height: 130,
      }}
      text1Style={{
        fontSize: 18,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold',
      }}
      text2Style={{
        fontSize: 14,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Medium',
      }}
      text2NumberOfLines={5}
      text1={text1}
      text2={text2}
    />
  ),
  errorLogin: ({text1, text2, props, ...rest}) => (
    <BaseToast
      {...rest}
      style={{
        borderLeftColor: '#8B64FF',
        backgroundColor: '#8B64FF',
        height: 80,
        alignItems: 'center',
      }}
      onTrailingIconPress={() => {
        Toast.hide();
      }}
      leadingIcon={errorToast}
      contentContainerStyle={{
        paddingHorizontal: 10,
        alignItems: 'center',
        height: 80,
      }}
      text1Style={{
        fontSize: 18,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold',
      }}
      text2Style={{
        fontSize: 14,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Medium',
      }}
      text2NumberOfLines={5}
      text1={text1}
      text2={text2}
    />
  ),
  info: ({text1, text2, props, ...rest}) => (
    <BaseToast
      {...rest}
      style={{borderLeftColor: '#8B64FF', backgroundColor: '#8B64FF'}}
      onTrailingIconPress={() => {
        Toast.hide();
      }}
      leadingIcon={infoToast}
      contentContainerStyle={{paddingHorizontal: 15, alignItems: 'center'}}
      text1Style={{
        fontSize: 18,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold',
      }}
      text2Style={{
        fontSize: 15,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Medium',
      }}
      text1={text1}
      text2={text2}
    />
  ),
};

const MyToast = () => {
  return <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />;
};

export default MyToast;
