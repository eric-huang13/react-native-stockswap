import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import EmailIcon from '../../icons/EmailIcon';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from '../../util/responsiveFont';

class EmailSuccess extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LinearGradient
        start={{x: 0.1, y: 1}}
        end={{x: 0.1, y: 0.1}}
        colors={['#1D2842', '#3d4b6e']}
        style={{flex: 1}}>
        <SafeAreaView style={style.mainContainer}>
          <View style={style.container}>
            <EmailIcon style={style.icon} />
            <Text style={style.header}>Success</Text>
            <Text style={style.belowHeader}>Email sucessfully changed.</Text>

            <View style={style.buttonContainer}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('MyProfileSettings')
                }>
                <Text style={style.button}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

export default EmailSuccess;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: moderateScale(8),
    backgroundColor: '#323e5b',
    paddingHorizontal: 2,
    justifyContent: 'center',
  },

  container: {
    width: '85%',
    height: '55%',
    borderRadius: moderateScale(8),
    backgroundColor: '#2C3957',
    paddingHorizontal: moderateScale(35),
    paddingVertical: moderateScale(28),
    flexDirection: 'column',
    shadowColor: 'rgba(0,0,0,0.13)',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  icon: {
    marginTop: moderateScale(30),
    alignSelf: 'center',
  },
  header: {
    color: '#FFFFFF',
    fontSize: moderateScale(20),
    marginTop: moderateScale(20),
    marginBottom: moderateScale(5),
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  belowHeader: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    marginBottom: moderateScale(16),
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: moderateScale(10),
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#8B64FF',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(162),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-SemiBold',
    marginTop: moderateScale(10),
  },
});
