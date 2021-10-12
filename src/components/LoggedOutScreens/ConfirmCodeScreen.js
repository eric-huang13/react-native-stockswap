import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ConfirmCodeForm from './ConfirmCodeForm';

const ConfirmCodeScreen = ({navigation, route}) => {
  const [value, setValue] = useState('');
  return (
    <ConfirmCodeForm
      navigation={navigation}
      value={value}
      setValue={setValue}
      email={route.params.email}
    />
  );
};

export default ConfirmCodeScreen;
