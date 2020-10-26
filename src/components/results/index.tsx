import React from 'react';
import {ScrollView, View} from 'react-native';
import {HomeStackNavProps} from '../../navigation/Params';
import {Button} from '../common';
import {Poll} from './Poll';
import {Quiz} from './Quiz';
import {Weighted} from './Weighted';
import generateResults from '../../utils/generateResults';
export const ResultsComponent: React.FC<HomeStackNavProps<'Results'>> = ({
  navigation,
  route,
}) => {
  const quiz = route.params.quiz;
  const submissions = route.params.submissions;
  const result = generateResults(quiz, submissions);
  const content = () => {
    switch (quiz.style) {
      case 'quiz':
        return <Quiz result={result} />;
      case 'weighted':
        return <Weighted result={result} />;
      default:
        return <Poll result={result} />;
    }
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{flex: 0.75}}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {content()}
      </ScrollView>
      <View
        style={{flex: 0.25, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          text={'Play Again'}
          press={() => navigation.navigate('Home')}></Button>
      </View>
    </View>
  );
};
