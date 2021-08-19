import React, {useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {moderateScale} from '../../util/responsiveFont';
import LinearGradient from 'react-native-linear-gradient';
import SmallStockSwap from '../../icons/SmallStockSwap';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 42,
    height: 42,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2.1,
    borderColor: '#FFFFFF',
    textAlign: 'center',
    backgroundColor:'#FFFFFF'
  },
  focusCell: {
    borderColor: '#B8A0FF',
  },
});

const CELL_COUNT = 6;

const ConfirmCodeForm = ({navigation, email, value, setValue}) => {
  // const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  console.log(email,"PROPSs")

  return (
    <LinearGradient
    start={{x: 0.1, y: 1}}
    end={{x: 0.1, y: 0.1}}
    colors={['#1D2842', '#3d4b6e']}
    style={{flex: 1}}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
    <SafeAreaView style={styles.root}>
    <View style={style.inner}>

    <View style={style.stockHeader}>
                        <SmallStockSwap />
                      </View>
                      <View style={style.container}>
                      <Text style={style.welcomeHeader}>Verification Code</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
 <View style={style.termsContainer}>
                          <View style={style.leftTerms}>
                            <Text style={style.newText}>Need a new code?</Text>
                            <TouchableOpacity
                              onPress={() =>
                                this.props.navigation.navigate('SignUp')
                              }>
                              <Text style={style.termsText}>Resend Code</Text>
                            </TouchableOpacity>
                          </View>
                          <TouchableOpacity
                            onPress={() =>
                             navigation.navigate('Login')
                            }>
                            <Text style={style.termsText}>Back to Login</Text>
                          </TouchableOpacity>
                        </View>
<View  style={style.buttonView}>

      <TouchableOpacity onPress={() => navigation.navigate({
                                name: 'NewPassword',
                                params: {codeInput: value, email:email},
                              }) }>
                            <Text style={style.button}>Send Reset Link</Text>
                          </TouchableOpacity>
                          
                          </View>
                          </View>
                          </View>

                          
    </SafeAreaView>
    </KeyboardAvoidingView>
      </LinearGradient>
  );
};

export default ConfirmCodeForm;

const style = StyleSheet.create({
    mainContainer: {
      flex: 1,
      padding: moderateScale(8),
      paddingHorizontal: moderateScale(24),
    },
    inner: {
      justifyContent: 'flex-end',
    },
    stockHeader: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: moderateScale(20),
      marginBottom: moderateScale(36),
    },
    stockText: {
      fontSize: moderateScale(27),
      fontWeight: 'bold',
      color: 'white',
    },
    swapText: {
      fontSize: moderateScale(27),
      fontWeight: 'bold',
      color: '#b8a0ff',
    },
    container: {
      borderRadius: moderateScale(16),
      backgroundColor: '#303e5e',
      paddingHorizontal: moderateScale(20),
      paddingVertical: moderateScale(20),
      flexDirection: 'column',
      shadowColor: 'rgba(0,0,0,0.13)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 1,
    },
    welcomeHeader: {
      color: '#FFFFFF',
      fontSize: moderateScale(22),
      marginBottom: moderateScale(8),
      fontFamily: 'Montserrat-Bold',
      textAlign:'center',
    },
    loginHeader: {
      color: '#9299a9',
      marginBottom: moderateScale(18),
      fontSize: moderateScale(15),
      fontFamily: 'Montserrat-Medium',
    },
    inputHeader: {
      fontSize: moderateScale(14),
      color: '#babec8',
      marginBottom: 1,
      fontFamily: 'Montserrat-Regular',
    },
    inputStyle: {
      borderRadius: moderateScale(8),
      padding: moderateScale(8),
      marginTop: moderateScale(1),
      fontSize: moderateScale(16),
      fontFamily: 'Montserrat-Italic',
      backgroundColor: '#536183',
      opacity: 0.7,
      color: '#FFFFFF',
    },
    inputStyleConfirm: {
      borderRadius: moderateScale(8),
      marginBottom: moderateScale(12),
      padding: moderateScale(8),
      marginTop: moderateScale(1),
      fontSize: moderateScale(16),
      fontFamily: 'Montserrat-Italic',
      backgroundColor: '#536183',
      opacity: 0.7,
      color: '#9ea6b5',
    },
    buttonView: {
        borderRadius: moderateScale(16),

        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: moderateScale(20),    },
    button: {
      alignSelf: 'center',
      backgroundColor: '#8B64FF',
      color: '#FFFFFF',
      textAlign: 'center',
      paddingVertical: moderateScale(12),
      paddingHorizontal: moderateScale(8),
      width: moderateScale(162),
      borderRadius: moderateScale(6),
      fontSize: moderateScale(16),
      fontFamily: 'Montserrat-SemiBold',
    },
    termsContainer: {
      marginTop: moderateScale(28),
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: moderateScale(2),
    },
    leftTerms: {
      flexDirection: 'row',
    },
    newText: {
      color: '#FFFFFF',
      fontSize: moderateScale(12),
      marginRight: moderateScale(3),
      fontFamily: 'Montserrat-Medium',
    },
    termsText: {
      color: '#B8A0FF',
      fontSize: moderateScale(12),
      fontFamily: 'Montserrat-Medium',
    },
    bottomButtonsContainer: {
      alignItems: 'center',
    },
    orText: {
      marginVertical: moderateScale(16),
      color: '#CBCDD7',
      fontSize: moderateScale(14),
      fontFamily: 'Montserrat-Regular',
    },
    alternateSignUpContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    alternateSignUpButton: {
      alignSelf: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: moderateScale(14),
      fontFamily: 'Montserrat-SemiBold',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,
    },
    alternateSignupInner: {
      alignSelf: 'center',
      paddingVertical: moderateScale(12),
      paddingHorizontal: moderateScale(4),
      backgroundColor: '#2C3957',
      width: moderateScale(350),
      borderRadius: moderateScale(8),
      marginBottom: moderateScale(10),
      flexDirection: 'row',
    },
    signupIcon: {
      padding: moderateScale(7),
      backgroundColor: '#3A4A6D',
      borderRadius: moderateScale(7),
      marginVertical: moderateScale(-8),
      marginRight: moderateScale(63),
      alignSelf: 'center',
    },
    errorText: {
      color: '#F66E6E',
      fontWeight: 'bold',
      marginBottom: moderateScale(10),
      marginTop: moderateScale(1),
      textAlign: 'center',
    },
  });
  