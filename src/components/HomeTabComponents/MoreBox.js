import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {moderateScale} from '../../util/responsiveFont';
import Close from '../../icons/close-times';

const MoreBox = ({options, onSelect, onClose}) => {
  const _onSelect = (action) => {
    onSelect && onSelect(action);
  };

  return (
    <View style={style.shareToContainer}>
      <TouchableOpacity
        onPress={() => onClose && onClose()}
        style={{alignSelf: 'flex-end'}}>
        <Close />
      </TouchableOpacity>
      <View style={style.options}>
        {options
          ? options?.map((option) => (
              <TouchableOpacity
                style={style.option}
                onPress={() => _onSelect(option.value)}>
                <Text style={style.optionText}>{option.label}</Text>
              </TouchableOpacity>
            ))
          : null}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  shareToContainer: {
    flex: 1,
    marginTop: moderateScale(600),
    backgroundColor: '#3e4d6c',
    borderRadius: moderateScale(20),
    padding: moderateScale(14),
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
  options: {
    alignItems: 'center',
  },
  option: {
    paddingVertical: moderateScale(10),
  },
  closeButton: {
    color: '#B8A0FF',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(14),
    marginBottom: moderateScale(18),
  },
  optionText: {
    color: 'white',
    fontSize: moderateScale(15),
    marginHorizontal: moderateScale(12),
    paddingVertical: moderateScale(2),
    fontFamily: 'Montserrat-Medium',
  },
});

export default MoreBox;
