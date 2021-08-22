import { Collection, Guild, Snowflake } from 'discord.js';
import { Nullable, ResponseStatus } from 'shared/types/common';

export type State = {
  mapBySnowflake: (snowflake: Snowflake) => Nullable<Guild>;
  collection: Collection<Snowflake, Guild>;
  snowflakes: Snowflake[];
  guilds: Guild[];

  status: ResponseStatus;
  error: Nullable<Error>;
};
