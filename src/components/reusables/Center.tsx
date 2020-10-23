import React from 'react';
import {View} from 'react-native';

type Props = {
  children: React.ReactNode
};

export default ({children}: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {children}
    </View>
  );
};
