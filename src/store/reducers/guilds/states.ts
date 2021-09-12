import { Collection, Guild, Snowflake } from 'discord.js';
import { Nullable, ResponseStatus } from 'shared/types/common';
import { GuildState } from './types';

const initial: Omit<GuildState, 'status'> = {
  mapBySnowflake: () => null,
  collection: new Collection(),
  snowflakes: [],
  guilds: [],
  error: null,
};

export const getFailed = (): GuildState => ({
  ...initial,
  status: ResponseStatus.Failed,
  error: { message: 'Failed to fetch guilds', name: 'FailedFetch' },
});
export const createSuccessful = (
  payload: Collection<Snowflake, Guild>,
): GuildState => ({
  collection: payload,
  guilds: [...payload.values()],
  snowflakes: [...payload.keys()],
  mapBySnowflake: (snowflake: Snowflake): Nullable<Guild> =>
    payload.get(snowflake) || null,
  status: ResponseStatus.Success,
  error: null,
});
