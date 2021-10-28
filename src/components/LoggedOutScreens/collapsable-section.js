import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale} from '../../util/responsiveFont';
import CircleUp from '../../icons/arrow-circle-up-solid';

const CollapsableSection = ({title, children}) => {
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));
  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      rotateAnimation.setValue(expanded ? 0 : 1);
    });
  }, [expanded]);

  return (
    <View style={style.section}>
      <TouchableOpacity
        style={style.touchable}
        onPress={() => setExpanded(!expanded)}>
        <Animated.View style={{transform: [{rotate: interpolateRotating}]}}>
          <CircleUp style={{padding: 5}} />
        </Animated.View>
        <Text style={style.header}>{title}</Text>
      </TouchableOpacity>
      {expanded ? (
        <Animated.View style={[{paddingVertical: 5}]}>{children}</Animated.View>
      ) : null}
    </View>
  );
};
const style = StyleSheet.create({
  section: {
    borderTopWidth: 2,
    borderColor: 'lightgrey',
    marginVertical: 5,
  },
  touchable: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  header: {
    paddingVertical: 5,
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
  },
});

export default CollapsableSection;
