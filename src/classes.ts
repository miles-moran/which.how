export type Outcome = {
  description: string;
};

export type Option = {
  response: string;
  outcomeKeys: string[];
};

export type Question = {
  id: number,
  description: string; //Example: Which is your favorite city to vacation?,
  weight: number; //Example: 2
  options: Option[];
  category?: string;
};

export type Answers = {
  option: Option,
  question: Question
}[]

export type Quiz = {
  title: string; //Which disney princess are you?
  outcomes: {[key: string]: Outcome};
  questions: Question[];
};

export type Results = {
  outcomes:  {[key: string]: string}
}
