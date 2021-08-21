import { ApplicationCommandData } from 'discord.js';

const commands: ApplicationCommandData[] = [
  {
    name: 'shipgirl',
    description: 'fetch shipgirl info embed',
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
    name: 'a',
    description: 'description',
    defaultPermission: true,
    options: [
      {
        name: 'aa',
        type: 'SUB_COMMAND',
        description: 'Epic',
        options: [
          {
            name: 'aaa',
            description: 'AniaAnia',
            type: 'CHANNEL',
          },
          {
            name: 'aab',
            description: 'AniaAnia',
            type: 'CHANNEL',
          },
        ],
      },
      {
        name: 'ab',
        type: 'SUB_COMMAND',
        description: 'Epic',
      },
      {
        name: 'ac',
        type: 'SUB_COMMAND',
        description: 'Epic',
      },
    ],
  },
];
