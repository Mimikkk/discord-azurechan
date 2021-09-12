import { Collection, Guild, Snowflake } from 'discord.js';
import { GuildsData } from './types';

export const initial: GuildsData = {
  guilds: [],
  snowflakes: [],
  mapBySnowflake: new Collection<Snowflake, Guild>(),
};
