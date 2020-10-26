import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {HomeStackNavProps} from '../../navigation/Params';
import {QuizContext} from '../../providers/Provider';
import {Button, Center, Circular, Beads, Loading, Check} from '../common';
export const QuestionComponent: React.FC<HomeStackNavProps<'Question'>> = ({
  navigation,
  route,
}) => {
  const {quiz, submissions, makeSubmission} = useContext(QuizContext);
  if (!quiz) {
    return <Loading />;
  }
  const index = route.params.id ? route.params.id : 0;
  const questions = quiz.questions;
  const question = questions[index];

  const firstQuestion = index === 0;
  const lastQuestion = index === questions.length - 1;
  const submitted = submissions[index] !== -1;

  const leftArrowElement = (
    <Circular
      press={() => handleChangeQuestion(index, -1)}
      text={'arrow-left'}
      backgroundColor={firstQuestion ? 'grey' : '#2CB9B0'}
      disabled={firstQuestion}
    />
  );

  const rightArrowElement = !lastQuestion ? (
    <Circular
      press={() => handleChangeQuestion(index, 1)}
      text={'arrow-right'}
      backgroundColor={!submitted ? 'grey' : '#2CB9B0'}
      disabled={!submitted}
    />
  ) : (
    <Button
      text={'Submit'}
      backgroundColor={!submitted ? 'grey' : '#2CB9B0'}
      press={() => handleSubmit()}
      disabled={!submitted}
    />
  );

  //submits quiz and resets stack so users cannot back after submitting the quiz
  const handleSubmit = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}, {name: 'Results', params: {quiz, submissions}}],
    });
  };

  const handleChangeQuestion = (index: number, movement: number) => {
    if (movement === -1) {
      navigation.push('Question', {
        id: movement + index,
      });
    } else if (movement === 1) {
      navigation.push('Question', {
        id: movement + index,
      });
    }
  };

  const handleResponse = (i: number) => {
    if (submissions[index] === i) {
      //if the option is already selected, unselect
      makeSubmission(index, -1);
    } else {
      makeSubmission(index, i);
    }
  };

  return (
    <Center>
      <Text style={[styles.category, styles.absoluteAtTop]}>
        {question.category}
      </Text>
      <Text style={styles.category}>{question.description}</Text>
      {question.options.map((option, i) => (
        <Check
          text={option.response}
          key={i}
          checked={submissions[index] === i}
          press={() => handleResponse(i)}
        />
      ))}
      <View style={styles.footer}>
        {leftArrowElement}
        {index !== questions.length - 1 && (
          <Beads index={index} total={questions.length} />
        )}
        {rightArrowElement}
      </View>
    </Center>
  );
};

const styles = StyleSheet.create({
  absoluteAtTop: {
    position: 'absolute',
    top: 0,
  },
  category: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
