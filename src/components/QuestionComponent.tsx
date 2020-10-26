import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useContext} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HomeStackNavProps} from './HomeParams';
import {QuizContext} from './QuizProvider';
import {Button, Center, Circular} from './common';
export const QuestionComponent: React.FC<HomeStackNavProps<'Question'>> = ({
  navigation,
  route,
}) => {
  const {quiz, submissions, makeSubmission} = useContext(QuizContext);
  if (!quiz) {
    return <View>Error</View>;
  }
  const index = route.params.id ? route.params.id : 0;
  const questions = quiz.questions;
  const question = questions[index];
  let leftColor;
  let rightColor = submissions[index] === -1 ? 'gray' : '#2CB9B0';
  let rightElement = (
    <Circular
      press={() => handleChangeQuestion(index, 1)}
      text={'arrow-right'}
      backgroundColor={rightColor}
    />
  );

  switch (index) {
    case 0: //first question. cannot go back
      leftColor = 'gray';
      break;
    case questions.length - 1: //last question. cannot go forward. submit
      rightElement = (
        <Button
          press={submissions[index] !== -1 ? () => handleSubmit() : () => null}
          text={'Submit'}
          backgroundColor={rightColor}
        />
      );
      break;
  }
  const leftElement = (
    <Circular
      press={() => handleChangeQuestion(index, -1)}
      text={'arrow-left'}
      backgroundColor={leftColor}
    />
  );

  const handleSubmit = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}, {name: 'Results', params: {quiz, submissions}}],
    });
  };

  const handleChangeQuestion = (index: number, movement: number) => {
    if (index === 0 && movement === -1) {
    } else if (movement === -1) {
      navigation.push('Question', {
        id: movement + index,
      });
    } else if (submissions[index] !== -1) {
      navigation.push('Question', {
        id: movement + index,
      });
    }
  };

  return (
    <Center>
      <Text
        style={{
          position: 'absolute',
          top: 0,
          padding: 10,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 25,
        }}>
        {question.category}
      </Text>
      <Text style={{textAlign: 'center', fontWeight: 'bold', padding: 20, fontSize: 25}}>
        {question.description}
      </Text>
      {question.options.map((o, i) => (
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          key={i}
          onPress={() =>
            submissions[index] === i
              ? makeSubmission(index, -1)
              : makeSubmission(index, i)
          }>
          <CheckBox value={submissions[index] === i} />
          <Text style={{fontSize: 20}}>{o.response}</Text>
        </TouchableOpacity>
      ))}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          position: 'absolute',
          bottom: 0,
          padding: 5,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {leftElement}
        <View style={{flexDirection: 'row'}}>
          {index !== questions.length -1 && questions.map((_, i) => (
            <View
            key={i}
              style={{
                backgroundColor: i === index ? '#2CB9B0': "lightgray",
                height: 10,
                width: 10,
                borderRadius: 10,
                margin: 1
              }}></View>
          ))}
        </View>
        {rightElement}
      </View>
    </Center>
  );
};
