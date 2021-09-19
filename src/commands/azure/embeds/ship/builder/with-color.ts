import { WithFn } from './types';
import { ColorResolvable } from 'discord.js';

const colorByStars: Record<number, ColorResolvable> = {
  0: '#FFFF00',
  1: '#FF00FF',
  2: '#00FFFF',
  3: '#0F0FFF',
  4: '#0F0F0F',
  5: '#00F000',
  6: '#F00000',
  7: '#F0F00F',
};

export const withColor: WithFn = (builder) => {
  const {
    ship: {
      stars: { value: stars },
    },
    embed,
  } = builder;

  embed.setColor(colorByStars[stars]);
  return builder;
};
