import React from 'react';
import CheckBox from "@react-native-community/checkbox";
import { useContext } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Result } from "../classes";
import { QuizStackNavProps } from "./QuizParams";
import { QuizContext } from "./QuizProvider";
import Button from "./reusables/Button";
import Center from "./reusables/Center";
import Circular from "./reusables/Circular";
export const QuestionComponent: React.FC<QuizStackNavProps<'Question'>> = ({
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
      const result: Result = {
        breakdown: {},
        submissions: [],
      };
      const outcomeKeys = Object.keys(quiz.outcomes);
      outcomeKeys.forEach((key: string) => {
        result.breakdown.key = 0;
      });
      let total = 0;
      questions.forEach((question, qi) => {
        total += question.weight;
        const s = submissions[qi];
        const submission: {
          question: string;
          outcomeKeys: string[];
        } = {
          question: question.description,
          outcomeKeys: [],
        };
        question.options.forEach((option, oi) => {
          if (oi === s) {
            submission.outcomeKeys = submission.outcomeKeys.concat(
              option.outcomeKeys,
            );
            option.outcomeKeys.forEach((key: string) => {
              if (outcomeKeys.includes(key)) {
                result.breakdown[key] += question.weight;
              }
            });
          }
        });
        result.submissions.push(submission);
      });
  
      console.log('--');
      console.log(result);
      console.log('--');
      navigation.navigate('Results', {result});
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
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 25}}>
          {index + 1} / {questions.length}
        </Text>
  
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 25}}>
          {question.category}
        </Text>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 25}}>
          {question.description}
        </Text>
        {question.options.map((o, i) => (
          <TouchableOpacity
            style={{flexDirection: 'row', alignSelf: 'flex-start'}}
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
          {rightElement}
        </View>
      </Center>
    );
  };
  