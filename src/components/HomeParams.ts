import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Quiz} from '../classes';
import { Dispatch, SetStateAction } from 'react';

export type HomeParamList = {
  Home: undefined;
  Quiz: undefined;
};

export type HomeStackNavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};
