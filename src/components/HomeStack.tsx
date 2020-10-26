import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ResultsComponent } from "./ResultsComponent";
import { HomeComponent} from "./HomeComponent";
import { QuizProvider } from "./QuizProvider";
import { StartComponent} from './StartComponent';
import { QuestionComponent} from "./QuestionComponent";
import React from 'react';


const Stack = createStackNavigator();
interface HomeStackProps {}
export const HomeStack: React.FC<HomeStackProps> = ({}) => {
    return (
      <QuizProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Home'} headerMode={"none"}>
            <Stack.Screen name={'Home'} component={HomeComponent} />
            <Stack.Screen name={'Start'} component={StartComponent} />
            <Stack.Screen name={'Question'} component={QuestionComponent} />
            <Stack.Screen name={'Results'} component={ResultsComponent} />
          </Stack.Navigator>
        </NavigationContainer>
      </QuizProvider>
    );
  };
  