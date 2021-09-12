import { Collection, Guild, Snowflake } from 'discord.js';
import { StoreData, StoreState } from 'store/reducers/types';

export type GuildsData = StoreData<{
  mapBySnowflake: Collection<Snowflake, Guild>;
  snowflakes: Snowflake[];
  guilds: Guild[];
}>;

export type GuildsState = StoreState<GuildsData>;
