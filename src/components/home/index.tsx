import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {Quiz} from '../../models';
import {HomeStackNavProps} from '../../navigation/Params';
import {QuizContext} from '../../providers/Provider';
import parseQuiz from '../../data/quizParser';
import {Center, Button, Loading} from '../common';
import {poll, which_character_are_you_sample} from '../../data/samples';

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
      <Loading/>
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
