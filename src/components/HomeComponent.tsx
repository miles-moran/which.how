import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Quiz } from "../classes";
import { HomeStackNavProps } from "./HomeParams";
import { QuizContext } from "./QuizProvider";
import parseQuiz from "../data/transformer";
import Center from "./reusables/Center";
import { ActivityIndicator } from "react-native";
import Button from "./reusables/Button";
import { multiple_choice_quiz_sample, which_character_are_you_sample } from "../data/samples";
import React from 'react';
export const HomeComponent: React.FC<HomeStackNavProps<'Home'>> = ({
    navigation,
  }) => {
    const [trueFalseQuiz, setTrueFalseQuiz] = useState<Quiz>();
    const {chooseQuiz} = useContext(QuizContext);
    useEffect(() => {
      Axios.get(
        'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
      ).then((res) => setTrueFalseQuiz(parseQuiz(res)));
    }, []);
  
    const handleStart = (quiz: Quiz) => {
    chooseQuiz(quiz)
      navigation.navigate('Quiz');
    };
  
    if (!trueFalseQuiz) {
      return (
        <Center>
          <ActivityIndicator />
        </Center>
      );
    }
    return (
      <Center>
        <Button
          text={'True/False Quiz'}
          press={() => handleStart(trueFalseQuiz)}
        />
        <Button
          text={'Multiple Choice Quiz'}
          press={() => handleStart(multiple_choice_quiz_sample)}
        />
        <Button
          text={'Which Character Are You?'}
          press={() => handleStart(which_character_are_you_sample)}
        />
      </Center>
    );
  };