import { ApplicationCommandData } from 'discord.js';

const commands: ApplicationCommandData[] = [
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
