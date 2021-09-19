import { ApplicationCommandData } from 'discord.js';

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
  // {
  //   name: 'girl',
  //   description: 'Azurlane girl description.',
  //   options: [
  //     {
  //       name: 'random',
  //       description: 'Get a random girl.',
  //       type: 'SUB_COMMAND',
  //     },
  //     {
  //       name: 'named',
  //       description: 'Get a girl by her name.',
  //       type: 'SUB_COMMAND',
  //       options: [
  //         {
  //           type: 'STRING',
  //           name: 'name',
  //           description: "Girl's name",
  //           required: true,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: 'item',
  //   description: 'Azurlane item description.',
  //   options: [
  //     {
  //       name: 'random',
  //       description: 'Get a random item.',
  //       type: 'SUB_COMMAND',
  //     },
  //     {
  //       name: 'named',
  //       description: 'Get an item by its name.',
  //       type: 'SUB_COMMAND',
  //       options: [
  //         {
  //           type: 'STRING',
  //           name: 'name',
  //           description: "Item's name",
  //           required: true,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: 'event',
  //   description: 'Azurlane event description.',
  //   options: [
  //     {
  //       name: 'random',
  //       description: 'Get a random event.',
  //       type: 'SUB_COMMAND',
  //     },
  //     {
  //       name: 'named',
  //       description: 'Get an event by its name.',
  //       type: 'SUB_COMMAND',
  //       options: [
  //         {
  //           type: 'STRING',
  //           name: 'name',
  //           description: "Event's name",
  //           required: true,
  //         },
  //       ],
  //     },
  //   ],
  // },
];
