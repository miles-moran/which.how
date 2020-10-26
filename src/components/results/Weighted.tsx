import React from 'react';
import {Image, Text} from 'react-native';
import {Quiz, Result} from '../../models';
interface WeightedProps {
  result: Result;
}
export const Weighted: React.FC<WeightedProps> = ({result}) => {
  return (
    <>
      <Image
        style={{width: 150, height: 150, borderRadius: 100}}
        source={{
          uri: result.outcome.image,
        }}
      />
      <Text style={{fontWeight: 'bold'}}>{result.outcome.title}</Text>
      <Text>{result.outcome.description}</Text>
    </>
  );
};
