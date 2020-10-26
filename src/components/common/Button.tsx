import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

interface Props {
  text?: string;
  color?: string;
  backgroundColor?: string;
  press?: () => void;
  style?: {}
  disabled?: boolean
}

const secondary = '#0C0D34';
const primary = '#2CB9B0';

export default ({
  text,
  press,
  color = 'white',
  backgroundColor = primary,
  style = {},
  disabled = false
  
}: Props) => {
  return (
    <TouchableOpacity
    disabled = {disabled}
      style={[{
        width: 245,
        height: 50,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
      }, style]}
      onPress={press}>
      <Text style={{color}}>{text}</Text>
    </TouchableOpacity>
  );
};
