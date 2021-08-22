import { Collection, Guild, Snowflake } from 'discord.js';
import { Nullable, ResponseStatus } from 'shared/types/common';
import { State } from './types';

const emptyData: Omit<State, 'status'> = {
  mapBySnowflake: () => null,
  collection: new Collection(),
  snowflakes: [],
  guilds: [],
  error: null,
};

export const getIdle = (): State => ({
  ...emptyData,
  status: ResponseStatus.Idle,
});
export const getLoading = (): State => ({
  ...emptyData,
  status: ResponseStatus.Loading,
});
export const getFailed = (): State => ({
  ...emptyData,
  status: ResponseStatus.Failed,
  error: { message: 'Failed to fetch guilds', name: 'FailedFetch' },
});
export const createSuccessful = (
  payload: Collection<Snowflake, Guild>,
): State => ({
  collection: payload,
  guilds: [...payload.values()],
  snowflakes: [...payload.keys()],
  mapBySnowflake: (snowflake: Snowflake): Nullable<Guild> =>
    payload.get(snowflake) || null,
  status: ResponseStatus.Success,
  error: null,
});
