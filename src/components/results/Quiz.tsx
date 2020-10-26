import React from 'react';
import {View, Text} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {Result} from '../../models';
interface QuizProps {
  result: Result;
}
export const Quiz: React.FC<QuizProps> = ({result}) => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
        RESULTS
      </Text>
      <Text style={{textAlign: 'center', fontSize: 20, marginBottom: 10}}>
        {result.breakdown['pass']} / {result.submissions.length}
      </Text>
      {result.submissions.map((submission, i) => (
        <View
          key={i}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          {submission.outcomeKeys.includes('pass') ? (
            <Icon name={'plus'} color={'#2CB9B0'} size={20} />
          ) : (
            <Icon name={'minus'} size={20} color={'grey'} />
          )}

          <Text style={{width: '85%', fontSize: 20}}>
            {submission.question}
          </Text>
        </View>
      ))}
    </View>
  );
};
