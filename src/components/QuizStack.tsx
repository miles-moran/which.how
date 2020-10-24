import {createStackNavigator} from '@react-navigation/stack';
import { StartComponent} from './StartComponent';
import { QuestionComponent} from "./QuestionComponent";
import {HomeStackNavProps} from './HomeParams';
import React from 'react';
export const QuizStack: React.FC<HomeStackNavProps<'Quiz'>> = ({
  navigation,
  route,
}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={'Start'}>
      <Stack.Screen name={'Start'} component={StartComponent} />
      <Stack.Screen name={'Question'} component={QuestionComponent} />
    </Stack.Navigator>
  );
};
