import { Collection, Guild, Snowflake } from 'discord.js';
import { StoreData, StoreState } from 'store/reducers/types';
import { Nullable } from 'shared/types/common';

export type GuildData = StoreData<{
  mapBySnowflake: (snowflake: Snowflake) => Nullable<Guild>;
  collection: Collection<Snowflake, Guild>;
  snowflakes: Snowflake[];
  guilds: Guild[];
}>;
export type GuildState = StoreState<GuildData>;
