import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ResultsComponent } from "../components/results";
import { HomeComponent} from "../components/home";
import { QuizProvider } from "../providers/Provider";
import { StartComponent} from '../components/start';
import { QuestionComponent} from "../components/question";
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
  