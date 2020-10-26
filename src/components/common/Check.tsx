import CheckBox from '@react-native-community/checkbox';
import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
const secondary = '#0C0D34';
const primary = '#2CB9B0';

interface Props {
  text: string;
  checked: boolean;
  press: () => void;
}

export default ({text, checked, press}: Props) => {
  return (
    <TouchableOpacity style={{flexDirection: 'row', maxWidth: "80%"}} onPress={press}>
      <CheckBox value={checked} onChange={press} />
      <Text style={{fontSize: 20}}>{text}</Text>
    </TouchableOpacity>
  );
};
