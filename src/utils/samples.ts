import {Quiz} from '../models';

export const which_character_are_you_sample: Quiz = {
  style: 'weighted',
  title: 'Which cartoon character are you?',
  subheader: 'You will be presented with two questions.',
  footer: 'Go!',
  outcomes: {
    'Bugs Bunny': {
      description: 'You are the carrot-loving rabbit, Bugs Bunny.',
      image:
        'https://images.glaciermedia.ca/polopoly_fs/1.2019573.1438622694!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/bugs-bunny.jpg',
    },
    'Porky the Pig': {
      description: 'You are porky the pig',
      image:
        'https://i.pinimg.com/originals/2d/a0/3f/2da03f73141ff61403cccdd3593223ec.jpg',
    },
    Tom: {
      description: 'You are Tom from "Tom & Jerry"',
      image:
        'https://i.pinimg.com/originals/92/a6/2f/92a62f0221f58fe503a15fcb13f5c107.png',
    },
  },
  questions: [
    {
      id: 0,
      description: 'How would you describe yourself?',
      weight: 1,
      options: [
        {
          response: 'Confident',
          outcomeKeys: ['Bugs Bunny', 'Tom'],
        },
        {
          response: 'Timid',
          outcomeKeys: ['Porky the Pig'],
        },
      ],
    },
    {
      id: 1,
      description: 'Do you like carrots?',
      weight: 1,
      options: [
        {
          response: 'No',
          outcomeKeys: ['Porky the Pig', 'Tom'],
        },
        {
          response: 'Yes',
          outcomeKeys: ['Bugs Bunny'],
        },
      ],
    },
  ],
};

export const poll: Quiz = {
  style: 'poll',
  title: 'Health Poll',
  subheader: 'You will be presented with two questions.',
  footer: 'Go!',
  outcomes: {},
  questions: [
    {
      id: 0,
      description: 'How often do you excercise?',
      weight: 1,
      options: [
        {
          response: 'Once a week',
          outcomeKeys: [],
        },
        {
          response: 'Two or three times a week',
          outcomeKeys: [],
        },
        {
          response: 'Everyday',
          outcomeKeys: [],
        },
      ],
    },
    {
      id: 1,
      description: 'How many hours do you sleep a night??',
      weight: 1,
      options: [
        {
          response: '6 or less',
          outcomeKeys: [],
        },
        {
          response: '7-10',
          outcomeKeys: [],
        },
        {
          response: '11+',
          outcomeKeys: [],
        },
      ],
    },
  ],
};
