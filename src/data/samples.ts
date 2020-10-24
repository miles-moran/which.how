import {Quiz} from '../classes';

export const which_character_are_you_sample: Quiz = {
  title: 'Which disney princess are you?',
  header: 'Which disney princess are you?',
  subheader: "You will be presented with 10 multiple choice questions.",
  footer: "Go!",
  outcomes: {
    'The Little Mermaid': {
      description: 'You are the little mermaid',
    },
    'Sleeping Beauty': {
      description: 'You are Sleeping Beauty',
    },
    Ursula: {
      description: 'You are Ursula',
    },
  },
  questions: [
    {
      id: 0,
      description: 'Where do you like to vacation?',
      weight: 1,
      options: [
        {
          response: 'The beach',
          outcomeKeys: ['The Little Mermaid', 'Ursula'],
        },
        {
          response: 'I like to stay home.',
          outcomeKeys: ['Sleeping Beauty'],
        },
      ],
    },
    {
      id: 1,
      description: 'Do you like to sleep?',
      weight: 1,
      options: [
        {
          response: 'No',
          outcomeKeys: ['The Little Mermaid'],
        },
        {
          response: 'Yes',
          outcomeKeys: ['Sleeping Beauty'],
        },
      ],
    },
  ],
};

export const multiple_choice_quiz_sample: Quiz = {
  title: 'Which disney princess are you?',
  header: 'Which disney princess are you?',
  subheader: "You will be presented with 10 multiple choice questions.",
  footer: "Go!",
  outcomes: {
    'The Little Mermaid': {
      description: 'You are the little mermaid',
    },
    'Sleeping Beauty': {
      description: 'You are Sleeping Beauty',
    },
    Ursula: {
      description: 'You are Ursula',
    },
  },
  questions: [
    {
      id: 0,
      description: 'Where do you like to vacation?',
      weight: 1,
      options: [
        {
          response: 'The beach',
          outcomeKeys: ['The Little Mermaid', 'Ursula'],
        },
        {
          response: 'I like to stay home.',
          outcomeKeys: ['Sleeping Beauty'],
        },
      ],
    },
    {
      id: 1,
      description: 'Do you like to sleep?',
      weight: 1,
      options: [
        {
          response: 'No',
          outcomeKeys: ['The Little Mermaid'],
        },
        {
          response: 'Yes',
          outcomeKeys: ['Sleeping Beauty'],
        },
      ],
    },
  ],
};
