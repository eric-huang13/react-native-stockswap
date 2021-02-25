import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class ReportModal extends Component {
  render() {
    const {reportModal} = this.props;
    return (
      <View style={style.reportModalContainer}>
        <TouchableOpacity onPress={() => reportModal(false)}>
          <Text style={style.closeButton}>Close</Text>
        </TouchableOpacity>
        <Text style={style.optionTextHeader}>
          Why would you like to report this post?
        </Text>
        <View style={style.innerReportContainer}>
          <Text style={style.optionText}>Option 1</Text>
          <Text style={style.optionText}>Option 2</Text>
          <Text style={style.optionText}>Option 3</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  reportModalContainer: {
    flex: 1,
    marginTop: 310,
    backgroundColor: '#3e4d6c',
    borderRadius: 20,
    padding: 14,
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
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '50%',
  },
  closeButton: {
    color: '#B8A0FF',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginBottom: 18,
  },
  optionTextHeader: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: 12,
    paddingVertical: 2,
    fontFamily: 'Montserrat-Medium',
  },
  optionText: {
    color: 'white',
    fontSize: 12,
    marginHorizontal: 12,
    paddingVertical: 2,
    fontFamily: 'Montserrat-Medium',
  },
});
