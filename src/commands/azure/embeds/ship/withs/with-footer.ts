import { WithFn } from 'commands/azure/embeds/builder/types';

export const withFooter: WithFn = (builder) => {
  const {
    skin: {
      chibi,
      info: { enClient: footer },
    },
    embed,
  } = builder;

  embed.setFooter(`${footer || 'Chibi'}`, chibi).setTimestamp();
  return builder;
};
