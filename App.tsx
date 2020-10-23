import React, {useState} from 'react';
import {Option, Question, Quiz, Answers, Breakdown} from './src/classes';
import { Home } from './src/components/Home';
import {which_character_are_you_sample} from './src/data/samples';
type Props = {};
export default ({}: Props) => {
  // const generateEmptySubmission = (quiz: Quiz) => {
  //   const answers: Answers = [];
  //   quiz.questions.forEach((question) =>
  //     answers.push({
  //       question,
  //       option: {
  //         response: '',
  //         outcomeKeys: [],
  //       },
  //     }),
  //   );
  //   return answers;
  // };

  // const generateEmptyBreakdown = (quiz: Quiz) => {
  //   const breakdown: Breakdown = {};
  //   Object.keys(quiz.outcomes).forEach((o) => (breakdown[o] = 0));
  //   return breakdown;
  // };

  // const [answers, setAnswers] = useState<Answers>(
  //   generateEmptySubmission(sample_1),
  // );
  // const [breakdown, setBreakdown] = useState<Breakdown>(
  //   generateEmptyBreakdown(sample_1),
  // );
  // const [outcome, setOutcome] = useState<string>('');

  // const handleAnswer = (option: Option, i: number, question: Question) => {
  //   let temp = [...answers];
  //   temp[i] = {
  //     option,
  //     question,
  //   };
  //   setAnswers(temp);
  // };
  // const handleSubmit = () => {
  //   let temp = {...breakdown};
  //   answers.forEach((a) =>
  //     a.option.outcomeKeys.forEach((key) => (temp[key] += a.question.weight)),
  //   );
  //   let max = 0;
  //   let result = '';
  //   Object.entries(temp).forEach((e) => {
  //     if (e[1] > max) {
  //       max = e[1];
  //       result = e[0];
  //     }
  //   });
  //   console.log(max);
  //   setOutcome(result);
  // };

  return (
    // <View>
    //   <Text>{sample_1.title}</Text>
    //   {sample_1.questions.map((q, i) => (
    //     <View>
    //       <Text>{q.description}</Text>
    //       {q.options.map((o, j) => (
    //         <TouchableOpacity onPress={() => handleAnswer(o, i, q)}>
    //           <Text>{o.response}</Text>
    //         </TouchableOpacity>
    //       ))}
    //     </View>
    //   ))}
    //   {answers.map((s) =>
    //     s.option.outcomeKeys.map((o) => (
    //       <Text>
    //         {o} - {s.question.weight}
    //       </Text>
    //     )),
    //   )}
    //   <TouchableOpacity onPress={() => handleSubmit()}>
    //     <Text>Submit</Text>
    //   </TouchableOpacity>
    //   <Text>{outcome}</Text>
    // </View>
    <Home/>
  );
};
