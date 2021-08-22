import { createReducer } from '@reduxjs/toolkit';
import { fetchGuilds, reset } from 'store/reducers/guilds/actions';
import { getFailed, getIdle, getLoading, createSuccessful } from './states';

export const reducer = createReducer(getIdle(), (builder) => {
  // @ts-ignore
  builder
    .addCase(reset, getIdle)
    .addCase(fetchGuilds.pending, getLoading)
    .addCase(fetchGuilds.rejected, getFailed)
    .addCase(fetchGuilds.fulfilled, (_, action) =>
      createSuccessful(action.payload),
    );
});
