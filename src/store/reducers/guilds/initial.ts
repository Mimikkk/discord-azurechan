import { Collection, Guild, Snowflake } from 'discord.js';
import { GuildsData } from './types';

export const initial: GuildsData = {
  total: 0,
  list: [],
  snowflakes: [],
  mapBySnowflake: new Collection<Snowflake, Guild>(),
};
