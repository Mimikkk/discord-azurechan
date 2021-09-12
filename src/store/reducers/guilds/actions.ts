import { createAsyncThunk } from '@reduxjs/toolkit';
import { Collection, Guild, Snowflake } from 'discord.js';
import { createReset } from 'store/reducers/builder';
import { AsyncThunkConfig } from 'store/types';

const prefix = 'guilds';

export const resetGuilds = createReset(prefix);

export const fetchGuilds = createAsyncThunk<
  Collection<Snowflake, Guild>,
  undefined,
  AsyncThunkConfig
>(`@${prefix}/fetchAll`, async (_, { extra }) =>
  extra.GuildService.fetchGuilds(),
);

export const createGuild = createAsyncThunk<undefined, Guild, AsyncThunkConfig>(
  `@${prefix}/createNew`,
  async (_, {}) => {
    return undefined;
  },
);
