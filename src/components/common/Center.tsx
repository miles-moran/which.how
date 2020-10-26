import React from 'react';
import {View} from 'react-native';

type Props = {
  children: React.ReactNode
  style?: {}
};

export default ({children}: Props, style={}) => {
  return (
    <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}, style]}>
      {children}
    </View>
  );
};
