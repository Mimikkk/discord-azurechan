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
>(
  `@${prefix}/fetch`,
  async (_, { extra }) => await extra.GuildService.fetchGuilds(),
);

export const createGuild = createAsyncThunk<undefined, Guild, AsyncThunkConfig>(
  `@${prefix}/create`,
  async (_, {}) => {
    return undefined;
  },
);
