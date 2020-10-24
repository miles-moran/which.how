import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Result} from '../classes';
import {QuizStackNavProps} from './QuizParams';
import Center from './reusables/Center';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from './reusables/Button';
export const ResultsComponent: React.FC<QuizStackNavProps<'Results'>> = ({
  navigation,
  route,
}) => {
  const result: Result = route.params.result;
  if (Object.keys(result.breakdown).length == 2) {
    //pass-fail scenario
    return (
      <ScrollView style={{flex: 1}}>
          <Text style={{fontWeight: 'bold'}}>RESULTS</Text>
          {result.submissions.map((submission) => (
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              {submission.outcomeKeys.includes('pass') ? (
                <Icon name={'plus'} size={20} />
              ) : (
                <Icon name={'minus'} size={20} />
              )}

              <Text>{submission.question}</Text>
            </View>
          ))}
          <Button text={"Play Again"}/>
      </ScrollView>
    );
  }
  return (
    <Center>
      <Text style={{fontWeight: 'bold'}}>YOU ARE {}</Text>
      {result.submissions.map((submission) => (
        <View>
          <Text>
            {submission.outcomeKeys.map((key) => (
              <Text>{key}</Text>
            ))}
          </Text>
          <Text>{submission.question}</Text>
        </View>
      ))}
    </Center>
  );
};
