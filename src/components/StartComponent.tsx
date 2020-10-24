import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {QuizStackNavProps} from './QuizParams';
import Center from './reusables/Center';
import Button from './reusables/Button';
import {QuizContext} from './QuizProvider';

export const StartComponent: React.FC<QuizStackNavProps<'Start'>> = ({
  navigation,
  route,
}) => {
  const {quiz} = useContext(QuizContext);
  const handleStart = () => {
    navigation.navigate('Question', {});
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.25}}>
        <Text style={{fontSize: 25, fontWeight: "bold", textAlign: "center"}}>{quiz?.header}</Text>
      </View>
      <View style={{flex: 0.25}}>
        <Text style={{fontSize: 25, textAlign: "center"}}>{quiz?.subheader}.</Text>
      </View>
      <View style={{flex: 0.25}}>
        <Text style={{fontSize: 25, textAlign: "center"}}>{quiz?.footer}</Text>
      </View>
      <View style={{flex: 0.25, alignItems: "center", justifyContent: "center"}}>
        <Button text={'Begin'} press={() => handleStart()}></Button>
      </View>
    </View>
  );
};
