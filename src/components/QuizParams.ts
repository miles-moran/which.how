import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type QuizParamList = {
  Start: undefined
  Question: {
    id?: number;
  };
  Results: {
    result: any
  }
};

export type QuizStackNavProps<T extends keyof QuizParamList> = {
  navigation: StackNavigationProp<QuizParamList, T>;
  route: RouteProp<QuizParamList, T>;
};
