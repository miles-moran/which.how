import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {HomeStackNavProps} from './HomeParams';
import {Button, Center} from './common';
import {QuizContext} from './QuizProvider';

export const StartComponent: React.FC<HomeStackNavProps<'Start'>> = ({
  navigation,
}) => {
  const {quiz} = useContext(QuizContext);
  const handleStart = () => {
    navigation.navigate('Question', {});
  };
  return (
    <Center>
      <View style={styles.quarterFlex}>
        <Text style={[styles.header, styles.bold]}>
          {quiz?.title}
        </Text>
      </View>
      <View style={styles.quarterFlex}>
        <Text style={styles.header}>
          {quiz?.subheader}
        </Text>
      </View>
      <View style={styles.quarterFlex}>
        <Text style={styles.header}>{quiz?.footer}</Text>
      </View>
      <View
        style={[styles.quarterFlex, styles.justifyCenter]}>
        <Button text={'Begin'} press={() => handleStart()}></Button>
      </View>
    </Center>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold"
  },
  header: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
  },
  quarterFlex: {
    flex: .25
  },
  justifyCenter: {
    justifyContent: "center"
  }

})