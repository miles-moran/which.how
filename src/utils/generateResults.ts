import {Quiz, Result} from '../models';

export default (quiz: Quiz, submissions: number[]) => {
  const result: Result = {
    breakdown: {},
    submissions: [],
    outcome: {},
  };
  const outcomeKeys = Object.keys(quiz.outcomes);
  outcomeKeys.forEach((key: string) => {
    result.breakdown[key] = 0;
  });
  quiz.questions.forEach((question, qi) => {
    const s = submissions[qi];
    const submission: {
      question: string;
      outcomeKeys: string[];
    } = {
      question: question.description,
      outcomeKeys: [],
    };
    question.options.forEach((option, oi) => {
      if (oi === s) {
        submission.outcomeKeys = submission.outcomeKeys.concat(
          option.outcomeKeys,
        );
        option.outcomeKeys.forEach((key: string) => {
          if (outcomeKeys.includes(key)) {
            result.breakdown[key] += question.weight;
          }
        });
      }
    });
    result.submissions.push(submission);
  });
  const outcomeKey = Object.keys(result.breakdown).reduce((a, b) =>
    result.breakdown[a] > result.breakdown[b] ? a : b,
  );
  result.outcome = {...quiz.outcomes[outcomeKey], title: outcomeKey}
  return result;
};
