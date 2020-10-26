import React from 'react';
import {ActivityIndicator} from 'react-native';
import Center from './Center';

const secondary = '#0C0D34';
const primary = '#2CB9B0';

export default () => {
  return (
    <Center>
      <ActivityIndicator size="large" color={primary} />
    </Center>
  );
};
