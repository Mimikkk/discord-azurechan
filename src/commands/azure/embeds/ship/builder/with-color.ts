import { WithFn } from './types';
import { ColorResolvable } from 'discord.js';

const colorByStars = (stars: number): ColorResolvable => '#ffffff';

export const withColor: WithFn = (builder) => {
  const {
    ship: {
      stars: { value: stars },
    },
    embed,
  } = builder;

  embed.setColor(colorByStars(stars));
  return builder;
};
