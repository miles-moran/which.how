import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
const secondary = '#0C0D34';
const primary = '#2CB9B0';

interface Props {
  text: string;
  color?: string;
  backgroundColor?: string;
  press?: () => void;
}

export default ({text, press, backgroundColor = primary}: Props) => {
    return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
      }}
      onPress={press}>
      <Icon name={text} style={{color: 'white'}} />
    </TouchableOpacity>
  );
};
