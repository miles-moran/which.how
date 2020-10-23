import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeParamList, HomeStackNavProps} from './HomeParams';
import Center from './reusables/Center';
import Button from './reusables/Button';
import Axios from 'axios';
import parseQuiz from '../data/transformer';
import Circular from './reusables/Circular';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import {
  which_character_are_you_sample,
  multiple_choice_quiz_sample,
} from '../data/samples';
import {Option, Quiz} from '../classes';

export const QuizComponent: React.FC<HomeStackNavProps<'Quiz'>> = ({
  navigation,
  route,
}) => {

  const index = route.params.index ? route.params.index : 0;
  
  const questions = route.params.quiz.questions;
  const question = questions[index];
  const [submission, setSubmission] = useState<Option | null>();
  let leftColor;
  let rightColor = submission ? '#2CB9B0' : 'gray';
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
          press={() => handleSubmit()}
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
    console.log('test');
  };
  const handleChangeQuestion = (index: number, movement: number) => {
    if (index === 0 && movement === -1) {
    }  else if (movement === -1){
      navigation.replace('Quiz', {
        index: movement + index,
        quiz: route.params.quiz,
      });
    } else if (submission){
      navigation.replace('Quiz', {
        index: movement + index,
        quiz: route.params.quiz,
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
      {question.options.map((o) => (
        <TouchableOpacity
          style={{flexDirection: 'row', alignSelf: 'flex-start'}}
          onPress={() =>
            submission === o ? setSubmission(null) : setSubmission(o)
          }>
          <CheckBox value={submission === o} />
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

export const HomeComponent: React.FC<HomeStackNavProps<'Home'>> = ({navigation}) => {
  const [trueFalseQuiz, setTrueFalseQuiz] = useState<Quiz>();
  useEffect(() => {
    Axios.get(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
    ).then((res) => setTrueFalseQuiz(parseQuiz(res)));
  }, []);

  const handleStart = (quiz: Quiz) => {
    navigation.navigate('Quiz', {
      quiz,
    });
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
const Stack = createStackNavigator();

interface HomeStackProps {}

export const Home: React.FC<HomeStackProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={HomeComponent} />
        <Stack.Screen name={'Quiz'} component={QuizComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
