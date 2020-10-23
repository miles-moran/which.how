import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

interface Props {
  text?: string;
  color?: string;
  backgroundColor?: string;
  press?: () => void;
}

const secondary = '#0C0D34';
const primary = '#2CB9B0';

export default ({
  text,
  press,
  color = 'white',
  backgroundColor = primary,
}: Props) => {
  return (
    <TouchableOpacity
      style={{
        width: 245,
        height: 50,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
      }}
      onPress={press}>
      <Text style={{color}}>{text}</Text>
    </TouchableOpacity>
  );
};
