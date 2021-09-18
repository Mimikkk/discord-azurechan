import {
  ApplicationCommandData,
  ApplicationCommandOptionChoice,
} from 'discord.js';

const girls: ApplicationCommandOptionChoice[] = [
  {
    name: 'warspite',
    value: 'warspite',
  },
  {
    name: 'other',
    value: 'warspite',
  },
];
const items: ApplicationCommandOptionChoice[] = [];
const events: ApplicationCommandOptionChoice[] = [];

export const commands: ApplicationCommandData[] = [
  {
    name: 'chibi',
    description: 'Azurlane Chibi image.',
    options: [
      {
        name: 'random',
        description: 'Get a random girl.',
        type: 'SUB_COMMAND',
      },
      {
        name: 'named',
        description: 'Get a girl by her name.',
        type: 'SUB_COMMAND',
        options: [
          {
            type: 'STRING',
            name: 'name',
            description: "Girl's name",
            required: true,
          },
        ],
      },
    ],
  },
  {
    name: 'girl',
    description: 'Azurlane girl description.',
    options: [
      {
        name: 'random',
        description: 'Get a random girl.',
        type: 'SUB_COMMAND',
      },
      {
        name: 'named',
        description: 'Get a girl by her name.',
        type: 'SUB_COMMAND',
        options: [
          {
            type: 'STRING',
            name: 'name',
            description: "Girl's name",
            choices: girls,
            required: true,
          },
        ],
      },
    ],
  },
  {
    name: 'item',
    description: 'Azurlane item description.',
    options: [
      {
        name: 'random',
        description: 'Get a random item.',
        type: 'SUB_COMMAND',
      },
      {
        name: 'named',
        description: 'Get an item by its name.',
        type: 'SUB_COMMAND',
        options: [
          {
            type: 'STRING',
            name: 'name',
            description: "Item's name",
            choices: items,
            required: true,
          },
        ],
      },
    ],
  },
  {
    name: 'event',
    description: 'Azurlane event description.',
    options: [
      {
        name: 'random',
        description: 'Get a random event.',
        type: 'SUB_COMMAND',
      },
      {
        name: 'named',
        description: 'Get an event by its name.',
        type: 'SUB_COMMAND',
        options: [
          {
            type: 'STRING',
            name: 'name',
            description: "Event's name",
            choices: events,
            required: true,
          },
        ],
      },
    ],
  },
];
