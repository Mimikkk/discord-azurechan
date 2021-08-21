import { ApplicationCommandData } from 'discord.js';

export const Commands: ApplicationCommandData[] = [
  {
    name: 'azurechibi',
    description: 'fetch chibi girl embed',
    options: [
      {
        name: 'a',
        description: 'raa',
        type: 'SUB_COMMAND',
        options: [{ name: 'hih', description: 'hah', type: 'BOOLEAN' }],
      },
    ],
  },
  {
    name: 'azuregirl',
    description: 'fetch azuregirl info embed',
    options: [
      {
        name: 'a',
        description: 'raa',
        type: 'SUB_COMMAND',
        options: [{ name: 'hih', description: 'hah', type: 'BOOLEAN' }],
      },
    ],
  },
  {
    name: 'azureitem',
    description: 'fetch azureitem info embed',
    options: [
      {
        name: 'a',
        description: 'raa',
        type: 'SUB_COMMAND',
        options: [{ name: 'hih', description: 'hah', type: 'BOOLEAN' }],
      },
    ],
  },
  {
    name: 'azureevent',
    description: 'fetch event info embed',
    options: [
      {
        name: 'a',
        description: 'raa',
        type: 'SUB_COMMAND',
        options: [{ name: 'hih', description: 'hah', type: 'BOOLEAN' }],
      },
    ],
  },
];
