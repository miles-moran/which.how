import React, { useState } from "react";
import { Quiz } from "../models";

export const QuizContext = React.createContext<{
  submissions: number[],
  quiz?: Quiz,
  chooseQuiz: (q:Quiz) => void
  makeSubmission: (questionId:number, optionId: number) => void
}>({
  submissions: [],
  quiz: undefined,
  chooseQuiz: () => {},
  makeSubmission: () => {}
});

interface QuizProviderProps {}

export const QuizProvider: React.FC<QuizProviderProps> = ({children}) => {
  const [submissions, setSubmissions] = useState<any>();
  const [quiz, setQuiz] = useState<Quiz>();
  return (
    <QuizContext.Provider
      value={{
       submissions,
       quiz,
       chooseQuiz: (q) => {
          setQuiz(q);
          setSubmissions(Array(q.questions.length).fill(-1))
        },
        makeSubmission: (questionId, optionId) => {
          const temp = [...submissions]
          temp[questionId] = optionId
          setSubmissions(temp)
         },
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};