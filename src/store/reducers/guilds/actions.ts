import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Collection, Guild, Snowflake } from 'discord.js';
import { AsyncThunkConfig } from 'store/types';

export const reset = createAction('@guilds/reset');

export const fetchGuilds = createAsyncThunk<
  Collection<Snowflake, Guild>,
  undefined,
  AsyncThunkConfig
>('@guilds/fetchAll', async (_, { extra }) => extra.GuildService.fetchGuilds());

export const createGuild = createAsyncThunk<undefined, Guild, AsyncThunkConfig>(
  '@guilds/putNew',
  async (_, { extra }) => {
    return undefined;
  },
);
