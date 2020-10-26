import React from 'react';
import {Text} from 'react-native';
import {Result} from '../../models';
interface PollProps {
  result: Result;
}
export const Poll: React.FC<PollProps> = ({result}) => {
  return <Text>Thanks for your submission!</Text>;
};
