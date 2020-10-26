import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
const secondary = '#0C0D34';
const primary = '#2CB9B0';

interface Props {
  text: string;
  color?: string;
  backgroundColor?: string;
  press?: () => void;
  style?: {},
  disabled?: boolean
}

export default ({text, press, backgroundColor = primary, style={}, disabled=false}: Props) => {
    return (
    <TouchableOpacity
    disabled={disabled}
      style={[{
        width: 50,
        height: 50,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
      }, style]}
      onPress={press}>
      <Icon name={text} style={{color: 'white'}} />
    </TouchableOpacity>
  );
};
