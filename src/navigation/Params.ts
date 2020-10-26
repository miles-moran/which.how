import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import { Quiz } from '../models';

export type HomeParamList = {
  Home: undefined;
  Start: undefined
  Question: {
    id?: number;
  };
  Results: {
    quiz: Quiz;
    submissions: number[];
  }
};

export type HomeStackNavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};
