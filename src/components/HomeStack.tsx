import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ResultsComponent } from "./ResultsComponent";
import { HomeComponent} from "./HomeComponent";
import { QuizProvider } from "./QuizProvider";
import { QuizStack } from "./QuizStack";
import React from 'react';
interface HomeStackProps {}
export const HomeStack: React.FC<HomeStackProps> = ({}) => {
    const Stack = createStackNavigator();
    return (
      <QuizProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen name={'Home'} component={HomeComponent} />
            <Stack.Screen name={'Quiz'} component={QuizStack} />
            <Stack.Screen name={'Results'} component={ResultsComponent} />
          </Stack.Navigator>
        </NavigationContainer>
      </QuizProvider>
    );
  };
  