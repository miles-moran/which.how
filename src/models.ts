export interface Outcome {
  description?: string;
  image?: string;
  title?: string
};

export interface Option {
  response: string;
  outcomeKeys: string[];
};

export interface Question {
  id: number;
  description: string; //Example: Which is your favorite city to vacation?,
  weight: number;
  options: Option[];
  category?: string;
};

export interface Answers {
  option: Option;
  question: Question;
}[];

export interface Quiz {
  style: 'poll' | 'quiz' | 'weighted'; //poll, quiz, which character, this could be inferred by the length of outcome keys but I think its better to have it as a string, required for the results screen
  title: string; //Which disney princess are you?
  subheader: string;
  footer: string;
  outcomes: {[key: string]: Outcome}; //for a poll, this is an empty array. for a quiz (a pass/fail), this would be "[pass]". for a which character style, this would be the characters.
  questions: Question[];
};

export interface Result {
  breakdown: {[key: string]: number};
  submissions: {
    question: string;
    outcomeKeys: string[];
  }[];
  outcome: Outcome
};

//poll - a quiz in which the submission is not analyzed and is done for the sake of data entry

//quiz - a quiz in which the submission is judged on a pass fail basis

//weighted - a quiz in which answers add to weighted outcomes (which character are you style quiz)