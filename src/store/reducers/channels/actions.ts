import { createAsyncThunk } from '@reduxjs/toolkit';
import { Channel, Guild } from 'discord.js';
import { createReset } from 'store/reducers/builder';
import { AsyncThunkConfig } from 'store/types';

const prefix = 'channels';

export const resetChannels = createReset(prefix);

export const fetchChannels = createAsyncThunk<
  Channel[],
  Guild,
  AsyncThunkConfig
>(`@${prefix}/fetch`, async (_, {}) => {
  return undefined;
});
