import { Collection, Guild, Snowflake } from 'discord.js';
import { StoreData, StoreState } from 'store/reducers/types';

export type GuildsData = StoreData<{
  list: Guild[];
  snowflakes: Snowflake[];
  mapBySnowflake: Collection<Snowflake, Guild>;
  total: number;
}>;

export type GuildsState = StoreState<GuildsData>;
