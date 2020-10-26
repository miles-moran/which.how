import React from 'react';
import {View} from 'react-native';

interface Props {
  index: number;
  total: number;
}

const secondary = '#0C0D34';
const primary = '#2CB9B0';

export default ({index, total}: Props) => {
  const beads = Array(total).fill('');
  return (
    <View style={{flexDirection: 'row'}}>
      {beads.map((_, i) => (
        <View
          key={i}
          style={{
            backgroundColor: i === index ? primary : 'lightgray',
            height: 10,
            width: 10,
            borderRadius: 10,
            margin: 1,
          }}></View>
      ))}
    </View>
  );
};
