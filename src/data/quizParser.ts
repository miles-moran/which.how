import {Html5Entities} from 'html-entities';
import {Quiz, Question} from '../models';

export default (res: any) => {
  const transformed: Quiz = {
    style: 'quiz',
    title: 'Welcome to the Trivia Challenge!',
    subheader: 'You will be presented with 10 True or False questions',
    footer: 'Can you score a 100 percent?',
    outcomes: {
      pass: {
        description: "You've passed",
      },
    },
    questions: [],
  };
  const checkResult = (string: string, correct: string) => {
    if (string === correct) {
      return ['pass'];
    } else {
      return [];
    }
  };
  const results = res.data.results;
  results.forEach((result: any, i: number) => {
    const question: Question = {
      description: Html5Entities.decode(result.question),
      category: result.category,
      weight: 1,
      id: i,
      options: [
        {
          response: 'True',
          outcomeKeys: checkResult('True', result.correct_answer),
        },
        {
          response: 'False',
          outcomeKeys: checkResult('False', result.correct_answer),
        },
      ],
    };
    transformed.questions.push(question);
  });
  return transformed;
};
