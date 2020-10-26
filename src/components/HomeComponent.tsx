import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {Quiz} from '../models';
import {HomeStackNavProps} from './HomeParams';
import {QuizContext} from './QuizProvider';
import parseQuiz from '../data/quizParser';
import {Center, Button} from './common';
import {ActivityIndicator} from 'react-native';
import {poll, which_character_are_you_sample} from '../data/samples';

export const HomeComponent: React.FC<HomeStackNavProps<'Home'>> = ({
  navigation,
}) => {
  const [trueFalseQuiz, setTrueFalseQuiz] = useState<Quiz>();
  const [loading, setLoading] = useState(true);

  const {chooseQuiz} = useContext(QuizContext);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((res) => {
        setTrueFalseQuiz(parseQuiz(res));
        setLoading(false);
      });
  }, []);

  const handleStart = (quiz: Quiz) => {
    chooseQuiz(quiz);
    navigation.navigate('Start');
  };

  if (loading || !trueFalseQuiz) {
    return (
      <Center>
        <ActivityIndicator size="large" color="#2CB9B0" />
      </Center>
    );
  }
  
  const quizzes = [
    {
      text: 'True/False Quiz',
      data: trueFalseQuiz,
    },
    {text: 'Multiple Choice Poll', data: poll},
    {text: 'Which Character are You?', data: which_character_are_you_sample},
  ];

  return (
    <Center>
      {quizzes.map((quiz, i) => (
        <Button key={i}
          text={quiz.text}
          press={() => handleStart(quiz.data)}
          style={{margin: 2}}
        />
      ))}
    </Center>
  );
};
