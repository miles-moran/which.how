import { Html5Entities } from "html-entities";
import axios from 'axios';
import {Quiz, Question} from '../classes';

export default (res:any) => {
      const transformed: Quiz = {
        title: 'Sample Quiz from opentbd.com!',
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
      })
      return transformed
};
