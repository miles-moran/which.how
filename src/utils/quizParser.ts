import {Html5Entities} from 'html-entities';
import {Quiz, Question} from '../models';

interface apiQuiz {
  data: {
    response_code: number;
    results: {
      category: string;
      type: string;
      difficulty: string;
      question: string;
      correct_answer: string;
      incorrect_answers: string[];
    }[];
  };
}

export default (res: apiQuiz) => {
  const reformatted: Quiz = {
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
  const results = res.data.results;
  results.forEach((result: any, i: number) => {
    const question: Question = {
      description: Html5Entities.decode(result.question),
      category: result.category,
      weight: 1,
      id: i,
      options: [],
    };
    question.options.push({
      response: Html5Entities.decode(result.correct_answer),
      outcomeKeys: ['pass'],
    });
    result.incorrect_answers.forEach((answer: string) =>
      question.options.push({
        response: Html5Entities.decode(answer),
        outcomeKeys: [],
      }),
    );
    question.options = shuffle(question.options)
    trueFalseSort(question.options)
    reformatted.questions.push(question);
  });
  return reformatted;
};


const shuffle = (arr:any[]) =>  {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const trueFalseSort = (arr:{
  outcomeKeys: string[],
  response: string
}[]) => {
    arr.sort((a, b) => {
      if (a.response === "True"){
        return -1
      } else {
        return 1
      }
    })
}